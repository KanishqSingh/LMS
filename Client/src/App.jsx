import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/students/Home'
import CoursesList from './pages/students/CoursesList'
import CourseDetails from './pages/students/CourseDetails'
import MyEnrollments from './pages/students/MyEnrollments'
import Player from './pages/students/Player'
import Loading from './components/students/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCoursePage from './pages/educator/AddCoursePage'
import MyCourses from './pages/educator/MyCourses'
import StudentEnrolled from './pages/educator/StudentEnrolled'
import Navbar from './components/students/Navbar'

const App = () => {

  const isEducatorPage = useMatch('/educator/*')
  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorPage && <Navbar></Navbar>}
      <Routes>
        <Route path = '/' element={<Home></Home>}></Route>
        <Route path = '/courselist' element={<CoursesList></CoursesList>}></Route>
        <Route path = '/courselist/:input' element={<CoursesList></CoursesList>}></Route>
        <Route path = '/course/:id' element={<CourseDetails></CourseDetails>}></Route>
        <Route path = '/myenrollment' element={<MyEnrollments></MyEnrollments>}></Route>
        <Route path = '/player/:courseId' element={<Player></Player>}></Route>
        <Route path = '/loading/:path' element={<Loading></Loading>}></Route>

        <Route path='/educator' element={<Educator></Educator>}>
             <Route path='educator' element={<Dashboard/>}/>
             <Route path='add-course' element={<AddCoursePage/>}/>
             <Route path='my-courses' element={<MyCourses/>}/>
             <Route path='student-enrolled' element={<StudentEnrolled/>}/>


        </Route>
      </Routes>
    </div>
  )
}

export default App