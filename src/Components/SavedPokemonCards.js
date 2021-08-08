import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePokemon } from "../store/slices/pokemonSlice";
import { makeStyles } from "@material-ui/styles";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Card from './Card';

const useStyles = makeStyles({
  root: {
    display: "grid",
    width: '100%',
    height: '100vh',
    justifyContent: "space-evenly",
    gridTemplateColumns: "auto auto auto auto",
    gap: '2rem',
    paddingTop: "1rem",
  },
  // cardRoot: {
  //   width: "200px",
  //   border: "10px solid black",
  //   padding: "1rem",
  //   overflow: "hidden",
  //   boxShadow: "0 2px 20px black",
  //   borderRadius: "5px",
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "space-between",
  //   alignItems: 'center',
  //   cursor: "pointer",
  //   transition: "transform 200ms ease-in",
  // },
  // image: {
  //   border: '1px solid black',
  //   backgroundColor: 'yellow',
  //   width: '90%'
  // },
  // name: {
  //   color: 'red',
  //   fontSize: '20px'
  // }
});

const SavedPokemonCards = () => {
  const classes = useStyles();
  const pokemonList = useSelector((state) => state.pokemon.pokemon);
  const dispatch = useDispatch();

  const deletePokemonHandler = (id) => {
    dispatch(deletePokemon(id));
  };

  const pokemonTable = pokemonList.map((pokemon) => (
    <Card pokemon={pokemon} />
  ));

  // <div className="card">
  //     <div className="card__body">
  //       <img src={props.img} class="card__image" />
  //       <h2 className="card__title">{props.title}</h2>
  //       <p className="card__description">{props.description}</p>
  //     </div>
  //     <button className="card__btn">View Recipe</button>
  //   </div>

  // *,
  // *::before,
  // *::after {
  //   box-sizing: border-box;
  //   margin: 0;
  //   padding: 0;
  // }

  // .wrapper {
  //   display: grid;
  //   grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
  //   gap: 2rem;
  //   justify-content: center;
  // }

  // .card {
  //   overflow: hidden;
  //   box-shadow: 0 2px 20px $clr-gray300;
  //   border-radius: $radius;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-between;
  //   cursor: pointer;
  //   transition: transform 200ms ease-in;

  //   &__image {
  //     height: 12rem;
  //     width: 100%;
  //     object-fit: cover;
  //   }

  //   &__title {
  //     padding: 1rem;
  //   }

  //   &__description {
  //     padding: 0 1rem;
  //   }

  //   &__btn {
  //     padding: 1rem;
  //     font-family: inherit;
  //     font-weight: bold;
  //     font-size: 1rem;
  //     margin: 1rem;
  //     border: 2px solid $clr-primary;
  //     background: transparent;
  //     color: $clr-primary;
  //     border-radius: $radius;
  //     transition: background 200ms ease-in, color 200ms ease-in;
  //   }

  //   &:hover {
  //     transform: scale(1.02);
  //   }

  //   &:hover &__btn {
  //     background: $clr-primary;
  //     color: white;
  //   }
  // }

  return <div className={classes.root}>{pokemonTable}</div>;
};

export default SavedPokemonCards;
