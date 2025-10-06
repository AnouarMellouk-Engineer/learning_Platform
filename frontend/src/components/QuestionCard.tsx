import { ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";

const QuestionCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card
      className={`w-3/5 ${
        isOpen ? "border-2 border-my-secondary" : ""
      } hover:shadow-md transition-shadow duration-300 gap-0 `}
    >
      <CardHeader>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">Who can join this platform?</h3>
          <ChevronUp
            className={`p-2 rounded-full cursor-pointer transform transition-transform duration-300 ${
              isOpen
                ? "text-my-secondary bg-gray-100 rotate-0"
                : "bg-gray-200 rotate-180"
            }`}
            size={40}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </CardHeader>

      {/* Animated content */}
      <CardContent
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-black/70">
          Anyone! Whether you are a beginner with no background or an
          experienced learner, our courses are designed to fit all levels.
        </p>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
