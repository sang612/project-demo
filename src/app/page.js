import Image from "next/image";

const projects = [
  {
    id: "p1",
    url: "https://robogard.vercel.app/",
    name: "RoboGard",
    img: "robogard.jpg",
  },
  {
    id: "p2",
    url: "https://zen-landing-five.vercel.app/",
    name: "ZenS Landing",
    img: "zenslanding.jpg",
  },
  {
    id: "p3",
    url: "https://shop-fe-eight.vercel.app/",
    name: "Watch Store",
    img: "watch.jpg",
  },
  {
    id: "p4",
    url: "https://neru-nu.vercel.app/",
    name: "Nerusoku",
    img: "nerusoku.jpg",
  },
];

export default function Home() {
  return (
    <section className="text-gray-600 body-font bg-[#1a202c]">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500" />
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-white font-bold title-font text-2xl mb-2 sm:mb-0">
              Projects
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4  gap-2 -mx-4 -mb-10 -mt-4">
          {projects.map((i) => {
            return (
              <div
                className="bg-gray-900 rounded-lg p-4 md:w-[30%] sm:mb-0 mb-6"
                key={i.id}
              >
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={`/pics/${i.img}`}
                  />
                </div>
                <h2 className="text-xl font-bold title-font text-white mt-5">
                  {i.name}
                </h2>
                <a
                  href={i.url}
                  className="text-indigo-500 inline-flex items-center mt-3"
                  target="_blank"
                >
                  View Website
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
