import { useEffect, useState } from "react"
import FooterNasa from "./components/FooterNasa"
import MainNasa from "./components/MainNasa"
import SidebarNasa from "./components/SidebarNasa"

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  function handleToggleModal() {
    setShowModal(!showModal)
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' +
        `?api_key=${NASA_KEY}`
      try {
        const res = await fetch(url)
        const apiData = await res.json()
        setData(apiData)
        console.log('DATA\n', apiData)
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])



  return (
    <>

      {data ? (<MainNasa />) : (
        <div className="loadingState">

        </div>
      )}
      {showModal && (
        <SidebarNasa handleToggleModal={handleToggleModal} />
      )}
      <FooterNasa handleToggleModal={handleToggleModal} />

    </>
  )
}

export default App
