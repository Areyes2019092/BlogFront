import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { useProjects } from '../hooks/useProject';
import { useParams } from 'react-router-dom';
import { Card } from '../components/Card';
import { Button } from '@headlessui/react';
import './dos.css'

export const PostDetails = () => {
    const { projectId } = useParams();
    const { findByIdProject, isFetching, projects } = useProjects();

    useEffect(() => {
        findByIdProject(projectId);
    }, [projectId]); 
    
    const project = projects.find(proj => proj._id === projectId);

    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-8">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-8/12 px-4 mb-8">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_vhtduqyJenzBGpJg5x2icg46efIAeK7AtyL5uskqMQ&s" className="w-full h-64 object-cover rounded" />
                        {project && (
                            <>
                                <h2 className="text-4xl font-bold mt-4 mb-2">{project.title}</h2>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <a href={project.code} className="Get-project"><Button> Obtener Proyecto</Button></a>

                            </>
                        )}

                    </div>
                    <div className="w-full md:w-4/12 px-4 mb-8">
                        <div className="bg-gray-100 px-4 py-6 rounded">
                            <h3 className="text-lg font-bold mb-2">Categorias</h3>
                            <ul className="list-disc list-inside">
                                <li><a href="#" className="text-gray-700 hover:text-gray-900">Taller</a></li>
                                <li><a href="#" className="text-gray-700 hover:text-gray-900">Tegnologia</a></li>
                                <li><a href="#" className="text-gray-700 hover:text-gray-900">Practica Supervisada</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
