import { Link } from "react-router-dom";
import { Container, Section } from "../components/ui";
import { PageMast } from "../components/layout/PageMast";
import { newsItems } from "../lib/energyGuardContent";
import { brandImagery } from "../lib/siteMedia";

export function NewsPage() {
  return (
    <>
      <PageMast
        eyebrow="Newsroom"
        image={{ alt: "Energy Guard fleet on the highway", src: brandImagery.heroFleet }}
        lede={
          <p>
            Latest news, press releases, and fleet insights—proven results and innovation in trailer aerodynamics.
          </p>
        }
        title="Energy Guard newsroom"
      />

      <Section surface>
        <Container>
          <ul className="page-stack">
            {newsItems.map((item) => (
              <li key={item.title}>
                <p className="page-eyebrow">{item.date}</p>
                <h2 className="page-section-title show-heading">
                  {item.href.startsWith("/") ? (
                    <Link to={item.href}>{item.title}</Link>
                  ) : (
                    <a href={item.href} rel="noopener noreferrer" target="_blank">
                      {item.title}
                    </a>
                  )}
                </h2>
                <p className="page-prose">{item.excerpt}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
