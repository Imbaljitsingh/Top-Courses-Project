import React, { useEffect } from "react";
import { useState } from "react";
import Filter from "./components/filter";
import Cards from "./components/cards";
import Navbar from "./components/navbar";
import {apiUrl, filterData} from './data';
import { toast } from "react-toastify";

const App = () => {

  const [courses, setcourses] = useState({});
  const [department, setDepartment] = useState(filterData[0].title)


  useEffect( () => {
    const fetchData = async() => {
      try {
        const result = await fetch(apiUrl)
        const APIoutput = await result.json()

        setcourses(APIoutput.data);
      }
      catch(error) {
        toast.error("Something went wrong")
      }
    }
    fetchData();
  } , []);

  return ( <div className="min-h-screen flex flex-col">
    {/* navbar  */}
    <Navbar></Navbar>

    <div className="bg-bgDark2">
    {/* filter section */}
    <Filter filterData={filterData} department={department} setDepartment={setDepartment}></Filter>
    {/* Cards Section  */}
    <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] flex-wrap">
    <Cards courses={courses} department={department}></Cards>
    </div>
    </div>
  </div> 
  )
};

export default App;
