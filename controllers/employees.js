const { prisma } = require("../prisma/prisma-client");

const all = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();

    return res.status(200).json(employees);
  } catch {
    return res.status(500).json({ message: "Не удалось получить сотрудников" });
  }
};

const add = async (req, res) => {
  try {
    const data = req.body;

    if (!data.firstName || !data.lastName || !data.address || !data.age) {
      return res.status(400).json({ message: "Все поля обязательные!" });
    }

    const employee = await prisma.employee.create({
      data: {
        ...data,
        userId: req.user.id,
      },
    });

    return res.status(201).json(employee);
  } catch {
    return res
      .status(500)
      .json({ message: "Не удалось добавить сотрудников!" });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.body;

    await prisma.employee.delete({
      where: {
        id,
      },
    });

    return res.status(204).json({ message: "Сотрудник удален!" });
  } catch {
    return res.status(500).json({ message: "Не удалось удалить сотрудника!" });
  }
};

const edit = async (req, res) => {
  try {
    const data = req.body;

    await prisma.employee.update({
      where: {
        id: data.id,
      },
      data,
    });

    return res.status(204).json({ message: "Сотрудник изменён!" });
  } catch {
    return res.status(500).json({ message: "Не удалось изменить сотрудника!" });
  }
};

const employee = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await prisma.employee.findUnique({
      where: {
        id,
      },
    });

    return res.status(200).json(employee);
  } catch {
    return res.status(500).json({ message: "Не удалось получить сотрудника!" });
  }
};

module.exports = {
  all,
  add,
  remove,
  edit,
  employee
};
