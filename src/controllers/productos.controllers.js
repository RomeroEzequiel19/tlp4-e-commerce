import ProductService from "../services/ProductService.js";

export const getProducts = async (req, res) => {
  try {
    const products = await ProductService.findAll();
    if (products.length === 0 || !products) {
      throw {
        statusCode: 404,
        status: "Not Found",
        message: "No se han encontrado productos",
      };
    }
    return res.json(products);
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};
export const createProduct = async (req, res) => {
  try {
    await ProductService.create(req.body);
    return res.status(201).json({
      message: "Producto creado",
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    await ProductService.update(req.params.id, req.body);
    return res.status(202).json({
      message: "Producto actualizado",
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await ProductService.delete(req.params.id);
    return res.status(202).json({
      message: "Producto Eliminado",
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};
