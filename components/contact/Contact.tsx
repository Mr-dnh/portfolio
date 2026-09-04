import styles from "./Contact.module.css";

const contacts = [
  { label: "EMAIL", value: "aidin.dnh@gmail.com", href: "mailto:aidin.dnh@gmail.com" },
  { label: "PHONE", value: "+98 99 666 99 608", href: "tel:+989966699608" },
  { label: "GITHUB", value: "github.com/Mr-dnh", href: "https://github.com/Mr-dnh" },
  { label: "TELEGRAM", value: "@Idndnh", href: "https://t.me/Idndnh" },
];

export function Contact() {
  return (
    <section className={styles.contactSection} aria-labelledby="contact-title">
      <div className="section-label">
        <span>05 / 06</span>
        <span>CONTACT</span>
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>LET&apos;S CONNECT</p>
        <h2 id="contact-title">
          Find me <em>here.</em>
        </h2>
      </div>

      <div className={styles.grid} aria-label="Contact details">
        {contacts.map((contact) => (
          <a key={contact.label} href={contact.href} className={styles.link}>
            <span>{contact.label}</span>
            <strong>{contact.value}</strong>
            <span className={styles.arrow} aria-hidden="true">↗</span>
          </a>
        ))}
      </div>

      <div className={styles.note}>
        <span>EMAIL / PHONE / GITHUB / TELEGRAM</span>
        <span>BASED IN RASHT</span>
      </div>
    </section>
  );
}
