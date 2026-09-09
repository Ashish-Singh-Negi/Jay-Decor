import Image from "next/image";
import Link from "next/link";
import awnings_img from "@/public/retractable-awning.jpg";
import wallpapers_img from "@/public/custom-wallpapers-1.jpg";
import floorings_img from "@/public/laminated-wooden-flooring.jpg";
import carpet_tiles_img from "@/public/carpet-tile-1.jpg";
import vinyl_flooring_img from "@/public/vinyl-flooring-1.jpg";
import blinds_img from "@/public/roller-blind.jpg";
import wall_panels_img from "@/public/wall-panel-1.jpg";
import laser_cutting_img from "@/public/laser-cutting-and-3d-engraving-1.jpg";
import artificial_turf_img from "@/public/artifficial-turf-1.jpg";
import glass_films_img from "@/public/glass-film-1.jpg";
import stretch_ceiling_img from "@/public/stretch-celing-1.jpg";

const serviceList = [
  {
    slug: "wallpapers",
    img: wallpapers_img,
    title: "Imported & Customised Wallpapers",
    desc: "Curated imported and made-to-order wallpapers to redefine every wall",
    big: true,
  },
  {
    slug: "awnings",
    img: awnings_img,
    title: "Awnings",
    desc: "Window, vertical, retractable & pergola awnings to shade your space in style",
  },
  {
    slug: "floorings",
    img: floorings_img,
    title: "Floorings",
    desc: "Laminated, engineered, solid wood, deck & SPC flooring for every room",
  },
  {
    slug: "carpet-tiles",
    img: carpet_tiles_img,
    title: "Carpet Tiles",
    desc: "Modular carpet tiles built for durability in commercial and home interiors",
  },
  {
    slug: "vinyl-floorings",
    img: vinyl_flooring_img,
    title: "Vinyl Floorings",
    desc: "Water-resistant, low-maintenance vinyl flooring with a natural wood finish",
  },
  {
    slug: "laser-cutting",
    img: laser_cutting_img,
    title: "Laser Cutting & 3D Engraving",
    desc: "Precision laser-cut and engraved panels for bespoke, intricate detailing",
  },
  {
    slug: "blinds",
    img: blinds_img,
    title: "Blinds (Manual & Motorised)",
    desc: "Roller, zebra, honeycomb, wooden, bamboo & motorised blinds for effortless light control",
  },
  {
    slug: "wall-panels",
    img: wall_panels_img,
    title: "Wall Panels",
    desc: "Statement wall and ceiling panels that bring texture and warmth to any room",
  },
  {
    slug: "glass-films",
    img: glass_films_img,
    title: "Glass Films",
    desc: "Frosted, tinted & printed films for privacy, style, and light control on glass",
  },
  {
    slug: "stretch-ceiling",
    img: stretch_ceiling_img,
    title: "Stretch Ceiling",
    desc: "Custom-printed stretch ceilings that turn overhead space into a design feature",
  },
  {
    slug: "artificial-turf",
    img: artificial_turf_img,
    title: "Artificial Turf",
    desc: "Evergreen, low-maintenance turf for lawns, terraces, and sports spaces",
  },
];

const Services = () => {
  return (
    <section
      aria-labelledby="services-heading"
      className="w-full bg-white py-14 md:py-20"
    >
      <div className="w-[90%] md:w-3/4 mx-auto">
        <div className="text-center mb-10">
          <h2 className="tracking-wide text-xl sm:text-2xl md:text-3xl font-medium font-heading">
            Our Services
          </h2>
          <p className="tracking-wide font-heading text-secondary/70 italic text-sm sm:text-base mt-2">
            From walls and floors to ceilings and outdoor spaces
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-40 md:auto-rows-45 grid-flow-dense gap-4 md:gap-5">
          {serviceList.map((category) => (
            <Link
              key={category.slug}
              href={`/services/${category.slug}`}
              className={`group relative overflow-hidden rounded-xl ${
                category.big ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
              }`}
            >
              <Image
                src={category.img}
                alt={`${category.title} — Jay Decor interior design solutions in Virar, Mumbai`}
                fill
                sizes={
                  category.big
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                }
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/70 via-black/20 to-transparent p-3 md:p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-white font-medium tracking-wide text-sm md:text-base">
                  {category.title}
                </h3>
                <p className="text-white/80 text-xs md:text-sm mt-1 line-clamp-2">
                  {category.desc}
                </p>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-white font-medium tracking-wide text-sm md:text-base drop-shadow">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
