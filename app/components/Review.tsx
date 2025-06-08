"use client"; // at the top if you're using app directory

import { useEffect } from "react";
import Image from "next/image";
import review1 from "@/public/img/review-1.jpg";
import review2 from "@/public/img/review-2.jpg";
import review3 from "@/public/img/review-3.jpg";
import review4 from "@/public/img/review-4.jpg";
import leaf4 from "@/public/img/leaf-4.png";

import Swiper from "swiper";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export const Review = () => {
  useEffect(() => {
    Swiper.use([Autoplay, Pagination]); // ✅ Register modules

    new Swiper(".swiper", {
      speed: 400,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      grabCursor: true,
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  const reviews = [review1, review2, review3, review4, review1];

  return (
    <section id="review" className="relative mb-20 md:mb-28 overflow-hidden">
      <div className="absolute -top-8 -left-12 opacity-50">
        <Image src={leaf4} alt="leaf_image" className="w-40 md:w-52 xl:w-64" />
      </div>
      <div className="flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
        <h2 className="title text-3xl font-bold">Customer Review</h2>
        <p className="max-w-2xl">Follow instruction for more</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="swiper">
          <ul className="swiper-wrapper flex">
            {reviews.map((img, i) => (
              <li key={i} className="swiper-slide flex-shrink-0 p-4">
                <div className="flex flex-col gap-5 bg-green-900 text-white rounded-md p-6 h-full shadow-md">
                  <p className="font-Lobster text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Obcaecati dolore aut cum fuga at doloremque voluptates
                    quaerat!
                  </p>
                  <div className="flex items-center mt-auto">
                    <Image
                      src={img}
                      alt={`review_image_${i}`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-2">
                      <p className="text-yellow-500 uppercase">John Doe</p>
                      <p>Designer</p>
                    </div>
                    <i className="ri-double-quotes-r text-4xl ml-auto"></i>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <br />
          <div className="swiper-pagination mt-4 text-center" />
        </div>
      </div>
    </section>
  );
};
