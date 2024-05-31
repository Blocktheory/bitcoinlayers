import Image from "next/image";
import { Layer } from "../layer/layerProps";
import Link from "next/link";
import { useState } from "react";

export const SearchResult = ({ searchResult }: { searchResult: Layer[] }) => {
  return (
    <>
      {searchResult.length > 0 ? (
        <div className="absolute z-10 w-full rounded-xl border-2 border-[#fe4e18] bg-white px-6 shadow-md text-black mt-2">
          {searchResult?.map((layer) => (
            <Link href={`/layers/${layer.slug}`} key={layer.slug}>
              <div
                key={layer.title}
                className="flex items-center gap-3 text-lg py-5"
              >
                {layer.slug ? (
                  <InfrastructureImage
                    src={`/logos/${layer.slug}.png`}
                    title={layer.title}
                  />
                ) : null}
                {layer.title}
              </div>
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
};

function InfrastructureImage({ src, title }: { src: string; title: string }) {
  const [imageSrc, setImageSrc] = useState(src);

  const handleError = () => {
    setImageSrc("/bitcoinlayers-logo.png");
  };

  return (
    <Image
      src={imageSrc}
      alt={`${title} logo`}
      width={35}
      height={35}
      onError={handleError}
    />
  );
}
