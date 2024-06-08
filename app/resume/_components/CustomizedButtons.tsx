import Reveal from "@/app/(root)/_components/Reveal";

interface CustomizedButtonsProps {
  children?: React.ReactNode;
  handleClick: (category: string) => void;
  category: string;
}
const CustomizedButtons = ({
  children,
  handleClick,
  category,
}: CustomizedButtonsProps) => {
  return (
    <div
      className={`${
        (children as string) === category ? "bg-[#4ade80] text-[#3f3f46]" : ""
      } w-full text-center bg-[#3f3f46] font-bold py-3 md:py-4 rounded-[10px] cursor-pointer hover:bg-[#4ade80] hover:text-[#3f3f46] transition-all ease-in-out duration-300`}
      onClick={() => {
        handleClick(children as string);
        console.log(children as string);
        console.log(category);
      }}
    >
      {children}
    </div>
  );
};

export default CustomizedButtons;
