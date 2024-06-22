const logout = async (req, res) => {
  res.cookie("jwt", "", {
    maxAge: 0,
  });

  res.send({
    message: "Success",
  });
};

export default logout;
