import {useState, useEffect} from 'react'
import './styles.css'

function Home(props) {
  const {list = []} = props
  const [cid, setCid] = useState('')
  const [filteredProjects, setFilteredProjects] = useState([])

  useEffect(() => {
    if (list.length > 0) {
      setCid(list[0].menu_category_id)
      setFilteredProjects(
        list.filter(
          eachProjectDetails =>
            eachProjectDetails.menu_category_id === list[0].menu_category_id,
        ),
      )
    } else {
      setCid('')
      setFilteredProjects([])
    }
  }, [list])

  const clickTabItem = tabValue => {
    setCid(tabValue)
    const filteredProject = list.filter(
      eachProjectDetails => eachProjectDetails.menu_category_id === tabValue,
    )
    setFilteredProjects(filteredProject)
  }

  return (
    <div>
      <div>
        <ul className="tabs-container">
          {list.map(category => (
            <button
              type="submit"
              className={
                cid === category.menu_category_id ? 'activeTab tab' : 'tab'
              }
              key={category.menu_category_id}
              onClick={() => clickTabItem(category.menu_category_id)}
            >
              {category.menu_category}
            </button>
          ))}
        </ul>
        {console.log(filteredProjects)}
        {filteredProjects.length > 0 && (
          <ul>
            {filteredProjects[0].category_dishes.map(project => (
              <li className="list-item-container" key={project.dish_id}>
                <div>
                  <p className="item_name">{project.dish_name}</p>
                  <p style={{color: '#000000'}}>
                    {project.dish_currency} {project.dish_price}
                  </p>
                  <p>{project.dish_description}</p>
                  {project.dish_Availability ? (
                    <>
                      <div className="button-container">
                        <button type="button">-</button>
                        <p className="">0</p>
                        <button type="button">+</button>
                      </div>
                      <p style={{color: '#000000'}}>
                        {project.addonCat.length > 0 &&
                          'Customizations Available'}
                      </p>
                    </>
                  ) : (
                    <p style={{color: 'red'}}>Not Available</p>
                  )}
                </div>
                <div>
                  <p style={{color: '#000000'}}>
                    {project.dish_calories} Calories
                  </p>
                </div>
                <img src={project.dish_image} alt={project.dish_name} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Home
