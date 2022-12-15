import React, { useState, useEffect } from "react";
import { Navbar } from "../../Components/Navbar";
import { Header } from "../../Components/Header";
import { TechSkill } from "../../Components/TechSkill";
import { UserContext } from "../../../Context/userContext";
import { TechContext } from "../../../Context/techContext";
import { useContext } from "react";
import { StyledPageTemplate } from "../../../Styles/page-template";
import { ModalCreateTecnology } from "./Modal";

export const DashboardPage = () => {
  const {
    toast,
    navigate,
    loggedUserData,
    setloggedUserData,
    loading,
    navigateToLogin,
  } = useContext(UserContext);

  const { registerUsersTechSkill, modal, setModal } =
    useContext(TechContext);

  console.log(loggedUserData);

  const logout = (even) => {
    even.preventDefault();
    localStorage.removeItem("@USER.TOKEN");
    localStorage.removeItem("@USER.ID");
    setTimeout(() => {
      toast.success(`${loggedUserData.name.toUpperCase().trim()}, até logo!`);
    }, 100);
    setTimeout(() => {
      setloggedUserData(null);
      navigate("/");
    }, 4000);
  };

  return (
    <>
      {loggedUserData && (
        <StyledPageTemplate>
          <Navbar buttonTitle="Sair" type="" onClick={(even) => logout(even)} />
          <Header
            username={`Olá, ${loggedUserData.name}!`}
            pDescription={`${loggedUserData.course_module}`}
            hidden={true}
            id="h2"
            className="p"
          />

          <main>
            <Header
              id="h2"
              className="p"
              username="Tecnologias"
              buttonTitle="+"
              type="button"
              onClick={() => setModal(true)}
            />

            <section>
              <article>
                <ul>
                  {!loggedUserData.techs ? (
                    <TechSkill
                      tecnologyName={`Utilize o botão "${"+"}"  para adicionar a sua primeira tecnologia.`}
                      type="button"
                      hidden={true}
                    />
                  ) : (
                    loggedUserData.techs.map((tech) => (
                      <TechSkill
                        tech={tech}
                        key={`${tech.id}`}
                        tecnologyName={`${tech.title}`}
                        level={`${tech.status}`}
                        type="button"
                      />
                    ))
                  )}
                </ul>
              </article>
            </section>
          </main>

          {modal && (
            <ModalCreateTecnology
              registerUsersTechSkill={registerUsersTechSkill}
            />
          )}
        </StyledPageTemplate>
      )}
    </>
  );
};
