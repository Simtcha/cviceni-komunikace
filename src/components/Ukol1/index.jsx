import { useState } from "react";

/*
Zadání: Začneme velmi jednoduše. Zařiďte, aby se po kliknutí na tlačítko zobrazilo jméno, které je
  uvnitř tlačítka. Zatím nejde o žádnou velkou komunikaci mezi komponentami, ale je to základ,
  který budeme dále rozvíjet.
*/

export const Ukol1 = () => {
  const [jmeno, setJmeno] = useState("Jirka");

  return (
    <>
      <p>
        <strong>{jmeno}</strong>
      </p>
      <div>
        <button onClick={()=>setJmeno("Jirka")}>Jirka</button>
        <button onClick={()=>setJmeno("Honza")}>Honza</button>
        <button onClick={()=>setJmeno("Tomas")}>Tomáš</button>
        <button onClick={()=>setJmeno("Simon")}>Šimon</button>
      </div>
    </>
  );
};
