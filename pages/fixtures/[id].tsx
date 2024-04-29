// [id].js (Dynamic Fixture Page)
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";

const FixturePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [matchData, setMatchData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${id}`;
//         const apiKey = process.env.NEXT_PUBLIC_REACT_APP_API_KEY;

//         const headers: HeadersInit = {
//           "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
//         };

//         if (apiKey) {
//           headers["X-RapidAPI-Key"] = apiKey;
//         }

//         const options: RequestInit = {
//           method: "GET",
//           headers,
//         };

//         const response = await fetch(url, options);

//         const data = await response.json();

//         setMatchData(data);

//         console.log(data.response);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();

//   }, [id]);

//   if (!matchData) {

//     return <p>Loading...</p>;

//   }

  return <div className='max-w-4xl w-full px-4 sm:px-8'>

    <div className="bg-white rounded-sm shadow-sm">

    <div className="flex justify-evenly items-center py-6">
    <div className="flex flex-col items-center">

    <div className="w-[50px] h-[50px] outline-slate-300 outline rounded-sm "></div>
    <p className="font-semibold text-slate-800 sm:font-bold mt-2">United FC</p>


    </div>


    <div className="flex flex-col items-center">
    {/* <p className="text-xs text-gray-600 sm:text-sm">27.03.2024 00:00</p> */}
    <div className="flex gap-[1px]">
    <div className="rounded-sm shadow-sm  w-8 font-semibold flex items-center justify-center h-10 sm:font-bold sm:w-10 sm:h-12 text-white bg-slate-700">
    <p>14</p>
    </div>
    <div className="rounded-sm shadow-sm  w-8 font-semibold flex items-center justify-center h-10 sm:font-bold sm:w-10 sm:h-12 text-white bg-slate-700">
    <p>0</p>
    </div>
    </div>
    <p className="text-xs text-gray-600 sm:text-sm mt-2">Finished</p>


    </div>

    <div className="flex flex-col items-center">

<div className="w-[50px] h-[50px] outline-slate-300 outline rounded-sm "></div>
<p className="font-semibold text-slate-800 sm:font-bold mt-2">City FC</p>


</div>


    </div>



  </div>

  <h1 className=" mt-4 font-bold uppercase tracking-normal text-slate-700 sm:text-lg">Highlights</h1>
  <div className="mt-4 h-[1px] w-full bg-gray-300"></div>



<div className="bg-white rounded-sm shadow-sm mt-3 p-3">
<h2 className="font-semibold uppercase text-xs text-slate-500">Scorers</h2>
<div className="h-[1px] w-full bg-gray-300"></div>


<h2 className="font-semibold uppercase text-xs text-slate-500">Cards</h2>
<div className="h-[1px] w-full bg-gray-300"></div>

<h2 className="font-semibold uppercase text-xs text-slate-500">Substitutions</h2>
<div className="h-[1px] w-full bg-gray-300"></div>

  </div>

  <h1 className="mt-4 font-bold uppercase tracking-normal text-slate-700 sm:text-lg">Lineups</h1>
  <div className="mt-4 h-[1px] w-full bg-gray-300"></div>



  <div className="bg-white rounded-sm shadow-sm mt-3">


  </div>

  </div>
};

export default FixturePage;
