import React, { useEffect, useState } from 'react';

const api = process.env.REACT_APP_API_URL || 'http://localhost:3000';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [editableCategoryId, setEditableCategoryId] = useState(null); // Track which category is being edited
  const [editedCategory, setEditedCategory] = useState({}); // Track changes to the edited category

  useEffect(() => {
    fetch(`${api}/categories`)
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  // Handle input change for editing category
  const handleInputChange = (categoryId, field, value) => {
    setEditedCategory(prev => ({
      ...prev,
      [categoryId]: {
        ...prev[categoryId],
        [field]: value,
      },
    }));
  };

  // Handle patch request for category update
  const handleSave = (categoryId) => {
    const updatedCategory = editedCategory[categoryId];
    fetch(`${api}/categories/${categoryId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCategory),
    })
      .then(response => {
        if (response.ok) {
          setCategories(categories.map(category =>
            category.CategoryID === categoryId ? { ...category, ...updatedCategory } : category
          ));
          setEditableCategoryId(null); // Exit edit mode
        }
        else {
          alert('Failed to update category');
        }
      });
  };

  // Handle delete request
  const handleDelete = (categoryId) => {
    fetch(`${api}/categories/${categoryId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setCategories(categories.filter(category => category.CategoryID !== categoryId));
        }
        else {
          alert('Failed to delete category');
        }
      });
  };

  return (
    <div>
      <h1>Categories</h1>
      
      <button onClick={() => setEditableCategoryId('new')}>Add New Category</button>
      {editableCategoryId === 'new' && (
        <div>
          <input
            type="text"
            placeholder="Category Name"
            value={editedCategory['new']?.CategoryName || ''}
            onChange={(e) => handleInputChange('new', 'CategoryName', e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={editedCategory['new']?.Description || ''}
            onChange={(e) => handleInputChange('new', 'Description', e.target.value)}
          />
          <button
            onClick={() => {
              const newCategory = editedCategory['new'];
              fetch(`${api}/categories`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCategory),
              })
                .then(response => response.json())
                .then(data => {
                  setCategories([...categories, data]);
                  setEditableCategoryId(null);
                    setEditedCategory(prev => {
                    const { new: _, ...rest } = prev;
                    return rest;
                    });
                    window.location.reload(); // Refresh the page
                });
            }}
          >
            Save
          </button>
          <button onClick={() => setEditableCategoryId(null)}>Cancel</button>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.CategoryID}>
              <td>
                {editableCategoryId === category.CategoryID ? (
                  <input
                    type="text"
                    value={editedCategory[category.CategoryID]?.CategoryName || category.CategoryName}
                    onChange={(e) =>
                      handleInputChange(category.CategoryID, 'CategoryName', e.target.value)
                    }
                  />
                ) : (
                  category.CategoryName
                )}
              </td>
              <td>
                {editableCategoryId === category.CategoryID ? (
                  <input
                    type="text"
                    value={editedCategory[category.CategoryID]?.Description || category.Description}
                    onChange={(e) =>
                      handleInputChange(category.CategoryID, 'Description', e.target.value)
                    }
                  />
                ) : (
                  category.Description
                )}
              </td>
              <td>
                {editableCategoryId === category.CategoryID ? (
                  <>
                    <button onClick={() => handleSave(category.CategoryID)}>Save</button>
                    <button onClick={() => setEditableCategoryId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => setEditableCategoryId(category.CategoryID)}>Edit</button>
                    <button onClick={() => handleDelete(category.CategoryID)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryList;
