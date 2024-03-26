// [id].js (Dynamic Fixture Page)
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const FixturePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [matchData, setMatchData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${id}`;
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_REACT_APP_API_KEY,
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
          },
        };

        const response = await fetch(url, options);

        const data = await response.json();

        setMatchData(data);

        console.log(data.response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

  }, [id]);

  if (!matchData) {

    return <p>Loading...</p>;

  }

  return <div className="">



  </div>;
};

export default FixturePage;
