import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = (values) => {
  const errors = {};
  if (!values.code) {
    errors.code = 'Required';
  }
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.quantity) {
    errors.quantity = 'Required';
  } else if (isNaN(Number(values.quantity))) {
    errors.quantity = 'Must be a number';
  }
  if (!values.price) {
    errors.price = 'Required';
  } else if (isNaN(Number(values.price))) {
    errors.price = 'Must be a number';
  }
  return errors;
};

const ProductForm = ({ handleSubmit, submitting, onSuccess }) => {
  const [file, setFile] = useState(null);

  const renderInput = ({ input, type, id, meta, ...rest }) => (
    <div className="mb-4">
      <input {...input} type={type} id={id} {...rest} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      {meta.touched && meta.error && <span className="text-red-500">{meta.error}</span>}
    </div>
  );

  const renderTextarea = ({ input, id, meta, ...rest }) => (
    <div className="mb-4">
      <textarea {...input} id={id} {...rest} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      {meta.touched && meta.error && <span className="text-red-500">{meta.error}</span>}
    </div>
  );

  const renderFileInput = () => (
    <div className="mb-4">
      <input
        type="file"
        onChange={(event) => {
          setFile(event.target.files[0].name);
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

    fetch('http://localhost:3001/api/data', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
        onSuccess(); // Call onSuccess to close the modal and reset the form
      })
      .catch(error => {
        console.error('Error uploading product:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="w-full space-y-4">
      <div>
        <label htmlFor="code" className="block text-sm font-medium text-gray-700">
          Code:
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
          Name:
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
          Quantity:
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
          Price:
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
          Description:
        </label>
        <Field
          name="description"
          component={renderTextarea}
          id="description"
          rows="4"
        />
      </div>
      <div>
        <label htmlFor="img" className="block text-sm font-medium text-gray-700">
          Image:
        </label>
        {renderFileInput()}
      </div>
      <div>
        <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700">
          Category ID:
        </label>
        <Field
          name="categoryId"
          component={renderInput}
          type="number"
          id="categoryId"
        />
      </div>
      <div className="flex justify-between mt-6">
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          Add Product
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'productForm',
  validate
})(ProductForm);
