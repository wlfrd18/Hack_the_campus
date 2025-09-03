import React, { useState } from "react";

const parcoursOptions = {
  "Foundations v2 - Part 1": ["Project 1A", "Project 1B"],
  "Foundations v2 - Part 2": ["Project 2A", "Project 2B"],
  "Foundations v2 - Part 3": ["Project 3A", "Project 3B"],
  "HBnB v2": ["Project HBnB 1", "Project HBnB 2"],
  "RNCP 5 - Parcours de préparation": ["RNCP5 Project 1", "RNCP5 Project 2"],
  "RNCP 6 - Parcours de préparation": ["RNCP6 Project 1", "RNCP6 Project 2"],
  "Cybersecurity - Alternance": ["Cybersecurity Project 1", "Cybersecurity Project 2"],
};

// Base globale de 20 helpers
const allHelpers = [
  { id: 1, name: "Mohamed Abdel", slack_id: "U001" },
  { id: 2, name: "Sarah Lopez", slack_id: "U002" },
  { id: 3, name: "Georges Menheim", slack_id: "U003" },
  { id: 4, name: "Lentz Gonzalez", slack_id: "U004" },
  { id: 5, name: "Guele Wilfried", slack_id: "U005" },
  { id: 6, name: "Alice Dupont", slack_id: "U006" },
  { id: 7, name: "Karim Othman", slack_id: "U007" },
  { id: 8, name: "Nadia Benali", slack_id: "U008" },
  { id: 9, name: "Youssef Amrani", slack_id: "U009" },
  { id: 10, name: "Fatou Ndiaye", slack_id: "U010" },
  { id: 11, name: "Pierre Dubois", slack_id: "U011" },
  { id: 12, name: "Laura Martin", slack_id: "U012" },
  { id: 13, name: "Hugo Morel", slack_id: "U013" },
  { id: 14, name: "Inès Rahmani", slack_id: "U014" },
  { id: 15, name: "David Cohen", slack_id: "U015" },
  { id: 16, name: "Sophie Bernard", slack_id: "U016" },
  { id: 17, name: "Omar El Idrissi", slack_id: "U017" },
  { id: 18, name: "Julie Caron", slack_id: "U018" },
  { id: 19, name: "Antoine Lefèvre", slack_id: "U019" },
  { id: 20, name: "Mariam Diallo", slack_id: "U020" },
];

// Fonction utilitaire pour tirer 6–20 helpers différents avec toujours Guele Wilfried inclus
function getRandomHelpers() {
  const shuffled = [...allHelpers].filter((h) => h.name !== "Guele Wilfried");
  shuffled.sort(() => 0.5 - Math.random());
  const count = Math.floor(Math.random() * (20 - 6 + 1)) + 6;
  const selected = shuffled.slice(0, count - 1);
  return [{ id: 5, name: "Guele Wilfried", slack_id: "U005" }, ...selected];
}

export default function ProblemForm({ user, setSelectedProblem, setHelpers }) {
  const [parcours, setParcours] = useState("");
  const [project, setProject] = useState("");
  const [description, setDescription] = useState("");

  const handleParcoursChange = (e) => {
    setParcours(e.target.value);
    setProject("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const problem = {
      user: user.name,
      parcours,
      project,
      description,
    };
    setSelectedProblem(problem);

    // Toujours entre 6 et 20 helpers (avec Guele Wilfried inclus)
    const helpers = getRandomHelpers();
    setHelpers(helpers);

    // reset du formulaire
    setParcours("");
    setProject("");
    setDescription("");
  };

  return (
    <div className="bg-white p-6 rounded shadow w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Signaler un blocage</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="font-semibold">Choisir le parcours</span>
          <select
            className="w-full border p-2 rounded mt-1"
            value={parcours}
            onChange={handleParcoursChange}
            required
          >
            <option value="">-- Sélectionnez un parcours --</option>
            {Object.keys(parcoursOptions).map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>

        {parcours && (
          <label className="block mb-4">
            <span className="font-semibold">Choisir le projet</span>
            <select
              className="w-full border p-2 rounded mt-1"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              required
            >
              <option value="">-- Sélectionnez un projet --</option>
              {parcoursOptions[parcours].map((proj) => (
                <option key={proj} value={proj}>
                  {proj}
                </option>
              ))}
            </select>
          </label>
        )}

        {project && (
          <label className="block mb-4">
            <span className="font-semibold">Décrivez votre blocage</span>
            <textarea
              className="w-full border p-2 rounded mt-1"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Expliquez clairement ce qui vous bloque..."
              required
            />
          </label>
        )}

        <button
          type="submit"
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition w-full"
        >
          Poster le problème
        </button>
      </form>
    </div>
  );
}
