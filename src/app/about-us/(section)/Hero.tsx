import Image from "next/image";

const Hero = ({ }) => {
  return (
    <section id="hero" className="flex w-full items-center justify-center">
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-playfair text-4xl font-semibold md:leading-[66px] text-[#fbead2] lg:text-6xl">
                Welcome to<br /> Vu Lounge -<br /> Every Bite,<br /> a Masterpiece.
              </h1>
              <p className="font-manrope font-normal text-[#C1B6A6]">
                Our restaurant, Vu Lounge, is nestled in the heart of the community. This establishment holds a special place in our hearts, having begun as a modest eatery with just six covers and expanding threefold over the years to become the vibrant destination it is today!
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 lg:w-1/2">
            <Image
              src="/images/about-us/DSC03382.png"
              width={2648}
              height={3936}
              alt="hero"
              className="md:h-[900px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
