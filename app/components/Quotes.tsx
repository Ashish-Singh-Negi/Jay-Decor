const Quotes = () => {
  return (
    <section aria-label="Quotes" className="w-full py-14 md:py-24">
      <div className="w-[90%] md:w-3/4 lg:w-1/2 mx-auto text-center">
        <span
          aria-hidden="true"
          className="text-primary text-4xl md:text-6xl font-heading leading-none"
        >
          &ldquo;
        </span>

        <blockquote className="text-secondary font-heading tracking-wide">
          <p className="text-base sm:text-lg md:text-2xl italic leading-relaxed">
            If people like you, they will listen to you.
          </p>
          <p className="text-base sm:text-lg md:text-2xl italic leading-relaxed">
            {" "}
            If people trust you, they will do business with you.
          </p>
          <footer className="mt-4">
            <cite className="font-body text-sm sm:text-base font-medium">
              — Zig Ziglar
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};
export default Quotes;
