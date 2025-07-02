import PulseCard from '../components/PulseCard';

const stats = [
  { title: 'Active Users', value: 1280 },
  { title: 'New Orders', value: 312 },
  { title: 'Server Load', value: '65%' },
  { title: 'Emails Sent', value: 4421 },
];

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((item, i) => (
        <PulseCard key={i} title={item.title} value={item.value} />
      ))}
    </div>
  );
}
