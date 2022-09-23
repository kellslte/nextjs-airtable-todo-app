import '../styles/globals.css'
import { TodosProvider } from '../contexts/TodosContext'
import { UserProvider } from '@auth0/nextjs-auth0'

function MyApp({ Component, pageProps }) {
  return (
    <TodosProvider>
      <UserProvider>
        <div className="container mx-auto my-10 max-w-xl">
          <Component {...pageProps} />
        </div>
      </UserProvider>
    </TodosProvider>
  );
}

export default MyApp
