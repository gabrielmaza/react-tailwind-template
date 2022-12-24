import React from "react";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import PageTitle from "../../../components/page-title/PageTitle";
import Paginator from "../../../components/paginator/Paginator";
import { gql, useQuery } from "@apollo/client";
import ProductCardListColumn from "../../../components/cards/ProductCardListColumn";

const ALL_PERSONS = gql`
  query allPersons {
    persons {
      id
      first_name
      last_name
      email
      gender
      ip_address
    }
  }
`;

const Favorite = () => {
  const { data, error, loading } = useQuery(ALL_PERSONS);

  if (error) {
    console.log(error);
  }

  return (
    <>
      <Navbar />
      <div className="py-5 px-4 flex flex-col gap-6 container-100vh-180">
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="main-container">
            <PageTitle label="Favorites" />

            {loading ? (
              <p>Loading...</p>
            ) : (
              data &&
              data.persons.map((p) => (
                <span>
                  {p.first_name} {p.last_name}
                </span>
              ))
            )}
            <ProductCardListColumn deleteBtn moreBtn date />
            <Paginator />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favorite;
