import Head from "next/head";

import Star from "./Star";

export default function Header() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <header className="bg-white h-screen w-screen flex relative overflow-hidden">
        <Star top={"top-48"} left={"left-1/4"} />
        <Star scale={"scale-50"} top={"top-3/4"} left={"left-1/3"} />
        <Star scale={"scale-150"} top={"top-1/4"} left={"left-3/4"} />
        <div className="flex m-4 md:m-16 bg-yellow-100 flex-1 justify-center items-center">
          <div className="text-yellow-900">
            <h1
              style={{ fontFamily: "'Dancing Script', cursive" }}
              className="text-7xl md:text-9xl mb-3"
            >
              Camogli
            </h1>
            <h2 className="text-center">- natale virtuale -</h2>
          </div>
        </div>
        <div
          className="absolute bg-red-300 top-0 left-0 h-36 opacity-50 transform rotate-1 -translate-y-4"
          style={{ width: "120%" }}
        ></div>
        <div
          className="absolute bg-blue-300 bottom-0 left-0 h-36 opacity-50 transform rotate-1 translate-y-4 -translate-x-4"
          style={{ width: "120%" }}
        ></div>
      </header>
    </>
  );
}
