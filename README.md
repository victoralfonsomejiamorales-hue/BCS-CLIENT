# BCS - Financial Products Platform

This is a [Next.js](https://nextjs.org) project for discovering financial products and simulating profitability.

## Decisiones de Arquitectura

### SSR para la página `/products`

La página `/products` utiliza **Server-Side Rendering (SSR)** en lugar de ISR. Esta decisión se tomó porque:

- **Filtrado en tiempo real**: La página acepta parámetros de búsqueda dinámicos (`search`, `type`) que filtran productos en cada solicitud. Dado que los filtros pueden cambiar frecuentemente y son específicos del usuario, el uso de caché con ISR serviría resultados obsoletos.
- **Dataset pequeño**: Con solo 6 productos simulados, el costo de renderizado es mínimo. SSR proporciona datos frescos sin la complejidad de invalidación de caché.
- **SEO y carga inicial**: SSR asegura que la página esté completamente renderizada en el servidor, mejorando el SEO y proporcionando una carga inicial más rápida (LCP) en comparación con la obtención de datos del lado del cliente.
- **Simplicidad**: No es necesario gestionar intervalos de revalidación o estrategias de invalidación de caché para un dataset simulado estático.

La implementación usa un Server Component asíncrono:

```typescript
export default async function ProductsPage({ searchParams }: PageProps) {
  const { search, type } = await searchParams;
  const products = await productService.getProducts({ search, type });
  return <ProductList products={products} />;
}
```

## Lógica de Simulación

La simulación de rentabilidad utiliza **interés compuesto** con la siguiente fórmula:

### Fórmula

- **Tasa Efectiva Anual (TEA)**: 8% (fija)
- **Tasa Efectiva Mensual**: Calculada como `(1 + TEA)^(1/12) - 1`
- **Iteración**: Para cada mes, el saldo crece según la tasa mensual, luego se suma la contribución mensual.

### Algoritmo

```typescript
monthlyRate = (1 + 0.08)^(1/12) - 1
balance = initialAmount
for each month:
  balance *= (1 + monthlyRate)
  balance += monthlyContribution
interestEarned = finalBalance - totalContributed
```

Este enfoque refleja cómo las cuentas de ahorro típicamente capitalizan el interés mensualmente, con las contribuciones agregadas después de aplicar el interés.

## Variables de Entorno

El proyecto requiere las siguientes variables de entorno. Copia `.env.example` a `.env.local` y configura los valores:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3002
NEXT_PUBLIC_SECRET_KEY=tu-secret-key-aqui
```

- `NEXT_PUBLIC_API_URL`: URL del backend NestJS (por defecto: http://localhost:3002)
- `NEXT_PUBLIC_SECRET_KEY`: Clave secreta para encriptación de datos sensibles

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
