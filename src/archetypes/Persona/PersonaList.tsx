import { Persona } from "../../libs/Personas/types";
import { usePersonas } from "../../libs/Personas/hooks";

import styled from 'styled-components'
import Card from "./Card";

const ListItems = ({ className, personas }: { className?: string, personas: Persona[] }) => {
  return (
    <section className={className}>
      {personas.map(persona => (
        <Card key={persona.id} persona={persona} />
      ))}
    </section>
  )
}

const StyledListItems = styled(ListItems)`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
`

const List = () => {
  const { personas, loading, error } = usePersonas(8);
  console.log({ personas, loading, error });

  return !!error ? (
    <div>{error}</div>
  ) : !!loading ? (
    <div>Loading...</div>
  ) : !!personas.length ? (
    <StyledListItems personas={personas} />
  ) : (
    <div>No personas found</div>
  )
  
}

export default List