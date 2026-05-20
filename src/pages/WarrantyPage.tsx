import { Link } from "react-router-dom";
import { Container, Section } from "../components/ui";
import { PageMast } from "../components/layout/PageMast";
import { siteConfig } from "../lib/siteConfig";
import { brandImagery } from "../lib/siteMedia";

export function WarrantyPage() {
  return (
    <>
      <PageMast
        actions={
          <>
            <a className="ui-button ui-button--primary" href={siteConfig.contact.supportMailto}>
              Register warranty
            </a>
            <Link className="ui-button ui-button--ghost" to="/contact">
              Contact sales
            </Link>
          </>
        }
        eyebrow="EverGuard™"
        image={{ alt: "EverGuard lifetime warranty program", src: brandImagery.heroEverGuard }}
        lede={
          <p>
            Register today and get the industry&apos;s only written lifetime warranty in trailer aerodynamics—coverage
            that lasts as long as your trailer does.
          </p>
        }
        title="Lifetime warranty"
      />

      <Section surface>
        <Container>
          <p className="page-eyebrow">Coverage</p>
          <h2 className="page-section-title show-heading">What EverGuard covers</h2>
          <p className="page-prose">
            ENERGY GUARD® warrants to the original purchaser that Components are covered against material defects in
            materials and workmanship for the lifetime of the trailer, and against material degradation of color for
            three (3) years from the warranty date.
          </p>
          <p className="page-prose">
            If Energy Guard determines that a component has experienced a warranty condition, Energy Guard may repair,
            replace, or refund the component at its option, subject to registration and program terms for purchases on
            or after January 1, 2026.
          </p>
          <ul className="page-list">
            <li>Registration required for eligibility</li>
            <li>Exclusions apply for misuse, improper installation, and normal wear outside stated coverage</li>
            <li>Full legal terms available from Energy Guard upon request</li>
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <p className="page-eyebrow">Activate</p>
          <h2 className="page-section-title show-heading">Complete your registration</h2>
          <p className="page-prose">
            Email{" "}
            <a href={siteConfig.contact.supportMailto}>{siteConfig.contact.supportEmail}</a> to activate warranty
            support or use the contact form for fleet onboarding questions.
          </p>
          <div className="page-actions">
            <a className="ui-button ui-button--primary" href={siteConfig.contact.supportMailto}>
              Email support
            </a>
            <Link className="ui-button ui-button--secondary" to="/solutions">
              View solutions
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
