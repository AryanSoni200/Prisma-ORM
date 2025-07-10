const prisma = require('../utils/prisma');

exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({ data: { name, email } });
    res.status(201).json({message: 'Success'},user);
  } catch (error) {
    res.status(400).json({ error: 'Email already exists or bad input' });
  }
};

exports.getUser = async (req, res) => {
  try{
    const users = await prisma.user.findMany();
    res.json(users);
  } catch(error) {
    res.status(500).json({ error: 'Fail' });
  }
}

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, email }
    })
    res.status(200).json({ message: 'Success' })
  } catch(error) {
    res.status(500).json({ error: 'Fail' })
  }
}

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.delete({ where: { id: Number(id) } });
    res.status(200).json({ message: 'Success' })
  } catch(error) {
    res.status(500).json({ error: 'Fail' })
  }
}

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try{ 
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    res.status(200).json(user);
  } catch(error) {
    res.status(500).json({ error: 'Fail' })
  }
}