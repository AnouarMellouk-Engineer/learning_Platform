import { Linkedin, Instagram, Youtube, MailPlus } from "lucide-react";
import LinksList from "./LinksList";
import { Input } from "./ui/input";
const Footer = () => {
  return (
    <div className="bg-my-background my-container text-white py-2 ">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start py-6 gap-13 ">
        <div className="flex flex-col  justify-start items-start gap-5 flex-1">
          <h2 className="text-5xl font-bold">Elearing</h2>
          <div className="flex justify-center items-center gap-4">
            <div className="p-3 rounded-full  bg-my-secondary text-white">
              <Linkedin size={20} />
            </div>

            <div className="p-3 rounded-full  bg-my-secondary text-white">
              <Instagram size={20} />
            </div>

            <div className="p-3 rounded-full  bg-my-secondary text-white">
              <Youtube size={20} />
            </div>

            <div className="p-3 rounded-full  bg-my-secondary text-white">
              <MailPlus size={20} />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-start  flex-wrap lg:flex-nowrap gap-12 lg:gap-0 flex-2 ">
          <LinksList
            title="Navigation"
            links={["About us", "Courses", "Home", "Blog"]}
          />
          <LinksList
            title="Navigation"
            links={["About us", "Courses", "Home", "Blog"]}
          />
          <LinksList
            title="Navigation"
            links={["About us", "Courses", "Home", "Blog"]}
          />
        </div>
        <div className="flex-1 flex flex-col justify-start items-center lg:items-start">
          <p className="text-xl font-medium mb-2 text-center lg:text-left">
            Subscrib Now !{" "}
          </p>
          <p className="mb-5 text-sm  text-white/70 text-center lg:text-left">
            Enter your email and stay connected with our learning community
          </p>
          <Input
            className="bg-white text-black mb-5"
            type="email"
            placeholder="email"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm text-white/70">
          {" "}
          © 2025 <span className="text-white font-semibold">Elearing</span>. All
          rights reserved.
        </p>
        <p className="text-sm text-white/70">Privacy Policy Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
