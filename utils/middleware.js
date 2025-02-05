const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  console.log(error.message)

  if (error.name === 'ValidationError') {
    return response.status(500).json({ error: error.message })
  }

  next(error)
}

module.exports = { unknownEndpoint, errorHandler }