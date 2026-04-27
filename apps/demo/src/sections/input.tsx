import { useState } from 'react';
import { Input } from '@windswill/ui/components/Input';
import { Select } from '@windswill/ui/components/Select';
import { DatePicker } from '@windswill/ui/components/DatePicker';
import { Button } from '@windswill/ui/components/Button';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { useToast } from '../hooks/useToast';
import * as LucideIcons from 'lucide-react';

const races = [
  { value: 'human', label: 'Human' },
  { value: 'elf', label: 'Elf' },
  { value: 'dwarf', label: 'Dwarf' },
  { value: 'halfling', label: 'Halfling' },
  { value: 'gnome', label: 'Gnome' },
  { value: 'half-orc', label: 'Half-Orc' },
];

export default function InputSection() {
  const toast = useToast();
  const [passwordShow, setPasswordShow] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedRace, setSelectedRace] = useState('');
  const [selectedRaces, setSelectedRaces] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    toast.info(`Input changed: ${e.target.value.slice(0, 20)}`);
  };

  return (
    <div>
      <Heading level={1}>Input</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Text input fields with support for leading/trailing icons, types, and select variants (single/multi).
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Types</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
          <Input type="text" placeholder="Text input" onChange={handleChange} />
          <Input
            type={passwordShow ? 'text' : 'password'}
            placeholder="Password"
            trailing={
              <Button variant="ghost" size="sm" onClick={() => setPasswordShow(!passwordShow)} aria-label="Toggle password" icon={passwordShow ? LucideIcons.EyeOff : LucideIcons.Eye} />
            }
          />
          <Input type="number" placeholder="Number input" onChange={handleChange} />
          <Input
            type="search"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            leading={<LucideIcons.Search size={16} />}
            trailing={
              searchValue && (
                <Button variant="ghost" size="sm" onClick={() => setSearchValue('')} aria-label="Clear search" icon={LucideIcons.X} />
              )
            }
          />
          <DatePicker
            value={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              toast.info(`Selected: ${date.toLocaleDateString()}`);
            }}
          />
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>States</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
          <Input placeholder="Default" />
          <Input placeholder="Error state" error />
          <Input placeholder="Disabled" disabled />
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>With Icons</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
          <Input placeholder="Leading icon" leading={<LucideIcons.Mail size={16} />} />
          <Input placeholder="Trailing icon" trailing={<LucideIcons.Check size={16} />} />
          <Input placeholder="Both icons" leading={<LucideIcons.User size={16} />} trailing={<LucideIcons.ChevronDown size={16} />} />
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Single Select</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
          <Select
            options={races}
            value={selectedRace}
            onChange={(val) => {
              setSelectedRace(val as string);
              toast.info(`Selected: ${val}`);
            }}
            placeholder="Select a race..."
          />
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Multi-Select</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
          <Select
            options={races}
            value={selectedRaces}
            onChange={(val) => {
              setSelectedRaces(val as string[]);
              toast.info(`Selected: ${(val as string[]).join(', ')}`);
            }}
            multiple
            placeholder="Select races..."
          />
        </div>
      </section>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>Usage</Heading>
        <pre style={{ background: 'var(--color-surface)', padding: 16, overflow: 'auto', fontSize: 13 }}>
{`<Input 
  type="text" 
  placeholder="Enter name"
  leading={<SearchIcon />}
  trailing={<ChevronIcon />}
/>`}
        </pre>
      </section>
    </div>
  );
}
