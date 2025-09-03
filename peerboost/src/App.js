import React, { useState } from "react";
import LandingLogin from "./components/Login";
import ProblemForm from "./components/ProblemForm";
import HelpersList from "./components/HelpersList";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [user, setUser] = useState(null); // Utilisateur connecté
  const [problems, setProblems] = useState([]);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [helpers, setHelpers] = useState([]);
  const [dashboardData, setDashboardData] = useState([
    { id: 1, name: "Guele Wilfried", help: 25, jolt_points: 120 },
    { id: 2, name: "Lentz Gonzalez", help: 20, jolt_points: 95 },
    { id: 3, name: "Georges Menheim", help: 18, jolt_points: 85 },
    { id: 4, name: "Mohamed Abdel", help: 15, jolt_points: 70 },
    { id: 5, name: "Fatou Diop", help: 14, jolt_points: 65 },
    { id: 6, name: "Alice Martin", help: 13, jolt_points: 62 },
    { id: 7, name: "Bob Johnson", help: 12, jolt_points: 60 },
    { id: 8, name: "Claire Dubois", help: 11, jolt_points: 58 },
    { id: 9, name: "David Smith", help: 10, jolt_points: 55 },
    { id: 10, name: "Emma Brown", help: 9, jolt_points: 50 },
    { id: 11, name: "John Doe", help: 8, jolt_points: 48 },
    { id: 12, name: "Jane Roe", help: 8, jolt_points: 46 },
    { id: 13, name: "Lucas Petit", help: 7, jolt_points: 44 },
    { id: 14, name: "Sophie Bernard", help: 7, jolt_points: 42 },
    { id: 15, name: "Omar Sy", help: 6, jolt_points: 40 },
    { id: 16, name: "Nina Lopez", help: 6, jolt_points: 38 },
    { id: 17, name: "Paul Walker", help: 5, jolt_points: 36 },
    { id: 18, name: "Marie Curie", help: 4, jolt_points: 34 },
    { id: 19, name: "Alan Turing", help: 3, jolt_points: 32 },
    { id: 20, name: "Ada Lovelace", help: 2, jolt_points: 30 },
  ]);

  if (!user) {
    return <LandingLogin onLogin={setUser} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* HEADER */}
      <header className="flex items-center justify-between p-4 bg-white rounded shadow">
        <div className="flex items-center gap-2">
          <img src="/holberton.png" alt="logo" className="h-8 w-8" />
          <h1 className="text-2xl font-bold text-red-600">PeerBoost</h1>
        </div>
        <nav className="flex gap-4 text-gray-700 items-center">
          {/* Bouton Intranet */}
          <a
            href="https://intranet.hbtn.io/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <img src="/holberton.png" alt="Intranet" className="h-8 w-8" />
          </a>
          {/* Bouton Jolt */}
          <a
            href="https://airtable.com/app59tVVLedC57S5e/pagUGugr8yYu6oV2i"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <img src="/jolt.png" alt="Jolt" className="h-8 w-8" />
          </a>
        </nav>
      </header>

      {/* MAIN */}
      <main className="mt-6 grid md:grid-cols-2 gap-6">
        {/* Formulaire et Helpers */}
        <section>
          <ProblemForm
            user={user}
            problems={problems}
            setProblems={setProblems}
            setSelectedProblem={setSelectedProblem}
            setHelpers={setHelpers}
          />
          {selectedProblem && (
            <HelpersList
              problem={selectedProblem}
              helpers={helpers}
              setDashboardData={setDashboardData}
            />
          )}
        </section>

        {/* Classement */}
        <section>
          <Dashboard data={dashboardData} />
        </section>
      </main>
    </div>
  );
}
