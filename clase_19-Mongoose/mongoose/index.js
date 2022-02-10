require("./db");

const Product = require("./models/products");

// SAVE
const productSave = async () => {
  let product = new Product({
    name: "iPhone 13",
    description: "New iPhone",
    price: 1050,
  });

  const newProductSave = await product.save();
  return newProductSave;
};
// como la funcion productSave() devuelve una promesa la trato como tal
// productSave()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// READ
const getAllItems = async () => {
  const product = await Product.find();
  return product;
};
// getAllItems()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const getOneItems = async () => {
  const product = await Product.findOne({ _id: "61f83f1a5a9ecc655d788191" });
  return product;
};
// getOneItems()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// UPDATE
const updateProduct = async () => {
  const productUpdate = await Product.findByIdAndUpdate(
    { _id: "61f83f1a5a9ecc655d788191" },
    {
      description: "This is the new iPhone",
    }
  );
  return productUpdate;
};
// updateProduct()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// DELETE
const deleteProduct = async () => {
  const product = await Product.findOneAndDelete({
    _id: "61f8664ba97fea0a6e2ca578",
  });
  return product;
};
// deleteProduct()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const deleteAllProducts = async () => {
  const productDelete = await Product.deleteMany({ name: "iPhone 13" });
  return productDelete;
};
deleteAllProducts()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
