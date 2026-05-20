import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { Container, Section } from "../components/ui";
import { PageMast } from "../components/layout/PageMast";
import { siteConfig } from "../lib/siteConfig";
import { brandImagery } from "../lib/siteMedia";

export function ContactPage() {
  return (
    <>
      <PageMast
        actions={
          <a className="ui-button ui-button--primary" href={siteConfig.contact.emailMailto}>
            Email sales
          </a>
        }
        eyebrow="Contact"
        image={{ alt: "Fleet operations and logistics", src: brandImagery.visitBackdrop }}
        lede={
          <p>
            Have a question, need assistance, or ready to upgrade your fleet? Our team supports drivers, fleet
            managers, manufacturers, and sales partners nationwide.
          </p>
        }
        title="Get in touch"
      />

      <Section surface>
        <Container>
          <div className="show-split">
            <ContactDetails />
            <figure className="show-split__visual show-split__visual--portrait">
              <img
                alt="Energy Guard sales sheet preview"
                decoding="async"
                height={1400}
                loading="lazy"
                src={brandImagery.salesSheet}
                width={1100}
              />
            </figure>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <EstimateForm />
          <p className="page-prose">
            Prefer to browse first?{" "}
            <Link to="/solutions">Explore solutions</Link> or learn about{" "}
            <Link to="/warranty">EverGuard warranty</Link>.
          </p>
        </Container>
      </Section>
    </>
  );
}

function ContactDetails() {
  return (
    <div>
      <p className="page-eyebrow">Sales</p>
      <h2 className="page-section-title show-heading">Request an estimate</h2>
      <ul className="page-plain-list">
        <li>
          <strong>Email:</strong> <a href={siteConfig.contact.emailMailto}>{siteConfig.contact.email}</a>
        </li>
        <li>
          <strong>Warranty support:</strong>{" "}
          <a href={siteConfig.contact.supportMailto}>{siteConfig.contact.supportEmail}</a>
        </li>
      </ul>
      <p className="page-prose">{siteConfig.address.lines.join(" · ")}</p>
    </div>
  );
}

function EstimateForm() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Energy Guard estimate request");
    const body = encodeURIComponent(
      [
        `Name: ${data.get("firstName")} ${data.get("lastName")}`,
        `Email: ${data.get("email")}`,
        `Phone: ${data.get("phone") ?? ""}`,
        `Company: ${data.get("company") ?? ""}`,
        `Fleet size: ${data.get("fleetSize") ?? ""}`,
        "",
        String(data.get("comments") ?? ""),
      ].join("\n"),
    );
    window.location.href = `${siteConfig.contact.emailMailto}?subject=${subject}&body=${body}`;
  };

  return (
    <form action={siteConfig.contact.emailMailto} className="contact-form" method="get" onSubmit={onSubmit}>
      <p className="page-eyebrow">Estimate request</p>
      <h2 className="page-section-title show-heading">Tell us about your fleet</h2>
      <div className="contact-form__grid">
        <label className="contact-form__field">
          First name *
          <input name="firstName" required type="text" autoComplete="given-name" />
        </label>
        <label className="contact-form__field">
          Last name *
          <input name="lastName" required type="text" autoComplete="family-name" />
        </label>
        <label className="contact-form__field">
          Email *
          <input name="email" required type="email" autoComplete="email" />
        </label>
        <label className="contact-form__field">
          Phone
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label className="contact-form__field">
          Company
          <input name="company" type="text" autoComplete="organization" />
        </label>
        <label className="contact-form__field">
          Fleet size
          <input name="fleetSize" type="text" />
        </label>
        <label className="contact-form__field contact-form__field--full">
          Comments
          <textarea name="comments" rows={4} />
        </label>
      </div>
      <p className="page-prose contact-form__legal">
        By submitting, you agree to Energy Guard&apos;s{" "}
        <a href={siteConfig.legal.termsUrl} rel="noopener noreferrer" target="_blank">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href={siteConfig.legal.privacyUrl} rel="noopener noreferrer" target="_blank">
          Privacy Policy
        </a>
        . A representative may contact you about products or services.
      </p>
      <button className="ui-button ui-button--primary" type="submit">
        Send request
      </button>
    </form>
  );
}
