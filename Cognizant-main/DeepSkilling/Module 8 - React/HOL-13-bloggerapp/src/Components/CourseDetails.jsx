function CourseDetails(){

    const courses=[

        {

            id:1,

            course:"Angular",

            date:"4/5/2021"

        },

        {

            id:2,

            course:"React",

            date:"6/3/20201"

        }

    ];

    return(

        <div>

            <h1>Course Details</h1>

            {

                courses.map((course)=>(

                    <div key={course.id}>

                        <h2>{course.course}</h2>

                        <h4>{course.date}</h4>

                        <br/>

                    </div>

                ))

            }

        </div>

    );

}

export default CourseDetails;