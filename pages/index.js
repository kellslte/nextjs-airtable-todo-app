import Head from 'next/head'
import Navbar from '../components/Navbar'
import Todo from '../components/Todo'
import { table, minifyRecords } from './api/utils/airtable'
import { TodosContext } from '../contexts/TodosContext'
import { useContext } from 'react'
import { useEffect } from 'react'
import { getSession } from '@auth0/nextjs-auth0'
import TodoForm from '../components/TodoForm'

const Home = ({ records, user }) => {
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
      <Navbar user={user} />
      <main>
        {user && (
          <>
          <h1 className="text-2xl text-center mb-4">
            My Todos
          </h1>
            <TodoForm />
            <ul>
            {todos && todos.map(todo => <Todo key={todo.id} todo={todo} />)}    
            </ul>
          </>
        )}
      </main>
    </div>
  )
}

export default Home
export async function getServerSideProps(context) {

  const session = await getSession(context.req, context.res);

  try {
    const todoRows = await table.select({}).firstPage();

  return {
    props: {
      records: minifyRecords(todoRows),
      user: session?.user || null
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