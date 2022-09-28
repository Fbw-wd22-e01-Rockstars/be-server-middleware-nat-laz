export const validationResponse = (req, res) => {
    res.json({ msg: "This user is valid!" });
  };

  export const updatedResponse = (req, res) => {
    res.send(req.body);
  };