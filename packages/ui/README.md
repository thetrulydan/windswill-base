# @windswill/ui

A React 19 component library with semantic design tokens.

## Installation

```bash
npm install @windswill/ui
```

## Setup

Import the theme in your app:

```css
@import '@windswill/ui/themes/base.css';
```

Or in JavaScript:

```js
import '@windswill/ui/themes/base.css';
```

## Usage

### Typography

```jsx
import { Heading, Text } from '@windswill/ui';

<Heading level={1}>Title</Heading>
<Text>Body text</Text>
<Text variant="muted">Secondary text</Text>
<Text variant="caption">Small caption</Text>
```

### Forms

```jsx
import { Input, Select, Checkbox, Switch, Textarea, Button } from '@windswill/ui';

// Input with icons
<Input leading={<Search size={16} />} trailing={<X size={16} />} />

// Select dropdown
<Select options={[
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' }
]} placeholder="Choose..." />

// Checkbox with label
<Checkbox label="Remember me" />

// Toggle switch
<Switch label="Enable notifications" />

// Textarea
<Textarea label="Description" placeholder="Enter description..." />
```

### Buttons

```jsx
import { Button } from '@windswill/ui';
import { Plus, Trash } from 'lucide-react';

// Variants: primary, secondary, ghost, destructive, active, underline
// Sizes: sm (2rem), md (2.5rem), lg (3rem)

<Button variant="primary" size="md">Submit</Button>
<Button variant="ghost" size="sm">Cancel</Button>
<Button variant="destructive" icon={Trash}>Delete</Button>
<Button variant="primary" icon={Plus} loading>Save</Button>
```

### Layout

```jsx
import { Card, CardHeader, CardBody, CardFooter, Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@windswill/ui';

<Card>
  <CardHeader>Title</CardHeader>
  <CardBody>Content here</CardBody>
  <CardFooter>Footer</CardFooter>
</Card>

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Value</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Item 1</TableCell>
      <TableCell>$100</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Navigation

```jsx
import { Tabs, TabsList, TabsTrigger, TabsContent, Pagination, Breadcrumb, Sidebar, SectionNav } from '@windswill/ui';

// Tabs
<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="details">Details</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="details">Details content</TabsContent>
</Tabs>

// Pagination
<Pagination total={100} page={1} onChange={(p) => setPage(p)} />

// Breadcrumb
<Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Settings' }]} />
```

### Overlays

```jsx
import { Modal, Drawer, Popover, AnchorPopover, Tooltip, ToastProvider, useToast } from '@windswill/ui';

// Modal
<Modal open={open} onOpenChange={setOpen} title="Title">
  <Modal.Body>Content</Modal.Body>
  <Modal.Footer>
    <Button variant="ghost">Cancel</Button>
    <Button variant="primary">Confirm</Button>
  </Modal.Footer>
</Modal>

// Popover
<AnchorPopover anchor={<Button>Open</AnchorPopover>} open={open} onOpenChange={setOpen}>
  <Popover.Body>Content</Popover.Body>
</AnchorPopover>

// Tooltip
<Tooltip content="Help text">
  <IconButton icon={HelpCircle} />
</Tooltip>

// Toast
<ToastProvider>
  <button onClick={() => toast.success('Saved!')}>Save</button>
</ToastProvider>
```

### Feedback

```jsx
import { Alert, Spinner, Skeleton, Progress } from '@windswill/ui';

<Alert variant="error" title="Error">Something went wrong</Alert>
<Spinner size="md" />
<Skeleton width={100} height={16} />
<Progress value={75} max={100} />
```

### Display

```jsx
import { Badge, Avatar, TagChip } from '@windswill/ui';

<Badge variant="success">New</Badge>
<Avatar name="John Doe" />
<TagChip onRemove={() => {}}>Tag</TagChip>
```

## Design Tokens

The library uses three layers of design tokens:

1. **Primitives**: `var(--color-gray-100)` through `var(--color-gray-700)`
2. **Semantics**: `var(--color-text)`, `var(--color-text-muted)`, `var(--color-background)`, `var(--color-surface)`, `var(--color-border)`, etc.
3. **Component**: `var(--color-error)`, `var(--color-success)`

## Building New Components

When building components that use Button:

```jsx
// DO: Pass only what you need
<Button variant="active" size="md" onClick={handleClick}>
  Label
</Button>

// DON'T: Blindly forward className/style
<Button
  variant="ghost"
  className={className}  // Can override button styles!
  style={style}          // Can override button styles!
>
  Label
</Button>
```

## API

### Form Components

| Component | Key Props |
|----------|----------|
| `Button` | `variant`, `size`, `icon`, `loading`, `disabled` |
| `Input` | `type`, `leading`, `trailing`, `label`, `error` |
| `Select` | `options`, `placeholder`, `value`, `multi` |
| `Checkbox` | `checked`, `label` |
| `Switch` | `checked`, `label`, `disabled` |
| `Radio` | `checked`, `label`, `name` |
| `Slider` | `value`, `min`, `max`, `step` |
| `Textarea` | `label`, `error` |
| `DatePicker` | `value`, `onChange`, `min`, `max` |

### Display Components

| Component | Key Props |
|----------|----------|
| `Text` | `variant`: body, muted, caption |
| `Heading` | `level`: 1-6 |
| `Badge` | `variant`: default, success, warning, error, info |
| `Avatar` | `name`, `src`, `size` |
| `TagChip` | `onRemove` |
| `Spinner` | `size` |
| `Skeleton` | `width`, `height`, `variant` |
| `Progress` | `value`, `max`, `variant` |

### Layout Components

| Component | Key Props |
|----------|----------|
| `Card`, `CardHeader`, `CardBody`, `CardFooter` | - |
| `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableHead`, `TableCell` | - |
| `Separator` | `orientation` |

### Navigation Components

| Component | Key Props |
|----------|----------|
| `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` | `defaultValue`, `onChange` |
| `FilterTabs` | `tabs`, `value`, `onChange` |
| `Pagination` | `total`, `page`, `onChange` |
| `Breadcrumb` | `items` |
| `Sidebar` | `items`, `defaultValue` |
| `SectionNav` | `items`, `value`, `onChange` |

### Overlay Components

| Component | Key Props |
|----------|----------|
| `Modal` | `open`, `onOpenChange`, `title`, `size` |
| `Drawer` | `open`, `onOpenChange`, `title`, `side` |
| `Popover`, `AnchorPopover` | `open`, `onOpenChange` |
| `Tooltip` | `content`, `side` |
| `ToastProvider`, `useToast` | - |

### Other Components

| Component | Key Props |
|----------|----------|
| `Alert` | `variant`, `title` |
| `IconButton` | `icon`, `variant`, `size`, `label` |
| `NumberStepper` | `value`, `onChange`, `min`, `max` |
| `Topbar` | `left`, `center`, `right` |

## License

Private - All rights reserved.