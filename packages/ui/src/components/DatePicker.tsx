import { forwardRef, useState, useRef, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Input } from './Input';

interface DatePickerProps {
  value?: Date | null;
  onChange?: (date: Date) => void;
  placeholder?: string;
}

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({ value, onChange, placeholder = 'Select date...' }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [viewDate, setViewDate] = useState(value || new Date());
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setIsOpen(false);
        }
      };
      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }
    }, [isOpen]);

    const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();
    const firstDay = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay();

    const selectDate = (day: number) => {
      const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
      onChange?.(date);
      setIsOpen(false);
    };

    const prevMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1));
    const nextMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1));

    const formatDate = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    return (
      <div ref={containerRef} style={{ position: 'relative' }}>
        <Input
          ref={ref}
          readOnly
          value={value ? formatDate(value) : ''}
          placeholder={placeholder}
          trailing={<Calendar size={16} />}
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer' }}
        />
        
        {isOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              marginTop: 4,
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              zIndex: 100,
              padding: 8,
              minWidth: 240,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <button onClick={prevMonth} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}>
                <ChevronLeft size={16} />
              </button>
              <span style={{ fontSize: '0.875rem', color: 'var(--color-text)' }}>
                {monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}
              </span>
              <button onClick={nextMonth} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}>
                <ChevronRight size={16} />
              </button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, marginBottom: 4 }}>
              {dayNames.map(d => (
                <span key={d} style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>{d}</span>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2 }}>
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const isSelected = value && value.getDate() === day && value.getMonth() === viewDate.getMonth() && value.getFullYear() === viewDate.getFullYear();
                return (
                  <button
                    key={day}
                    onClick={() => selectDate(day)}
                    style={{
                      width: 28,
                      height: 28,
                      background: isSelected ? 'var(--color-text)' : 'transparent',
                      color: isSelected ? 'var(--color-background)' : 'var(--color-text)',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.8125rem',
                    }}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';