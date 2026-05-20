import type { ReactNode } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Section } from "../components/ui";
import {
  aboutPillars,
  audienceSegments,
  components,
  fleetMetrics,
  proofLogos,
  testimonial,
} from "../lib/energyGuardContent";
import {
  getLayoutPresetId,
  HOME_SECTION_ORDER,
  type HomeSectionKey,
  type LayoutPresetId,
} from "../lib/layoutPresets";
import { siteConfig } from "../lib/siteConfig";
import { brandImagery } from "../lib/siteMedia";

const railItems = ["Fuel savings", "EPA / CARB", "Made in USA", "Lifetime warranty", "No moving parts"] as const;

const categoryTiles = [
  {
    to: "/solutions",
    title: "Solutions",
    body: "Full kits and components—skirts, fairings, mud flaps, and wheel covers.",
    src: brandImagery.solutionsMax,
    gridClass: "show-bento__tile--inv",
  },
  {
    to: "/warranty",
    title: "EverGuard™",
    body: "Industry-only written lifetime warranty in trailer aerodynamics.",
    src: brandImagery.heroEverGuard,
    gridClass: "show-bento__tile--amp",
  },
  {
    to: "/about",
    title: "About",
    body: "How Energy Guard lowers cost per mile for fleets nationwide.",
    src: brandImagery.aboutStory,
    gridClass: "show-bento__tile--sna",
  },
  {
    to: "/contact",
    title: "Request estimate",
    body: "Talk with sales about kits, ROI, and fleet programs.",
    src: brandImagery.salesSheet,
    variant: "contain" as const,
    gridClass: "show-bento__tile--liz",
  },
] as const;

function getHomeSectionOrder(layoutId: LayoutPresetId): readonly HomeSectionKey[] {
  if (layoutId === "local") {
    return ["hero", "proof", "stats", "visit", "splitIntro", "bento", "quote"];
  }
  return HOME_SECTION_ORDER[layoutId];
}

