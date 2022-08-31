import { Persona } from "../../libs/Personas/types";

import styled from "styled-components";

interface CardProps {
  className?: string
  persona: Persona
}

function Card({ className, persona} : CardProps) {

  const { firstname, lastname, email} = persona

  return (
    <div className={className}>
      <span>{firstname} {lastname}</span>
      <p>{email}</p>
    </div>
  )
}

const StyledCard = styled(Card)`
  padding: 1.25rem;
  background-color: #3c424e;
  border-radius: 1rem;

  > span {
    font-size: 1.25rem;
    font-weight: bold;
  }

  > p {
    font-size: 1rem;
  }
`

export default StyledCard