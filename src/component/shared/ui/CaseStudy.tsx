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
  isMobile?: boolean;
    hideText?: boolean;
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
  className = "",
  isMobile = false,

}) => {
  return (
    <div
      className={`bg-zinc-50 rounded-[40px] px-6 py-8 sm:px-8 md:px-12 lg:px-16 shadow-sm ${className}`}
      style={{ width: "100%", maxWidth: 1100 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* LEFT SECTION */}
        <div className="flex flex-col justify-between h-full">
          {/* Quote Box */}
          <div className="bg-white rounded-xl shadow-md p-6 max-w-md w-full mx-auto lg:mx-0">
            <p className="text-zinc-900 text-[18px] sm:text-[22px] md:text-[25px] font-perah leading-relaxed font-semibold">
              “{quote}”
            </p>
            <p className="text-zinc-600 text-sm sm:text-base mt-3">
              {author}, {role}
            </p>
          </div>

          {/* Title, Description, CTA */}
          <div className="mt-6 text-center lg:text-left">
            <h3 className="text-zinc-800 text-[22px] sm:text-[26px] md:text-[28px] font-heading mb-2">
              {title}
            </h3>
            <p className="text-zinc-600 text-[16px] sm:text-[18px] md:text-[20px] max-w-lg mx-auto lg:mx-0 mb-6 leading-relaxed">
              {description}
            </p>
            <Button className="rounded-full px-6 py-3 text-base hover:underline transition-all">
              {buttonText}
            </Button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex items-center justify-center mt-8 lg:mt-0">
         <img
  src={imageUrl}
  alt={alt}
  className={`w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] object-cover rounded-xl shadow-sm ${
    isMobile ? "h-[250px]" : "h-[350px] sm:h-[450px] md:h-[550px]"
  }`}
/>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
