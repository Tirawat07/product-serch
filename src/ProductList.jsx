import { useEffect, useState } from "react";

export default function ProductList(props) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const { searchFilter } = props;
  const Limit = 20;
  const fetchData = async () => {
    try {
      const resp = await fetch(
        `https://dummyjson.com/products/search?q=${searchFilter}&limit=${Limit}&skip=${skip}`
      );
      const data = await resp.json();
   
      setTotal(data.total);
      const result = data.products;
      setProduct(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
    return () => {
      clearTimeout();
    };
  }, [searchFilter]);

  useEffect(() => {
    fetchData();
  }, [skip]);

  const handleClick = (num) => {
    setSkip((prev) => prev + num);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (

    <div>
      {skip + 20 < total && (
        <button onClick={() => handleClick(20)}>next</button>
      )}
      <p>
        {skip + 1}-{skip + 20 < total ? skip + 20 : total} of {total}
      </p>
      {skip + 1 > 1 && (
        <button onClick={() => handleClick(-20)}>previous</button>
      )}
      <ul>
        {product.map((el) => (
          <li>
            {el.title} | {el.price}
          </li>
        ))}
      </ul>
    </div>
  );
}