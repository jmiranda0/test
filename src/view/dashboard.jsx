import React, { useState, useEffect } from 'react';
import api from '../api'; // Suponiendo que `api` ya incluye Axios
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [images, setImages] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await api.get('/posts');
            const imagesData = response.data.map(post => ({
                id: post.id,
                url: post.img,
                description: post.description
            }));
            setImages(imagesData);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    const handleImageUrlChange = (event) => {
        setImageUrl(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleAddPhoto = async () => {
        try {
            const response = await api.post('/posts', {
                img: imageUrl,
                description: description
            });

            console.log('Foto agregada exitosamente:', response.data);

            setImageUrl('');
            setDescription('');
            setShowAddModal(false);

            // Actualiza la galería después de agregar la foto
            fetchImages();
        } catch (error) {
            console.error('Error al agregar foto:', error);
        }
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowEditModal(true);
    };

    const handleDeleteImage = async (id) => {
        try {
            await api.delete(`/posts/${id}`);
            // Actualiza la galería después de eliminar la imagen
            fetchImages();
            // Cierra el modal después de eliminar la imagen
            setShowEditModal(false);
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };

    const handleEditDescription = async (description) => {
        try {
            const updatedPost = {
                id: selectedImage.id,
                img: selectedImage.img,
                description: description
            };
            await api.put(`/posts/${updatedPost.id}`,{
                img: selectedImage.img,
                description: description
            });
            // Actualiza la galería después de editar la descripción
            fetchImages();
            // Cierra el modal después de editar la descripción
            setShowEditModal(false);
            // Actualiza el estado selectedImage con el post actualizado
            setSelectedImage(updatedPost);
        } catch (error) {
            console.error('Error editing description:', error);
        }
    };
    
    
    

    return (
        <div className="flex flex-col lg:flex-row h-screen">
            {/* Sidebar */}
            <div className="bg-gray-800 text-white p-4 w-full lg:w-1/4 lg:fixed lg:h-screen lg:overflow-y-auto">
                <h2 className="text-lg font-bold mb-4">Menu</h2>
                <ul>
                    <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">Option 1</li>
                    <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">Option 2</li>
                    <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">Option 3</li>
                    <li className="cursor-pointer hover:bg-gray-700 p-2 rounded"><Link to="/login">LogOut</Link></li>
                </ul>
            </div>
            {/* Content */}
            <div className="p-4 w-full lg:w-3/4 lg:ml-auto overflow-x-auto"> {/* Ajustamos el overflow-x para permitir el scroll horizontal */}
                <div className="flex justify-between mb-4">
                    <h2 className="text-lg font-bold text-slate-900">Gallery</h2>
                    <button onClick={() => setShowAddModal(true)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add New Picture</button>
                </div>
                <div className="container mx-auto py-8 px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Galería</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {images.map((image, index) => (
                        <div key={index} className="bg-white rounded shadow-lg overflow-hidden">
                            <img 
                                src={image.url} 
                                alt={`Image ${index + 1}`} 
                                className="w-full h-48 object-cover rounded cursor-pointer" 
                                onClick={() => handleImageClick(image)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            </div>

            {/* Modal para agregar nueva foto */}
            {showAddModal && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-md">
                        <h2 className="text-lg font-bold mb-4">Agregar Nueva Foto</h2>
                        <input
                            type="text"
                            placeholder="URL de la imagen"
                            value={imageUrl}
                            onChange={handleImageUrlChange}
                            className="w-full mb-4"
                        />
                        <input
                            type="text"
                            placeholder="Descripción"
                            value={description}
                            onChange={handleDescriptionChange}
                            className="w-full mb-4"
                        />
                        <button onClick={handleAddPhoto} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Enviar</button>
                        <button onClick={() => setShowAddModal(false)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2">Cancelar</button>
                    </div>
                </div>
            )}

            {/* Modal para editar y eliminar la foto seleccionada */}
            {showEditModal && selectedImage && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 h-96 w-2/3 rounded shadow-md flex flex-col lg:flex-row lg:p-0">
                        <img
                            src={selectedImage.url}
                            alt={`Selected Image`}
                            className="lg:w-1/2 h-full object-cover rounded mb-6"
                        />
                        <div className='lg:w-1/2 lg:p-6 lg:flex lg:flex-col lg:justify-center'>

                        
                            <input
                                type="text"
                                value={selectedImage.description}
                                onChange={(e) => setSelectedImage({ ...selectedImage, description: e.target.value })}
                                className="w-full mb-4"
                            />
                            <div className="flex justify-between">
                                <button
                                    onClick={() => handleDeleteImage(selectedImage.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={() => handleEditDescription(selectedImage.description)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={() => setShowEditModal(false)}
                                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
