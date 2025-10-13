import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SocialIcon from "./SocialIcon";

const Instructor = () => {
  return (
    <Card className=" w-full sm:w-[40%] lg:w-[25%]  rounded-2xl p-0 gap-0">
      <CardHeader className="p-2 ">
        <img
          src="./src/assets/images/uifaces-human-avatar (3).jpg"
          alt=""
          className="rounded-xl overflow-hidden"
        />
      </CardHeader>
      <CardContent className="pb-3.5">
        <p className="text-lg font-medium mb-2">Ali Ahmed</p>
        <div className="flex justify-between items-center">
          <p className="text-black/70 text-sm ">Card Footer</p>
          <div className="flex justify-center items-center gap-2">
            <SocialIcon src="./src/assets/icons/icons8-gmail-100 (1).png" />
            <SocialIcon src="./src/assets/icons/icons8-x-100 (1).png" />
            <SocialIcon src="./src/assets/icons/icons8-linkedin-2-100.png" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Instructor;
