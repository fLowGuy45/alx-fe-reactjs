import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecommendationsList = () => {
  const { recommendations } = useRecipeStore((state) => ({
    recommendations: state.recommendations,
  }));

  if (recommendations.length === 0) return <p>No recommendations yet.</p>;

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '1rem' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
