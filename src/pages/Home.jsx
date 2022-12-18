import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import HomeSlider from "../components/HomeSlider";
import Loading from "../components/Loading";

import { fetchGetProducts, getProducts } from "../redux/slices/productSlice";
import "./Home.css";
const Home = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isError } = useSelector(getProducts);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState("");
  const data = [
    {
      categories: "Giyim",
    },
    {
      categories: "Elektronik",
    },
    {
      categories: "Oyuncak",
    },
    {
      categories: "Bakım",
    },
    {
      categories: "Kitap",
    },
    {
      categories: "Dekorasyon",
    },
  ];
  useEffect(() => {
    dispatch(fetchGetProducts());
  }, []);
  if (isLoading) return <Loading />;
  if (isError) return <p>error</p>;
  return (
    <div className="">
      <HomeSlider products={products} isLoading={isLoading} isError={isError} />

      <div className="container uzun">
        <h3>Mağaza</h3>
        <div className="row">
          <div className="home-left col-md-2">
            <button id="leaderBut" onClick={() => setShow(!show)}>
              Ürünleri filtrele
            </button>

            {show && (
              <div className="filters">
                {data.map((item, index) => {
                  return (
                    <div key={index}>
                      <button
                        onClick={() => {
                          if (filter === item.categories) {
                            setFilter("");
                          } else {
                            setFilter(item.categories);
                          }
                        }}
                      >
                        {item.categories}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
            <button id="leaderBut" onClick={() => setShowFilter(!showFilter)}>
              Ürün ara
            </button>
            {showFilter && (
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-100 rounded border p-1"
                placeholder="Ürün Ara"
              />
            )}
          </div>
          <div className="col-md-10">
            <div className="home">
              {products
                .filter((item) => {
                  if (search === "") {
                    return item;
                  } else if (
                    item.title.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return item;
                  }
                })
                .map((product) => {
                  if (filter.length === 0) {
                    return (
                      <div className="homeContent" key={product.id}>
                        <Card product={product} />
                      </div>
                    );
                  } else {
                    if (filter === product.categories) {
                      return <Card product={product} />;
                    }
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
