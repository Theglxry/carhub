'use client'
// use client when performing events and using hooks

import SearchManufacturer from "./SearchManufacturer"
import { useState } from "react"





const Searchbar = () => {
  // for the search 
const [manufacturer, setManufacturer] = useState('');


  const handleSearch = () => {

  }

  return (
    <form className="searchbar" action=""
    onSubmit={handleSearch}
    >
    <div className="searchbar__item">
       {/* search option list */}
       <SearchManufacturer 
       manufacturer= {manufacturer}
       setManuFacturer= {setManufacturer}
       />
    </div>
    </form>
  )
}

export default Searchbar