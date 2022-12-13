import styled from "styled-components";

export const StyledPageTemplate = styled.div`
    
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 114px 12px 50px;

    main {
        /* background-color: var(--grey-3); */
        /* border: solid 1px var(--grey-3); */
        border-radius: var(--radius-1);
        display: flex;
        align-items: center;
        flex-direction: column;
        border-top: solid 1px var(--grey-3);
        padding-top: 18px
        /* margin-top: 35px; */
        /* padding: 42px 22px; */
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        border-bottom: solid 1px var(--grey-3);
        margin-bottom: 18px
    }

    nav > .gray-button{
        width: fit-content;
    }
    
    #h2 {
        color: var(--grey-0);
        font-size: var(--unit-rem-18);
        font-weight: var(--font-weight-7);
        line-height: var(--font-line-height-1);
        margin-bottom: 28px;
    }

    header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
    } 

    main {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    main > header {
        display: flex;
        flex-direction: row;
    }

    main > header > button {
        background-color: var(--grey-3);
        border: solid 1px var(--grey-3);
        border-radius: var(--radius-1);

        color: var(--grey-0);
        font-size: var(--unit-rem-20);
        font-weight: var(--font-weight-5);
        line-height: var(--font-line-height-1);

        height: 32px;
        width: 32px;
        /* margin: 0 0 22px;
        padding: 0 16px; */
    }

    main > header > button:hover {
        background-color: var(--grey-2);
        border: solid 1px var(--grey-2);
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

    article {
        background-color: var(--grey-3);
        border: solid 1px var(--grey-3);
        border-radius: var(--radius-1);
        width: 100%;
        padding:22px;
    }

    
    article > section {
        background-color: var(--grey-4);
        font-size: var(--unit-rem-18);
        font-weight: var(--font-weight-7);
        line-height: var(--font-line-height-1);
        padding:22px;
    }
    
    article > section:hover {
        background-color: var(--grey-2);
    }

    article > section > h3 {
        color: var(--grey-0);
        font-size: var(--unit-rem-18);
        font-weight: var(--font-weight-7);
        line-height: var(--font-line-height-1);
    }

    article > section > p {
        /* color: var(--grey-0);
        font-size: var(--unit-rem-18);
        font-weight: var(--font-weight-7);
        line-height: var(--font-line-height-1); */
    }

    article > section > button {
     
    }


    /* @media (min-width: 1024px) {
    }
    @media (min-width: 2000px){

    }
    @media (min-width: 2700px){
    } */

`;

// export const StyledUl = styled.ul`
    

//     /* @media (min-width: 1024px){
//     } 
//     @media (min-width: 2000px){
   
//     } */
    
// `;