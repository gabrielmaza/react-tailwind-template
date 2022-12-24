import React, { useEffect, useState } from "react";
import Footer from "../../../components/footer/Footer";
import InputSearch from "../../../components/inputs/search/InputSearch";
import Navbar from "../../../components/navbar/Navbar";
import PageTitle from "../../../components/page-title/PageTitle";
import Paginator from "../../../components/paginator/Paginator";
import Sidebar from "../../../components/sidebar/sidebar";
import Carousel from "../../../components/carousel/Carousel";
import FullImgCardList from "../../../components/cards/FullImgCardList";
import Spinner3 from "../../../components/spinner-animation/Spinner3";

const featureProducts = [
  "./src/assets/img/products/image-1.jpg",
  "./src/assets/img/products/image-2.jpg",
  "./src/assets/img/products/image-3.jpg",
];

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      await fetch("/");
      setIsLoading(false);
    };
    getItems();
  }, []);

  //API REST
  const [posts, setPosts] = useState([]);

  const url = "http://localhost/wp-template/wp-json/wp/v2/posts/34";

  useEffect(() => {
    async function loadPosts() {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setPosts(res);
          console.log(posts);
        })
        .catch((err) => console.log("Error:", err));
    }
    loadPosts();
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner3 />
      ) : (
        <>
          <Navbar />
          <div className="py-5 px-4 flex flex-col gap-6 container-100vh-180">
            {/* {posts && posts.map((post, index) => <div key={index}>{post}</div>)} */}
            <div>
              <Carousel
                width="w-auto"
                height="h-56 md:h-96"
                indicatorsSection
                images={featureProducts}
              />
            </div>
            <div className="main-container">
              <div className="flex gap-3 w-full">
                <Sidebar />
                <InputSearch />
              </div>
              <div className="flex flex-col gap-6 w-full">
                <PageTitle label="Latest" />
                <FullImgCardList favoriteBtn moreBtn salesBtn />
                <Paginator />
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
