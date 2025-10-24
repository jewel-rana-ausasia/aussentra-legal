// components/ServiceDetailsContent.tsx
import React from 'react';

interface ListItem {
  text: string;
}

interface ContentSection {
  title: string;
  paragraphs: string[];
  listItems?: ListItem[];
  className?: string;
}

interface ServiceDetailsContentProps {
  sections: ContentSection[] | null | undefined;
}

const ServiceDetailsContent: React.FC<ServiceDetailsContentProps> = ({ sections }) => {
  // Add proper error handling and fallbacks
  if (!sections) {
    return (
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center text-gray-500">
            No content available for this service.
          </div>
        </div>
      </section>
    );
  }

  if (!Array.isArray(sections) || sections.length === 0) {
    return (
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center text-gray-500">
            No sections available or invalid data format.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-playfair">
      <div className="max-w-4xl mx-auto">
        {sections.map((section, index) => (
          <div key={index} className={section.className || 'mb-12 last:mb-0'}>
            <h4 className="text-3xl font-semibold text-gray-700 mb-6">
              {section.title}
            </h4>
            
            {section.paragraphs && section.paragraphs?.map((paragraph, pIndex) => (
              <p 
                key={pIndex} 
                className="text-gray-600 leading-relaxed mb-5 text-justify font-light"
              >
                {paragraph}
              </p>
            ))}
            
            {section.listItems && section.listItems.length > 0 && (
              <ul className="space-y-3 mb-8">
                {section.listItems.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-4">
                      <span className="w-5 h-5 bg-[#ac835d] rounded-full flex items-center justify-center">
                        <svg 
                          className="w-3 h-3 text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={3} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceDetailsContent;