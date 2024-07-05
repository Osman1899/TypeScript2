// src/components/Greeting.tsx
import React, { FC } from 'react'; // Importer React et le type FunctionComponent

// Définir une interface pour les props
interface GreetingProps {
    name: string; // La prop 'name' est de type string
}

// Définir le composant Greeting avec des types de props explicites
const Greeting: FC<GreetingProps> = ({ name }) => {
    // La prop 'name' est de type string
    return <div>Bonjour, {name}!</div>;
};

// Exporter le composant par défaut
export default Greeting;
