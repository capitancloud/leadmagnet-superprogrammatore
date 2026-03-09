const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-border/50">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm font-semibold text-foreground/80 mb-1">
          Diventa un Super Programmatore con il{" "}
          <span className="text-primary">Super Potere dell'AI!</span>
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
