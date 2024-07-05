"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/components/Greeting.tsx
const react_1 = __importDefault(require("react")); // Importer React et le type FunctionComponent
// Définir le composant Greeting avec des types de props explicites
const Greeting = ({ name }) => {
    // La prop 'name' est de type string
    return react_1.default.createElement("div", null,
        "Bonjour, ",
        name,
        "!");
};
// Exporter le composant par défaut
exports.default = Greeting;
