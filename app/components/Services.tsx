import Image from "next/image";
import Link from "next/link";
import awnings_img from "@/public/retractable-awning.jpg";
import wallpapers_img from "@/public/custom-wallpapers-1.jpg";
import floorings_img from "@/public/laminated-wooden-flooring.jpg";
import carpet_tiles_img from "@/public/carpet-tile-1.jpg";
import vinyl_flooring_img from "@/public/vinyl-flooring-1.jpg";
import blinds_img from "@/public/wooden-venetian-blind.jpg";
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
      className="w-full bg-white py-14 md:py-24"
    >
      <div className="w-[90%] md:w-3/4 mx-auto">
        <div className="text-center mb-10">
          <h2
            id="services-heading"
            className=" tracking-wide text-xl sm:text-2xl md:text-3xl font-medium font-heading"
          >
            Our Services
          </h2>
          <p className="tracking-wide font-heading text-secondary/70 italic text-sm sm:text-base mt-2">
            From walls and floors to ceilings and outdoor spaces
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-6 md:gap-x-5 md:gap-y-8">
          {serviceList.map((category) => (
            <Link
              key={category.slug}
              href={`/services/${category.slug}`}
              className="group block break-inside-avoid mb-6 md:mb-8"
            >
              <div className="relative w-full overflow-hidden rounded-xl">
                <Image
                  src={category.img}
                  alt={`${category.title} — Jay Decor interior design solutions in Virar, Mumbai`}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="pt-4 leading-6">
                <h3 className="text-lg tracking-wide">{category.title}</h3>
                <p className="text-sm text-gray-600 tracking-wide">
                  {category.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
