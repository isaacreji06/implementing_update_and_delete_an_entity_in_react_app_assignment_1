import { useEffect, useState } from "react";

const UpdateItem = ({ item ,setItem}) => {
    // 1. Create a state for the form
    // 2. Create a function to handle the form submission
    // 3. Create a function to handle the form input changes

    // your code here
    const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;
    const [formData,setFormData]=useState({
        name:item?.name,
        status:item?.status,
    })
    useEffect(() => {
        if (item) {
            setFormData({
                name: item.name || "",
                status: item.status || "",
            });
        }
    }, [item])
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const response = await fetch(`${API_URI}/${item.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`Update failed: ${response.status} ${response.statusText}`);
            }

            const updatedItem = await response.json();
            setItem(updatedItem);
            alert('Item updated successfully!');
        } catch (err) {
            console.log(err.message);
        }

}
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.id]:e.target.value})
    }
    return (
        <div>
            <form action="#" onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <input type="text" value={formData.name} id="name" onChange={handleChange} />
                </label>
                <label htmlFor="status">
                    <input type="text" value={formData.status} id="status" onChange={handleChange} />
                </label>
                <button type="submit">
                    submit
                </button>
            </form>
        </div>
    );
};

export default UpdateItem;

