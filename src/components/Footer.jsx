import React from 'react'

export const Footer = () => {
    return (
        <div className="bg-gray-900">
            <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-white sm:flex justify-between mx-auto">
                <div className="p-5 sm:w-7/12 border-r text-center">
                    <h3 className="font-bold text-xl bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text mb-4">Componentity</h3>
                    <p className="text-gray-500 text-sm mb-10">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
            <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
                <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                    <a href="#" className="w-6 mx-1">
                     
                    </a>
                </div>
                <div className="my-5">© Centro Educativo Tecnico Laboral Kinal.</div>
            </div>
        </div>
    )
}
