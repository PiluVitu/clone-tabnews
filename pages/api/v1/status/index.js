function status(req, res) {
  res.status(200).json({
    api: "Orline",
    mensagem: "São acima da media",
  });
}

export default status;
