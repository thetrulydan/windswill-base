import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Breadcrumb } from '@windswill/ui/components/Breadcrumb';

export default function BreadcrumbSection() {
  return (
    <div>
      <Heading level={1}>Breadcrumb</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Navigation path showing the user's location in a hierarchy.
      </Text>

      <section>
        <Breadcrumb
          items={[
            { label: 'Home', href: '#' },
            { label: 'Products', href: '#' },
            { label: 'Electronics', href: '#' },
            { label: 'Laptops' },
          ]}
        />
      </section>
    </div>
  );
}