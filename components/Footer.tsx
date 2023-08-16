"use client";

import Link from "next/link";
import FooterCard from "./FooterCard";
import Logo from "./Logo";
import Image from "next/image";
import { socialLinks, about, features, membership } from "@/data/links";
const Footer = () => {
  return (
    <footer className="">
      <div className="xl:hidden">
        <div className="w-full md:w-[60%] lg:w-[40%]">
          <Logo />
          <h2 className="text-lg font-medium pt-4">
            A minimal, functional theme for running a paid-membership
            publication on Ghost.
          </h2>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 py-10">
        <div className="hidden xl:block xl:col-span-2">
          <div className="w-3/4">
            <Logo />
            <h2 className="text-lg font-medium pt-8">
              A minimal, functional theme for running a paid-membership
              publication on Ghost.
            </h2>
          </div>
        </div>
        <FooterCard title="Social">
          {socialLinks.map(({ icon, url, name }) => (
            <li key={name} className="flex items-center gap-2">
              {icon}
              <Link href={url}>{name}</Link>
            </li>
          ))}
        </FooterCard>
        <FooterCard title="About">
          {about.map(({ url, name }) => (
            <li key={name} className="flex items-center gap-2">
              <Link href={url}>{name}</Link>
            </li>
          ))}
        </FooterCard>
        <FooterCard title="Features">
          {features.map(({ url, name }) => (
            <li key={name} className="flex items-center gap-2">
              <Link href={url}>{name}</Link>
            </li>
          ))}
        </FooterCard>
        <FooterCard title="Membership">
          {membership.map(({ url, name }) => (
            <li key={name} className="flex items-center gap-2">
              <Link href={url}>{name}</Link>
            </li>
          ))}
        </FooterCard>
      </div>
      <div className="py-4 w-full text-center">
        <p className="text-[0.8rem] text-gray-600">
          © Blogy {new Date().getFullYear()}. Published by
          <Image
            src="/images/hxncodes.png"
            width={20}
            height={20}
            alt="logo"
            className="rounded-full inline"
          />
          hxnCodes
        </p>
      </div>
    </footer>
  );
};

export default Footer;
