import React from "react";

import { workouts } from "../data";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "../workoutSlider.css";

import { Navigation } from "swiper";

const WorkoutSlider = () => {
  const { programs } = workouts;
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={32}
      navigation={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}
      className="workoutSlider"
    >
      {programs.map((program, idx) => {
        const { image, name } = program;
        return (
          <SwiperSlide
            className="max-w-[320px] max-h-[320px] relative"
            key={idx}
          >
            <img className=" w-full h-full object-cover " src={image} alt="" />
            <div className=" absolute left-[20px] bottom-[20px]    flex items-center rounded-md  ">
              <div className=" btn btn-lg btn-secondary p-2 py-1 bg-neutral-500 text-white   font-primary rounded-md font-semibold text-sm hover:text-primary-200 ">
                {name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkoutSlider;
