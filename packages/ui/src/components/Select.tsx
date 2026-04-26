import { forwardRef, useState, useRef, useImperativeHandle, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { Input } from './Input';
import { Checkbox } from './Checkbox';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  placeholder?: string;
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  multiple?: boolean;
}

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  ({ options, placeholder = 'Select...', value, onChange, multiple }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

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

    const isMultiple = multiple && Array.isArray(value);
    const selectedValues = isMultiple ? value : (value ? [value] : []);
    const selectedOptions = options.filter(o => selectedValues.includes(o.value));

    const handleSelect = (optionValue: string) => {
      if (multiple && Array.isArray(value)) {
        const newValue = value.includes(optionValue)
          ? value.filter(v => v !== optionValue)
          : [...value, optionValue];
        onChange?.(newValue);
      } else {
        onChange?.(optionValue);
        setIsOpen(false);
      }
    };

    const displayValue = selectedOptions.map(o => o.label).join(', ');

    return (
      <div ref={containerRef} style={{ position: 'relative' }}>
        <Input
          ref={inputRef}
          readOnly
          value={displayValue}
          placeholder={displayValue ? '' : placeholder}
          trailing={
            <ChevronDown
              size={16}
              style={{
                transform: isOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 150ms ease',
              }}
            />
          }
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer' }}
        />

        {isOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              border: '1px solid var(--color-border)',
              background: 'var(--color-surface)',
              zIndex: 100,
              maxHeight: '200px',
              overflow: 'auto',
              marginTop: '-1px',
            }}
          >
            {options.map((option) => {
              const isSelected = selectedValues.includes(option.value);
              return (
                <div
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  style={{
                    padding: '0.5rem',
                    cursor: 'pointer',
                    background: isSelected ? 'var(--color-surface-hover)' : 'transparent',
                    color: 'var(--color-text)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                  className="select-option"
                >
                  {multiple && (
                    <Checkbox
                      checked={isSelected}
                      onChange={(e) => {
                        e.stopPropagation();
                        handleSelect(option.value);
                      }}
                    />
                  )}
                  {!multiple && isSelected && (
                    <Check size={14} style={{ color: 'var(--color-text)' }} />
                  )}
                  {option.label}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';