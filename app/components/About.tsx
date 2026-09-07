const About = () => {
  return (
    <div className="w-full rounded-r-full py-16 bg-primary/5">
      <section
        aria-labelledby="about"
        className="w-[90%] rounded-r-full md:rounded-full bg-primary/5 md:w-3/4 py-10 md:py-16 mx-auto"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium md:text-center italic mb-8">
          About <span className="font-heading text-primary">Jay Decor</span>
        </h2>

        <p className="text-secondary text-sm sm:text-base mt-4 md:text-center max-w-2xl mx-auto">
          Welcome to JAY DECOR, your ultimate one-stop solution for interior and
          exterior design needs.
        </p>
        <p className="text-secondary font-normal text-sm sm:text-base leading-relaxed my-4 md:text-center max-w-3xl mx-auto">
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
