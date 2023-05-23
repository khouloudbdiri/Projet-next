"use client";
import React, { useState } from "react";
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Login () {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const data = await signIn('credentials', {
                redirect: false,
                email,
                password
            })
            console.log(data);
            router.push('/dashboard')
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="container container-fluid">
            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-10 col-lg-5 ">
                    <form
                        className="border border-secondary rounded p-4"
                        onSubmit={submitHandler}
                    >
                        <h2 className="mb-4">Login</h2>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="email_field">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="password_field">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-block w-100 btn-danger btn-block mb-4"
                        >
                            Sign in
                        </button>
                        <div className="text-center">
                            <p>
                                Not a member? <Link href="/register">Register</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

