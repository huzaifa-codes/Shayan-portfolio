import Button from "./Button";

type CaseStudyProps = {
  imageUrl: string;
  alt?: string;
  quote: string;
  author: string;
  role: string;
  title: string;
  description: string;
  buttonText: string;
};

export default function CaseStudy({
  imageUrl,
  alt = "Case study image",
  quote,
  author,
  role,
  title,
  description,
  buttonText,
}: CaseStudyProps) {
  return (
    <div className="bg-gray-100 rounded-[40px] px-4 py-10 sm:px-6 md:px-10 lg:px-16 ">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* LEFT SECTION */}
        <div className="flex flex-col justify-between h-full">
          {/* Quote Box */}
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 md:p-7 max-w-md w-full mx-auto lg:mx-0">
            <p className="text-gray-900 text-[20px] sm:text-[24px] md:text-[27px] font-perah leading-relaxed font-bold">
              “{quote}”
            </p>
            <p className="text-gray-500 text-base sm:text-lg mt-4">
              {author}, {role}
            </p>
          </div>

          {/* Title, Description, CTA */}
          <div className="mt-8 text-center lg:text-left">
            <h3 className="text-[24px] sm:text-[28px] md:text-[30px] font-bold font-heading text-gray-800 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 text-[18px] sm:text-[20px] md:text-[23px] max-w-lg mx-auto lg:mx-0 mb-6">
              {description}
            </p>
            <Button className="rounded-full px-6 py-3 text-base">
              {buttonText}
            </Button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex items-center justify-center mt-10 lg:mt-0">
          <img
            src={imageUrl}
            alt={alt}
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
