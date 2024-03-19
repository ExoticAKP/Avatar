import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "./Swiper.sass";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image2 from "../../assets/Rectangle-2.svg";

const SwiperComponent: React.FC = () => {
  const swiperWidth = "50%";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px 0",
        justifyContent: "center",
      }}>
      <div
        style={{
          maxWidth: "90%",
        }}>
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 20,
            depth: 120,
            modifier: 5.725,
          }}
          pagination={{
            el: "#containerForBullets",
            type: "bullets",
            renderBullet: function (index, className) {
              return (
                `<span key=${index} class="` +
                className +
                '"><img class="pagination-bullet"/></span>'
              );
            },
            clickable: true,
          }}
            navigation={{
                nextEl: ".next",
                prevEl: ".prev",
            }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
          loop={true}>
          {Array.from(Array(10).keys()).map((n) => (
            <SwiperSlide key={n} style={{ width: swiperWidth }}>
              <img src={Image2} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-button-container">
        <div className="prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.75021 10.5H21.6289V13.5H8.75021L13.6895 18.4393L11.5682 20.5606L3.00757 12L11.5682 3.4393L13.6895 5.56062L8.75021 10.5Z"
              fill="#D3D2D2"
            />
          </svg>
        </div>
        <div
          id="containerForBullets"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}></div>
        <div className="next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.1069 13.557H3.55319V10.443H16.1069L11.2922 5.31595L13.36 3.11401L21.7046 12L13.36 20.886L11.2922 18.6841L16.1069 13.557V13.557Z"
              fill="#D3D2D2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SwiperComponent;
