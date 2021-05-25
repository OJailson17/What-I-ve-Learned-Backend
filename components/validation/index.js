import Joi from 'joi'

export const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().trim().min(3).required(),
        email: Joi.string().trim().min(3).required().email(),
        password: Joi.string().trim().min(6).required()
    })

    return schema.validate(data)
}

export const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().trim().min(3).required().email(),
        password: Joi.string().trim().min(6).required()
    })

    return schema.validate(data)
}