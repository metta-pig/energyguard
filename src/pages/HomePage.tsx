import type { ReactNode } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Section } from "../components/ui";
import { aboutPillars, components, heroSlides, proofLogos, testimonial } from "../lib/energyGuardContent";
import {
  getLayoutPresetId,
  HOME_SECTION_ORDER,
  type HomeSectionKey,
  type LayoutPresetId,
} from "../lib/layoutPresets";
import { siteConfig } from "../lib/siteConfig";
import { brandImagery, supplementalPhotoCredit } from "../lib/siteMedia";

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
    return ["hero", "proof", "visit", "splitIntro", "bento", "quote"];
  }
  return HOME_SECTION_ORDER[layoutId];
}

function HomeHero(): ReactNode {
  const slide = heroSlides[0];
  const heroImage = brandImagery[slide.image];

  return (
    <header className="hero-cinema">
      <div className="hero-cinema__bg" aria-hidden>
        <img
          alt="EverGuard trailer aerodynamics lifetime warranty"
          className="hero-cinema__photo"
          decoding="async"
          fetchPriority="high"
          height={900}
          loading="eager"
          src={heroImage}
          width={1600}
        />
        <div className="hero-cinema__scrim" />
        <div className="hero-cinema__vignette" />
      </div>
      <Container className="hero-cinema__content">
        <p className="hero-cinema__kicker">{slide.kicker}</p>
        <h1 className="hero-cinema__title">
          <span className="hero-cinema__title-line">{slide.title}</span>
        </h1>
        <p className="hero-cinema__lede">{siteConfig.tagline}</p>
        <div className="hero-cinema__actions">
          <Link className="ui-button ui-button--primary" to="/contact">
            Request estimate
          </Link>
          <a className="ui-button ui-button--secondary" href={siteConfig.contact.emailMailto}>
            Email sales
          </a>
          <Link className="ui-button ui-button--ghost" to={slide.ctaHref}>
            {slide.ctaLabel}
          </Link>
        </div>
        <p className="hero-cinema__credit">{supplementalPhotoCredit}</p>
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

function HomeSplitIntro(): ReactNode {
  return (
    <Section surface>
      <Container>
        <div className="show-split">
          <div>
            <p className="page-eyebrow">About Energy Guard</p>
            <h2 className="page-section-title show-heading">Solutions that fit every need</h2>
            <p className="page-prose">
              Energy Guard Aerodynamic Solutions are designed to lower your cost per mile and total cost of ownership
              by maximizing airflow control—while reducing greenhouse gas emissions. No moving parts, proven
              performance, and kits matched to your operation.
            </p>
            <ul className="page-list">
              {aboutPillars.map((pillar) => (
                <li key={pillar.title}>
                  <strong>{pillar.title}.</strong> {pillar.body}
                </li>
              ))}
            </ul>
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
      </Container>
    </Section>
  );
}

function HomeBento(): ReactNode {
  return (
    <Section>
      <Container>
        <p className="page-eyebrow">Explore</p>
        <h2 className="page-section-title show-heading">Built for drivers, fleets, and partners</h2>
        <p className="page-prose show-bento-intro">
          Route by role—spec kits for operations, register EverGuard coverage, or connect with sales for a custom
          estimate.
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
        <ul className="page-list">
          {components.slice(0, 3).map((c) => (
            <li key={c.title}>{c.title}</li>
          ))}
        </ul>
        <Link className="ui-button ui-button--ghost" to="/solutions">
          All components
        </Link>
      </Container>
    </Section>
  );
}

function HomeVisit(): ReactNode {
  return (
    <div className="show-visit" id="visit">
      <div className="show-visit__bg" aria-hidden>
        <img alt="" decoding="async" loading="lazy" src={brandImagery.visitBackdrop} />
      </div>
      <div className="show-visit__wash" aria-hidden />
      <Section className="show-visit__inner" surface={false}>
        <Container>
          <p className="page-eyebrow">Get started</p>
          <h2 className="page-section-title">Ready to upgrade your fleet?</h2>
          <p className="page-prose">
            Already know what you need? Contact sales for product information, fleet programs, or to place an order. Not
            sure which solution fits? We&apos;ll help you decide.
          </p>
          <div className="page-actions">
            <Link className="ui-button ui-button--primary" to="/contact">
              Request estimate
            </Link>
            <a className="ui-button ui-button--secondary" href={siteConfig.contact.emailMailto}>
              {siteConfig.contact.email}
            </a>
            <a className="ui-button ui-button--ghost" href={brandImagery.salesSheet} rel="noopener noreferrer" target="_blank">
              Download sales sheet
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
    <Section className="home-proof">
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
          Recognized for innovation and environmental performance—transparent testing, US manufacturing, and programs
          built for truck drivers, manufacturers, and sales teams.
        </p>
        <Link className="ui-button ui-button--ghost" to="/info">
          Why Energy Guard
        </Link>
      </Container>
    </Section>
  );
}

function renderHomeSection(key: HomeSectionKey): ReactNode {
  switch (key) {
    case "hero":
      return <HomeHero />;
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
