"use client";

interface Props {
  title: string;
  children: React.ReactNode;
}

const FooterCard = ({ title, children }: Props) => {
  return (
    <div className="pb-4">
      <h3 className="font-bold text-lg py-2">{title}</h3>
      <ul className="flex flex-col gap-2">{children}</ul>
    </div>
  );
};

export default FooterCard;
