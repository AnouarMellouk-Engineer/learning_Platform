import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const Support = () => {
  return (
    <Card className="p-0  overflow-hidden w-full  lg:w-[80%]">
      <CardContent className="p-0 flex justify-center items-center ">
        <div className="bg-my-primary text-white flex flex-col sm:flex-row justify-center items-center sm:items-start gap-6 px-5 py-7">
          <div className="flex-1 flex sm:block flex-col justify-start items-center">
            <h2 className="font-my-heading text-4xl font-bold mb-3.5 text-center sm:text-left">
              Join Our Newsletter
            </h2>
            <p className="text-white/70 mb-7 text-center sm:text-left ">
              Enter your email and stay connected with our learning community
            </p>
            <div className="flex w-full max-w-sm items-center gap-2 relative ">
              <Input
                type="email"
                placeholder="Email"
                className="bg-white text-black h-11"
              />
              <Button type="submit" className="absolute top-1 right-1">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="overflow-hidden flex-1 ">
            <img
              src="./src/assets/images/Email campaign-bro.svg"
              alt=""
              className="w-full"
            />
          </div>
        </div>
        <div className="bg-white py-7 px-5 hidden lg:flex flex-col justify-start items-start">
          <h2 className="text-4xl mb-4 font-bold">Need Support ?</h2>
          <p className="text-black/70 mb-6">
            We’re here to answer your questions and guide you on your learning
            journey.
          </p>
          <Button className="px-8 py-6">Contact Us</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Support;
