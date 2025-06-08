import Image from "next/image";
import homeImage from "@/public/img/home.png";
export const HomePage = () => {
  return (
    <section id="home" className="relative">
      <div className="container">
        <div
          className="w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute top-1/2 left-1/2
        transform -translate-x-1/2 -translate-y-1/2"
        ></div>
        <div className="w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute right-0 bottom-0"></div>

        <div className="flex flex-col items-center gap-5 lg:flex-row">
          <div className="w-full space-y-5 lg:w-1/2">
            <h1>
              <span className="text-yellow-500">Plants</span> make a <br />{" "}
              positive
              <span className="text-yellow-500"> impact</span> on <br />
              your environment
            </h1>
            <p className="text-slate-300 font-Lobster">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              mollitia ex ratione expedita enim omnis, obcaecati dolores, nobis
              veritatis, rerum dicta rem reprehenderit quod at aut quibusdam.
              Dolore, ipsa accusamus.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row md:gap-4 lg:pt-5 xl:pt-10">
              <button className="btn">
                <span>Shop Now</span>
                <i className="ri-leaf-line"></i>
              </button>
              <button className="btn btn_outline">
                <span>Know More</span>
                <i className="ri-leaf-line"></i>
              </button>
            </div>
            <p className="text-xs font-Lobster text-slate-300">
              You will get 30-days free trial.
            </p>

            <div className="flex items-center gap-5 text-lg lg:pt-10">
              <i className="ri-facebook-fill text-slate-300 hover:text-yellow-500 cursor-pointer "></i>
              <i className="ri-twitter-x-line text-slate-300 hover:text-yellow-500 cursor-pointer text-base"></i>
              <i className="ri-instagram-line text-slate-300 hover:text-yellow-500 cursor-pointer "></i>
              <i className="ri-linkedin-fill text-slate-300 hover:text-yellow-500 cursor-pointer "></i>
            </div>
          </div>

          <div className="w-full relative lg:w-1/2">
            <Image src={homeImage} alt="Home Image" />

            <div className="absolute -top-10 right-0 opacity-30 xl:top-5 animate-movingY">
              <i className="ri-leaf-line text-6xl text-yellow-500"></i>
            </div>
            <div className="absolute bottom-0 left-0 opacity-30 xl:bottom-12 animate-rotating">
              <i className="ri-flower-line text-6xl text-yellow-500"></i>
            </div>
            <div className="hidden absolute -top-8 -left-5 opacity-30 lg:block animate-scalingUp">
              <i className="ri-plant-line text-6xl text-yellow-500"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