function HomeHero(): ReactNode {
  return (
    <header className="hero-cinema hero-cinema--fleet">
      <div className="hero-cinema__bg" aria-hidden>
        <img
          alt="Aerodynamic semi trailer on the highway"
          className="hero-cinema__photo"
          decoding="async"
          fetchPriority="high"
          height={1200}
          loading="eager"
          src={brandImagery.heroCompliance}
          width={2000}
        />
        <div className="hero-cinema__scrim" />
        <div className="hero-cinema__vignette" />
      </div>
      <Container className="hero-cinema__content">
        <div className="hero-cinema__badge-row">
          {siteConfig.logoUrl ? (
            <span className="hero-cinema__everguard-mark">
              <img alt="" height={20} src={siteConfig.logoUrl} width={80} />
              EverGuard™
            </span>
          ) : (
            <p className="hero-cinema__kicker">EverGuard™</p>
          )}
          <p className="hero-cinema__kicker">Lifetime warranty</p>
        </div>
        <h1 className="hero-cinema__title">
          <span className="hero-cinema__title-line">Aerodynamics that cut drag,</span>
          <span className="hero-cinema__title-line hero-cinema__title-line--accent">fuel spend, and downtime.</span>
        </h1>
        <p className="hero-cinema__lede">{siteConfig.tagline}</p>
        <ul className="eg-audience" aria-label="Who we serve">
          {audienceSegments.map((label) => (
            <li key={label} className="eg-audience__item">
              {label}
            </li>
          ))}
        </ul>
        <div className="hero-cinema__actions">
          <Link className="ui-button ui-button--primary" to="/contact">
            Request estimate
          </Link>
          <a className="ui-button ui-button--secondary site-header__cta--email" href={siteConfig.contact.emailMailto}>
            Email sales
          </a>
          <Link className="ui-button ui-button--ghost" to="/warranty">
            EverGuard warranty
          </Link>
        </div>
      </Container>
      <Container>
        <ul className="show-rail">
          {railItems.map((label) => (
            <li key={label} className="show-rail__item">
              {label}
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
}

function HomeStats(): ReactNode {
  return (
    <Section className="eg-metrics" surface={false}>
      <Container className="eg-metrics__inner">
        <p className="eg-metrics__eyebrow">Why fleets switch</p>
        <h2 className="eg-metrics__title">Built for measurable savings—not marketing fluff.</h2>
        <ul className="eg-metrics__grid">
          {fleetMetrics.map((metric) => (
            <li key={metric.label} className="eg-metrics__card">
              <p className="eg-metrics__value">{metric.value}</p>
              <p className="eg-metrics__label">{metric.label}</p>
              <p className="eg-metrics__detail">{metric.detail}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

function HomeSplitIntro(): ReactNode {
  return (
    <Section surface>
      <Container>
        <div className="show-split">
          <div>
            <p className="page-eyebrow">About Energy Guard</p>
            <h2 className="page-section-title show-heading">Solutions that fit every need</h2>
            <p className="page-prose">
              Energy Guard Aerodynamic Solutions lower cost per mile and total cost of ownership by maximizing airflow
              control—while reducing greenhouse gas emissions. No moving parts, proven performance, and kits matched to
              your operation.
            </p>
            <div className="page-actions">
              <Link className="ui-button ui-button--primary" to="/solutions">
                Explore solutions
              </Link>
              <a className="ui-button ui-button--ghost" href={brandImagery.salesSheet} rel="noopener noreferrer" target="_blank">
                Sales sheet
              </a>
            </div>
          </div>
          <figure className="show-split__visual">
            <span className="show-split__badge">Made in USA</span>
            <img
              alt="Energy Guard trailer skirt rendering"
              decoding="async"
              height={1200}
              loading="lazy"
              src={brandImagery.solutionsSkirt}
              width={1600}
            />
          </figure>
        </div>
        <ul className="eg-pillar-grid">
          {aboutPillars.map((pillar) => (
            <li key={pillar.title} className="eg-pillar">
              <span className="eg-pillar__icon" aria-hidden>
                {pillar.icon}
              </span>
              <h3 className="eg-pillar__title">{pillar.title}</h3>
              <p className="eg-pillar__body">{pillar.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

function HomeBento(): ReactNode {
  return (
    <Section>
      <Container>
        <p className="page-eyebrow">Explore</p>
        <h2 className="page-section-title show-heading">Where do you want to go next?</h2>
        <p className="page-prose show-bento-intro">
          Spec kits, register warranty coverage, download the sales sheet, or talk with our team about fleet ROI.
        </p>
        <div className="show-bento">
          {categoryTiles.map((tile) => (
            <Link
              key={tile.title}
              className={`show-tile${"variant" in tile && tile.variant === "contain" ? " show-tile--contain" : ""} ${tile.gridClass}`}
              to={tile.to}
            >
              <img alt="" className="show-tile__img" decoding="async" loading="lazy" src={tile.src} />
              <div className="show-tile__scrim" aria-hidden />
              <div className="show-tile__body">
                <h3 className="show-tile__label">{tile.title}</h3>
                <p className="show-tile__meta">{tile.body}</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="page-eyebrow page-eyebrow--spaced">Components</p>
        <ul className="eg-component-strip" aria-label="Featured components">
          {components.map((c) => (
            <li key={c.title} className="eg-component-strip__item">
              {c.title}
            </li>
          ))}
        </ul>
        <Link className="ui-button ui-button--primary" to="/solutions">
          View all solutions
        </Link>
      </Container>
    </Section>
  );
}

function HomeVisit(): ReactNode {
  return (
    <div className="show-visit show-visit--cta" id="visit">
      <div className="show-visit__bg" aria-hidden>
        <img alt="" decoding="async" loading="lazy" src={brandImagery.visitBackdrop} />
      </div>
      <div className="show-visit__wash" aria-hidden />
      <Section className="show-visit__inner" surface={false}>
        <Container>
          <p className="page-eyebrow">Get started</p>
          <h2 className="page-section-title">Ready to upgrade your fleet?</h2>
          <p className="page-prose">
            Tell us your trailer mix and lanes—we&apos;ll recommend a kit, estimate payback, and coordinate installation
            through your sales rep or authorized dealer.
          </p>
          <div className="page-actions">
            <Link className="ui-button ui-button--primary" to="/contact">
              Request estimate
            </Link>
            <a className="ui-button ui-button--secondary" href={siteConfig.contact.emailMailto}>
              {siteConfig.contact.email}
            </a>
            <a className="ui-button ui-button--ghost" href={brandImagery.salesSheet} rel="noopener noreferrer" target="_blank">
              Sales sheet (PDF)
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
}

function HomeQuote(): ReactNode {
  return (
    <Section surface>
      <Container>
        <div className="show-split">
          <blockquote className="show-quote">
            <p className="show-quote__text">&ldquo;{testimonial.quote}&rdquo;</p>
            <footer className="show-quote__cite">{testimonial.cite}</footer>
          </blockquote>
          <figure className="show-split__visual show-split__visual--portrait">
            <img
              alt="Daryl Bear, MVT Solutions"
              decoding="async"
              height={1600}
              loading="lazy"
              src={brandImagery.testimonialPortrait}
              width={1200}
            />
          </figure>
        </div>
      </Container>
    </Section>
  );
}

function HomeProof(): ReactNode {
  return (
    <Section className="home-proof home-proof--elevated">
      <Container>
        <div className="home-proof__logos" aria-label="Partners and certifications">
          {proofLogos.map((name) => (
            <span key={name} className="home-proof__logo-chip">
              {name}
            </span>
          ))}
        </div>
        <h2 className="page-section-title show-heading">Trusted by fleets and partners</h2>
        <p className="page-prose">
          Transparent testing, US manufacturing, and programs built for the people who spec, sell, and run trailers
          every day.
        </p>
        <div className="page-actions">
          <Link className="ui-button ui-button--secondary" to="/info">
            Why Energy Guard
          </Link>
          <Link className="ui-button ui-button--ghost" to="/solutions">
            See solutions
          </Link>
        </div>
      </Container>
    </Section>
  );
}

function renderHomeSection(key: HomeSectionKey): ReactNode {
  switch (key) {
    case "hero":
      return <HomeHero />;
    case "stats":
      return <HomeStats />;
    case "splitIntro":
      return <HomeSplitIntro />;
    case "bento":
      return <HomeBento />;
    case "visit":
      return <HomeVisit />;
    case "quote":
      return <HomeQuote />;
    case "proof":
      return <HomeProof />;
    default:
      return null;
  }
}

export function HomePage() {
  const layoutId = getLayoutPresetId();
  const order = getHomeSectionOrder(layoutId);

  return (
    <>
      {order.map((key) => (
        <Fragment key={key}>{renderHomeSection(key)}</Fragment>
      ))}
    </>
  );
}
