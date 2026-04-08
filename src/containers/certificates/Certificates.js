import React from "react";
import "./Certificates.css";
import { certificates } from "../../portfolio";

export default function Certificates() {
  if (!certificates.display) return null;

  return (
    <div className="main" id="certificates">
      <h1 className="cert-heading">{certificates.title}</h1>

      {/* ✅ ADD THIS LINE */}
      <p className="cert-subtitle">{certificates.subtitle}</p>

      <p className="cert-link">
        📜 Certificates →{" "}
        <a href={certificates.link} target="_blank" rel="noopener noreferrer">
          View All
        </a>
      </p>
    </div>
  );
}