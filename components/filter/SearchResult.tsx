import Image from "next/image";
import { Layer } from "../layer/layerProps";
import Link from "next/link";
import { useState } from "react";

export const SearchResult = ({ searchResult }: { searchResult: Layer[] }) => {
  const [imageSrc, setImageSrc] = useState("");
  console.log({ searchResult });
  const handleError = () => {
    setImageSrc("/bitcoinlayers-logo.png");
  };
  return (
    <div className="absolute z-[999999999] w-full rounded-2xl border-[3px] border-[#fe4e18] bg-white px-6 shadow-md text-black">
      {searchResult &&
        searchResult?.map((layer) => (
          <Link href={`/layers/${layer.slug}`} key={layer.slug}>
            <div
              key={layer.title}
              className="flex items-center gap-3 text-lg py-5"
            >
              {layer.slug ? (
                <Image
                  src={`/logos/${layer.slug}.png`}
                  alt="Layer icon"
                  width={35}
                  height={35}
                  // fallbacksrc="/bitcoinlayers-logo.png"
                  onError={handleError}
                />
              ) : null}
              {layer.title}
            </div>
          </Link>
        ))}
    </div>
  );
};
