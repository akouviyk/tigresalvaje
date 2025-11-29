import { Helmet } from 'react-helmet-async'
import Hero from '../components/home/Hero'
import Mission from '../components/home/Mission'
import TheProblem from '../components/home/TheProblem'
import TheSolution from '../components/home/TheSolution'
import ImpactCounter from '../components/home/ImpactCounter'
import HowToHelp from '../components/home/HowToHelp'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Tigre Salvaje | Protecting Sea Turtles & Wildlife in Panama</title>
        <meta 
          name="description" 
          content="Honor David Teichmann's legacy. Support beach patrols, protect nests, restore habitat. 100,000+ hatchlings released since 2005. Donate today." 
        />
        <meta 
          name="keywords" 
          content="sea turtle conservation Panama, Punta Burica turtles, donate sea turtles, David Teichmann, wildlife sanctuary Panama" 
        />
      </Helmet>

      <Hero />
      <Mission />
      <TheProblem />
      <TheSolution />
      <ImpactCounter />
      <HowToHelp />
    </>
  )
}
