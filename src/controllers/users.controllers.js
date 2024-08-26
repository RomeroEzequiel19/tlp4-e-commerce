import UserService from "../services/UserService.js";

export const getUsers = async (req, res) => {
  try {
    const users = await UserService.findAll();
    if (users.length === 0 || !users) {
      throw {
        statusCode: 404,
        status: "Not Found",
        message: "No se han encontrado usuarios",
      };
    }
    return res.json(users);
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};

export const createUser = async (req, res) => {
  try {
    await UserService.create(req.body);
    return res.status(201).json({
      message: "Usuario creado",
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    await UserService.update(req.params.id, req.body);
    return res.status(202).json({
      message: "Usuario actualizado",
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await UserService.delete(req.params.id);
    return res.status(202).json({
      message: "Usuario Eliminado",
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};
