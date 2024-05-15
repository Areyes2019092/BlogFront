import React, { useState, useEffect } from "react";
import { useComment } from "../../shared/useComment";
import './card.css'

export const Card = ({
  title,
  img,
  description,
  author,
  url,
  comments,
  id,
}) => {
  const { addComment, isLoading } = useComment();
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Esta función se ejecuta cada vez que se actualizan los comentarios
  useEffect(() => {
    // Lógica para ajustar la altura del contenedor
    const updateContainerHeight = () => {
      const container = document.getElementById("randomId2");
      if (container) {
        const commentsSection = document.getElementById("randomId10");
        const newHeight = commentsSection.scrollHeight + 20; // Añade un poco de espacio adicional
        container.style.height = `${newHeight}px`;
      }
    };

    // Llama a la función una vez y luego cada vez que cambian los comentarios
    updateContainerHeight();
    window.addEventListener("resize", updateContainerHeight);

    // Limpia el event listener cuando el componente se desmonta
    return () => window.removeEventListener("resize", updateContainerHeight);
  }, [comments]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim() || !authorName.trim()) {
      return;
    }

    try {
      console.log("Publication ID:", id);

      await addComment(id, newComment, authorName);
      setNewComment("");
      setAuthorName("");
      setSuccessMessage("Comment added successfully");
      // No es recomendable recargar toda la página
      // window.location.reload();
    } catch (error) {
      setError(error.response?.data || 'An error occurred while adding the comment');
    }
  };

  return (
    <div id="randomId1">
      <div id="randomId2" className="container">
        <img
          id="randomId3"
          src={img}
          alt={title}
        />
        <div id="randomId4">
          <h2 id="titulo">{title}</h2>
          <p id="descripcion">{description}</p>
          <div id="contenedor-autor">
            <p id="autor">{author}</p>
            
          </div>
          <div id="randomId10" className="comments-container">
            <h3 id="randomId11">Comments:</h3>
            <ul>
              {comments.map((comment, index) => (
                <li key={index} id="randomId12">
                  <p id="randomId13">{comment.comment}</p>
                  <p id="randomId14">Author: {comment.author}</p>
                </li>
              ))}
            </ul>
          </div>
          <form onSubmit={handleSubmit} id="randomId15">
            <textarea
              id="randomId16"
              placeholder="Write your comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <input
              id="randomId17"
              placeholder="Your name..."
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
            />
            {error && <p id="randomId18">{error}</p>}
            {successMessage && <p id="randomId19">{successMessage}</p>}
            <button
              type="submit"
              id="randomId20"
              disabled={isLoading}
            >
              {isLoading ? "Adding Comment..." : "Add Comment"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
