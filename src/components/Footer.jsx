export default function Footer() {
    return (
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} YourBrand. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#privacy" className="text-slate-600 hover:text-slate-900">Privacy</a>
              <a href="#terms" className="text-slate-600 hover:text-slate-900">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  