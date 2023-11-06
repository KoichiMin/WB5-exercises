"use strict"

let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
    ];

    let find200Prog = courses.find(function(element){
        return element.CourseId === "PROG200";
    })

    console.log(find200Prog.StartDate)


    let findTitleCourse = courses.find(function(element){
        return element.CourseId === "PROJ500"
    })

    console.log(findTitleCourse.Title)

    let filterCourseUnder50 = courses.filter(function(element){
        return element.Fee <= 50
    })
    let mapFilteredCourses = filterCourseUnder50.map(course => course.Title);

    console.log(mapFilteredCourses)


    let filterClasses = courses.filter(course => course.Location === "Classroom 1");
    let mapFilteredClasses = filterClasses.map(course => course.Title)
    console.log(mapFilteredClasses)