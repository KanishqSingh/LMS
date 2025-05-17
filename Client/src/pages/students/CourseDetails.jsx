import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/students/Loading'
import { assets } from '../../assets/assets'

const CourseDetails = () => {

  const { id } = useParams()

  const [courseData, setCourseData] = useState(null)
  const { allCourses,calculateRating } = useContext(AppContext)
  const fetchCourseData = async () => {
    const findcourse = allCourses.find(course => course._id === id)
    setCourseData(findcourse);
  }

  useEffect(() => {
    fetchCourseData()
  }, [])
  return courseData ? (
    <>
      <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-37 px-9 md:pt-31 pt-21 text-left'>

        <div className='absolute top-0 letf-0 w-full h-500px -z-1 bg-gradient-to-b from-cyan-100/70'>
        </div>

        {/* left column */}
        <div>
          <h1>{courseData.courseTitle}</h1>
          <p dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }}></p>


        </div>

        {/* review and ratings */}
        <div className='flex items-center space-x-2'>
          <p>{calculateRating(courseData)}</p>
          <div className='flex'>
            {[...Array(5)].map((_, i) => (
              <img key={i} src={i < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} alt='' className='w-3.5 h-3.5' />))}
          </div>
          <p className='text-gray-500'>{courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? 'ratings' : 'rating'}</p>
        </div>
        {/* right column */}
        <div>

        </div>

      </div>
    </>
  ) : <Loading></Loading>
}

export default CourseDetails