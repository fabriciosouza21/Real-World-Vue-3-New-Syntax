<template>
  <form @submit.prevent="onSubmit">
    <BaseInput
      label="Email"
      type="email"
      :modelValue="email"
      @change="handleChange"
    :error="emailError"
    />

    <BaseInput
      label="Password"
      type="password"
      v-model="password"
    :error="passwordError"
    />

    <BaseButton
      type="submit"
      class="-fill-gradient"
    >
    Submit
    </BaseButton>
  </form>
</template>

<script>
import { useField, useForm } from 'vee-validate'
export default {
  setup () {
    // Objeto de validações
    /**
     *
     * 1 - criar as validations
     * 2 - passar o objeto de validações para o useForm
     * 3 - desestruturar o useField
     * 4 - passar o useField para o v-model
     */
    const validations = {
      email: value => {
        if (!value) return 'This field is required'

        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!regex.test(String(value).toLowerCase())) {
          return 'Please enter a valid email address'
        }

        return true
      },
      password: value => {
        const requiredMessage = 'This field is required'
        if (value === undefined || value === null) return requiredMessage
        if (!String(value).length) return requiredMessage

        return true
      }
    }
    const { setFieldValue } = useForm({ validationSchema: validations })
    const { value: email, errorMessage: emailError } = useField('email')
    const { value: password, errorMessage: passwordError } = useField('password')

    const handleChange = (event) => {
      setFieldValue('email', event.target.value)
    }

    function onSubmit () {

    }

    return {
      onSubmit, email, emailError, password, passwordError, handleChange
    }
  }
}
</script>
