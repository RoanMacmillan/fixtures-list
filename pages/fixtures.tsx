import React from 'react'
import FixtureList from '@/components/fixtureList'

const Fixtures = () => {
  return (
    <div className='max-w-4xl w-full px-4 sm:px-8'>
        <FixtureList leagueId={39} />
        <FixtureList leagueId={179} />
      
    </div>
  )
}

export default Fixtures
