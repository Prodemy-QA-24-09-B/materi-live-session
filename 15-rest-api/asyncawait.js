const fetchData = async () => {
  try {
    const res = await fetch("https://dummyjsoom/products");
    const result = await res.json();
    console.log(result.products);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
