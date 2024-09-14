"use client"

import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import Http from '@/lib/http';
import urls from '@/lib/urls'
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { isExpired } from 'react-jwt';

const LoginCard = () => {

    const [isReady, setIsReady] = useState(false)
    const router = useRouter()

    const http = new Http()

    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const mutation = useMutation({
        mutationFn: async data => await http.post(urls.login, data),
        onSuccess: (data) => {
            toast.success('Logged in successfully')
            Cookies.set('token', data?.data?.data)
            reset()
            router.replace('/home')
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        },
    });

    useEffect(() => {
        const token = Cookies.get("token")
        const isTokenExpired = isExpired(token);
        if (!isTokenExpired) {
            redirect('/home')
        }
        setIsReady(true)
    }, [])

    const submitHandler = (data) => {
        mutation.mutate(data);
    }

    if (!isReady) {
        return <div className='text-2xl text-white'>Loading...</div>
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <div className="card shadow-2xl w-[30%] bg-[#ffffff11] min-w-96 max-w-96">
                <div className="card-body">
                    <label className="flex items-center gap-2 bg-transparent input input-bordered">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="white"
                            className="w-4 h-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input
                            type="text"
                            className={`grow ${errors.identifier ? 'input-error' : ''}`}
                            placeholder="Username or Email"
                            {...register('identifier', { required: 'Username or Email is required' })}
                        />
                    </label>
                    {errors.identifier && (
                        <span className="mt-1 text-sm text-white">{errors.identifier.message}</span>
                    )}

                    <label className="flex items-center gap-2 mt-4 bg-transparent input input-bordered">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="white"
                            className="w-4 h-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input
                            type="password"
                            className={`grow ${errors.password ? 'input-error' : ''}`}
                            placeholder="Password"
                            {...register('password', { required: 'Password is required' })}
                        />
                    </label>
                    {errors.password && (
                        <span className="mt-1 text-sm text-white">{errors.password.message}</span>
                    )}

                    <button type="submit" className="mt-4 btn btn-outline btn-secondary">
                        {mutation.isPending ? 'Logging in' : 'Login'}
                    </button>
                </div>
            </div>
        </form>

    )
}

export default LoginCard