## Development

Primero, correr el servidr:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

1. Levantar la base de datos
2. Renombrar el .env.example a .env
3. Reemplazar las variables de entorno
4. Ejecutar el SEED para [crear la base de datos local](http://localhost:3000/api/seed)

```
docker compose up -d
```

# Primas comando

```
npx prisma init
npx prisma migrate dev
npx prisma generate
```

Si unas pnpm

```
pnpm dlx prisma init
pnpm dlx prisma migrate dev
pnpm dlx prisma generate
```
