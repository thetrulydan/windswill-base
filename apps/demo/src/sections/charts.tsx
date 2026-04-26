import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const lineData = [
  { hp: 100, turn: 1 },
  { hp: 85, turn: 2 },
  { hp: 70, turn: 3 },
  { hp: 90, turn: 4 },
  { hp: 60, turn: 5 },
  { hp: 45, turn: 6 },
  { hp: 30, turn: 7 },
  { hp: 15, turn: 8 },
];

const barData = [
  { category: 'Weapons', count: 24 },
  { category: 'Armor', count: 18 },
  { category: 'Potions', count: 32 },
  { category: 'Materials', count: 15 },
  { category: 'Misc', count: 11 },
];

const pieData = [
  { name: 'Gold', value: 45 },
  { name: 'Silver', value: 30 },
  { name: 'Copper', value: 15 },
  { name: 'Gems', value: 10 },
];

const COLORS = ['#3b82f6', '#22c55e', '#f59e0b', '#ef4444'];

export default function ChartsSection() {
  return (
    <div>
      <Heading level={1}>Charts</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Composable charts using Recharts for data visualization.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Line Chart</Heading>
        <div style={{ height: 200, background: 'var(--color-surface)', borderRadius: 0, padding: 16 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="turn" stroke="var(--color-text-muted)" fontSize={12} />
              <YAxis stroke="var(--color-text-muted)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 0,
                }}
              />
              <Line type="monotone" dataKey="hp" stroke="#3b82f6" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Bar Chart</Heading>
        <div style={{ height: 200, background: 'var(--color-surface)', borderRadius: 0, padding: 16 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="category" stroke="var(--color-text-muted)" fontSize={12} />
              <YAxis stroke="var(--color-text-muted)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 0,
                }}
              />
              <Bar dataKey="count" fill="#22c55e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>Pie Chart</Heading>
        <div style={{ height: 200, background: 'var(--color-surface)', borderRadius: 0, padding: 16 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
              >
                {pieData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 0,
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}