import Image from "next/image";

import Header from "./../components/Header";

function FullBleed({ children }) {
  return <div className="full-bleed mb-8">{children}</div>;
}

function AwesomeImage({ imageURL }) {
  return (
    <div className="relative mb-4">
      <Image src={imageURL} width={6000} height={4000} className="rounded-xl" />
    </div>
  );
}

function TheYear({ year, background }) {
  return (
    <div className="relative">
      <h2
        className="text-yellow-900 text-6xl my-8 z-10 relative"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        {year}
      </h2>
      <div className={`${background} absolute bottom-6 left-4 w-60 h-10`}></div>
    </div>
  );
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
        <div className="prose text-yellow-900 mt-8">
          <p>
            Friends, <br />
            I'm sure it saddens your heart as much as it does mine: We can't go
            to Camogli this year!
          </p>
          <p>But noone will stop us form having a virtual reminiscense!</p>
        </div>
        <TheYear year="2016" background="bg-green-100" />
        <AwesomeImage imageURL="/2016/L1060795.jpeg" />
        <AwesomeImage imageURL="/2016/L1060802.jpeg" />
        <AwesomeImage imageURL="/2016/L1060805.jpeg" />
        <AwesomeImage imageURL="/2016/L1060770.jpeg" />
        <AwesomeImage imageURL="/2016/L1060781.jpeg" />
        <AwesomeImage imageURL="/2016/L1060806.jpeg" />
        <FullBleed>
          <Image
            src="/2016/L1060807.jpeg"
            width={6000}
            height={4000}
            alt="Camogli"
          />
        </FullBleed>
        <AwesomeImage imageURL="/2016/L1060833.jpeg" />
        <AwesomeImage imageURL="/2016/L1060834.jpeg" />
        <AwesomeImage imageURL="/2016/L1060873.jpeg" />
        <AwesomeImage imageURL="/2016/L1060885.jpeg" />
        <AwesomeImage imageURL="/2016/L1060906.jpeg" />
        <AwesomeImage imageURL="/2016/L1060958.jpeg" />
        <AwesomeImage imageURL="/2016/L1060990.jpeg" />
        <AwesomeImage imageURL="/2016/L1070032.jpeg" />
        <AwesomeImage imageURL="/2016/L1070035.jpeg" />
        <AwesomeImage imageURL="/2016/L1070042.jpeg" />
        <AwesomeImage imageURL="/2016/L1070059.jpeg" />
        <AwesomeImage imageURL="/2016/L1070084.jpeg" />
        <AwesomeImage imageURL="/2016/L1070098.jpeg" />
        <AwesomeImage imageURL="/2016/L1070141.jpeg" />
        <FullBleed>
          <Image
            src="/2016/L1070218.jpeg"
            width={6000}
            height={4000}
            alt="Camogli"
          />
        </FullBleed>
        <TheYear year="2018" background="bg-green-100" />
        <AwesomeImage imageURL="/2018/L1020432.jpeg" />
        <AwesomeImage imageURL="/2018/L1020434.jpeg" />
        <AwesomeImage imageURL="/2018/L1020444.jpeg" />
        <AwesomeImage imageURL="/2018/L1020466.jpeg" />
        <AwesomeImage imageURL="/2018/L1020481.jpeg" />
        <AwesomeImage imageURL="/2018/L1020485.jpeg" />
        <AwesomeImage imageURL="/2018/L1020487.jpeg" />
        <AwesomeImage imageURL="/2018/L1020490.jpeg" />
        <FullBleed>
          <Image
            src="/2018/L1020500.jpeg"
            width={6000}
            height={4000}
            alt="Camogli"
          />
        </FullBleed>
        <AwesomeImage imageURL="/2018/L1020509.jpeg" />
        <AwesomeImage imageURL="/2018/L1020513.jpeg" />
        <AwesomeImage imageURL="/2018/L1020537.jpeg" />
        <AwesomeImage imageURL="/2018/L1020545.jpeg" />
        <AwesomeImage imageURL="/2018/L1020549.jpeg" />
        <AwesomeImage imageURL="/2018/L1020569.jpeg" />
        <AwesomeImage imageURL="/2018/L1020574.jpeg" />
        <AwesomeImage imageURL="/2018/L1020578.jpeg" />
        <AwesomeImage imageURL="/2018/L1020579.jpeg" />
        <FullBleed>
          <Image
            src="/2018/L1020633.jpeg"
            width={6000}
            height={4000}
            alt="Camogli"
          />
        </FullBleed>
      </div>
    </>
  );
}
