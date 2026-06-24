import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export function Card(props: CardProps) {
  const { children } = props;
  return (
    <div className="movie-card">
      <div className="movie-card card">{children}</div>
    </div>
  );
}
