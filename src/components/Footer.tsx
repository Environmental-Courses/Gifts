const Footer = () => {
    return (
      <footer className="py-12 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Made with 💕 for the love of my life</h3>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Distance means nothing when someone means everything. 
              Until we're together again, you'll always have this little piece of my heart.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <span className="text-3xl animate-float">💖</span>
            <span className="text-3xl animate-float" style={{ animationDelay: '0.5s' }}>💕</span>
            <span className="text-3xl animate-float" style={{ animationDelay: '1s' }}>✨</span>
            <span className="text-3xl animate-float" style={{ animationDelay: '1.5s' }}>💝</span>
          </div>
          
          <div className="text-sm text-primary-foreground/60">
            <p>© 2025 • Created with love • For my amazing girlfriend</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;