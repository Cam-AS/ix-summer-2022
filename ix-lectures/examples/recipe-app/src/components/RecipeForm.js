import React, { useState } from 'react';

export default function RecipeForm(props) {
  const [title, setTitle] = useState('');
  const [instructions, setInstructions] = useState('');

  function createRecipe(e) {
    e.preventDefault();

    props.addRecipe(title, instructions);

    setTitle('');
    setInstructions('');
  }

  return (
    <div className="container mt-5">
      <div className="card card-body">
        <div className="text-center">
          <h1>Add a new Recipe</h1>
        </div>
        <div className="mx-5">
          <hr />
        </div>

        <form onSubmit={(e) => createRecipe(e)}>
          <div className="mb-3">
            <label className="form-label">Recipe Name:</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Add the name of your recipe"
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Recipe Instructions:</label>
            <textarea
              className="form-control"
              rows="5"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-outline-secondary px-5">
              Add Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
