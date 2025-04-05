// pages/MasterDataManagement.jsx
import React, { useState } from "react";

const initialData = {
  countries: ["India", "USA", "Canada", "UK", "Other"],
  genders: ["Male", "Female", "Other", "Prefer not to say"],
  maritalStatus: [
    "Single",
    "Married",
    "Divorced",
    "Widow",
    "Prefer not to say",
  ],
  titles: ["Mr.", "Mrs.", "Ms.", "Dr."],
  relations: ["Father", "Mother", "Sibling", "Friend", "Spouse"],
  currency: ["INR", "USD", "EUR", "GBP", "AUD"],
  employeeStatus: ["Active", "On Leave", "Terminated", "Resigned"],
  bloodGroup: [
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
    "BOM",
    "Not Sure",
  ],
  frequencies: ["Monthly", "Biweekly", "Weekly", "Daily"],
  paymentMethod: ["Bank Transfer", "Cheque", "Cash"],
  employementType: [
    "Full time",
    "Part-Time",
    "Consultant",
    "Volunteer",
    "Intern",
  ],
};

const MasterDataManagement = () => {
  const [masterData, setMasterData] = useState(initialData);
  const [selectedCategory, setSelectedCategory] = useState("countries");
  const [newValue, setNewValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedValue, setEditedValue] = useState("");

  const currentValues = masterData[selectedCategory];

  const handleAdd = () => {
    const trimmed = newValue.trim();
    if (!trimmed) return;
    if (currentValues.includes(trimmed)) {
      alert("Value already exists!");
      return;
    }

    const updated = {
      ...masterData,
      [selectedCategory]: [...currentValues, trimmed],
    };

    setMasterData(updated);
    setNewValue("");
  };

  const handleDelete = (valueToDelete) => {
    const updated = {
      ...masterData,
      [selectedCategory]: currentValues.filter((v) => v !== valueToDelete),
    };
    setMasterData(updated);
    setEditingIndex(null);
  };

  const handleEditSave = () => {
    const trimmed = editedValue.trim();
    if (!trimmed) return;
    if (currentValues.includes(trimmed)) {
      alert("Value already exists!");
      return;
    }

    const updated = [...currentValues];
    updated[editingIndex] = trimmed;

    setMasterData({
      ...masterData,
      [selectedCategory]: updated,
    });

    setEditingIndex(null);
    setEditedValue("");
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6">Master Data Management</h1>

      {/* Category Selector */}
      <div className="mb-4">
        <label className="mr-2 font-medium">Choose a category:</label>
        <select
          className="text-black outline-none px-3 py-1 border border-gray-400 rounded"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setEditingIndex(null);
          }}
        >
          {Object.keys(masterData).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Add New Value */}
      <div className="flex items-center gap-3 mb-6">
        <input
          className="text-black outline-none focus:border-blue-600 border border-gray-400 px-4 py-2 rounded w-full"
          type="text"
          placeholder={`Add new value to "${selectedCategory}"`}
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
        >
          Add
        </button>
      </div>

      {/* Values List */}
      <div className="bg-white text-black rounded shadow p-4">
        <h2 className="text-xl font-semibold mb-4 capitalize">
          {selectedCategory} List
        </h2>

        {currentValues.length === 0 ? (
          <p className="text-gray-500">No values found.</p>
        ) : (
          <ul className="space-y-3">
            {currentValues.map((value, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b border-gray-200 pb-2"
              >
                {editingIndex !== null && editingIndex === index ? (
                  <input
                    className="border border-gray-400 rounded px-2 py-1 w-full mr-4"
                    value={editedValue}
                    onChange={(e) => setEditedValue(e.target.value)}
                  />
                ) : (
                  <span>{value}</span>
                )}

                <div className="flex gap-3">
                  {editingIndex !== null && editingIndex === index ? (
                    <>
                      <button
                        onClick={handleEditSave}
                        className="text-green-600 cursor-pointer hover:underline"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => {
                          setEditingIndex(null);
                          setEditedValue("");
                        }}
                        className="text-gray-600 cursor-pointer hover:underline"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setEditingIndex(index);
                          setEditedValue(value);
                        }}
                        className="text-blue-600 cursor-pointer hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(value)}
                        className="text-red-600 cursor-pointer hover:underline"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MasterDataManagement;
