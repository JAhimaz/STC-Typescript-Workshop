import { useEffect, useState } from "react";
import { Persona } from "./types";

export const usePersonas = (count?: number) => {

  const [personas, setPersonas] = useState<Persona[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  if(!count) count = 5;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setPersonas([])
      await fetch(`https://fakerapi.it/api/v1/persons?_quantity=${count}`)
        .then(res => res.json())
        .then(jsonData => {
          if(jsonData.code === 200) {
            return jsonData.data
          }else{
            throw new Error(jsonData.code + ": " + jsonData.status)
          }
        })
        .then(persona => {
          setPersonas(persona.map((persona : any) : Persona => {
            return {
              id: persona.id,
              firstname: persona.firstname,
              lastname: persona.lastname,
              email: persona.email,
              gender: persona.gender,
              country: persona?.address?.country
            }
          }))
          setLoading(false)
        })
        .catch(err => setError(err.toString()));
    };

    fetchData();

  }, [count]);

  return {
    personas,
    loading,
    error
  };
}