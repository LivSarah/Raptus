import React from "react";
import "./PageHeader.scss";

export const PageHeader = ({ title, preTitle }) => (
  <header className="PageHeader">
    <h1>
      <span className="pre-title">{preTitle}</span> {title}
    </h1>
  </header>
);
