import React from 'react';

interface SectionTitleProps {
  text?: string;
  children?: React.ReactNode;
}

export default function SectionTitle({ text, children }: SectionTitleProps) {
  return <h2 className="section-title">{text ?? children}</h2>;
}
