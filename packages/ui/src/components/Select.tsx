import { forwardRef, useState, useRef, useImperativeHandle, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { Input } from './Input';
import { Checkbox } from './Checkbox';
import { clsx } from 'clsx';

/**
 * Select - Dropdown select with optional multi-select
 *
 * Usage:
 * - options: array of { value, label }
 * - placeholder: shown when no value
 * - value: controlled selection (string or string[] for multi)
 * - onChange: callback with new value
 * - Uses Input internally for the trigger
 */

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
      <div ref={containerRef} className="relative">
        <Input
          ref={inputRef}
          readOnly
          value={displayValue}
          placeholder={displayValue ? '' : placeholder}
          trailing={
            <ChevronDown
              size={16}
              className={clsx('transition-transform', isOpen && 'rotate-180')}
            />
          }
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer' }}
        />

        {isOpen && (
          <div
            className="absolute top-full left-0 right-0 border border-border bg-surface z-[100] max-h-[200px] overflow-y-auto"
            style={{ marginTop: '-1px' }}
          >
            {options.map((option) => {
              const isSelected = selectedValues.includes(option.value);
              return (
                <div
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className={clsx(
                    'flex items-center gap-2 p-2 cursor-pointer',
                    isSelected ? 'bg-surface-hover text-text' : 'text-text'
                  )}
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
                    <Check size={14} className="text-text" />
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