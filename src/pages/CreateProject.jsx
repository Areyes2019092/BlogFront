import React from 'react';
import { useForm } from 'react-hook-form';
import { useProjects } from '../hooks/useProject';

export const CreateProject = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createProject } = useProjects();

    const onSubmit = (data) => {
        console.log(data);
        createProject(data);
    };

    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full"
                encType="multipart/form-data"
            >
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Create new project</h1>
                <div className="mb-4">
                    <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        {...register('title', { required: true })}
                        className={`border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${errors.title ? 'border-red-500' : ''}`}
                        placeholder="Project Title"
                    />
                    {errors.title && <span className="text-red-500">Title is required</span>}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        {...register('description', { required: true })}
                        className={`border-2 border-gray-300 p-2 rounded-lg w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${errors.description ? 'border-red-500' : ''}`}
                        placeholder="Project Description"
                    />
                    {errors.description && <span className="text-red-500">Description is required</span>}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="code"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Code (URL)
                    </label>
                    <input
                        type="text"
                        id="code"
                        name="code"
                        {...register('code', { required: true })}
                        className={`border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${errors.code ? 'border-red-500' : ''}`}
                        placeholder="URL of the code"
                    />
                    {errors.code && <span className="text-red-500">Code (URL) is required</span>}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="authorName"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Author Name
                    </label>
                    <input
                        type="text"
                        id="authorName"
                        name="authorName"
                        {...register('authorName', { required: true })}
                        className={`border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${errors.authorName ? 'border-red-500' : ''}`}
                        placeholder="Your Name"
                    />
                    {errors.authorName && <span className="text-red-500">Author Name is required</span>}
                </div>
                
                <div className="mb-4">
                    {/*
                    <label
                        htmlFor="image"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Image
                    </label>
                    
                    <input
                        type="file"
                        id="image"
                        name="image"
                        {...register('image', { required: true })}
                        accept="image/*"
                        className={`border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${errors.image ? 'border-red-500' : ''}`}
                    />
                    {errors.image && <span className="text-red-500">Image is required</span>}
                    */}
                </div>
                <button
                    type="submit"
                    className="bg-indigo-500 text-white p-2 rounded-lg font-semibold w-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                    Send
                </button>
            </form>
            <div className="mt-4 text-sm text-gray-600">
                <a
                    href="https://veilmail.io/irish-geoff"
                    className="underline"
                    target="_blank"
                    rel="noreferrer"
                >
                </a>
            </div>
        </div>
    );
};
