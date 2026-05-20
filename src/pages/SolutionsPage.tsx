import { Link } from "react-router-dom";
import { Container, Section } from "../components/ui";
import { PageMast } from "../components/layout/PageMast";
import { components, solutionKits } from "../lib/energyGuardContent";
import { brandImagery } from "../lib/siteMedia";

export function SolutionsPage() {
  return (
    <>
      <PageMast
        actions={
          <>
            <Link className="ui-button ui-button--primary" to="/contact">
              Request estimate
            </Link>
            <a className="ui-button ui-button--ghost" href={brandImagery.salesSheet} rel="noopener noreferrer" target="_blank">
              Download sales sheet
            </a>
          </>
        }
        eyebrow="Solutions"
        image={{
          alt: "Energy Guard Max aerodynamic kit on a semi trailer",
          src: brandImagery.solutionsMax,
        }}
        lede={
          <p>
            Trailer aerodynamics designed to reduce drag, cut costs, and boost efficiency—configured for truck drivers,
            fleet operators, manufacturers, and sales partners.
          </p>
        }
        title="Aerodynamic solutions that fit your fleet"
      />

      <Section surface>
        <Container>
          <p className="page-eyebrow">Kits</p>
          <h2 className="page-section-title show-heading">Mix and match for maximum savings</h2>
          <p className="page-prose">
            Energy Guard components work individually or combined. Choose a full system or target the upgrades that
            matter most to your operation.
          </p>
          <ul className="page-card-grid">
            {solutionKits.map((kit) => (
              <li key={kit.name}>
                <article className="kit-card">
                  <div className="kit-card__media">
                    <img alt="" decoding="async" loading="lazy" src={brandImagery[kit.image]} />
                  </div>
                  <div className="kit-card__body">
                    <h3 className="kit-card__title">{kit.name}</h3>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <p className="page-eyebrow">Components</p>
          <h2 className="page-section-title show-heading">Energy Guard components</h2>
          <ul className="page-stack">
            {components.map((item) => (
              <li key={item.title}>
                <h3 className="page-section-title show-heading">{item.title}</h3>
                <p className="page-prose">{item.body}</p>
                {"externalUrl" in item && item.externalUrl ? (
                  <a className="ui-button ui-button--ghost" href={item.externalUrl} rel="noopener noreferrer" target="_blank">
                    Visit FlowBelow
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section surface>
        <Container>
          <SolutionsCta />
        </Container>
      </Section>
    </>
  );
}

function SolutionsCta() {
  return (
    <div className="page-actions">
      <Link className="ui-button ui-button--primary" to="/contact">
        Request estimate
      </Link>
      <Link className="ui-button ui-button--secondary" to="/warranty">
        EverGuard warranty
      </Link>
    </div>
  );
}
