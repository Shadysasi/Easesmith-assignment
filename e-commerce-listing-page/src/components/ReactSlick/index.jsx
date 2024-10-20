import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import plant1 from "../../assets/plantsImg/nurseryplant1.png"
import plant2 from "../../assets/plantsImg/nurseryplant2.png"
import plant3 from "../../assets/plantsImg/nurseryplant3.png"
import plant7 from "../../assets/plantsImg/nurseryplant7.png"
import plant8 from "../../assets/plantsImg/nurseryplant8.png"
import plant9 from "../../assets/plantsImg/nurseryplant9.png"


function Responsive() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <div className=" m-auto">
        <div className="mt-20">
            <Slider {...settings}>
                {plantsData.map((data)=> (
                    <div key={data.name} className="bg-white text-gray h-[450px] rounded-xl">
                        <div className="rounded-t-xl flex justify-center items-center">
                            <img src={data.img} alt={data.name} className="h-44 w-44 rounded-full"/>
                        </div>        
                        <p className="text-base text-center text-[#838383]">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum </p>
                    </div>
                    ))}
            </Slider>
        </div>  
    </div>
  );
}

const plantsData = [
    {
        name:"nursery plants1",
        img:plant1
        },
    {
        name:"nursery plants2",
        img:plant2
        },
    {
        name:"nursery plants3",
        img:plant3
        },
    {
        name:"nursery plants7",
        img:plant7
        },    
    {
        name:"nursery plants8",
        img:plant8
        },
    {
        name:"nursery plants9",
        img:plant9
        },
    {
        name:"nursery plants7",
        img:plant7
        },
    {
        name:"nursery plants8",
        img:plant8
        },
    {
        name:"nursery plants9",
        img:plant9
        }
    
]

export default Responsive;
