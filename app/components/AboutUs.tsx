import Image from "next/image";
import plant from "@/public/img/plant-1.png";
import plant2 from "@/public/img/plant-2.png";
import leaf from "@/public/img/leaf-3.png";
export const AboutUs = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="absolute -top-8 -right-12 opacity-50">
        <Image src={leaf} alt="leaf_image" className="w-40 md:w-52 xl:2-64" />
      </div>
      <div className="flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
        <h2 className="title">About Us</h2>
        <p className="max-w-2xl">Follow instruction for more</p>
      </div>
      <div className="container space-y-10 xl:space-y-0">
        {/* item 1 */}
        <div className="flex flex-col items-center lg:flex-row gap-5">
          <div className="w-full lg:w-1/2">
            <Image
              src={plant}
              alt="about_image"
              className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-5">
              <h3>
                Make your <span className="text-yellow-500">organic</span>{" "}
                <br /> garden
              </h3>
              <p className="text-slate-300 font-Lobster">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                alias iure commodi, aut perspiciatis excepturi similique
                laboriosam, doloremque magnam consectetur molestiae, soluta
                neque quos sed.
              </p>
            </div>
          </div>
        </div>

        {/* item 2 */}
        <div className="flex flex-col items-center lg:flex-row-reverse gap-5">
          <div className="w-full lg:w-1/2">
            <Image
              src={plant2}
              alt="about_image"
              className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-5">
              <h3>
                Come with us <span className="text-yellow-500">grow up</span>{" "}
                <br /> your plant
              </h3>
              <p className="text-slate-300 font-Lobster">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                alias iure commodi, aut perspiciatis excepturi similique
                laboriosam, doloremque magnam consectetur molestiae, soluta
                neque quos sed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
