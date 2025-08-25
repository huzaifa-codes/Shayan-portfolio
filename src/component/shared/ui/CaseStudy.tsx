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
  className?: string;
};

const CaseStudy: React.FC<CaseStudyProps> = ({
  imageUrl,
  alt = "Case study image",
  quote,
  author,
  role,
  title,
  description,
  buttonText,
   className = ""
}) => {
  return (
    <div className={`bg-zinc-50 rounded-[40px] px-6 py-12 sm:px-8 md:px-12 lg:px-16 shadow-sm w-[1100px] ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* LEFT SECTION */}
        <div className="flex flex-col justify-between h-full">
          {/* Quote Box */}
          <div className="bg-white rounded-xl shadow-md p-6 max-w-md w-full mx-auto lg:mx-0">
            <p className="text-zinc-900 text-[20px] sm:text-[24px] md:text-[27px] font-perah leading-relaxed font-semibold">
              “{quote}”
            </p>
            <p className="text-zinc-600 text-base sm:text-lg mt-4">
              {author}, {role}
            </p>
          </div>

          {/* Title, Description, CTA */}
          <div className="mt-8 text-center lg:text-left">
            <h3 className="text-zinc-800 text-[24px] sm:text-[28px] md:text-[30px] font-heading mb-2">
              {title}
            </h3>
            <p className="text-zinc-600 text-[18px] sm:text-[20px] md:text-[23px] max-w-lg mx-auto lg:mx-0 mb-6 leading-relaxed">
              {description}
            </p>
            <Button className="rounded-full px-6 py-3 text-base hover:underline transition-all">
              {buttonText}
            </Button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex items-center justify-center mt-10 lg:mt-0">
          <img
            src={imageUrl}
            alt={alt}
            className="w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] h-[350px] sm:h-[450px] md:h-[550px] object-cover rounded-xl shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
