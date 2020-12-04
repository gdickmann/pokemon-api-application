/* eslint-disable */
import React, { Fragment, useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import DeleteIcon from '@material-ui/icons/DeleteOutline';

import api from 'service/api';

import useStylesCardPokemon from './CardPokemon.styles';
import useStylesTitle from '../titleHome/TitleHome.styles';

import TITLE_HOME_IMAGE from '../../constants/Constants';

import PokemonIcon from '../assets/pokemonAsset/PokemonIcon';

interface Props {
  cards: [
    {
      name: string;
      imageUrl: string;
    },
  ];
}

const CardPokemon = () => {
  const { gridContainer, divContainer } = useStylesCardPokemon();
  const {
    textTitleContainer,
    imageContainer,
    textFieldContainer,
    buttonSearchContainer,
    divContainerTitle,
    divContainerTextField,
  } = useStylesTitle();

  const [pokemons, setPokemons] = useState<Props>();

  async function addAllPokemonsInList(): Promise<void> {
    const response = await api.get<Props>('/cards');
    setPokemons(response.data);
  }

  useEffect(() => {
    addAllPokemonsInList();
  }, []);

  return (
    <Fragment>
      <div className={divContainerTitle}>
        <h1 className={textTitleContainer}>Welcome to the Cards Manager!</h1>
        <img className={imageContainer} src={TITLE_HOME_IMAGE}></img>
      </div>

      <div className={divContainerTextField}>
        <TextField
          variant={'outlined'}
          className={textFieldContainer}
          placeholder={'Search for a pokémon card'}
        ></TextField>

        <Button
          className={buttonSearchContainer}
          variant={'contained'}
          color={'primary'}
        >
          Search
        </Button>
      </div>

      <div className={divContainer}>
        {pokemons?.cards.map(card => (
          <Grid key={card.imageUrl} className={gridContainer}>
            <PokemonIcon src={card.imageUrl}></PokemonIcon>
          </Grid>
        ))}
      </div>
    </Fragment>
  );
};

export default CardPokemon;
