"use client"

import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import Http from '@/lib/http';
import urls from '@/lib/urls'
import toast from 'react-hot-toast';

const SignupCard = () => {

    const http = new Http()

    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const mutation = useMutation({
        mutationFn: async data => await http.post(urls.signup, data),
        onSuccess: (data) => {
            toast.success('Signed up in successfully')
            console.log('Signup successful:', data?.data);
            reset()
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        },
    });

    const submitHandler = (data) => {
        mutation.mutate(data);
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
                            className={`grow ${errors.name ? 'input-error' : ''}`}
                            placeholder="Name"
                            {...register('name', { required: 'Name is required' })}
                        />
                    </label>
                    {errors.name && (
                        <span className="mt-1 text-sm text-white">{errors.name.message}</span>
                    )}

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
                            className={`grow ${errors.Username ? 'input-error' : ''}`}
                            placeholder="Username"
                            {...register('username', { required: 'Username is required' })}
                        />
                    </label>
                    {errors.username && (
                        <span className="mt-1 text-sm text-white">{errors.username.message}</span>
                    )}

                    <label className="flex items-center gap-2 bg-transparent input input-bordered">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="white"
                            className="w-4 h-4 opacity-70"
                        >
                            <path
                                d="M8 8L2 4v8h12V4l-6 4zm0-1.35L13 4H3l5 2.65z"
                            />
                        </svg>
                        <input
                            type="text"
                            className={`grow ${errors.email ? 'input-error' : ''}`}
                            placeholder="Email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Invalid email address'
                                }
                            })}
                        />
                    </label>
                    {errors.email && (
                        <span className="mt-1 text-sm text-white">{errors.email.message}</span>
                    )}

                    <label className="flex items-center gap-2 bg-transparent input input-bordered">
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
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters long'
                                },
                                maxLength: {
                                    value: 128,
                                    message: 'Password must not exceed 128 characters'
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,128}$/,
                                    message: 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.'
                                }
                            })}
                        />
                    </label>
                    {errors.password && (
                        <span className="mt-1 text-sm text-white">{errors.password.message}</span>
                    )}

                    <button type="submit" className="mt-4 btn btn-outline btn-secondary">
                        {mutation.isPending ? 'Signing up' : 'Signup'}
                    </button>
                </div>
            </div>
        </form>

    )
}

export default SignupCard