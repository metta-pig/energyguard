import { Link } from "react-router-dom";
import { Container, Section } from "../components/ui";
import { PageMast } from "../components/layout/PageMast";
import { infoHighlights } from "../lib/energyGuardContent";
import { brandImagery } from "../lib/siteMedia";

export function InfoPage() {
  return (
    <>
      <PageMast
        actions={
          <Link className="ui-button ui-button--primary" to="/contact">
            Request estimate
          </Link>
        }
        eyebrow="Why Energy Guard"
        image={{ alt: "Aerodynamic airflow visualization", src: brandImagery.heroWind }}
        lede={
          <p>
            Discover the Energy Guard difference—durability, sustainability, and maximum savings for fleets that need
            real-world results, not inflated test claims.
          </p>
        }
        title="Built for fleets that measure ROI"
      />

      <Section surface>
        <Container>
          <ul className="page-stack">
            {infoHighlights.map((item) => (
              <li key={item.title}>
                <h2 className="page-section-title show-heading">{item.title}</h2>
                <p className="page-prose">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="page-actions">
            <Link className="ui-button ui-button--primary" to="/solutions">
              Explore solutions
            </Link>
            <Link className="ui-button ui-button--ghost" to="/warranty">
              EverGuard warranty
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
