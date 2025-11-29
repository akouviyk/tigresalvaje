import { Link } from 'react-router-dom';

export default function DonateButton() {
  return (
    <Link
      to="/donate"
      className="fixed bottom-8 right-8 z-40 px-6 py-4 rounded-full font-bold shadow-2xl transition-all hover:scale-105 flex items-center space-x-2"
      style={{ backgroundColor: '#24582a', color: '#c9e631' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#d4e8cf';
        e.currentTarget.style.color = '#24582a';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#24582a';
        e.currentTarget.style.color = '#c9e631';
      }}
    >
      <span>💚</span>
      <span>Donate</span>
    </Link>
  );
}
