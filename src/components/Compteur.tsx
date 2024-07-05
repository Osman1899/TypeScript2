import React, { Component } from 'react';

// Définir une interface pour les props (s'il y en a) et pour l'état
interface CompteurState {
  count: number;
}

// Créer la classe Compteur avec les types appropriés
class Compteur extends Component<{}, CompteurState> {
  // Initialiser l'état avec les types appropriés
  state: CompteurState = {
    count: 0
  };

  // Définir la méthode d'incrémentation avec les types appropriés
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Définir la méthode render avec les types appropriés
  render() {
    const { count } = this.state;
    return (
      <div>
        <p>Compte : {count}</p>
        <button onClick={this.increment}>Incrément</button>
      </div>
    );
  }
}

export default Compteur;
