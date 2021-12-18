# Endpoints

## Authentication

```
POST /auth/signup?method=email
POST /auth/signup?method=anonymous
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
GET /set/:id/combinations?page=1?limit=10?exclude=itemId
GET /set/:id/combination/:id
POST /set/:id/combination/:id
```

# Models

## Auth

```ts
interface AuthResponse {
  id: string;
  token: string;
  created_at: string;
  updated_at: string;
}
```

## Responses

```ts
interface UserResponse {
  id: string;
  name?: string;
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
  items: string[string[]];
  created_at: string;
  updated_at: string;
}
```
