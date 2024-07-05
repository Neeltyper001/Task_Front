import { createBrowserRouter, createRoutesFromElements, Route , RouterProvider } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Create from "../pages/create";
import Home from "../pages/home";
import View from "../pages/view";
import ViewSingle from "../pages/viewSingle";
import UpdateTask from "../pages/update";
import PageNotFound from "../pages/pageNotFound";

const Routing = ()=>{

    const router = createBrowserRouter(createRoutesFromElements(
            <Route path="/" element={<MainLayout />} >
                <Route index element={<View />} />
                <Route path="create" element={<Create />} />                                
                <Route path="view/:id" element={<ViewSingle />} />                                       
                <Route path="update/:id" element={<UpdateTask />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
    ))

    return (
        <RouterProvider router={router} />
    )

}

export default Routing;