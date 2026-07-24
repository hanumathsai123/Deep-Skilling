import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

import "./Styles/Blogger.css";

function App() {

    const showCourse = true;

    const showBook = true;

    const showBlog = true;

    return (

        <div className="container">

            {

                showCourse &&

                <div className="column">

                    <CourseDetails/>

                </div>

            }

            {

                showBook &&

                <div className="column">

                    <BookDetails/>

                </div>

            }

            {

                showBlog &&

                <div className="column">

                    <BlogDetails/>

                </div>

            }

        </div>

    );

}

export default App;