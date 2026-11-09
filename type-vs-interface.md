# Type Aliases vs. Interfaces in TypeScript

Type aliases and interfaces both describe the shape of values in TypeScript. Interfaces are designed mainly for object contracts, while type aliases can represent objects and several other kinds of types.

An interface supports declaration merging. When two interfaces have the same name in one scope, TypeScript combines their members. This is useful when a library or application needs to extend an existing public contract.

```ts
interface User { name: string; }
interface User { age: number; }
type Status = "pending" | "approved";
```

The two `User` declarations become one type with both `name` and `age`. Repeating a type alias name causes a duplicate identifier error; aliases do not merge automatically.

Both forms provide compile time checking. Neither one changes the JavaScript output. Interfaces work well when fields describe a stable object. Type aliases make alternatives easy to read. Consistent use helps keep a codebase understandable.

Type aliases are more flexible for unions, primitives, tuples, and composed utility types. For example, `type ID = string | number` accepts either kind of identifier, and `type Point = [number, number]` describes a fixed tuple. An interface cannot directly define a union or primitive alias.

Choose an interface for public object APIs, class-oriented designs, and object shapes that consumers may extend. Its `extends` syntax also makes inheritance clear. Choose a type alias when the value may be a union, primitive, tuple, or transformed combination such as `Partial<User>`.

The choice is usually based on the type’s shape. Use interfaces for extensible object contracts and aliases for flexible type composition.

