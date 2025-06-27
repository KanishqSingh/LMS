import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizedDuration from 'humanize-duration'
import humanizeDuration from "humanize-duration";

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const [allCourses, setAllCourses] = useState([])
    const [isEducator, setIsEducator] = useState(true)

    const navigate = useNavigate()

    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses)

    }

    // function for average rating of course
    const calculateRating = (course) => {
        if (course.courseRatings.length === 0) {
            return 0;
        }

        let totalRating = 0
        course.courseRatings.forEach(rating => {
            totalRating += rating.rating

        })
        return totalRating / course.courseRatings.length
    }

    const calculateTime = (chapter) => {
        let time = 0;
        chapter.chapterContent.map((lecture) => time += lecture.lectureDuration)
        return humanizeDuration(time * 60 * 1000, { units: ['h', 'm'] })
    }

    const calculateCourseDuration = (course) => {
        let time = 0;
        course.courseContent.map((chapter) => chapter.chapterContent.map((lecture) => time += lecture.lectureDuration)


        )
        return humanizeDuration(time * 60 * 1000, { units: ['h', 'm'] })
    }

    const calculateNumberOfLectures = (course) =>{
        let totalLectures = 0;
        course.courseContent.forEach(chapter => {
            if(Array.isArray(chapter.chapterContent)){
                totalLectures += chapter.chapterContent.length
            }
        })
        return totalLectures;
    }

    

    useEffect(() => {
        fetchAllCourses()

    }, [])

    const value = {
        allCourses, navigate, calculateRating, isEducator, setIsEducator ,calculateNumberOfLectures,calculateCourseDuration,calculateTime

    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}
