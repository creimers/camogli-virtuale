import Image from "next/image";

import Header from "./../components/Header";

function FullBleed({ children }) {
  return <div className="full-bleed mb-8">{children}</div>;
}

export default function Home() {
  return (
    <>
      <Header />
      <div className="wrapper bg-yellow-50">
        <div className="block sm:hidden bg-green-900 text-white p-4 rounded-lg my-8">
          <p>👀 Friend, may I suggest you look at this on a bigger screen?</p>
          <p>It will look even ✨ nicer ✨!</p>
        </div>
        <FullBleed>
          <Image src="/L1060807.jpg" width={2000} height={1333} alt="Camogli" />
        </FullBleed>
        <div className="prose text-yellow-900">
          <p>
            Friends, <br />
            I'm sure it saddens your heart as much as it does mine: We can't go
            to Camogli this year!
          </p>
          <p>But noone will stop us form having a virtual reminiscense!</p>
        </div>
        <div className="text-yellow-900">
          <h2 className="text-4xl my-8 text-center">- 2016 -</h2>
        </div>
      </div>
    </>
  );
}
