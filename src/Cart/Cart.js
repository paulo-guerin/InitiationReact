
import React, { Component } from 'react';
import CartListItem from '../CartListItem/CartListItem';
import AddItemForm from '../AddItemForm/AddItemForm';

export default class Cart extends Component {
    
    state = {
        animationSeries: [
            {id: 1, title: 'Rick and Morty'},
            {id: 2, title: 'Bojack Horseman'},
            {id: 3, title: 'Steven Universe'},
            {id: 4, title: 'Gravity Falls'},
            {id: 5, title: 'Avatar the last air bender'},
        ],
        compteur: 0,
        newSerie: '',
    };

    constructor(props) {
        super(props);
    }
    
    // Ecrire la fonction sous forme de fonction fléchée permet de lui dire qu'elle fait partie de notre component et permet de récupérer le 'this',
    // Nous aurions également pu lui passer le this et écrire une fonction normale si nous avions lié le 'this' à l'appel de la fonction
    // au niveau du bouton, de deux manières différentes, soit onClick={this.handleClick.bind(this)} soit onClick={()=> this.handleClick()}
    // Pour ces deux derniers cas nous aurions pu écrire la fonction de cette manière : handleClick(){ console.log(this.state)}.
    // Pour le setState => nous lui disont de récupérer l'élément compteur dans le state et de le modifier par compteur + 1.
    // On ne travaille pas diréctement sur les variables dans le state, on les copie en général et on les mets dans une constante
    // avant de les traiter, on utilise slice() ici pour cela.
    handleClick= () => {
        this.setState({compteur: this.state.compteur + 1});
        const animationSeries = this.state.animationSeries.slice();
        animationSeries.push({id:6, title:'Futurama'});
        this.setState( {animationSeries: animationSeries} );
        console.log(this.state);
    }

    handleDelete = (id) => {
        console.log(id);
        const animationSeries = this.state.animationSeries.slice();
        const indexToDiscard = animationSeries.findIndex((serie)=>{
            return serie.id === id
        });
        animationSeries.splice(indexToDiscard, 1);
        // Ici on on pourrait directement écrire this.setState( {animationSeries} ) car React comprends qu'il doit 
        // remplacer l'index animationSeries de status par la variable animationSeries de la fonction vu quelles ont le même nom
        this.setState( {animationSeries: animationSeries} );
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const newSerieId = new Date().getTime();
        const newSerieTitle = this.state.newSerie;
        const newSerie = {id:newSerieId, title: newSerieTitle};
        // Peut aussi s'écrire const newAnimationSeries = [...this.state.animationSeries], à la place du slice
        const newAnimationSeries = this.state.animationSeries.slice();
        newAnimationSeries.push(newSerie);
        this.setState({animationSeries: newAnimationSeries, newSerie: ''});
    }

    handleChange = (event)=>{
        const value = event.currentTarget.value;
        this.setState({newSerie: value});
    }

    render() {
        return(
            <div>
                <h1>Liste de séries animées</h1>
                <button onClick={this.handleClick}>Console Log de this.state</button>
                <ul>
                    {this.state.animationSeries.map((serie) => (
                        <CartListItem details={serie} onDelete={this.handleDelete} key={serie.id}/>
                    ))}
                </ul>
                <AddItemForm value={this.state.newSerie} onSubmit={this.handleSubmit} onChange= {this.handleChange} />
            </div>   
        )
    }
    
}