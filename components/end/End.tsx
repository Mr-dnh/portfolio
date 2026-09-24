import styles from "./End.module.css";

const stack = [
  {
    name: "می‌تونیم.",
    reason: "انواع سایت‌های فروشگاهی رو برات بسازیم.",
  },
  {
    name: "می‌تونیم..",
    reason: "برات سایت معرفی برند یا بلاگ شخصی بسازیم.",
  },
  {
    name: "می‌تونیم...",
    reason: "سایت شرکتی برات بسازیم. آره!",
  },
  {
    name: "می‌تونیم....",
    reason: "با هم می‌تونیم هرچیزی که فکرشو بکنی خلق کنیم!",
  },
];

export function End() {
  return (
    <section className={styles.endSection} aria-labelledby="end-title">
      <div className="section-label">
        <span>۰۵ / ۰۶</span>
      </div>

      <div className={styles.stage}>
        <div className={styles.heading}>
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
        <span>تیممون تازه شروع کرده، پس نگران هزینه‌هات نباش 😉</span>
        <span>© 2026</span>
      </div>
    </section>
  );
}
