exports.demo = async (req, res) => {
  try {
    console.log("Hii, Ankit Mishra");
    res.status(200).json({ Hii: "Ankit Mishra" });
  } catch (error) {
    res.status(500).json(error);
  }
};
