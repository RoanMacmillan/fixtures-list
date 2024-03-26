import Image from "next/image";
import Layout from "../components/layout";
import FixtureList from "@/components/fixtureList";

export default function Home() {
  return (
    <div className='max-w-4xl w-full px-2 sm:px-8'>
      <FixtureList leagueId={39} />
      <FixtureList leagueId={179} />
      </div>
  );
}
