# Estrategias de Renderizado en Next.js

---

## Introducción

- ¿Qué es el renderizado en desarrollo web?
- Importancia de elegir la estrategia correcta
- Visión general de Next.js y sus capacidades

---

## 1. Static Site Generation (SSG)

### Concepto

- Renderizado en tiempo de compilación
- Páginas HTML generadas de antemano

### Ventajas

- Rendimiento excepcional
- Excelente para SEO
- Menor costo de hosting

### Casos de uso

- Blogs
- Documentación
- Sitios de marketing

### Ejemplo de código

```jsx
// pages/blog/[slug].js
export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug)
  return { props: { post } }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false
  }
}
```

---

## 2. Server-Side Rendering (SSR)

### Concepto

- Renderizado en cada solicitud del servidor
- Contenido dinámico y personalizado

### Ventajas

- Datos siempre actualizados
- Buen SEO
- Personalización por usuario

### Casos de uso

- Dashboards
- Redes sociales
- E-commerce con contenido personalizado

### Ejemplo de código

```jsx
// pages/dashboard.js
export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
  const userData = await fetchUserData(session.user.id)
  return { props: { userData } }
}
```

---

## 3. Client-Side Rendering (CSR)

### Concepto

- Renderizado en el navegador del cliente
- Uso intensivo de JavaScript

### Ventajas

- Altamente interactivo
- Experiencia de aplicación de una sola página (SPA)
- Reduce la carga del servidor

### Casos de uso

- Aplicaciones web complejas
- Dashboards interactivos
- Herramientas de edición en línea

### Ejemplo de código

```jsx
// pages/dashboard.js
import { useState, useEffect } from 'react'

export default function Dashboard() {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/dashboard-data')
      const json = await res.json()
      setData(json)
    }
    fetchData()
  }, [])

  if (!data) return <div>Loading...</div>

  return <DashboardUI data={data} />
}
```

---

## 4. Incremental Static Regeneration (ISR)

### Concepto

- Combinación de SSG con regeneración en segundo plano
- Actualización de páginas estáticas sin reconstrucción completa

### Ventajas

- Equilibrio entre rendimiento y frescura de datos
- Escalabilidad para sitios grandes
- Reduce la carga del servidor en comparación con SSR

### Casos de uso

- E-commerce con catálogos grandes
- Sitios de noticias
- Plataformas de contenido con actualizaciones frecuentes

### Ejemplo de código

```jsx
// pages/products/[id].js
export async function getStaticProps({ params }) {
  const product = await fetchProduct(params.id)
  return {
    props: { product },
    revalidate: 60 // Regenera la página cada 60 segundos
  }
}

export async function getStaticPaths() {
  const products = await fetchTopProducts(20)
  return {
    paths: products.map((product) => ({ params: { id: product.id } })),
    fallback: 'blocking'
  }
}
```

---

## Comparación y Elección de Estrategias

### Factores a considerar

- Tipo de contenido y frecuencia de actualización
- Requisitos de SEO
- Carga del servidor y costos de infraestructura
- Experiencia del usuario y tiempos de carga

### Tabla comparativa (revisión detallada)

| Estrategia | Rendimiento | SEO       | Frescura de Datos | Carga del Servidor | Complejidad de Implementación |
| ---------- | ----------- | --------- | ----------------- | ------------------ | ----------------------------- |
| SSG        | Excelente   | Excelente | Baja              | Muy Baja           | Baja                          |
| SSR        | Bueno       | Excelente | Alta              | Alta               | Media                         |
| CSR        | Variable    | Limitado  | Alta              | Baja               | Media-Alta                    |
| ISR        | Muy Bueno   | Excelente | Configurable      | Moderada           | Media                         |

### Casos de estudio

- Ejemplo de un blog (SSG)
- Ejemplo de una red social (SSR + CSR)
- Ejemplo de un e-commerce (ISR + SSR para checkout)

---

## Optimizaciones y Mejores Prácticas

### Para todas las estrategias

- Uso de CDN
- Optimización de imágenes y assets
- Code splitting y lazy loading

### Específicas por estrategia

- SSG: Generación incremental, uso de fallback
- SSR: Caching, streaming SSR
- CSR: Skeleton screens, optimistic UI updates
- ISR: Estrategias de revalidación, manejo de stale-while-revalidate

---
