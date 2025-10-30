import { Construction } from "lucide-react";

function ComingSoon() {
  return (
    <div className="text-white flex flex-col md:flex-row justify-center max-w-6xl mx-4 bg-slate-900/20 backdrop-blur-sm border-2 border-cyan-300/20 shadow-cyan-300/10 shadow-md rounded-2xl l p-4 gap-3 my-[25%]">
      <div className="text-center flex justify-center">
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
