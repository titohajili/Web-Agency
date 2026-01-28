"use client"
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from './ClientReviewCard';



export const userReviewData = [
    {
        id: 1,
        name: 'John Doe',
        profession: "Real Estate Agent",
        userImg: "/images/u1.jpg",
        review: "A wonderful experience! The platform made it easy to find exactly what I needed."
    },
    {
        id: 2,
        name: 'Sarah Smith',
        profession: "UI/UX Designer",
        userImg: "/images/u2.jpg",
        review: "Clean design and smooth user experience. Everything works fast and intuitively."
    },
    {
        id: 3,
        name: 'Michael Brown',
        profession: "Frontend Developer",
        userImg: "/images/u3.jpg",
        review: "Great platform for modern web projects. I really enjoyed using it in my workflow."
    },
    {
        id: 4,
        name: 'Emily Johnson',
        profession: "Marketing Manager",
        userImg: "/images/u4.jpg",
        review: "Very helpful and easy to use. It saved me a lot of time and effort."
    }
];


const ClientReview = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1324, min: 764 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 764, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
};

  return (
    <div className='py-20 '>
      <div className='w-[80%] mx-auto'>
        <div>
            <h1 className='text-red-500 dark:text-red-300 font-medium'>Client Reviews</h1>
            <h1 className='text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 mt-4 font-bold tracking-wider'>Don't Just Take Our Words For It</h1>
        </div>
        <div className='mt-14'>
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    arrows={true}
                    >
                      {
                        userReviewData.map((user)=>(
                            <div key={user.id}>
                                <ClientReviewCard user={user}/>
                            </div>
                        ))
                      }
                    </Carousel>
        </div>
      </div>
    </div>
  )
}

export default ClientReview
