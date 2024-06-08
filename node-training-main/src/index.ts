import { AdaptExpress } from "./adapters/express-adapter";
//product routs
import { getAllProductsController } from "./controllers/get-products-controller";
import { getOneProductByIdController } from "./controllers/get-a-product-controller";
import { CreateProductController } from "./controllers/create-product-controller";
import { updateOneProductController } from "./controllers/update-product-controller";
import { deleteOneProductController } from "./controllers/delete-product-controller";

import express from "express";

//category tree
import { getAllCategorysFathersController } from "./controllers/category-get-fathers-controller" 
import { setNewNodeController } from "./controllers/category-set-new-node-controller";

//category nested set 
import { getAllNestedCategorysController } from "./controllers/nested-category-get-children-controller";
import { setNewNestedNodeController } from "./controllers/nested-category-new-node-controller";


const app = express();
app.use(express.json());

app.get("/products", async (req, res) => {
  const controller = new getAllProductsController();
  await AdaptExpress(req, res, controller);
});

app.get("/products/:id", async (req, res) => {
  const controller = new getOneProductByIdController();
  await AdaptExpress(req, res, controller);
});

app.post("/products", async (req, res) => {
  const controller = new CreateProductController();
  await AdaptExpress(req, res, controller);
});

app.put("/products/:id", async (req, res) => {
  const controller = new updateOneProductController();
  await AdaptExpress(req, res, controller);
});

app.delete("/products/:id", async (req, res) => {
  const controller = new deleteOneProductController();
  await AdaptExpress(req, res, controller);
});

app.get("/category/:id", async (req, res) => {
  const controller = new getAllCategorysFathersController();
  await AdaptExpress(req, res, controller);
});

app.post("/category", async (req, res) => {
  const controller = new setNewNodeController();
  await AdaptExpress(req, res, controller);
});

app.get("/nestedcategory/:id", async (req, res) => {
  const controller = new getAllNestedCategorysController();
  await AdaptExpress(req, res, controller);
});

app.post("/nestedcategory", async (req, res) => {
  const controller = new setNewNestedNodeController();
  await AdaptExpress(req, res, controller);
});

app.listen(8000);
