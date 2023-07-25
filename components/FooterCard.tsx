"use client";

interface Props {
  title: string;
  children: React.ReactNode;
}

const FooterCard = ({ title, children }: Props) => {
  return (
    <div>
      <h3 className="font-bold text-lg pb-4">{title}</h3>
      <ul className="flex flex-col gap-2">{children}</ul>
    </div>
  );
};

export default FooterCard;
