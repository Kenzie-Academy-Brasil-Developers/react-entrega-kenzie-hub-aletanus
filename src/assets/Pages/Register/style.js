import styled from "styled-components"

export const StyledRegister = styled.div`
    
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 114px 12px 50px;

    main {
        background-color: var(--grey-3);
        border: solid 1px var(--grey-3);
        border-radius: var(--radius-1);
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 35px;
        padding: 42px 22px;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
    }

    nav > .gray-button{
        width: fit-content;
    }

    main > h2 {
        color: var(--grey-0);
        font-size: var(--unit-rem-18);
        font-weight: var(--font-weight-7);
        line-height: var(--font-line-height-1);
        margin-bottom: 28px;
    }

    main > form > div {
        display: flex;
        justify-content: center;
    }

    .p {
        color: var(--grey-1);
        font-size: var(--unit-rem-14);
        font-weight: var(--font-weight-6);
        margin: 0 0 22px 0;
    }

    /* @media (min-width: 1024px) {
    }
    @media (min-width: 2000px){

    }
    @media (min-width: 2700px){
    } */

`

// export const StyledUl = styled.ul`
    

//     /* @media (min-width: 1024px){
//     } 
//     @media (min-width: 2000px){
   
//     } */
    
// `