import React, { useState } from "react";
import { usePublication } from "../../shared/usePublication";
import './create.css'

export const AddPost = ({ switchPostHandler }) => {

    const { addPost, getPosts, isLoading } = usePublication();

    const [formState, setFormState] = useState({
        title: {
            value: '',
            isValid: false,
            showError: false
        },
        img: {
            value: '',
            isValid: false,
            showError: false
        },
        description: {
            value: '',
            isValid: false,
            showError: false
        },
        author: {
            value: '',
            isValid: false,
            showError: false
        },
        url: {
            value: '',
            isValid: false,
            showError: false
        }
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }));
    }

    const handleAddPost = async (event) => {
        event.preventDefault();
        const { title, img, description, author, url, comments } = formState;
        await addPost(title.value, img.value, description.value, author.value, url.value);
        setFormState({
            title: {
                value: '',
                isValid: false,
                showError: false
            },
            img: {
                value: '',
                isValid: false,
                showError: false
            },
            description: {
                value: '',
                isValid: false,
                showError: false
            },
            author: {
                value: '',
                isValid: false,
                showError: false
            },
            url: {
                value: '',
                isValid: false,
                showError: false
            }
        });
        await getPosts();
    }

    return (
        <div id="randomId1">
            <h2 id="randomId2">Agregar Publicación</h2>
            <form id="randomId3">
                <div id="randomId4">
                    <input
                        type="text"
                        placeholder="Título"
                        value={formState.title.value}
                        onChange={(event) => handleInputValueChange(event.target.value, 'title')}
                    />
                </div>
                <div id="randomId5">
                    <input
                        type="text"
                        placeholder="URL de la Imagen"
                        value={formState.img.value}
                        onChange={(event) => handleInputValueChange(event.target.value, 'img')}
                    />
                </div>
                <div id="randomId6">
                    <textarea
                        placeholder="Descripción"
                        value={formState.description.value}
                        onChange={(event) => handleInputValueChange(event.target.value, 'description')}
                    />
                </div>
                <div id="randomId7">
                    <input
                        type="text"
                        placeholder="Autor"
                        value={formState.author.value}
                        onChange={(event) => handleInputValueChange(event.target.value, 'author')}
                    />
                </div>
                <div id="randomId8">
                    <input
                        type="text"
                        placeholder="Direccion del proyecto"
                        value={formState.url.value}
                        onChange={(event) => handleInputValueChange(event.target.value, 'url')}
                    />
                </div>
                <div id="randomId9">
                    <button
                        onClick={handleAddPost}
                    >
                        Agregar Publicación
                    </button>
                </div>
            </form>
            <span onClick={switchPostHandler}>
            </span>
        </div>
    );
};
