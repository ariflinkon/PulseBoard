import { motion } from 'framer-motion';

export default function PulseCard({ title, value }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md p-6 border border-gray-200"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="text-gray-500 text-sm mb-1">{title}</div>
      <div className="text-2xl font-semibold text-indigo-700 animate-pulse">{value}</div>
    </motion.div>
  );
}
