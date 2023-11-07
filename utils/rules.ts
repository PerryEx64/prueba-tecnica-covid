export const RuleName = {
  required: { value: true, message: 'Campo Obligatorio' },
  pattern: {
    value: /^[a-zA-Z ñÑó]{2,40}( [a-zA-Z ñÑó]{2,40})+$/,
    message: 'Debe ingresar nombre y apellido'
  }
}

export const RuleJob = {
    required: { value: true, message: 'Campo Obligatorio' },
    pattern: {
      value: /^[a-zA-ZñÑóÓ\s]{2,40}$/,
      message: 'Debe ingresar nombre y apellido'
    }
  }
