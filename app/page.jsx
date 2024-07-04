import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

/*Components*/
import Links from "@/components/ui/Links";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import TextLoop from "@/components/TextLoop";

{
  /*Pages*/
}
import Services from "./services/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

{
  /*Components*/
}

const Home = () => {
  return (
    <section className="h-full">
      {/*Hero Container*/}
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*Hero Heading*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <TextLoop />
            {/*<span className="text-xl">Hello </span>
            <span className="text-xl text-animation">World! </span>*/}

            {/*"<span className="text-xl">🌎</span>"*/}
            <h1 className="h1 mb-6">
              Lorem ipsum <br />
              <span className="text-accent"> Magni</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
              error temporibus, deleniti nostrum itaque minima pariatur officia
              mollitia placeat dolor!
            </p>

            {/*buttons, links*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                {/*buttons, links*/}
                <Links
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 "
                />
              </div>
            </div>
          </div>

          {/*Hero Image*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/*Stats*/}
      <Stats />

      {/*SPA TEST*/}
      <Services />
      <Projects />
      <Contact />
    </section>
  );
};

export default Home;
