import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Stack } from '@mui/material'
import AppBar from './components/AppBar'
import EventHero from './components/EventHero'
import TopChartEvent from './components/TopChartEvent'
import BrowseByCategory from './components/BrowseByCategory'
import PostEventForum from './components/PostEventForum'

function App() {

  return (
    <>
      <Stack direction="column">
        <AppBar />
        <EventHero />
        <TopChartEvent />
        <BrowseByCategory />
        <PostEventForum/>
      </Stack>
     </>
  )
}

export default App
