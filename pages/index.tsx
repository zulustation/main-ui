import { observer } from "mobx-react";
import { NextPage } from "next";
import React, { FC } from "react";

import { Skeleton } from "@material-ui/lab";

import { useStore } from "lib/stores/Store";
import MarketsList from "components/markets/MarketsList";
import { useMarketsUrlQuery } from "lib/hooks/useMarketsUrlQuery";
import TrendingMarkets from "components/markets/TrendingMarkets";
import Image from "next/image";
import GlitchImage from "components/ui/GlitchImage";
import { TrendingMarketInfo } from "components/markets/TrendingMarketCard";
import { GraphQLClient } from "graphql-request";
import getTrendingMarkets from "lib/gql/trending-markets";
import { getPopularCategories, TagCounts } from "lib/gql/popular-categories";
import { getPlaiceholder, IGetPlaiceholderReturn } from "plaiceholder";
import Link from "next/link";

const MAIN_IMAGE_PATH = "/carousel/intro_zeitgeist_avatar.png";

export async function getStaticProps() {
  const url = process.env.NEXT_PUBLIC_SSR_INDEXER_URL;
  const client = new GraphQLClient(url);
  const trendingMarkets = await getTrendingMarkets(client);

  const img = await getPlaiceholder(MAIN_IMAGE_PATH);

  if (!trendingMarkets || trendingMarkets.length === 0) {
    // prevent rerender if server isn't returning markets
    // commenting for now, as production currently has no trending
    // markets and is failing to build
    // throw new Error("Unable to fetch trending markets");
  }

  const categories = await getPopularCategories(client);
  return {
    props: {
      trendingMarkets: trendingMarkets,
      tagCounts: categories,
      img,
    },
    revalidate: 10 * 60, //10min
  };
}

const Category = ({
  title,
  description,
  imgURL,
  className,
  onClick,
  count,
}: {
  title: string;
  description: string;
  imgURL: string;
  onClick: () => void;
  count: number;
  className?: string;
}) => {
  return (
    <div
      className={`flex cursor-pointer ztg-transition w-full hover:bg-sky-100 dark:hover:bg-sky-1100 
      rounded-ztg-10 py-ztg-10 px-ztg-15 min-w-[235px] max-w-[45%] ${className}`}
      onClick={onClick}
    >
      {count == null ? (
        <Skeleton
          height={57}
          className="flex w-full !rounded-ztg-10 !transform-none"
        />
      ) : (
        <>
          <span className="mr-ztg-18">
            <Image src={imgURL} alt={title} width={56} height={56} />
          </span>
          <span>
            <div className="font-space text-ztg-20-150">{title}</div>
            <div className="font-lato text-ztg-14-120 text-sky-600">
              {description}
            </div>
          </span>
          <span className="ml-auto">
            <div className="font-lato text-sky-600 text-ztg-10-150 bg-sky-300 dark:bg-sky-700 rounded-ztg-5 py-ztg-3 px-ztg-5 ">
              {count}
            </div>
          </span>
        </>
      )}
    </div>
  );
};

const PopularCategories: FC<{ tagCounts: TagCounts }> = observer(
  ({ tagCounts }) => {
    const query = useMarketsUrlQuery();

    const navigateToTag = (tag: string) => {
      query.updateQuery({
        tag,
      });
    };

    return (
      <div className="flex flex-col mt-ztg-30">
        <div></div>
        <h3 className="font-space font-bold text-[24px] mb-ztg-30">
          Popular Topics
        </h3>
        <div className="flex flex-wrap w-full justify-between">
          <Category
            title="Sports"
            description=""
            imgURL="/topics/sports.png"
            count={tagCounts.sports}
            onClick={() => navigateToTag("Sports")}
          />
          <Category
            title="Politics"
            description=""
            imgURL="/topics/politics.png"
            count={tagCounts.politics}
            onClick={() => navigateToTag("Politics")}
          />
          <Category
            title="Governance"
            description=""
            imgURL="/topics/governance.png"
            count={tagCounts.governance}
            onClick={() => navigateToTag("Governance")}
          />
          <Category
            title="Crypto"
            description=""
            imgURL="/topics/crypto.png"
            count={tagCounts.crypto}
            onClick={() => navigateToTag("Crypto")}
          />
        </div>
      </div>
    );
  },
);

const IndexPage: NextPage<{
  trendingMarkets: TrendingMarketInfo[];
  tagCounts: TagCounts;
  img: IGetPlaiceholderReturn;
}> = observer(({ trendingMarkets, tagCounts, img }) => {
  const store = useStore();

  return (
    <div data-test="indexPage">
      <a
        href="https://blog.zeitgeist.pm/announcing-zeitgeist-launch-nfts/"
        target="_blank"
        rel="noreferrer"
      >
        {/* <GlitchImage
          src={MAIN_IMAGE_PATH}
          className="bg-black rounded-ztg-10 max-w-[1036px] w-full"
        > */}
        <Image
          src={MAIN_IMAGE_PATH}
          alt="Introducing Zeitgeist Avatar"
          layout="responsive"
          width={1036}
          height={374}
          quality={100}
          blurDataURL={img.base64}
          placeholder="blur"
          priority
        />
        {/* </GlitchImage> */}
      </a>
      <div className="flex items-center w-full justify-center relative bottom-[29px]">
        <Link href="/markets/">
          <a
            className="font-lato text-[20px] h-[58px] w-[323px] center border-2 rounded-ztg-100 bg-white"
            style={{
              boxShadow:
                "0px 70px 28px rgba(0, 0, 0, 0.01), 0px 40px 24px rgba(0, 0, 0, 0.05), 0px 18px 18px rgba(0, 0, 0, 0.09), 0px 4px 10px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
            }}
          >
            Go to All Markets
          </a>
        </Link>
      </div>
      <TrendingMarkets markets={trendingMarkets} />
      {/* <PopularCategories tagCounts={tagCounts} /> */}
      <MarketsList />
    </div>
  );
});

export default IndexPage;
