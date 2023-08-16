import Image from "next/image";
import Link from "next/link";

interface Props {
  imageUrl: string;
}

const Avatar = ({ imageUrl }: Props) => {
  return (
    <Link className="avatar hover:bg-white" href="#">
      <Image
        loading="lazy"
        src={imageUrl}
        width={100}
        height={100}
        alt="author"
        className="rounded-full"
      />
    </Link>
  );
};

export default Avatar;
