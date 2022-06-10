import React from 'react';

export default function RecipeList(props) {
  return (
    <div className="container my-5">
      <div className="text-center mb-3">
        <h1>My Recipes</h1>
      </div>
      <div className="accordion">
        {props.recipes.map((recipe) => (
          <div key={recipe.id} className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={'#accordian' + recipe.id}
              >
                {recipe.title}
              </button>
            </h2>
            <div id={'accordian' + recipe.id} className="accordion-collapse collapse">
              <div className="accordion-body">
                <div className="text-center">{recipe.instructions}</div>
                <div className="d-flex justify-content-end mt-5">
                  <button className="btn btn-primary me-1">
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button className="btn btn-danger ms-1">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
