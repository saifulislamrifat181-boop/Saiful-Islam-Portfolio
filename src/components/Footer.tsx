export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} Saiful Islam — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
