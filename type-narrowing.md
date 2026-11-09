# Type Narrowing in TypeScript

Type narrowing reduces a broad type to a specific type. It lets TypeScript identify safe operations. A variable can begin with a union type that allows several possible values. Runtime guards provide evidence for one possibility. The `typeof` operator is useful for primitive values such as strings, numbers, and booleans. The `instanceof` operator checks whether an object belongs to a class or its prototype chain. The `in` operator checks whether a property exists on an object. These guards help the compiler follow program branches.

```ts
class User { constructor(public name: string) {} }
type Guest = { guestCode: string };

function describe(value: string | number | User | Guest): string {
  if (typeof value === "string") return value.toUpperCase();
  if (typeof value === "number") return value.toFixed(2);
  if (value instanceof User) return value.name;
  if ("guestCode" in value) return value.guestCode;
  return "Unknown";
}
```

In this example, `typeof` separates strings and numbers before object logic runs. The `instanceof` check identifies a `User` instance and exposes its `name` safely. The `in` check is useful when a union contains different object shapes. The compiler then narrows the available members. This pattern is common in API handlers. Narrowing improves editor suggestions and catches invalid access during compilation. Guards should appear before code that depends on a specific type. Keep each branch small so its narrowed assumption remains clear. Use discriminant properties when object unions need more descriptive branching. Choose the simplest guard that matches the value being inspected. Careful narrowing makes functions safer without unnecessary type assertions. Good narrowing combines readable control flow with accurate type definitions.