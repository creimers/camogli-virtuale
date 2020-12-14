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
        <Star top={48} left={48} />
        <Star scale={50} top={"1/2"} left={"1/3"} />
        <Star scale={150} top={"1/4"} left={"3/4"} />
        <div className="flex m-16 bg-yellow-100 flex-1 justify-center items-center">
          <div className="text-yellow-900">
            <h1
              style={{ fontFamily: "'Dancing Script', cursive" }}
              className="text-9xl"
            >
              Camogli
            </h1>
            <h2 className="text-center">- virtuale -</h2>
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
