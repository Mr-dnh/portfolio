import styles from "./End.module.css";

const stack = [
  {
    name: "Next.js / React",
    reason: "پایه‌ای سریع و کامپوننت‌محور با App Router و رندرینگ server-first."
  },
  {
    name: "TypeScript",
    reason: "پروژه را قابل پیش‌بینی، قابل نگهداری و توسعه‌پذیرتر نگه می‌دارد."
  },
  {
    name: "GSAP / CSS",
    reason: "حرکت‌ها و ریزتعامل‌ها را مدیریت می‌کند، بدون اینکه رابط کاربری را سنگین کند."
  },
  {
    name: "Vercel / SEO",
    reason: "استقرار ساده به‌همراه متادیتا، Open Graph، sitemap، robots و داده‌های ساختاریافته برای دیده‌شدن بهتر."
  }
];

export function End() {
  return (
    <section className={styles.endSection} aria-labelledby="end-title">
      <div className="section-label">
        <span>۰۶ / ۰۶</span>
        <span>پایان / آغاز</span>
      </div>

      <div className={styles.stage}>
        <div className={styles.heading}>
          <p className={styles.index}>این پروژه / فناوری‌ها</p>
          <h2 id="end-title">
            ساخته‌شده با <em>هدف.</em>
          </h2>
        </div>

        <div className={styles.stack}>
          {stack.map((item) => (
            <div className={styles.stackItem} key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.reason}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <span>آیدین دنیادیده / توسعه‌دهنده فرانت‌اند</span>
        <span>© 2026</span>
      </div>
    </section>
  );
}
