/* eslint-disable react/prop-types */
import { Field, Form, Formik } from "formik";

export default function SearchBar({ onSubmit, onChange }) {

    
  return (
    <Formik initialValues={{ text: "" }} onSubmit={onSubmit}>
      <Form className="w-full">
        <Field
          type="text"
                  onChange={(e) =>onChange(e.target.value)}
          name="search"
          className="mx-8 w-1/4 border p-1 outline-none font-mono rounded focus:border-2  border-black"
        />
        <button
          type="submit"
          className="py-1 px-2 bg-blue-300  rounded font-mono hover:bg-blue-400 active:bg-blue-500"
        >
          Search
        </button>
      </Form>
    </Formik>
  );
}
