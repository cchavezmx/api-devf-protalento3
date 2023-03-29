const { celebrate, Joi, Segments } = require('celebrate')


module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      titulo: Joi.string().required(),
      contenido: Joi.string().required(),
      fecha: Joi.string().required(),
      user: Joi.string().required()
    })
  })
}