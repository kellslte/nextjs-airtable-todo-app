import Head from 'next/head'
import Navbar from '../components/Navbar'
import Todo from '../components/Todo'
import { table, minifyRecords } from './api/utils/airtable'
import { TodosContext } from '../contexts/TodosContext'
import { useContext } from 'react'
import { useEffect } from 'react'

const Home = ({ records }) => {
  const { todos, setTodos } = useContext(TodosContext);
  
  useEffect(() => {
    setTodos(records)
  }, [])

  return (
    <div>
      <Head>
        <title>Next Js Airtable App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <h1 className="text-6xl font-bold">
         Todo App
        </h1>
        {todos && todos.map(todo => <Todo key={todo.id} todo={todo} />)}
      </main>
    </div>
  )
}

export default Home
export async function getServerSideProps(context) {
  try {
    const todoRows = await table.select({}).firstPage();

  return {
    props: {
      records: minifyRecords(todoRows)
    },
    }
  } catch(err) {
    console.log(err)
    return {
      props: {
      error: err.message || 'Something went wrong'
    }}
  }
}