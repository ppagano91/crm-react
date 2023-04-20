import { useLoaderData } from "react-router-dom";
import React from "react";
import Cliente from "../components/Cliente";
import { obtenerClientes } from "../data/clientes";

/*
  El "loader" ejecuta cuando el componente cargue: IDEAL para cargar un State o consultar una API y obtener un resultado para mostrar en el componente
  La función loader() es como una petición GET
*/
export function loader() {
  const clientes = obtenerClientes();

  return clientes;
}

const Index = () => {
  const clientes = useLoaderData();
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>
      {clientes.length > 0 ? (
        <table className="w-full bg-white mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Clientes</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <Cliente cliente={cliente} key={cliente.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10"></p>
      )}
    </>
  );
};

export default Index;
