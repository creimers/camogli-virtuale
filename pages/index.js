import Image from "next/image";

import Header from "./../components/Header";
import Star from "./../components/Star";

function FullBleed({ children }) {
  return <div className="full-bleed">{children}</div>;
}

function FullBleedImage({ imageURL, marginBottom }) {
  const klaas = marginBottom ? "mb-8" : "";
  return (
    <FullBleed>
      <div className={klaas}>
        <Image
          src={imageURL}
          width={6000}
          height={4000}
          alt="Camogli"
          layout="responsive"
        />
      </div>
    </FullBleed>
  );
}

FullBleedImage.defaultProps = { marginBottom: true };

function AwesomeImage({ imageURL }) {
  return (
    <div className="relative mb-4">
      <Image
        src={imageURL}
        width={1280}
        height={854}
        className="rounded-xl"
        layout="responsive"
      />
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

function ThreeStars() {
  return (
    <div className="flex justify-around h-8 my-4">
      <div className="relative h-8 w-8">
        <Star scale="scale-75" />
      </div>
      <div className="relative h-8 w-8">
        <Star scale="scale-75" />
      </div>
      <div className="relative h-8 w-8">
        <Star scale="scale-75" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <div className="wrapper bg-yellow-50">
        <FullBleedImage imageURL="/camogli.jpg" marginBottom={false} />
        <div className="block sm:hidden bg-green-900 text-white p-4 rounded-lg my-8">
          <p>👀 Friend, may I suggest you look at this on a bigger screen?</p>
          <p>It will be even ✨ nicer ✨!</p>
        </div>
        <div className="prose text-yellow-900 mt-8">
          <p>
            Friends, <br />
            I'm sure it saddens your heart as much as it does ours: We can't
            meet in Camogli this year.
          </p>
          <p>But no one will stop us form having a virtual reminiscense!</p>
          <p>With a bit of luck, let's hope we can meet again 2021!</p>
          <div className="h-28 flex justify-center items-center">
            <img className="h-full" src="/panetone.svg" />
          </div>
          <ThreeStars />
        </div>
        <TheYear year="2016" background="bg-green-100" />
        <AwesomeImage imageURL="/2016/L1060795.jpeg" />
        <AwesomeImage imageURL="/2016/L1060802.jpeg" />
        <AwesomeImage imageURL="/2016/L1060805.jpeg" />
        <AwesomeImage imageURL="/2016/L1060770.jpeg" />
        <AwesomeImage imageURL="/2016/L1060781.jpeg" />
        <AwesomeImage imageURL="/2016/L1060806.jpeg" />

        <FullBleedImage imageURL="/2016/L1060807.jpeg" />

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
        <AwesomeImage imageURL="/2016/L1070163.jpeg" />

        <FullBleedImage imageURL="/2016/L1070218.jpeg" />

        <TheYear year="2018" background="bg-green-100" />
        <AwesomeImage imageURL="/2018/L1020432.jpeg" />
        <AwesomeImage imageURL="/2018/L1020434.jpeg" />
        <AwesomeImage imageURL="/2018/L1020444.jpeg" />
        <AwesomeImage imageURL="/2018/L1020466.jpeg" />
        <AwesomeImage imageURL="/2018/L1020481.jpeg" />
        <AwesomeImage imageURL="/2018/L1020485.jpeg" />
        <AwesomeImage imageURL="/2018/L1020487.jpeg" />
        <AwesomeImage imageURL="/2018/L1020490.jpeg" />

        <FullBleedImage imageURL="/2018/L1020500.jpeg" />

        <AwesomeImage imageURL="/2018/L1020509.jpeg" />
        <AwesomeImage imageURL="/2018/L1020513.jpeg" />
        <AwesomeImage imageURL="/2018/L1020537.jpeg" />
        <AwesomeImage imageURL="/2018/L1020545.jpeg" />
        <AwesomeImage imageURL="/2018/L1020549.jpeg" />
        <AwesomeImage imageURL="/2018/L1020569.jpeg" />
        <AwesomeImage imageURL="/2018/L1020574.jpeg" />
        <AwesomeImage imageURL="/2018/L1020578.jpeg" />
        <AwesomeImage imageURL="/2018/L1020579.jpeg" />

        <FullBleedImage imageURL="/2018/L1020633.jpeg" />
        <div className="prose text-yellow-900 mb-8 text-center text-5xl">
          <span style={{ fontFamily: "'Dancing Script', cursive" }}>
            Merry Christmas and a Happy New Year!
          </span>
          <ThreeStars />
        </div>
        <FullBleed>
          <div className="h-4 flex">
            <div
              className="flex-1"
              style={{ backgroundColor: "#40914d" }}
            ></div>
            <div className="flex-1" style={{ backgroundColor: "#fff" }}></div>
            <div
              className="flex-1"
              style={{ backgroundColor: "#bf383b" }}
            ></div>
          </div>
        </FullBleed>
      </div>
    </>
  );
}
