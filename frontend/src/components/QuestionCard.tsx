import { ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const QuestionCard = ({
  questionCard,
  open,
  handelOpen,
}: {
  questionCard: { question: string; answer: string; id: number };
  open: number;
  handelOpen: (id: number) => void;
}) => {
  return (
    <Card
      className={` w-full  sm:w-2/3 lg:w-3/5 ${
        open === questionCard.id ? "border-2 border-my-secondary" : ""
      } hover:shadow-md transition-shadow duration-300 gap-0 `}
    >
      <CardHeader>
        <div className="flex justify-between items-center ">
          <h3 className="text-md sm:text-lg font-bold ">
            {questionCard.question}
          </h3>
          <ChevronUp
            className={`p-2  rounded-full cursor-pointer transform transition-transform duration-300 ${
              open === questionCard.id
                ? "text-my-secondary bg-gray-100 rotate-0"
                : "bg-gray-200 rotate-180"
            }`}
            size={40}
            onClick={() => handelOpen(questionCard.id)}
          />
        </div>
      </CardHeader>

      {/* Animated content */}
      <CardContent
        className={`transition-all duration-500 overflow-hidden ${
          open === questionCard.id
            ? "max-h-40 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-black/70">{questionCard.answer}</p>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
