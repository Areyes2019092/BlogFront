import { HomePage } from "./pages/home/HomePage"
import { PracticaSupervisada } from "./components/Footer/PracticaSupervisada"
import { Taller } from "./components/Footer/Taller"
import { Tegnologia } from "./components/Footer/Tegnologia"

const routes = [
    { path: '/tegnologia', element: <Tegnologia/>},
    { path: '/taller', element: <Taller/>},
    { path: '*', element: <HomePage/>},
    { path: '/practica', element: <PracticaSupervisada/>}
    
]

export default routes