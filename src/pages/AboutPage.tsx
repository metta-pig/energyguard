import { Link } from "react-router-dom";
import { Container, Section } from "../components/ui";
import { PageMast } from "../components/layout/PageMast";
import { aboutPillars } from "../lib/energyGuardContent";
import { brandImagery } from "../lib/siteMedia";

export function AboutPage() {
  return (
    <>
      <PageMast
        actions={
          <>
            <Link className="ui-button ui-button--primary" to="/contact">
              Request estimate
            </Link>
            <Link className="ui-button ui-button--ghost" to="/solutions">
              View solutions
            </Link>
          </>
        }
        eyebrow="About"
        image={{ alt: "Semi truck on the highway", src: brandImagery.aboutStory }}
        lede={
          <p>
            Energy Guard Aerodynamic Solutions lower cost per mile and total cost of ownership by maximizing airflow
            control—while reducing greenhouse gas emissions—with no moving parts and proven performance.
          </p>
        }
        title="Solutions that fit every fleet need"
      />

      <Section surface>
        <Container>
          <div className="show-split">
            <div>
              <p className="page-eyebrow">Our approach</p>
              <h2 className="page-section-title show-heading">End-to-end aerodynamics for real fleets</h2>
              <p className="page-prose">
                Whether you operate regional lanes or national programs, Energy Guard gives you kits that match how
                your trailers run—backed by transparent testing and US manufacturing.
              </p>
              <ul className="page-list">
                {aboutPillars.map((pillar) => (
                  <li key={pillar.title}>
                    <strong>{pillar.title}.</strong> {pillar.body}
                  </li>
                ))}
              </ul>
            </div>
            <figure className="show-split__visual">
              <img
                alt="Energy Guard aerodynamic components"
                decoding="async"
                height={900}
                loading="lazy"
                src={brandImagery.solutionsSkirt}
                width={1200}
              />
            </figure>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="page-actions">
            <Link className="ui-button ui-button--primary" to="/solutions">
              Explore solutions
            </Link>
            <Link className="ui-button ui-button--secondary" to="/info">
              Why Energy Guard
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
