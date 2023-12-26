import React, { useState } from 'react'
import EachCard from './card';

function Cards ({courses, department}) {
//arrar to store all courses data from API output
let allCourses = [];

const [likedCourses, setlikedCourses] = useState([]);

//function to put every data value (without the key) into allCourses array

//function description 

//Object.value will retrive the each value from rhe courses (prop)
//then the for each will go to the courseKey (only value returned)
//then the value returned (object) will go on each element and pass it to the allCourses array

function getCourses() {

    if(department === 'All'){
    Object.values(courses).forEach((courseKey) => {
            courseKey.forEach( (course) => {
                allCourses.push(course)
            })
    })
    return allCourses;
}

else {
    return courses[department];
}

}
    return (
        
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {    
            getCourses().map( (course) => {
            return <EachCard course={course} likedCourses={likedCourses} setlikedCourses={setlikedCourses}/>
            })
        }
        </div>
        
    )
}


export default Cards;