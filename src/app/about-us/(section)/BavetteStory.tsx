import Image from "next/image";

const BavetteStory = ({ }) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center lg:py-16 p-4">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#050505]">
        <h2 className="font-playfair text-8xl text-[#262626] md:left-[15%] md:text-8xl text-center">
          The Vu<br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#050505] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/DSC03517.png"
              width={6024}
              height={4024}
              alt="private dining"
              className="md:h-[600px] w-full rounded-lg md:rounded-none object-cover rotate-180"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="max-w-[500px] text-center font-playfair text-6xl sm:text-7xl md:text-start">
              From Dream<br />
              to Sizzle
            </h1>
            <p className="max-w-full text-center font-light leading-[160%] text-[#C1B6A6] md:text-start">
              Vu Lounge is a culinary haven born from a passion for creating unforgettable dining experiences. What began as a small six-cover eatery has blossomed into a lively destination, cherished by our guests for its warm ambiance and exceptional cuisine. Our journey reflects dedication, growth, and a commitment to bringing people together through the love of food.
              <br />
              <br />
              Nestled in a prime location, Vu Lounge has become a symbol of vibrant hospitality and innovative flavors. Over the years, we’ve expanded threefold, turning our humble beginnings into a thriving hub of community and celebration. Each dish is crafted to perfection, embodying the spirit of excellence that defines Vu Lounge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
