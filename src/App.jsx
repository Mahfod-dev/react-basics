import React from 'react'
import {createRoot} from 'react-dom/client';
import SearchParams from './SearchParams';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import ErrorPage from './error-page';
import Details from './Details';






const App = () => {

  return (
    <div>
    <h1>Adopt me</h1>
    <SearchParams />
    </div>
  )
}



const router = createBrowserRouter([{
	path: '/',
	element: <App/>,
  errorElement:<ErrorPage/>
},{
  path:'details/:detailid',
  element:<Details/>,
  errorElement:<ErrorPage/>

}]);


createRoot(document.getElementById("root")).render(

    <RouterProvider router={router} />

);
