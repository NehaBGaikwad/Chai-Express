import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh] ">
      <div className="font-bold flex gap-2 justify-center items-center text-5xl ">Buy me a Chai <span><img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmR5dG1wMHk2dWFrYnF5dGlscTk5NW8zaGc3cThlM3g0NGgxc211dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/L3CXg9Mx6YITJK0FpG/giphy.webp"  width={75} alt="Loading..." /></span></div>
      <p>
        A crowdfunding platform for creators. Get funded by your fans and followers. Start Now!
      </p>
      <div>
        <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>

        <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10">
    </div>

    <div className="text-white container mx-auto py-28 pt-14">
      <h2 className="text-3xl font-bold text-center mb-20">Ek cup chai ho jae...</h2>
      <div className="flex gap-5 justify-around">
      <div className="item space-y-3 flex flex-col items-center justify-center">
        <img className="bg-slate-400 rounded-full p-2 text-black" width={100} src="https://i.pinimg.com/736x/96/79/77/9679774173a92eb903119950fe4c3558.jpg" alt="" />
        <p className="font-bold text-center">Feel fresh with every sip of tea..!</p>
        <p className="text-center">Matka Chai-tradition served in every sip..!</p>
      </div>
      <div className="item space-y-3 flex flex-col items-center justify-center">
        <img className="bg-slate-400 rounded-full p-2 text-black" width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaF6j_dA2w9-FJmZK74QGHnAyq_vIk1lHHNA&s" alt="" />
        <p className="font-bold">Happiness is a cup of tea with you</p>
        <p className="text-center">Matka Chai-tradition served in every sip..!</p>
      </div>
      <div className="item space-y-3 flex flex-col items-center justify-center">
        <img className="bg-slate-400 rounded-full p-2 text-black" width={100} src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-cartoon-hand-drawn-watercolor-color-poster-png-image_3808798.jpg" alt="" />
        <p className="font-bold">Chai gossip with friends</p>
        <p className="text-center">Matka Chai-tradition served in every sip..!</p>
      </div>
      </div>
    </div>

    <div className="bg-white h-1 opacity-10">
    </div>
    <div className="text-white container mx-auto py-28 pt-14 flex flex-col justify-center items-center ">
      <h2 className="text-3xl font-bold text-center mb-20">Learn more about us</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/MKFIIzTJw1Y?si=lpr6L6C-vHHjw3ay" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </>
  );
}
