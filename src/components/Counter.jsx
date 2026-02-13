import React, { useState } from "react";

function Counter() {
  // States pour stocker la valeur initiale et le step entrés par l'utilisateur
  const [initialValue, setInitialValue] = useState(0);
  const [stepValue, setStepValue] = useState(1);

  // State pour le compteur réel
  const [count, setCount] = useState(initialValue);

  // Pour mettre à jour le compteur quand l'utilisateur valide le formulaire
  const handleStart = (e) => {
    e.preventDefault(); // éviter le rechargement de la page
    setCount(Number(initialValue)); // initialiser le compteur
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* Formulaire pour définir initialCount et step */}
      <form onSubmit={handleStart}>
        <div>
          <label>
            Valeur initiale :{" "}
            <input
              type="number"
              value={initialValue}
              onChange={(e) => setInitialValue(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Step :{" "}
            <input
              type="number"
              value={stepValue}
              onChange={(e) => setStepValue(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>
          Démarrer le compteur
        </button>
      </form>

      {/* Affichage du compteur et boutons */}
      <h2>Compteur : {count}</h2>
      <button onClick={() => setCount(count + Number(stepValue))}>
        +{stepValue}
      </button>
      <button onClick={() => setCount(count - Number(stepValue))}>
        -{stepValue}
      </button>
      <button onClick={() => setCount(Number(initialValue))} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
