import styled from 'styled-components';

export const AppDiv = styled('div')`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 40px;
  color: #010101;
  background-color: #c2baba;

  div > ul {
    list-style: none;
    display: flex;
    gap: 20px;
    padding: 0;
    margin: 0;
    margin-top: 50px;
  }

  .button-list {
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  button {
    width: 100%;
    min-width: 100px;
    height: 50px;
    display: block;
    font-size: 20px;
    text-transform: capitalize;
    border-radius: 10px;
  }

  .stat-list {
    flex-direction: column;
    width: 500px;
  }

  .no-fdbc-msg {
    width: 500px;
    margin-top: 50px;
    font-weight: bold;
    font-size: 50px;
  }
`;
