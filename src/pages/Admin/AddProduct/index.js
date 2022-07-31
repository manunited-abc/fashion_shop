import { useEffect, useState } from 'react';
import axios from 'axios';
function AddProduct() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [images, setImages] = useState([]);
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const [selectedFile, setSelectedFile] = useState(null);
    var loadFile = function (event) {
        var output1 = document.getElementById('output1');
        var output2 = document.getElementById('output2');
        var output3 = document.getElementById('output3');
        var output4 = document.getElementById('output4');
        var imagesArr = [];
        setSelectedFile(event.target.files);

        output1.src = URL.createObjectURL(event.target.files[0]);
        imagesArr.push(event.target.files[0].name);
        console.log(event.target.files[0]);
        output1.onload = function () {
            URL.revokeObjectURL(output1.src); // free memory
        };
        output2.src = URL.createObjectURL(event.target.files[1]);
        imagesArr.push(event.target.files[1].name);
        output2.onload = function () {
            URL.revokeObjectURL(output2.src); // free memory
        };
        output3.src = URL.createObjectURL(event.target.files[2]);
        imagesArr.push(event.target.files[2].name);
        output3.onload = function () {
            URL.revokeObjectURL(output3.src); // free memory
        };
        output4.src = URL.createObjectURL(event.target.files[3]);
        imagesArr.push(event.target.files[3].name);
        output4.onload = function () {
            URL.revokeObjectURL(output4.src); // free memory
        };
        setImages(imagesArr);
    };
    useEffect(() => {
        fetch('http://localhost:8080/api/category')
            .then((response) => response.json())
            .then((result) => {
                setCategories(result);
                setCategory(result[0].id);
            })
            .catch((error) => console.log('error', error));
    }, []);
    function onUploadFile(myHeaders) {
        let formData = new FormData();

        for (const file of selectedFile) {
            formData.append('files', file);
        }

        let response = fetch('http://localhost:8080/upload', {
            method: 'POST',
            body: formData,
        });

        if (response.status == 200) {
            console.log('Upload file ok');
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);

        const productRequest = {
            name: name,
            description: description,
            categoryId: category,
            price: price,
            images: images,
        };
        // Post the payload using Fetch:
        var myHeaders = new Headers();
        myHeaders.append('Authorization', 'Bearer ' + user.token);
        myHeaders.append('Content-Type', 'application/json');
        fetch('http://localhost:8080/api/products', {
            method: 'POST',
            body: JSON.stringify(productRequest),
            headers: myHeaders,
        })
            .then((res) => res.json())
            .then((data) => {
                alert('Create product OK');
                //window.location.reload();
            });
        onUploadFile(myHeaders);
    };
    return (
        <div>
            <div className="container tm-mt-big tm-mb-big">
                <div className="row">
                    <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
                        <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="tm-block-title d-inline-block">Thêm sản phẩm</h2>
                                </div>
                            </div>
                            <div className="row tm-edit-product-row">
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <form
                                        id="form"
                                        className="tm-edit-product-form"
                                        onSubmit={handleSubmit}
                                        encType="multipart/form-data"
                                    >
                                        <div className="form-group mb-3">
                                            <label htmlFor="name">Tên sản phẩm</label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                className="form-control validate"
                                                value={name}
                                                onChange={(e) => {
                                                    setName(e.target.value);
                                                }}
                                                required
                                            />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="description">Mô tả</label>
                                            <textarea
                                                className="form-control validate"
                                                rows={3}
                                                name="description"
                                                required
                                                value={description}
                                                onChange={(e) => {
                                                    setDescription(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="category">Loại</label>
                                            <select
                                                className="custom-select tm-select-accounts"
                                                id="category"
                                                name="category"
                                                defaultValue={category}
                                                onChange={(e) => {
                                                    setCategory(e.target.value);
                                                }}
                                            >
                                                {categories.map((item) => (
                                                    <option value={item.id} key={item.id}>
                                                        {item.category}-{item.gender}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="row">
                                            {/* <div class="form-group mb-3 col-xs-12 col-sm-6">
                          <label
                            for="expire_date"
                            >Expire Date
                          </label>
                          <input
                            id="expire_date"
                            name="expire_date"
                            type="text"
                            class="form-control validate"
                            data-large-mode="true"
                          />
                        </div> */}
                                            <div className="form-group mb-3 col-xs-12 col-sm-6">
                                                <label htmlFor="price">Giá</label>
                                                <input
                                                    id="stock"
                                                    name="price"
                                                    type="number"
                                                    className="form-control validate"
                                                    required
                                                    value={price}
                                                    onChange={(e) => {
                                                        setPrice(e.target.value);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            id="btn-submit"
                                            className="btn btn-primary btn-block text-uppercase"
                                            style={{ display: 'none' }}
                                        ></button>
                                    </form>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
                                    <div className="tm-product-img-dummy mx-auto">
                                        <div className="row">
                                            <div className="col">
                                                <img id="output1" width={120} />
                                            </div>
                                            <div className="col">
                                                <img id="output2" width={120} />
                                            </div>
                                            <div className="col">
                                                <img id="output3" width={120} />
                                            </div>
                                            <div className="col">
                                                <img id="output4" width={120} />
                                            </div>
                                        </div>

                                        {/* <i
                    class="fas fa-cloud-upload-alt tm-upload-icon"
                    onclick="document.getElementById('fileInput').click();"
                  ></i> */}
                                    </div>
                                    <div className="custom-file mt-3 mb-3">
                                        <input
                                            id="fileInput"
                                            type="file"
                                            multiple
                                            name="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                loadFile(e);
                                                // setSelectedFile(e.target.files[0]);
                                            }}
                                            style={{ display: 'none' }}
                                        />
                                        <input
                                            type="button"
                                            className="btn btn-primary btn-block mx-auto"
                                            defaultValue="UPLOAD PRODUCT IMAGE"
                                            onClick={(e) => {
                                                document.getElementById('fileInput').click();
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block text-uppercase"
                                        onClick={(e) => {
                                            document.getElementById('btn-submit').click();
                                            //  onFileUpload();
                                        }}
                                    >
                                        Thêm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
