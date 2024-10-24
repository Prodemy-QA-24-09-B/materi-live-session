import axios from "axios";

// axios
//   .get("https://dummyjson.com/products")
//   .then((res) => console.log(res.data.products))
//   .catch((err) => console.log(err));

const payload = {
  title: "Product Title",
};

const addNewProduct = async (payload) => {
  try {
    const res = await axios.post("https://dummyjson.com/products/add", payload);
    console.log(res.data);
  } catch (error) {
    console.log(error)
  }
};

addNewProduct(payload);
