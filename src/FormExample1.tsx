import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

interface FormData {
    Nome: string
    Email: string
    DataNascimento: string
    Mensagem: string
}

const FormExample1 = () => {
    const [formData, setFormData] = useState<FormData | undefined>()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data: FormData) => {
        setFormData(data)
        reset()
    }

    console.log(errors)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <br />
            <label htmlFor="Nome"> Name</label>
            <br />
            <input
                type="text"
                placeholder="Nome"
                {...register('Nome', { required: true })}
            />
            <br />
            <label htmlFor="Email"> Email</label>
            <br />
            <input
                type="email"
                placeholder="Email"
                {...register('Email', { required: true })}
            />
            <br />
            <label htmlFor="Mensagem"> Mensagem</label>
            <br />
            <textarea {...register('Mensagem', {})} />
            <br />
            <label htmlFor="DataNascimento"> DataNascimento</label>
            <br />
            <input
                type="date"
                placeholder="DataNascimento"
                {...register('DataNascimento', { required: true })}
            />

            <br />

            <br />

            <br />

            <br />
            <input type="submit" />
        </form>
    )
}
export default FormExample1
