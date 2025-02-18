import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Star, Check } from "lucide-react";

export default function HomePage() {
  return (
    <>
    <MaxWidthWrapper className="pb-20 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-10 lg:pb-32" >
    <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
      <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
        <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-100 text-5xl md:text-6xl lg:text-7xl">Your Code on a single <span className="bg-green-600 px-2 text-white rounded-sm">Prompt</span> with ChatGen</h1>
        <p className=" text-gray-500 mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">Use our fine tuned <span className=" font-semibold ">AI model</span>  to get your dream landing page in just few prompts.
        ChatGen allows you to code with words, hassle-free and quick !</p>

        <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
          <div className="space-y-2">
          <li className="flex gap-1.5 items-center text-left">
            <Check className="w-5 h-5 shrink-0 text-green-600 "/>
            High Quality , Clean code 
          </li>
          <li className="flex gap-1.5 items-center text-left">
            <Check className="w-5 h-5 shrink-0 text-green-600 "/>
            Dynamic UI and UX
          </li>
          <li className="flex gap-1.5 items-center text-left">
            <Check className="w-5 h-5 shrink-0 text-green-600 "/>
            Modern landing pages with HTML, CSS
          </li>
          <li className="flex gap-1.5 items-center text-left">
            <Check className="w-5 h-5 shrink-0 text-green-600 "/>
            Live Preview Supported - see what you make
          </li>
          </div>
        </ul>
        <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="flex -space-x-4">
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src='/users/user-1.png'/>
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src='/users/user-2.png'/>
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src='/users/user-3.png'/>
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src='/users/user-4.jpg'/>
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src='/users/user-5.jpg'/>
          </div>
        </div>
        <div className=" mt-2 flex flex-col justify-between items-center sm:items-start">
            <div className="flex gap-0.5">
            <Star className="h-4 w-4 text-[#e0ff33] fill-[#e0ff33]" ></Star>
            <Star className="h-4 w-4 text-[#e0ff33] fill-[#e0ff33]" ></Star>
            <Star className="h-4 w-4 text-[#e0ff33] fill-[#e0ff33]" ></Star>
            <Star className="h-4 w-4 text-[#e0ff33] fill-[#e0ff33]" ></Star>
            <Star className="h-4 w-4 text-[#e0ff33] fill-[#e0ff33]" ></Star>
            </div>   
          </div>
          <p className=" text-gray-600"><span className="font-semibold">1.25k</span> happy Users</p>
      </div>
    </div>
    <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
      <div className="relative md:max-w-xl">
      {/* <div className='flex justify-center'> */}
      <img data-v-83bd8314="" src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg" width="600" />
      {/* </div> */}
      </div>
    </div>
    
    </MaxWidthWrapper>
    </>
  );
}