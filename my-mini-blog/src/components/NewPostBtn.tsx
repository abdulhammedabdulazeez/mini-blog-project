import React from "react";
import { FaPlus } from "react-icons/fa";

const NewPostBtn: React.FC = () => {
    return (
      <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600">
        <FaPlus className="mr-2" />
        New Post
      </button>
    );
}

export default NewPostBtn