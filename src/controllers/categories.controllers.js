import CategoryService from "../services/CategoryService.js";

export const ctrlGetAllCategory = async (req, res) => {
  try {
    const categories = await CategoryService.findAll();

    if (categories.length === 0 || !categories) {
      throw {
        statusCode: 404,
        status: "Not Found",
        message: "No se han encontrado productos",
      };
    }
    return res.status(200).json(categories);
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};

export const ctrlCreateCategory = async (req, res) => {
  const data = req.body;
  try {
    await CategoryService.create(data);
    return res.status(201).json({
      message: "Categoría creado",
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};

export const ctrlUpdateCategory = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    await CategoryService.update(id, data);
    return res.status(202).json({
      message: "Categoría actualizada",
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};

export const ctrlDeleteCategory = async (req, res) => {
  const id = req.params.id;

  try {
    await CategoryService.delete(id);
    return res.status(202).json({
      message: "Categoría Eliminada",
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};
