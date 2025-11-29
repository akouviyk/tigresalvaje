import { Link } from 'react-router-dom'

export default function DonateButton() {
  return (
    <Link
      to="/donate"
      className="fixed bottom-8 right-8 z-40 bg-sunset-coral text-white px-6 py-4 rounded-full font-bold shadow-2xl hover:bg-hatchling-olive transition-all hover:scale-105 flex items-center space-x-2"
    >
      <span>💚</span>
      <span>Donate</span>
    </Link>
  )
}
