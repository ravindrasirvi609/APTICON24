import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const Sponsors = () => {
  const settings2 = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <section id="sponsors" className="container mx-auto py-20 text-black">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-green">
        Our Sponsors
      </h2>
      <p className="text-center text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-darkBrown">
        We extend our sincere gratitude to our sponsors whose generous support
        makes APTICON 2024 possible. Discover our sponsors, their contributions,
        and how they play a crucial role in the success of the conference.
      </p>
      <div className="slider-container">
        <Slider {...settings2} lazyLoad="ondemand">
          <div>
            <Image
              src="https://via.placeholder.com/300x200"
              alt="Sponsor 1"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              src="https://via.placeholder.com/300x200"
              alt="Sponsor 2"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              src="https://via.placeholder.com/300x200"
              alt="Sponsor 3"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              src="https://via.placeholder.com/300x200"
              alt="Sponsor 4"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              src="https://via.placeholder.com/300x200"
              alt="Sponsor 5"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              src="https://via.placeholder.com/300x200"
              alt="Sponsor 6"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              src="https://via.placeholder.com/300x200"
              alt="Sponsor 7"
              width={300}
              height={200}
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Sponsors;
