import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../../redux/charactersSlice';
import { Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Characters = () => {
  const dispatch = useDispatch();
  const { characters, next, previous, status } = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(fetchCharacters('https://swapi.dev/api/people'));
  }, [dispatch]);

  return (
    <Container>
      <h2>Star Wars Characters</h2>
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Height</TableCell>
                <TableCell>Mass</TableCell>
                <TableCell>Hair Color</TableCell>
                <TableCell>Skin Color</TableCell>
                <TableCell>Eye Color</TableCell>
                <TableCell>Birth Year</TableCell>
                <TableCell>Gender</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {characters.map((character) => (
                <TableRow key={character.name}>
                  <TableCell>{character.name}</TableCell>
                  <TableCell>{character.height}</TableCell>
                  <TableCell>{character.mass}</TableCell>
                  <TableCell>{character.hair_color}</TableCell>
                  <TableCell>{character.skin_color}</TableCell>
                  <TableCell>{character.eye_color}</TableCell>
                  <TableCell>{character.birth_year}</TableCell>
                  <TableCell>{character.gender}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        {previous && <Button onClick={() => dispatch(fetchCharacters(previous))}>Previous</Button>}
        {next && <Button onClick={() => dispatch(fetchCharacters(next))}>Next</Button>}
      </div>
    </Container>
  );
};

export default Characters;
