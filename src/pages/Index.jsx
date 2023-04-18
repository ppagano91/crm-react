import React from "react";

// El "loader" ejecuta cuando el componente cargue: IDEAL para cargar un State o consultar una API y obtener un resultado para mostrar en el componente
export function loader() {
  return "Loader";
}

const Index = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>
    </>
  );
};

export default Index;
