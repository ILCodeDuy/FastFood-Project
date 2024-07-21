import React, { useEffect, useState } from "react";
import { Field, reduxForm } from "redux-form";
import axios from "axios";

const ProductEditForm = ({
  productId,
  handleSubmit,
  onSuccess,
  onCancel,
  initialize,
}) => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/products/${productId}`
        );
        const product = response.data;
        initialize({
          code: product.code,
          name: product.name,
          quantity: product.quantity,
          price: product.price,
          description: product.description,
          categoryId: product.categoryId
        });
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId, initialize]);

  const renderInput = ({ input, type, id, meta, ...rest }) => (
    <div className="mb-4">
      <input
        {...input}
        type={type}
        id={id}
        {...rest}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      {meta.touched && meta.error && <span className="text-red-500">{meta.error}</span>}
    </div>
  );

  const renderTextarea = ({ input, id, meta, ...rest }) => (
    <div className="mb-4">
      <textarea
        {...input}
        id={id}
        {...rest}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      {meta.touched && meta.error && <span className="text-red-500">{meta.error}</span>}
    </div>
  );

  const renderFileInput = () => (
    <div className="mb-4">
      <input
        type="file"
        onChange={(event) => {
          setFile(event.target.files[0].name); // Store the file object
        }}
      />
    </div>
  );

  const onFormSubmit = (values) => {
    const formData = new FormData();
    Object.keys(values).forEach(key => {
      formData.append(key, values[key]);
    });
  
    if (file) {
      formData.append('img', file);
    }
  
    fetch(`http://localhost:3001/api/data/${productId}`, {
        method: 'PUT',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
        onSuccess();
      })
      .catch(error => {
        console.error('Error updating product:', error);
      });
  };
  

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="w-full space-y-4">
      <div>
        <label htmlFor="code" className="block text-sm font-medium text-gray-700">
          Product Code
        </label>
        <Field
          name="code"
          component={renderInput}
          type="text"
          id="code"
        />
      </div>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Product Name
        </label>
        <Field
          name="name"
          component={renderInput}
          type="text"
          id="name"
        />
      </div>
      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
          Quantity
        </label>
        <Field
          name="quantity"
          component={renderInput}
          type="number"
          id="quantity"
        />
      </div>
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Price
        </label>
        <Field
          name="price"
          component={renderInput}
          type="number"
          step="0.01"
          id="price"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <Field
          name="description"
          component={renderTextarea}
          id="description"
          rows="4"
        />
      </div>
      <div>
        <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700">
          Category ID
        </label>
        <Field
          name="categoryId"
          component={renderInput}
          type="text"
          id="categoryId"
        />
      </div>
      <div>
        <label htmlFor="img" className="block text-sm font-medium text-gray-700">
          Product Image
        </label>
        {renderFileInput()}
      </div>
      <div className="flex justify-between mt-6">
        <button
          type="submit"
          className="btn btn-primary"
        >
          Update
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="btn btn-secondary"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "productEditForm",
})(ProductEditForm);
