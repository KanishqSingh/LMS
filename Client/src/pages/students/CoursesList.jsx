import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import SearchBar from '../../components/students/SearchBar';
import { useParams } from 'react-router-dom';
import CourseCart from '../../components/students/CourseCart';
import { assets } from '../../assets/assets';

const CoursesList = () => {
  const { navigate, allCourses } = useContext(AppContext);
  const { input } = useParams();
  const [filteredCourse , setFilteredCourse] = useState([])
  // console.log(input);
  

  useEffect(() => {

    // console.log(input);
    

    if(allCourses && allCourses.length > 0){
      const tempCourses = allCourses.slice()

      input ? setFilteredCourse(tempCourses.filter(
        item => item.courseTitle.toLowerCase().includes(input.toLowerCase())
      ))
      : setFilteredCourse(tempCourses)
    }

  },[allCourses,input])

  return (
    <section className="w-full bg-gray-50 min-h-screen py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Courses</h1>
          <p className="text-gray-500 text-sm">
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => navigate('/')}
            >
              Home
            </span> / Course List
          </p>
        </div>


        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <SearchBar data={input} />
          </div>
        </div>

        {
          input && <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8 -mb-8 text-gray-600'>
            <p>{input}</p>
            <img src={assets.cross_icon} alt="" className='cursor-pointer' onClick={()=> navigate('/course-list')}/>
          </div> 
        }

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0' >
          {filteredCourse.map((course, index) => <CourseCart key={index} course={course}></CourseCart>)}

        </div>




      </div>
    </section>
  );
};

export default CoursesList;
