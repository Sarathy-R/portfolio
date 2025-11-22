import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-background-dark py-8 text-center">
      <p className="text-sm text-slate-500">
        © {new Date().getFullYear()} Jane Doe. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;