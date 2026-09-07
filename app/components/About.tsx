const About = () => {
  return (
    <div className="w-full rounded-r-full py-16 bg-primary/25">
      <section
        aria-labelledby="about"
        className="w-[90%] rounded-r-full md:rounded-full bg-primary/25 md:w-3/4 py-10 md:py-16 mx-auto"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium md:text-center italic mb-8">
          About{" "}
          <span className="bg-white px-4 py-1 rounded-4xl font-heading font-semibold text-primary ml-1">
            Jay Decor
          </span>
        </h2>

        <p className="text-secondary tracking-wide text-sm sm:text-base mt-4 md:text-center max-w-2xl mx-auto">
          Welcome to JAY DECOR, your ultimate one-stop solution for interior and
          exterior design needs.
        </p>
        <p className="text-secondary tracking-wide font-normal text-sm sm:text-base leading-relaxed my-4 md:text-center max-w-3xl mx-auto">
          <span className="bg-white rounded-2xl tracking-wide py-0.5 px-2">
            Established in 2007
          </span>{" "}
          our experienced team, top-quality materials, and innovative approach
          ensure we exceed client expectations. Committed to transparency and
          customer satisfaction,{" "}
          <span className="bg-white px-2 py-0.5 tracking-wide rounded-l-2xl text-primary font-semibold">
            JAY DECOR
          </span>{" "}
          <span className="bg-white px-2 py-0.5 tracking-wide rounded-r-2xl">
            specializes in a wide range of interior design products
          </span>{" "}
          for Residential, Commercial, and Hospitality projects. We bring
          creativity and expertise to every project.
        </p>
      </section>
    </div>
  );
};
export default About;
