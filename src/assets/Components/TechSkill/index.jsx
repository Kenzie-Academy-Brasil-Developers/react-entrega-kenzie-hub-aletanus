import { React, useContext } from "react";
import trashLogo from "../../../assets/Trash-Delete-Icon.svg";
import editLogo from "../../../assets/Edit-Icon.png";
import { TechContext } from "../../../Context/techContext";

export const TechSkill = ({
  
  className,
  tecnologyName,
  level,
  type,
  hidden,
  onClick,
  tech,
}) => {

  console.log(tech.id)

  const { registerUsersTechSkill, modal, setModal, modalEdit, setModalEdit, techDelete } =
  useContext (TechContext);

  return (
    <li >
      <h3>{tecnologyName}</h3>

      <div>
        <p hidden={hidden}>{level}</p>

        <div>
          <button
            className={className}
            type={type}
            hidden={hidden}
            onClick={() => setModalEdit(true)}
          >
            <figure>
              <img src={editLogo} alt="Edit" />
            </figure>
          </button>

          <button
            className={className}
            type={type}
            hidden={hidden}
            onClick={() => techDelete(tech.id)}
          >
            <figure>
              <img src={trashLogo} alt="Trash" />
            </figure>
          </button>
        </div>
      </div>
    </li>
  );
};
