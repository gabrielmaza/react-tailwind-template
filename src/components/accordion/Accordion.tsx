import React, { ReactNode, useState } from "react";
import "./accordion.css";

interface AccordionProps {
  children: ReactNode;
}

const Accordion = ({ children }: AccordionProps) => {
  return <div className="accordion">{children}</div>;
};

export default Accordion;
