const inputClass = 'w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100';

export default function ResetPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-glow">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-xl font-bold text-brand-700">🔒</div>
          <h1 className="text-3xl font-bold text-slate-900">Reset your password</h1>
          <p className="mt-2 text-sm text-slate-500">Enter your email to receive a reset link</p>
        </div>

        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
            <input id="email" type="email" placeholder="you@example.com" className={inputClass} />
          </div>

          <button type="submit" className="w-full rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 hover:bg-brand-700">
            Send reset link
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Remembered your password? <a href="/login" className="font-medium text-brand-600 hover:text-brand-700">Back to login</a>
        </p>
      </div>
    </main>
  );
}
