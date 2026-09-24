import styles from "./Contact.module.css";

const contacts = [
  { label: "ایمیل", value: "aidin.dnh@gmail.com", href: "mailto:aidin.dnh@gmail.com" },
  { label: "تلفن", value: "+98 99 666 99 608", href: "tel:+989966699608" },
  { label: "گیت‌هاب", value: "github.com/Mr-dnh", href: "https://github.com/Mr-dnh" },
  { label: "تلگرام", value: "@Idndnh", href: "https://t.me/Idndnh" },
];

export function Contact() {
  return (
    <section className={styles.contactSection} aria-labelledby="contact-title">
      <div className="section-label">
        <span>۰۶ / ۰۶</span>
        <span>پایان / آغاز</span>
      </div>

      <div className={styles.content}>
        <h2 id="contact-title">
          می‌خوای سایتت جذاب‌تر از این باشه؟ <br /> بهم بگو
        </h2>
      </div>

      <div className={styles.grid} aria-label="اطلاعات تماس">
        {contacts.map((contact) => (
          <a key={contact.label} href={contact.href} className={styles.link}>
            <span>{contact.label}</span>
            <strong>{contact.value}</strong>
            <span className={styles.arrow} aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </div>
   </section>
  );
}
