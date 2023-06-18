exports.demo = async (req, res) => {
  try {
    console.log("Hii, Ankit Mishra");
    res.status(200).json({ Hii: "Ankit Mishra" });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getGoals = async (req, res) => {
    try{
        res.status(200).json({"name":"getGoals" });
    }
    catch(error){
        res.status(500).json({error});
    }
}

exports.setGoal = async (req, res) => {
    try{
        res.status(200).json({ "name": "setGoal" });
    }
    catch(error){
        res.status(500).json({error});
    }
}


exports.updateGoal = async (req, res) => {
    try{
        res.status(200).json({ "name": "updateGoal" });
    }
    catch(error){
        res.status(500).json({error});
    }
}

exports.deleteGoal = async (req, res) => {
    try{
        res.status(200).json({ "name": "deleteGoal" });
    }
    catch(error){
        res.status(500).json({error});
    }
}
