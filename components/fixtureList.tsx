import { useEffect, useState } from "react";
import Link from "next/link";

const FixtureList = ({ leagueId }) => {
  const [fixtureData, setFixtureData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentDate = new Date().toISOString().split("T")[0];

        const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures/?date=2024-03-30&season=2023&league=${leagueId}`;
        const options = {
          method: "GET",
          headers: {
              "X-RapidAPI-Key": process.env.NEXT_PUBLIC_REACT_APP_API_KEY,
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
          },
        };


        const response = await fetch(url, options);
        const data = await response.json();
        // console.log(data.response);
        const sortedFixtureData = data.response.sort((a, b) =>
          a.fixture.date.localeCompare(b.fixture.date)
        );

        setFixtureData(sortedFixtureData);
      } catch (error) {
        console.error("error fetching data:", error);
      }
    };

    fetchData();
  }, [leagueId]);

  const formatKickOffTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }`;
  };

  return (
    <div>
      {/* <h1>Premier League Fixtures</h1> */}
      {!fixtureData ? ( // Display loading element if loading is true
        <p>Loading...</p>
      ) : (
        <div>
          {fixtureData.length > 0 && ( // Check if fixtureData contains elements
            <div className="flex gap-2 items-center mt-4 mb-4">
              <div className="w-[32px] sm:w-[40px]">
                <img
                  className="w-full"
                  src={fixtureData[0].league.logo}
                  alt={fixtureData[0].league.name}
                ></img>
              </div>
              <h2 className="font-bold uppercase tracking-normal sm:text-lg">
                {fixtureData[0].league.name}
              </h2>
            </div>
          )}

          <div className="h-[1px] w-full bg-gray-300 flex-1"></div>

          <ul className="mt-6">
            {fixtureData.map((fixture) => (
                <Link href={`/fixtures/${fixture.fixture.id}`} key={fixture.fixture.id}>

              <li
                className={`flex bg-white items-center relative overflow-scroll hover:cursor-pointer group sm:overflow-auto py-6 shadow-sm rounded-sm gap-1 mb-3 sm:py-9 sm:mb-5 sm:gap-4
                
                ${fixture.fixture.status.short === 'PST' ? 'hidden' : ''}
                
                `}
              >
                <div className=" flex w-full justify-end items-center gap-1 sm:gap-3">
                  <p className="text-sm font-semibold text-right text-gray-800 sm:text-lg group-hover:underline">
                    {fixture.teams.home.name}
                  </p>
                  <div className="w-[24px] sm:w-[28px]">
                    <img
                      className="w-full"
                      alt={fixture.teams.home.name}
                      src={fixture.teams.home.logo}
                    ></img>
                  </div>
                </div>


                <div className="flex gap-[2px] relative">
                <div className={`${fixture.fixture.status.short === 'NS' ? 'bg-slate-200 text-black' : 'text-white bg-slate-700'} rounded-sm shadow-sm  w-8 font-semibold flex items-center justify-center h-10 sm:font-bold sm:w-10 sm:h-12`}>{fixture.fixture.status.short === "HT" || fixture.fixture.status.short === "FT" ? fixture.goals.home : '-'}</div>
                <div className={`${fixture.fixture.status.short === 'NS' ? 'bg-slate-200 text-black' : 'text-white bg-slate-700'} rounded-sm shadow-sm  w-8 font-semibold flex items-center justify-center h-10 sm:font-bold sm:w-10 sm:h-12`}>{fixture.fixture.status.short === "HT" || fixture.fixture.status.short === "FT" ? fixture.goals.away : '-'}</div>
                <div className="text-xs text-gray-600 sm:text-sm absolute inset-0 top-[52px] sm:top-[65px] w-full flex items-center justify-center">
                  {fixture.fixture.status.short === 'NS' ? formatKickOffTime(fixture.fixture.date) : fixture.fixture.status.short}
                </div>
                </div>

                  


                <div className="flex w-full items-center gap-1 sm:gap-3">
                  <div className="w-[24px] sm:w-[28px]">
                    <img
                      className="w-full"
                      alt={fixture.teams.away.name}
                      src={fixture.teams.away.logo}
                    ></img>
                  </div>
                  <p className="text-sm font-semibold text-gray-800 sm:text-lg group-hover:underline">
                    {fixture.teams.away.name} 
                  </p>
                </div>
              </li>

              </Link>



            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FixtureList;
