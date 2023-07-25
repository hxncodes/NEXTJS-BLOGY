import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src="/images/logo.svg" alt="logo" width={150} height={100} />
    </div>
  );
};

export default Logo;
