import Image from "next/image";

import adani_realty from "@/public/adani-realty.jpg";
import agarwal_group from "@/public/agarwal-group.jpg";
import concept_and_ideas from "@/public/concept-and-ideas.jpg";
import parikh_group from "@/public/parikh-group.jpg";
import cn_desiigns from "@/public/cn-desiigns.jpg";
import mira_sol from "@/public/mira-sol.jpg";
import the_post_office_global from "@/public/the-post-office-glabal.jpg";
import inteara_design_studio from "@/public/inteara-design-studio.jpg";
import galaxy_global_supplier_to_global_brands from "@/public/galaxy-global-supplies-and-global-brands.jpg";
import sai_suraj_international_hotels from "@/public/sai-suraj-international-hotels.jpg";
import interics_creating_lifestyle from "@/public/interics_creating_lifestyle.jpg";
import Marquee from "react-fast-marquee";

const brandLists = [
  { name: "Adani Realty — client logo", img: adani_realty },
  { name: "Agarwal Group — client logo", img: agarwal_group },
  { name: "Concept and Ideas — client logo", img: concept_and_ideas },
  { name: "Parikh Group — client logo", img: parikh_group },
  { name: "CN Desiigns — client logo", img: cn_desiigns },
  { name: "Mira Sol — client logo", img: mira_sol },
  { name: "The Post Office Global — client logo", img: the_post_office_global },
  { name: "Inteara Design Studio — client logo", img: inteara_design_studio },
  {
    name: "Galaxy Global Supplier to Global Brands — client logo",
    img: galaxy_global_supplier_to_global_brands,
  },
  {
    name: "Sai Suraj International Hotels — client logo",
    img: sai_suraj_international_hotels,
  },
  {
    name: "Interics Creating Lifestyle — client logo",
    img: interics_creating_lifestyle,
  },
];

const OurAssociates = () => {
  return (
    <div className="w-full pb-8 my-6">
      <section className="h-full w-full md:w-3/4 mx-auto pt-10">
        <h1 className="text-2xl font-medium text-center">Our Associates</h1>
        <div className="my-14">
          <Marquee className="h-fit w-full">
            {brandLists.map((brand, i) => {
              return (
                <Image
                  className="px-4"
                  height={120}
                  key={brand.name + i}
                  src={brand.img}
                  alt={brand.name}
                />
              );
            })}
          </Marquee>
        </div>
      </section>
    </div>
  );
};
export default OurAssociates;
