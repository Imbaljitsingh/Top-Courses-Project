import React from 'react'
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
import { FcLikePlaceholder } from "react-icons/fc";

function EachCard({course, likedCourses, setlikedCourses}) {

//like click handler

function clickHandler() {
    //if item already liked 
    if(likedCourses.includes(course.id)){
        setlikedCourses( (prev) => prev.filter( (cid) => (cid !== course.id)));
        toast.warning("Like Removed")
    }
    else {
        //if my liked courses is zero
        if(likedCourses.lenght === 0) {
            setlikedCourses([course.id])
        }
        else {
            setlikedCourses ( (prev) => [...prev, course.id]);
        }
        toast.success("Liked")
    }
}


    //description logic

    let desc = course.description.length > 100 ? (course.description.substring(0,100) + `...`) : (course.description)

    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative'>
            <img src={course.image.url}></img>
            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-1 grid place-items-center'>
                <button onClick={clickHandler}>
                    {likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)}
                </button>
            </div>
            </div>
            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='text-white mt-2'>{desc}</p>
            </div>
        </div>
    )



}

export default EachCard;