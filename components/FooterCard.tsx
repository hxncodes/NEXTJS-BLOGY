"use client";

interface Props {
  title: string;
  children: React.ReactNode;
}

const FooterCard = ({ title, children }: Props) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>{children}</ul>
    </div>
  );
};

export default FooterCard;
