import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { useToast } from '../hooks/useToast';

interface FormData {
  name: string;
  description: string;
  category: string;
  priority: string;
  active: boolean;
}

export default function FormsSection() {
  const toast = useToast();
  const [form, setForm] = useState<FormData>({
    name: '',
    description: '',
    category: '',
    priority: '',
    active: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.description.trim()) newErrors.description = 'Description is required';
    if (!form.category) newErrors.category = 'Select a category';
    if (!form.priority) newErrors.priority = 'Select priority';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      toast.success(`Form submitted: ${form.name}`);
      setForm({ name: '', description: '', category: '', priority: '', active: false });
    } else {
      toast.error('Please fix the errors above');
    }
  };

  return (
    <div>
      <Heading level={1}>Forms</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Complete form with validation using React Hook Form patterns.
      </Text>

      <section>
        <form onSubmit={handleSubmit} style={{ maxWidth: 500, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label style={{ display: 'block', marginBottom: 6, fontSize: 14, fontWeight: 500 }}>
              Name <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: 0,
                border: errors.name ? '1px solid #ef4444' : '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                color: 'var(--color-text)',
              }}
            />
            {errors.name && <Text style={{ color: '#ef4444', fontSize: 12, marginTop: 4 }}>{errors.name}</Text>}
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: 6, fontSize: 14, fontWeight: 500 }}>
              Description <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={3}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: 0,
                border: errors.description ? '1px solid #ef4444' : '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                color: 'var(--color-text)',
                resize: 'vertical',
                fontFamily: 'inherit',
              }}
            />
            {errors.description && <Text style={{ color: '#ef4444', fontSize: 12, marginTop: 4 }}>{errors.description}</Text>}
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: 6, fontSize: 14, fontWeight: 500 }}>
              Category <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: 0,
                border: errors.category ? '1px solid #ef4444' : '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                color: 'var(--color-text)',
              }}
            >
              <option value="">Select...</option>
              <option value="feature">Feature</option>
              <option value="bug">Bug</option>
              <option value="improvement">Improvement</option>
            </select>
            {errors.category && <Text style={{ color: '#ef4444', fontSize: 12, marginTop: 4 }}>{errors.category}</Text>}
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: 6, fontSize: 14, fontWeight: 500 }}>
              Priority <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <div style={{ display: 'flex', gap: 16 }}>
              {['Low', 'Medium', 'High'].map((p) => (
                <label key={p} style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="priority"
                    value={p.toLowerCase()}
                    checked={form.priority === p.toLowerCase()}
                    onChange={(e) => setForm({ ...form, priority: e.target.value })}
                  />
                  <span>{p}</span>
                </label>
              ))}
            </div>
            {errors.priority && <Text style={{ color: '#ef4444', fontSize: 12, marginTop: 4 }}>{errors.priority}</Text>}
          </div>

          <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={form.active}
              onChange={(e) => setForm({ ...form, active: e.target.checked })}
              style={{ width: 18, height: 18 }}
            />
            <span>Active</span>
          </label>

          <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
            <Button type="submit">Submit</Button>
            <Button type="button" variant="ghost" onClick={() => setForm({ name: '', description: '', category: '', priority: '', active: false })}>Cancel</Button>
          </div>
        </form>
      </section>
    </div>
  );
}