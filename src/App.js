import {useEffect, useState} from 'react'
import './App.css'
import Home from './components/HomePage/index'
import Navbar from './components/Navbar/index'

const App = () => {
  const [restaurantName, setRestaurantName] = useState()
  const [restaurantList, setRestaurantList] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'
        const response = await fetch(url)
        const jsonData = await response.json()
        console.log(jsonData[0])
        setRestaurantName(jsonData[0].restaurant_name)
        setRestaurantList(jsonData[0].table_menu_list)
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="container">
      <Navbar name={restaurantName} />
      <Home list={restaurantList} />
    </div>
  )
}
export default App
