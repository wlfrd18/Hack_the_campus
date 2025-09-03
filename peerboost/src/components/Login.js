import React, { useState } from "react";
import { FaUser, FaLock, FaGithub, FaLinkedin } from "react-icons/fa";

const fakeUsers = [
  { email: "10009@holbertonstudents.com", password: "dede2025", name: "Alice" },
  { email: "10008@holbertonstudents.com", password: "dede2024", name: "Bob" },
];

export default function LandingLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = fakeUsers.find((u) => u.email === email && u.password === password);
    if (user) {
      setError("");
      onLogin(user);
    } else {
      setError("Email ou mot de passe invalide");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-black"
      style={{
        backgroundImage: `url(/holberton.png)`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay pour lisibilité */}
      <div className="flex-1 bg-black bg-opacity-50 flex flex-col lg:flex-row">
        {/* Section description du projet */}
        <div className="flex-1 text-white p-8 flex flex-col justify-center items-center lg:items-start">
          <img src="/holberton.png" alt="Holberton Logo" className="h-20 mb-6" />
          <h1 className="text-4xl font-bold mb-4 text-center lg:text-left">PeerBoost</h1>
          <p className="mb-4 text-center lg:text-left max-w-md">
            PeerBoost est une plateforme qui permet aux étudiants de signaler rapidement
            les blocages rencontrés sur leurs projets Holberton. Connectez-vous avec vos
            identifiants Holberton pour accéder à votre espace et poster vos problèmes.
          </p>
          <p className="mb-4 text-center lg:text-left max-w-md">
            Grâce à une interface simple et intuitive, vous pouvez choisir votre parcours,
            sélectionner le projet concerné et soumettre votre blocage. L'équipe de
            support pourra ensuite vous aider plus efficacement.
          </p>
        </div>

        {/* Section login */}
        <div className="flex-1 flex justify-center items-center p-8">
          <form
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Connexion Holberton</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4 flex items-center border rounded p-2">
              <FaUser className="mr-2 text-gray-500" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none"
                required
              />
            </div>
            <div className="mb-4 flex items-center border rounded p-2">
              <FaLock className="mr-2 text-gray-500" />
              <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>

      {/* Footer avec liens des fondateurs */}
      <footer className="bg-gray-900 text-white text-center p-6">
        <p className="mb-4 font-semibold">Fondateurs :</p>
        <div className="flex justify-center gap-12 flex-wrap">
          {/* Guele Wilfried */}
          <div className="flex flex-col items-center">
            <span className="font-medium">Guele Wilfried</span>
            <div className="flex gap-2 mt-1">
              <a href="https://github.com/wlfrd18" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-gray-400">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/wilfried-guele-5a456a190" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-gray-400">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          {/* Lentz Gonzalez */}
          <div className="flex flex-col items-center">
            <span className="font-medium">Lentz Gonzalez</span>
            <div className="flex gap-2 mt-1">
              <a href="https://github.com/Gr3nvaltblack" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-gray-400">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/lentz-gonzalez" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-gray-400">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          {/* Georges Menheim */}
          <div className="flex flex-col items-center">
            <span className="font-medium">Georges Menheim</span>
            <div className="flex gap-2 mt-1">
              <a href="https://github.com/georges479" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-gray-400">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/georges-menheim" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-gray-400">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
