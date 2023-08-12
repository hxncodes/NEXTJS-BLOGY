"use client";

import Link from "next/link";
import FooterCard from "./FooterCard";
import Logo from "./Logo";
import { socialLinks, about, features, membership } from "@/data/links";
const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center">
      <div className="grid lg:grid-cols-6 py-10">
        <div className="col-span-2">
          <div className="w-3/4">
            <Logo />
            <h2 className="text-lg font-medium pt-8">
              A minimal, functional theme for running a paid-membership
              publication on Ghost.
            </h2>
          </div>
        </div>
        <FooterCard title="Social">
          {socialLinks.map(({ id, icon, url, link }) => (
            <li key={id} className="flex items-center gap-2">
              {icon}
              <Link href={url}>{link}</Link>
            </li>
          ))}
        </FooterCard>
        <FooterCard title="About">
          {about.map(({ id, url, link }) => (
            <li key={id} className="flex items-center gap-2">
              <Link href={url}>{link}</Link>
            </li>
          ))}
        </FooterCard>
        <FooterCard title="Features">
          {features.map(({ id, url, link }) => (
            <li key={id} className="flex items-center gap-2">
              <Link href={url}>{link}</Link>
            </li>
          ))}
        </FooterCard>
        <FooterCard title="Membership">
          {membership.map(({ id, url, link }) => (
            <li key={id} className="flex items-center gap-2">
              <Link href={url}>{link}</Link>
            </li>
          ))}
        </FooterCard>
      </div>
      <div className="py-4">
        <p>© Blogy {new Date().getFullYear()}. Published by hxnCodes.</p>
      </div>
    </footer>
  );
};

export default Footer;
