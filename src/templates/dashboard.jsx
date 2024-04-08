

import "../style/galery.css"
const Dashboard = ()=>{
    return(
        <>
            <div class="gallery-container">
                <h1>Image Gallery</h1>
                <div class="gallery">
                    {/* <!-- Placeholder images --> */}
                    <div class="image">
                        <img src="https://via.placeholder.com/150" alt="Image 1"/>
                    </div>
                    <div class="image">
                        <img src="https://via.placeholder.com/150" alt="Image 2"/>
                    </div>
                    <div class="image">
                        <img src="https://via.placeholder.com/150" alt="Image 3"/>
                    </div>
                    {/* <!-- End of placeholder images --> */}
                </div>
                <h2>Add Image</h2>
                <form action="#" method="post" enctype="multipart/form-data" class="upload-form">
                    <input type="file" name="image" id="image" accept="image/*"/>
                    <button type="submit">Upload Image</button>
                </form>
            </div>
        </>
    )
}
export default Dashboard;