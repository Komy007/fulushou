import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Explicit startup log for Cloud Run diagnostics
console.log('--- Server initializing ---');
console.log('Current working directory:', process.cwd());

dotenv.config({ path: '.env.local' });
// Synchronization for domain deployment: 2026-01-07

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Health check route for Cloud Run
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Serve static files from the React app
console.log('Serving static files from:', path.join(__dirname, '../dist'));
app.use(express.static(path.join(__dirname, '../dist')));

const API_KEY = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

const callGemini = async (prompt) => {
    if (!API_KEY) {
        throw new Error('API Key is missing on server.');
    }

    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [{ text: prompt }],
                    },
                ],
            }),
        }
    );

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Gemini API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
};

app.post('/api/proxy', async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        const text = await callGemini(prompt);
        res.json({ text });
    } catch (error) {
        console.error('Bae-kend Error:', error);
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Robust error handling for diagnostics
process.on('uncaughtException', (err) => {
    console.error('UNCAUGHT EXCEPTION:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('UNHANDLED REJECTION:', reason);
});

// Explicit binding to '0.0.0.0' for Cloud Run
app.listen(PORT, '0.0.0.0', () => {
    console.log(`--- Server successfully started ---`);
    console.log(`Port: ${PORT}`);
    console.log(`Host: 0.0.0.0`);
});
