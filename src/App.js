import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Navbar from './Navbar'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setloading] = useState(false)
  const [tours, settours] = useState([])
  const removeTour = (id) => {
    const newTours = tours.filter((tours) => tours.id != id);
    settours(newTours)
  }
  const fetchData = async () => {
    setloading(true)

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setloading(false)
      settours(tours)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <>
      <Navbar />
      <main>

        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </>
  )
}

export default App
