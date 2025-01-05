import Image from "next/image";

export default function Home() {
  return (
    // <div className="grid grid-cols-3 grid-rows-[200px_200px_200px] gap-3">
    //   <div className="bg-green-400 col-span-3">BOX-1</div>
    //   <div className="bg-green-400 row-span-2">BOX-2</div>
    //   <div className="bg-green-400 col-span-2 row-span-2">BOX-3</div>
    // </div>

    <div className="grid grid-rows-[100px_200px_200px_200px] gird-cols-3">
      <div className="bg-blue-600 col-span-3 font-bold  text-center border-black border-2">Header</div>
      <div className="bg-emerald-300 row-span-2 font-bold  text-center border-black border-2">Side Bar</div>
      <div className="bg-yellow-800 col-span-2 font-bold  text-center border-black border-2">Content-1</div>
      <div className="bg-green-700 font-bold  text-center border-black border-2">Content-2</div>
      <div className="bg-orange-600 font-bold  text-center border-black border-2">Content-3</div>
      <div className="bg-blue-700 col-span-3 font-bold  text-center border-black border-2">Footer</div>
    </div>

    // <>
    // <div className="flex justify-center items-center gap-2 h-[400vh] relative mt-52 bg-red-700">
    //   <div className="bg-pink-600 h-80 w-80 text-[30px] font-bold text-center content-center">BOX-1</div>
    //   <div className="bg-gray-600 h-80 w-80 text-[30px] font-bold text-center content-center sticky top-0">BOX-2</div>
    //   <div className="bg-yellow-400 h-80 w-80 text-[30px] font-bold text-center content-center">BOX-3</div>
    //   <div className="bg-green-600 h-80 w-80 text-[30px] font-bold text-center content-center">BOX-4</div>
    // </div>
    // <div className="h-[200vh] bg-red-200 w-full">

    // </div>
    // </>
  );
}
