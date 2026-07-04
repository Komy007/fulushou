import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 text-center">
      <img
        src="/img/fulushou-logo.svg"
        alt="Fu Lu Shou F&B Co., Ltd."
        className="w-24 h-24 md:w-32 md:h-32 mb-8 animate-fade-in"
      />
      <h1 className="font-display font-800 text-2xl md:text-4xl text-ink tracking-tight mb-4 animate-fade-in-up">
        We're crafting a new homepage
      </h1>
      <p className="max-w-md text-ink/60 text-base md:text-lg animate-fade-in-up">
        Fu Lu Shou F&amp;B Co., Ltd. is currently redesigning our website.
        Please check back soon.
      </p>
    </div>
  );
}

export default App;
