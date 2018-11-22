import styled from 'styled-components';

const Grid = styled.div`
  width: 55vh;
  height: 55vh;
  display: grid;

  grid-column-gap: 5vh;
  grid-row-gap: 5vw;

  grid-template-columns: repeat(${({ colNumber }) => colNumber || 1}, 1fr);
  grid-template-rows: repeat(${({ rowNumber }) => rowNumber || 1}, 1fr);
`;

export { Grid };
