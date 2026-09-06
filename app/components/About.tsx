const About = () => {
  return (
    <div id="about" className="w-full bg-[#d4af37]/5">
      <section
        aria-labelledby="about-heading"
        className="w-[90%] md:w-3/4 py-10 md:py-16 mx-auto"
      >
        <h2
          id="about-heading"
          className="text-xl sm:text-2xl md:text-3xl font-medium text-center italic"
        >
          About <span className="text-[#F6D425]">Jay Decor</span>
        </h2>

        <p className="text-sm sm:text-base text-center mt-4 max-w-2xl mx-auto">
          Welcome to JAY DECOR, your ultimate one-stop solution for interior and
          exterior design needs.
        </p>

        <p className="text-sm sm:text-base leading-relaxed text-center my-4 max-w-3xl mx-auto">
          Established in 2007, our experienced team, top-quality materials, and
          innovative approach ensure we exceed client expectations. Committed to
          transparency and customer satisfaction, JAY DECOR specializes in a
          wide range of interior design products for Residential, Commercial,
          and Hospitality projects. We bring creativity and expertise to every
          project.
        </p>
      </section>
    </div>
  );
};
export default About;
