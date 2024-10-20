/*
Zadání: Vyřešte tento úkol podobně jako předchozí, pouze s tím rozdílem, že tentokrát budete mít
  dvě pole, do kterých uživatel může psát jméno a příjmení. Výsledné jméno a příjmení se mají
  zobrazit pod nadpisem oddělené mezerou. Budete tedy potřebovat dva stavy, každý pro jedno pole.
*/

import { useState } from "react";
import { InputField } from "./InputField";

export const Ukol5 = () => {

  const [jmeno, setJmeno] = useState('');
  const [prijmeni, setPrijmeni] = useState('');

  return (
    <>
      <p>Jméno: {jmeno} {prijmeni}</p>
      <InputField label="Jméno" type="text" value={jmeno} onValueChange={(newValue) =>setJmeno(newValue)}/>
      <InputField label="Příjmení" type="text" value={prijmeni} onValueChange={(newValue) =>setPrijmeni(newValue)} />
    </>
  );
};
