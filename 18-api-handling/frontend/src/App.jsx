import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // we can use react queries to reduced these process. like getting errors, loading and data etc. but here we are not using.  // https://tanstack.com/query/latest/docs/framework/react/overview
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // To be safe from race condition in api requesting, in our case when we are searching so in every input the api is requesting and geting data but we need updated response when search. so we have to do some axios setup to get safe from this-

    // so the main thing is this setup is for avoid race condition means to get data in the sequence of the requests not to cancel the old requests and to cancel old requests we use debouncing concepts.

    const controller = new AbortController(); // step 1

    // for safety purpose we added a semicolon in front of iffe it means privious works done. suppose if we not used semicolenal in front of iffe so it must add in last of previour line of code, but good practice is to add before iffe.
    (async () => {
      try {
        setLoading(true);
        setError(false);

        // here we are not adding prifix of the url because we set proxy in the vite config file so it will autometically read it like that and understand this request is from same port so this will safe us from CORS policies.
        const response = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });
        // step 2 - add {} inside axios.get and add signal inside {}, we can also add various things inside {}, we can check those from axios documentation.
        // from this the we send all signal to conroller and the controller will be save all the signal on every request in a packet which has every information about every request. so the signal send the request abort error in the catch.

        // this is the benifit of using axios we dont need to parse response in jason format it is autometically handling by axios.
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        // step3 - here the error coming from signal of old requests. so this is the way to properly handle abort request errors.
        if (axios.isCancel(error)) {
          console.log("Request Canceled", error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();

    // step 4 - cleanup means anmounting and cleaning old requests.
    return () => {
      controller.abort();
    };

    // so setting up these four steps we are handling our api professionally and avoiding race condition in api handling so we can get latest request data at the end.
  }, [search]);

  /*
    if (error) {
    return <h1>Something went wrong</h1>;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }
  */

  return (
    <>
      <h1>Api Handling In React</h1>

      {/* with this input our api url is attach */}
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <h2>Loading...</h2>}
      {error && <h2>Something went wrong</h2>}
      <h2>Number of products are: {products.length}</h2>

      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

// custom hook to perform api handling.
/* const customReactQuery = (url) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(url);
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);

  return [products, error, loading];
}; */

// then we can call it like this-
// const [products, error, loading] = customReactQuery("/api/products");
