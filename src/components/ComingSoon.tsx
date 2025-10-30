import { Construction } from "lucide-react";

function ComingSoon() {
  return (
    <div className="text-white flex flex-col md:flex-row justify-center max-w-4xl  bg-slate-900/20 backdrop-blur-sm border-2 border-cyan-300/20 shadow-cyan-300/10 shadow-md rounded-xl l p-4 gap-3 mx-auto my-[25%]">
      <div className="text-center flex justify-center gap-10 items-center">
        <Construction size={50} />
        <h1>
          This page is currently under construction! Check back soon to see the
          completed page.
        </h1>
      </div>
    </div>
  );
}

export default ComingSoon;
