import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Comment = () => {
  return (
    <div className="w-full md:w-[300px] relative">
      <div className="absolute bottom-[90%] overflow-hidden  left-3.5">
        <img
          src="./src/assets/icons/icons8-double-quotes-100.png"
          alt=""
          className="w-16"
        />
      </div>
      <Card className="py-6 px-6">
        <CardContent>
          <p className="text-lg">
            The hands-on projects and clear learning tracks helped me land my
            first developer job in just six months.
          </p>
        </CardContent>
        <CardFooter className="gap-5 border-t-2 border-b-my-background-secondary pt-4">
          <div className="overflow-hidden rounded-full w-14">
            <img
              src="./src/assets/images/uifaces-human-avatar (1).jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="flex flex-col items-start justify-start ">
            <p className="font-medium">Omar S</p>
            <p className="text-black/70 text-sm ">Front end Strudent</p>
            <div className="flex justify-center items-center gap-3">
              <div className="overflow-hidden  w-5">
                <img
                  src="./src/assets/icons/icons8-star-100.png"
                  alt=""
                  className="w-full"
                />
              </div>
              <p className="text-sm text-black/70">4.8</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Comment;
