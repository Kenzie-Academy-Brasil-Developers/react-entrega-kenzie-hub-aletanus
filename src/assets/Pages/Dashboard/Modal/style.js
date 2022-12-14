import styled from "styled-components";

export const StyledModalCreateTecnology = styled.div`

  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--backgroud-opacity);
  transition: 1s;

    div {
        background-color: var(--grey-2);
        border: solid 1px var(--backgroud-opacity);
        border-radius: var(--radius-1);
        width: 60%;
    }

    div > header {
        display: flex;
        align-items: center;
        flex-direction: row;
        padding: 8px 16px;
    }

    div > header > #h2 {
        font-size: var(--unit-rem-14);
        margin-bottom: 0px;
    }

    header > button {
        color: var(--grey-1);
        font-size: var(--unit-rem-24);
        font-weight: var(--font-weight-5);
        line-height: var(--font-line-height-1);
        transform: rotateX(45deg);
    }

    div > form {
        background-color: var(--grey-3);
        border: solid 1px var(--grey-3);
        padding: 0px 16px;
        padding-top: 16px;
    }

    div > form > fieldset > input {
        display: flex;
        width: 100%;
    }

`;