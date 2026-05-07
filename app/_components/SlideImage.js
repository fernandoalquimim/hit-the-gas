import Image from "next/image";

function SlideImage({ src, className = "object-cover object-top" }) {
  return (
    <Image
      src={src}
      fill
      quality={80}
      placeholder="blur"
      className={className}
      alt="Try this experience"
    />
  );
}

export default SlideImage;
