import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddUser from './components/AddUser'
import AppLayout from './pages/AppLayout'
import Navbar from './components/Navbar'
import ChatContainer from './components/ChatContainer'
import Login from './pages/Login'

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="user/:id" element={<ChatContainer />} />
          </Route>
          <Route path="user/new" element={<AddUser />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}
