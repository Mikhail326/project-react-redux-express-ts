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

module.exports = {
  all,
  add,
};
