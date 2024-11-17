import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import AllPost from "../Component/AllPost";
import PostDetails from "../Component/PostDetails";
import ContactAbout from "../Component/ContactAbout";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: '/',
                element: <AllPost />,
                loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
            },
            {
                path: '/postdetails/:id',
                element: <PostDetails></PostDetails>,
                // loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            },
            {
                path:'/contactabout/:page/:btn?',
                element:<ContactAbout></ContactAbout>
            }
        ]
    }
])



export default Router;