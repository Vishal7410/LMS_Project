//import React from "react";

import CarouselSlide from "../Components/CarouselSlide";
import { celebrities } from "../Constants/ScientistData";
import HomeLayout from "../Layouts/HomeLayout";

function AboutUs() {

  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and quality education
            </h1>
            <p className="text-xl text-gray-200">
              our goal is to provide the affordable and quality education to the
              world. we are providing the platform for the aspiring teacher and
              students to share their skills, creativity and knowledge to each
              other to empower and contribute in the growth and wellness of
              mankind.
            </p>
          </section>

          <div className="w-1/2">
            <img
              id="test1"
              style={{
                filter: "drop-shadow(0px 10px 10px rgb(0,0,0))"
              }}
              className="drop-shadow-2xl"
              src="https://as2.ftcdn.net/v2/jpg/06/01/37/35/1000_F_601373550_sHy9mp2fqQltzy7S78aIawiYB9gESdeh.jpg"
              alt=" about main image technology tree Image"
            />
          </div>
        </div>
      


      <div className="carousel w-1/2 my-16 m-auto ">
        {celebrities && celebrities.map(celebrity => (<CarouselSlide
                                                         {...celebrity}
                                                         key={celebrity.slideNumber}
                                                         totalSlides = {celebrities.length}
        
          />))}

        
      </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;
