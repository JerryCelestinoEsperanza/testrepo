const styles = {
  card: 'w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.12)]',
  label: 'mb-2 block text-sm font-medium text-slate-700',
  input: 'w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-100',
  button: 'w-full rounded-xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-200',
  secondary: 'text-sm font-medium text-sky-700 hover:text-sky-800',
  muted: 'text-sm text-slate-500',
};

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_#e0f2fe,_#f8fafc_35%,_#edf2f7_100%)] p-6">
      <div className="grid w-full max-w-6xl gap-8 rounded-[32px] border border-slate-200 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="hidden rounded-[28px] bg-slate-950 p-8 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 text-sm text-sky-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              ABC Telecoms
            </div>

            <h1 className="max-w-md text-4xl font-bold leading-tight text-white">
              ABC Telecoms Management System
            </h1>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
              Unified control for service operations, customer support, inventory visibility, and field team coordination.
            </p>
          </div>

          <div className="space-y-4">
            {[
              'Monitored network operations',
              'Secure role-based access',
              'Real-time service visibility',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/20 text-sky-200">✓</span>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="flex items-center justify-center">
          <div className={styles.card}>
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-xl font-bold text-sky-700">
                A
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Secure Access</h2>
              <p className="mt-2 text-sm text-slate-500">Sign in to continue to your telecom operations portal</p>
            </div>

            <form className="space-y-5">
              <div>
                <label htmlFor="email" className={styles.label}>Work email</label>
                <input id="email" type="email" placeholder="name@abctelecoms.com" className={styles.input} />
              </div>

              <div>
                <label htmlFor="password" className={styles.label}>Password</label>
                <input id="password" type="password" placeholder="••••••••" className={styles.input} />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500" />
                  Remember me
                </label>
                <a href="#" className={styles.secondary}>Forgot password?</a>
              </div>

              <button type="submit" className={styles.button}>Sign in</button>
            </form>

            <div className="mt-6 text-center text-sm text-slate-500">
              Need an account?{' '}
              <a href="#" className={styles.secondary}>Request access</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
