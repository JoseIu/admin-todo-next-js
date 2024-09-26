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

```
docker compose up -d
```

2. Crear una copia de el .evn.example y renombrarlo a .env
3. Reemplazar las variables de entorno
4. Ejecutar el comando ` npm install` o ` pnpm install`
5. Ejecutar el comando ` npm run dev` o ` pnpm dev`
6. Ejecutar estos comandos

```
npx prisma migrate dev
npx prisma generate
```

6. Ejecutar el SEED para [crear la base de datos local](http://localhost:3000/api/seed)

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
