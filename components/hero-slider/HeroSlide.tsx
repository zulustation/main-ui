import { FC } from "react";

import { HeroSlideProps } from "./slider-types";
import styles from "./HeroSlider.module.css";

export const HeroSlide: FC<HeroSlideProps> = ({
  slide,
  animate,
  setAnimate,
}) => {
  return (
    <>
      <div
        className={`flex items-center bg-cover bg-center h-full w-full p-5 md:p-10 ${
          animate && styles.fadeIn
        }`}
        style={{ backgroundImage: `url(${slide.bg})` }}
        onAnimationEnd={() => setAnimate(false)}
      >
        <div className="max-w-[540px] pb-8">
          <h2
            className={`font-kanit text-center sm:text-left mb-6 leading-tight ${slide.title.styles}`}
          >
            {slide.title.text}
          </h2>
          <div className="flex flex-col sm:flex-row">
            <a
              style={{
                borderColor: `${slide.color1.border}`,
                backgroundColor: `${slide.color1.primary}`,
                color: `${slide.color1.secondary}`,
              }}
              className="leading-[42px] w-full sm:w-fit text-center sm:text-start border rounded px-5 mb-5 mr-5 font-bold"
              href={slide.link1}
              target="_blank"
            >
              {slide.cta1}
            </a>
            {slide.cta2 && (
              <a
                style={{
                  borderColor: `${slide.color2.border}`,
                  backgroundColor: `${slide.color2.primary}`,
                  color: `${slide.color2.secondary}`,
                }}
                className="leading-[42px] w-full sm:w-fit text-center sm:text-start border rounded px-5 mb-5 font-bold"
                href={slide.link2}
                target="_blank"
              >
                {slide.cta2}
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
