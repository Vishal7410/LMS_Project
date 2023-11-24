import React from "react";

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
                filter: "drop-shadow(0px 10px 10px rgb(0,0,0));",
              }}
              className="drop-shadow-2xl"
              src="https://as2.ftcdn.net/v2/jpg/06/01/37/35/1000_F_601373550_sHy9mp2fqQltzy7S78aIawiYB9gESdeh.jpg"
              alt=" about main image technology tree Image"
            />
          </div>
        </div>
      

      {/* <div className="carousel m-auto w-1/2 my-16">
        <div className='carousel-item relative w-full'></div>
      </div> */}

      <div className="carousel w-1/2 my-16 m-auto ">


            <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/A._P._J._Abdul_Kalam.jpg/800px-A._P._J._Abdul_Kalam.jpg"className="w-40 rounded-full border-2 border-gray-400"/>  
           
            
            
            
            <p className = "text-xl text-gray-200">
                {"Education is the most powerful tool you can use to change the word."}

            </p>
            <h3 className="text-2xl font-semibold">A. P. J. Abdul kalam</h3>
          <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fe/SatyenBose1925.jpg"  // you can diclear the image like that src = {}
            className="w-40 rounded-full border-2 border-gray-400"/>
             <p className = "text-xl text-gray-200">
                {"Education is the most powerful tool you can use to change the word."}

            </p>
            <h3 className="text-2xl font-semibold">Satyen Bose</h3>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
          </div>
          </div>
          
        <div id="slide3" className="carousel-item relative w-full">

        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
        <img
            src="https://static.javatpoint.com/top10-technologies/images/top-10-scientists-in-india1.png"  // you can diclear the image like that src = {}
            className="w-40 rounded-full border-2 border-gray-400"/>
             <p className = "text-xl text-gray-200">
                {"Education is the most powerful tool you can use to change the word."}

            </p>
            <h3 className="text-2xl font-semibold">scientists-in-india</h3>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
          </div>
          </div>

        <div id="slide4" className="carousel-item relative w-full">
        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
        <img
            src="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT1W9_G_KJVgfzPLYf7KwiEUaokKmeRrd7XA84aVL5OuxTpsq69YjEPGQLkl2Y4CfDu"  // you can diclear the image like that src = {}
            className="w-40 rounded-full border-2 border-gray-400"/>
             <p className = "text-xl text-gray-200">
                {"Education is the most powerful tool you can use to change the word."}

            </p>
            <h3 className="text-2xl font-semibold">Indian scientists</h3>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
          </div>
          
          </div>
      </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;
