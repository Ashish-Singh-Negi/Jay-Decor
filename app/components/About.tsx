const About = () => {
  return (
    <div className="w-full bg-[#F6F6F6] rounded-md md:rounded-r-full">
      <section
        aria-labelledby="about"
        className="w-full rounded-md md:rounded-r-full md:rounded-full md:w-3/4 py-10 md:py-16 px-[10%] md:mx-auto"
      >
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold font-heading">
            About <span className="text-primary">JAY DECOR</span>
          </h2>
          <p className="font-heading text-secondary/70 italic text-sm sm:text-base mt-2">
            20+ Years of Transforming Spaces
          </p>
        </div>

        <p className="text-secondary tracking-wide text-xs sm:text-base mt-4 md:text-center max-w-2xl mx-auto">
          Since 2005, JAY DECOR has been helping people and businesses create
          spaces that are not just beautiful, but thoughtfully designed,
          functional and built to last.
        </p>
        <p className="text-secondary tracking-wide font-normal text-xs sm:text-base leading-relaxed my-4 md:text-center max-w-3xl mx-auto">
          Founded with a vision to bring quality, creativity and reliability
          together under one roof, JAY DECOR has grown into a trusted name for
          premium interior and exterior design solutions. From imported and
          customised wallpapers, flooring and blinds to awnings, wall panels,
          artificial turf, glass films, stretch ceilings, laser cutting and 3D
          engraving, we offer a comprehensive range of solutions for modern
          spaces.
        </p>
      </section>
    </div>
  );
};
export default About;
