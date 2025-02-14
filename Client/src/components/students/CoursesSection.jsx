import React from 'react'
import { Link } from 'react-router-dom'

const CoursesSection = () => {
  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn from the beast</h2>
      <p className='text-sm md:text-base text-gray-500mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi similique, eaque, voluptate magni amet dolorum ipsum cum co
        rrupti, exercitationem eius suscipit animi mollitia fugiat. Provident totam aliquid ipsum perferendis dolorum!</p>

      <Link to={'/course-list'} onClick={() => scrollTo(0,0)} className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'>Show all courses</Link>
    </div>
  )
}

export default CoursesSection