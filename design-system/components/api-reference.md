# CFHEC Components - API Reference

## Button

```tsx
interface ButtonProps {
  variant?: "primary" | "secondary" | "destructive" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}
```

| Variant | Use Case |
|---------|----------|
| `primary` | Main actions, form submissions |
| `secondary` | Secondary actions, cancel buttons |
| `destructive` | Delete, dangerous actions |
| `ghost` | Toolbar actions, subtle buttons |
| `link` | Navigation, inline actions |

---

## Input

```tsx
interface InputProps {
  type?: "text" | "email" | "password" | "number" | "tel";
  label?: string;
  placeholder?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
```

---

## Select

```tsx
interface SelectProps {
  options: { value: string; label: string }[];
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  multiple?: boolean;
}
```

---

## Card

```tsx
interface CardProps {
  variant?: "default" | "elevated" | "interactive";
  padding?: "none" | "sm" | "md" | "lg";
  children: ReactNode;
}
```

---

## KpiWidget

```tsx
interface KpiWidgetProps {
  label: string;
  value: string | number;
  trend?: {
    value: number;
    direction: "up" | "down";
    label?: string;
  };
  icon?: ReactNode;
  loading?: boolean;
}
```

---

## DataTable

```tsx
interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  pagination?: boolean;
  pageSize?: number;
  selectable?: boolean;
  sortable?: boolean;
  searchable?: boolean;
  emptyState?: ReactNode;
  loading?: boolean;
}
```

---

## Alert

```tsx
interface AlertProps {
  variant: "info" | "success" | "warning" | "error";
  title?: string;
  description: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}
```

---

## Modal / Dialog

```tsx
interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  footer?: ReactNode;
}
```

---

## Toast

```tsx
interface ToastProps {
  variant: "default" | "success" | "error" | "warning";
  title: string;
  description?: string;
  duration?: number;
  action?: { label: string; onClick: () => void };
}

// Usage via hook
const { toast } = useToast();
toast({ variant: "success", title: "Saved!" });
```

---

## LanguageSwitcher

```tsx
interface LanguageSwitcherProps {
  currentLocale: "en" | "es" | "zh";
  onLocaleChange: (locale: string) => void;
  persist?: boolean;
}
```

Display format:
- `en` → "EN"
- `es` → "ES"  
- `zh` → "中文"

---

## PageHeader

```tsx
interface PageHeaderProps {
  title: string;
  description?: string;
  backHref?: string;
  actions?: ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
}
```

---

## Sidebar

```tsx
interface SidebarProps {
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  items: SidebarItem[];
  footer?: ReactNode;
}

interface SidebarItem {
  label: string;
  href: string;
  icon?: ReactNode;
  badge?: string | number;
  children?: SidebarItem[];
}
```

---

## EmptyState

```tsx
interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: { label: string; onClick: () => void };
}
```
