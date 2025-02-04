import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../social-media-component/social-media.css";

function SocialMediaComments() {
  const comments = [
    {
      id: 1,
      name: "Mike",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repellat.",
      icon: "https://www.svgrepo.com/show/452229/instagram-1.svg",
    },
    {
      id: 2,
      name: "John",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repellat.",
      icon: "https://www.svgrepo.com/show/303198/youtube-icon-logo.svg",
    },
    {
      id: 3,
      name: "Jack",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repellat.",
      icon: "https://www.svgrepo.com/show/452229/instagram-1.svg",
    },
    {
      id: 3,
      name: "Sarah",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repellat.",
      icon: "https://www.svgrepo.com/show/382726/linkedin-linked-in.svg",
    },
    {
      id: 4,
      name: "Alex",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repellat.",
      icon: "https://www.svgrepo.com/show/475689/twitter-color.svg",
    },
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {comments.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="swiper-item">
            <div className="name-and-social-logo">
              <img
                className="comment-section-img"
                src={item.icon}
                alt={item.name}
              />
              <span>{item.name}:</span>
            </div>
            <p className="comment">{item.comment}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SocialMediaComments;