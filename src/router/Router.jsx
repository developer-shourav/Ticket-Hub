import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Details from "../pages/Details/Details";
import Home from "../pages/Home/Home";
import Page404 from "../pages/Page404/Page404";



const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<Page404> </Page404>,
        element:<Main> </Main>,
        children:[
            {
              path:'/',
              element:<Home> </Home>

            },
            {
                path:'/home',
                element:<Home> </Home>
            },
            
            {
                path:'/details/:id',
                element: <Details> </Details>
            }


        ],
    },
])


export default router;
