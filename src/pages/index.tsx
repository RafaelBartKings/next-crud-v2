import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Formulario from '../components/Formulario'
import Botao from '../components/Botao'
import Cliente from '@/core/Cliente'
import { useState } from 'react'

export default function Home() {
   const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
   const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

   const clientes = [
      new Cliente('Andressa', 32, '1'),
      new Cliente('Aline', 34, '2'),
      new Cliente('Rangel', 33, '3  '),
      new Cliente('Rafael', 38, '4')
   ]

   function clienteSelecionado(cliente: Cliente) {
      setCliente(cliente)
      setVisivel('form')
   }

   function clienteExcluido(cliente: Cliente) {
      console.log(`Excluir... ${cliente.nome}`)
   }

   function salvarCliente(cliente: Cliente) {
      console.log(cliente)
      setVisivel('tabela')
   }

   function novoCliente(cliente: Cliente) {
      setCliente(Cliente.vazio())
      setVisivel('form')
   }

   return (
      <div
         className={`
         flex justify-center items-center h-screen
         bg-gradient-to-r from-blue-500 to-purple-500
         text-white
      `}
      >
         <Layout titulo="Cadastro Simples">
            {visivel === 'tabela' ? (
               <>
                  <div className="flex justify-end">
                     <Botao cor="green" className="mb-4" onClick={novoCliente}>
                        Novo Cliente
                     </Botao>
                  </div>
                  <Tabela
                     clientes={clientes}
                     clienteSelecionado={clienteSelecionado}
                     clienteExcluido={clienteExcluido}
                  />
               </>
            ) : (
               <Formulario
                  cliente={cliente}
                  clienteMudou={salvarCliente}
                  cancelado={() => setVisivel('tabela')}
               />
            )}
         </Layout>
      </div>
   )
}
