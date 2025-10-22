import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

export const Accordion = ({ items }: { items: AccordionItem[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-[#ac835d] rounded overflow-hidden"
        >
          <button
            onClick={() => toggleIndex(index)}
            className={`w-full text-left px-6 py-4 font-medium transition-colors flex justify-between items-center cursor-pointer ${
              activeIndex === index
                ? "bg-[#ac835d] text-white"
                : "text-gray-900 hover:bg-gray-100"
            }`}
          >
            <div className="w-full flex justify-between">
              {item.title}
              <span
                className={`transform transition-transform duration-300 w-8 h-8 rounded-full bg-[#ac835d] flex justify-center items-center ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <ChevronDown className="w-5 h-5 text-white" />
              </span>
            </div>
          </button>
          <div
            className={`px-6 overflow-hidden transition-all duration-500 ${
              activeIndex === index ? "max-h-96 py-4" : "max-h-0"
            }`}
          >
            <p className="text-gray-600">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
