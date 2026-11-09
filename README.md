# TypeScript and OOP Assignment

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />

This assignment covers core TypeScript concepts and practical problem solving. The `solutions.ts` file implements eight tasks:

- Optional and default parameters with edge-case handling
- Type narrowing with union types and `typeof`
- Immutable data with `readonly` tuples
- Generic functions using rest parameters (`...arrays: T[][]`)
- Interface contracts and array filtering
- Key-constrained generics with `keyof` and indexed access (`T[K][]`)
- OOP encapsulation and inheritance using `protected` and `private` modifiers
- Asynchronous workflows using `Promise<string>` and timing delays

It also includes two short technical blog posts.

## Blog Posts

- [Type Aliases vs. Interfaces in TypeScript](./type-vs-interface.md)
- [Type Narrowing in TypeScript](./type-narrowing.md)

## Project Structure

```text
solutions.ts
type-vs-interface.md
type-narrowing.md
README.md
```

## Quick Setup

Install TypeScript if it is not already available:

```bash
npm install -g typescript
```

Compile the solution file:

```bash
tsc solutions.ts
```