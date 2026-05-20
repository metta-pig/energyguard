import { Link } from "react-router-dom";
import { Container } from "../ui";
import { siteConfig } from "../../lib/siteConfig";
import "./layout.css";

const footerNav = [
  { to: "/about", label: "About" },
  { to: "/solutions", label: "Solutions" },
  { to: "/warranty", label: "Warranty" },
  { to: "/info", label: "Info" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
] as const;

const hasSocial = Boolean(siteConfig.social.facebook || siteConfig.social.instagram || siteConfig.social.youtube);

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div className="site-footer__grid">
          <div>
            {siteConfig.logoUrl ? (
              <img alt="" aria-hidden className="site-footer__logo" height={56} src={siteConfig.logoUrl} width={200} />
            ) : (
              <p className="site-footer__wordmark">{siteConfig.name}</p>
            )}
            <p className="site-footer__muted">{siteConfig.tagline}</p>
            <p className="site-footer__muted">
              <a href={siteConfig.contact.emailMailto}>{siteConfig.contact.email}</a>
            </p>
          </div>
          <nav aria-label="Footer" className="site-footer__nav">
            {footerNav.map((item) => (
              <Link key={item.to} to={item.to} className="site-footer__link">
                {item.label}
              </Link>
            ))}
          </nav>
          {hasSocial ? (
            <div className="site-footer__social">
              {siteConfig.social.facebook ? (
                <a href={siteConfig.social.facebook} rel="noopener noreferrer" target="_blank">
                  Facebook
                </a>
              ) : null}
              {siteConfig.social.instagram ? (
                <a href={siteConfig.social.instagram} rel="noopener noreferrer" target="_blank">
                  Instagram
                </a>
              ) : null}
              {siteConfig.social.youtube ? (
                <a href={siteConfig.social.youtube} rel="noopener noreferrer" target="_blank">
                  YouTube
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
        <p className="site-footer__copy">
          © {year} {siteConfig.name}. All rights reserved.{" "}
          <a href={siteConfig.legal.privacyUrl} rel="noopener noreferrer" target="_blank">
            Privacy
          </a>
          {" · "}
          <a href={siteConfig.legal.termsUrl} rel="noopener noreferrer" target="_blank">
            Terms
          </a>
        </p>
      </Container>
    </footer>
  );
}
