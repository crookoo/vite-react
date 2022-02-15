import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import DataService from "./service/DataService";
import CategoryList from "./components/CategoryList";
import Footer from "./components/Footer";
import Home from './components/Home';
import Layout from "./components/Layout";
import Navbar from './components/Navbar';
import PageScreen from "./components/PageScreen";
import SinglePost from './components/SinglePost';
import Spinner from "./components/partials/Spinner";

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<DataService>(new DataService());

  useEffect(() => {
    data.loadDataFromServer(setIsLoading, setData);
  }, []);

  return (
    <div className="d-flex flex-column h-100">
      <Navbar />
      {
        isLoading ? <Spinner /> :
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home data={data} />} />
              <Route path=":categorySlug" element={<CategoryList data={data} />} />
              <Route path=":categorySlug/:postSlug" element={<SinglePost data={data} />} />
              <Route path="impressum" element={<PageScreen data={data} />} />
              <Route path="datenschutz" element={<PageScreen data={data} />} />
            </Route>
          </Routes>
      }
      <Footer />
    </div>
  )
}
