import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCart from './CourseCart'

const CoursesSection = () => {

  const {allCourses} = useContext(AppContext)
  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn from the beast</h2>
      <p className='text-sm md:text-base text-gray-500mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Modi similique, eaque, voluptate magni amet dolorum ipsum cum co
        rrupti, exercitationem eiusliquid ipsum perferendis dolorum!</p>

        <div className='grid grid-cols-4 px-4 md:px-0 md:my-16 my-10 gap-4'>
          {allCourses.slice(0,4).map((course,index)=><CourseCart key={index} course={course}></CourseCart>)}
        </div>

      <Link to={'/course-list'} onClick={() => scrollTo(0,0)} className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'>Show all courses</Link>
    </div>
  )
}

export default CoursesSection