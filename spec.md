# Endpoints

## Authentication

```
POST /auth/signup
POST /auth/login?method=email
POST /auth/login?method=anonymous
```

## User

```
GET /user/:id
POST /user/:id
DELETE /user/:id
```

## Set

```
GET /sets
GET /set/:id
POST /set/:id
DELETE /set/:id
```

## Combinations

```
GET /set/:id/combinations?ordered=ascending
GET /set/:id/combinations?ordered=descending
GET /set/:id/combinations?exclude=itemId
GET /set/:id/combination/:id
POST /set/:id/combination/:id
```

# Objects

## Auth

```ts
interface AuthResponse {
  id: string;
  token: string;
  created_at: string;
  updated_at: string;
}
```

## User

```ts
interface UserResponse {
  id: string;
  email?: string;
  password?: string;
  created_at: string;
  updated_at: string;
}
```

## Set

```ts
interface SetResponse {
  id: string;
  items: string[];
  created_at: string;
  updated_at: string;
}
```

## Combination

```ts
interface CombinationResponse {
  id: string;
  created_at: string;
  updated_at: string;
}
```
