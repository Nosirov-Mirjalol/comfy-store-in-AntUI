import { hero1, hero2, hero3, hero4 } from "../assets/image";
import { Flex, Carousel } from "antd";

const Hero = () => {
  const images = [hero1, hero2, hero3, hero4];
  return (
    <Flex className="flex-col justify-between gap-x-10 lg:grid-cols-2 lg:pt-8 lg:flex-row px-6 md:px-10">
      <div className="w-full lg:w-[50%]">
        <h2 className="text-4xl md:text-6xl font-semibold lg:leading-18">
          We are changing the way people shop
        </h2>
        <p className="py-15 text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
      </div>
      <Carousel className="w-[400px]" autoplay={{ dotDuration: true }} autoplaySpeed={3000}>
        {images.map((item,inx)=>{
          return <div key={inx}>
            <img className="w-full h-[500px] object-cover rounded-2xl" src={item} alt="" />
          </div>
        })}
      </Carousel>
    </Flex>
  );
};

export default Hero;
