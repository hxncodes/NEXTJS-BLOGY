import NextImage from "next/image";

const Logo = () => {
  return (
    <div className="">
      <NextImage
        src="/images/logo.svg"
        alt="logo"
        width={50}
        height={50}
        className="w-32 object-contain"
      />
    </div>
  );
};

export default Logo;
