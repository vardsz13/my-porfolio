const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8">
      <div className="max-w-5xl mx-auto border-t border-zinc-200 dark:border-zinc-800 py-4">
        <p className="text-sm text-zinc-600 dark:text-zinc-400 text-left">
          © {currentYear} John Paul Varde. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
