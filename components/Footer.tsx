"use client";

import FooterCard from "./FooterCard";
import Logo from "./Logo";
import { socialLinks, about, features, membership } from "@/data/links";
const Footer = () => {
  return (
    <footer className="grid lg:grid-cols-6">
      <div className="col-span-2">
        <Logo />
        <h2>
          A minimal, functional theme for running a paid-membership publication
          on Ghost.
        </h2>
      </div>
      <FooterCard title="Social">
        {socialLinks.map(({ id, icon, url, link }) => (
          <li key={id} className="flex items-center gap-2">
            {icon}
            <a href={url}>{link}</a>
          </li>
        ))}
      </FooterCard>
      <FooterCard title="About">
        {about.map(({ id, url, link }) => (
          <li key={id} className="flex items-center gap-2">
            <a href={url}>{link}</a>
          </li>
        ))}
      </FooterCard>
      <FooterCard title="Features">
        {features.map(({ id, url, link }) => (
          <li key={id} className="flex items-center gap-2">
            <a href={url}>{link}</a>
          </li>
        ))}
      </FooterCard>
      <FooterCard title="Membership">
        {membership.map(({ id, url, link }) => (
          <li key={id} className="flex items-center gap-2">
            <a href={url}>{link}</a>
          </li>
        ))}
      </FooterCard>
    </footer>
  );
};

export default Footer;
