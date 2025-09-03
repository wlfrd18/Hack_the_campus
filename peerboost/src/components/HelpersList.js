import React, { useState } from "react";
import { FaSlack, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function HelpersList({ problem, helpers, setDashboardData }) {
  const [validatedHelper, setValidatedHelper] = useState(null); // empêche plusieurs validations
  const [showModal, setShowModal] = useState(false);
  const [selectedHelper, setSelectedHelper] = useState(null);

  // Toujours inclure Guele Wilfried
  const finalHelpers = [
    { id: "U005", name: "Guele Wilfried", slack_id: "U005" },
    ...helpers.filter((h) => h.name !== "Guele Wilfried"),
  ];

  const handleContact = (helper) => {
    if (helper.name === "Guele Wilfried") {
      // Redirection vers Slack avec un message pré-rempli
      const slackMessage = encodeURIComponent(
        `Bonjour 👋, j’ai besoin d’aide sur le projet "${problem.project}" (${problem.parcours}).\nDescription: ${problem.description}`
      );
      window.open(
        `https://app.slack.com/client/T0423U1MW21/dms?msg=${slackMessage}`,
        "_blank"
      );
    } else {
      // Pour les autres helpers on simule une redirection Slack
      window.open(`slack://user?team=T123&id=${helper.slack_id}`, "_blank");
    }
  };

  const openValidationModal = (helper) => {
    if (validatedHelper) return; // on ne peut valider qu’une seule personne
    setSelectedHelper(helper);
    setShowModal(true);
  };

  const handleValidation = (isPositive) => {
    setShowModal(false);
    if (!isPositive) return; // coche rouge -> pas de points

    setValidatedHelper(selectedHelper.id);

    // Mise à jour du Dashboard
    setDashboardData((prev) =>
      prev.map((user) =>
        user.name === selectedHelper.name
          ? {
              ...user,
              help: user.help + 1,
              jolt_points: user.jolt_points + 5,
            }
          : user
      )
    );
  };

  return (
    <div className="bg-white p-6 rounded shadow mt-4 w-full max-w-2xl">
      <h3 className="text-lg font-semibold mb-4">
        Helpers disponibles pour "{problem.project}"
      </h3>
      <ul className="space-y-3">
        {finalHelpers.map((helper) => (
          <li
            key={helper.id}
            className="flex justify-between items-center border p-3 rounded"
          >
            <div className="flex items-center gap-2">
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  helper.name
                )}&background=random`}
                alt={helper.name}
                className="w-8 h-8 rounded-full"
              />
              <span>{helper.name}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleContact(helper)}
                className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                <FaSlack /> Contacter
              </button>
              <button
                onClick={() => openValidationModal(helper)}
                disabled={validatedHelper !== null}
                className={`flex items-center gap-1 px-3 py-1 rounded ${
                  validatedHelper
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                <FaCheckCircle /> Valider
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modale validation */}
      {showModal && selectedHelper && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow w-96">
            <h4 className="text-lg font-bold mb-4 text-center">
              Valider l’aide de {selectedHelper.name} ?
            </h4>
            <p className="mb-4 text-gray-600 text-sm text-center">
              Cliquez sur ✅ si cette aide vous a vraiment débloqué, ou ❌ sinon.
            </p>
            <div className="flex justify-center gap-6">
              <button
                onClick={() => handleValidation(true)}
                className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                <FaCheckCircle /> Oui
              </button>
              <button
                onClick={() => handleValidation(false)}
                className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                <FaTimesCircle /> Non
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
