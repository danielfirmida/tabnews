function status(request, response) {
  response.status(200).json({ chave: "certo" });
}

export default status;
