import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/students/Loading'
import { assets } from '../../assets/assets'
import humanizeDuration from 'humanize-duration'
import YouTube from 'react-youtube'


const CourseDetails = () => {

  const { id } = useParams()

  const [courseData, setCourseData] = useState(null)
  const [openSection, setOpenSection] = useState({})

  const { allCourses, calculateRating, calculateTime, calculateCourseDuration, calculateNumberOfLectures } = useContext(AppContext)

  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false)
  const [playerData, setPlayerData] = useState(null)



  const fetchCourseData = async () => {
    const findcourse = allCourses.find(course => course._id === id)
    setCourseData(findcourse);
  }

  useEffect(() => {
    fetchCourseData()
  }, [allCourses])

  const toggleSection = (index) => {
    setOpenSection((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };



  return courseData ? (
    <>
      <div className="relative w-full bg-gradient-to-b from-cyan-100/70 to-transparent py-16 px-4 md:px-12 lg:px-36">
        <div className="relative z-10 flex flex-col md:flex-row gap-10 justify-between">

          {/* ---------------- Left Content ---------------- */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">{courseData.courseTitle}</h1>
              <p className="mt-4 text-sm md:text-base text-gray-700" dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }} />
            </div>

            {/* Course Structure */}
            <div className="text-gray-800">
              <h2 className="text-2xl font-semibold mb-6">Course Structure</h2>
              <div className="space-y-6">
                {courseData.courseContent.map((chapter, index) => (
                  <div key={index} className="bg-white shadow-md rounded-xl">
                    <div
                      className="flex items-center justify-between px-4 py-4 cursor-pointer select-none border-b"
                      onClick={() => toggleSection(index)}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={assets.down_arrow_icon}
                          alt="arrow"
                          className={`w-5 h-5 transition-transform duration-300 ${openSection[index] ? 'rotate-180' : 'rotate-0'}`}
                        />
                        <h3 className="text-lg font-semibold">{chapter.chapterTitle}</h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        {chapter.chapterContent.length} lectures · {calculateTime(chapter)}
                      </p>
                    </div>

                    {openSection[index] && (
                      <ul className="space-y-4 px-6 py-4">
                        {chapter.chapterContent.map((lecture, i) => (
                          <li key={i} className="flex items-start gap-4 border-t pt-4">
                            <img src={assets.play_icon} alt="play" className="w-6 h-6 mt-1" />
                            <div className="flex-1">
                              <p className="font-medium">{lecture.lectureTitle}</p>
                              <div className="text-sm text-gray-500 flex flex-wrap gap-4 mt-1">
                                {lecture.isPreviewFree && <span onClick={() => setPlayerData({
                                  videoId: lecture.lectureUrl.split('/').pop()
                                })} className="text-green-600 font-semibold cursor-pointer">Preview</span>}
                                <span>{humanizeDuration(lecture.lectureDuration * 1000 * 60, { units: ['h', 'm'] })}</span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Full Description */}
            <div className="py-20 text-sm md:text-base text-gray-800">
              <h3 className="text-xl font-semibold mb-4">Course Description</h3>
              <div className="leading-7" dangerouslySetInnerHTML={{ __html: courseData.courseDescription }}></div>
            </div>
          </div>

          {/* ---------------- Right Sidebar ---------------- */}
          <div className="w-full md:w-1/3 lg:max-w-xs p-6 bg-white rounded-xl shadow-md sticky top-24 self-start">

            {
              playerData
                ? <YouTube videoId={playerData.videoId} opts={{ playerVars: { autoplay: 1 } }} className='w-full aspect-video mb-4 overflow-hidden' />
                : <img src={courseData.courseThumbnail} alt="Course Thumbnail" className="w-full h-48 object-cover rounded-lg mb-4" />
            }





            {/* Rating */}
            <div className="flex items-center gap-2 mb-2">

              <p className="font-medium">{calculateRating(courseData).toFixed(1)}</p>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={i < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} alt="star" className="w-4 h-4" />
                ))}
              </div>
              <p className="text-gray-500 text-sm">({courseData.courseRatings.length})</p>
            </div>

            {/* Short Description */}
            <p className="text-gray-700 text-sm mb-4 line-clamp-4">{courseData.courseDescription.replace(/<[^>]+>/g, '')}</p>

            {/* Time Left + Price */}
            <div className="flex items-center gap-2 mb-2 text-sm text-gray-700">
              <img src={assets.time_left_clock_icon} alt="" className="w-4 h-4" />
              <p><span className='font-medium'>5</span> days left at this price!</p>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-6">
              ₹{(courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2)}
            </p>

            {/* Enroll Now Button */}


            <button className='md:mt-6 mt-4 w-full py-3 rounded bg-blue-600 text-white font-medium'>{isAlreadyEnrolled ? 'Already Enrolled' : 'Enroll Now'}</button>
          </div>

        </div>
      </div>


    </>
  ) : <Loading></Loading>
}

export default CourseDetails