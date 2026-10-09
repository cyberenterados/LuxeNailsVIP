# LuxeNails VIP

## Descripción del sitio

LuxeNails VIP es una landing page para promocionar un servicio exclusivo de manicura y uñas esculpidas a domicilio. Está pensada para que las clientas puedan conocer los servicios de resina, gel y esmaltado semipermanente con curado UV/LED, ver diseños en la galería y consultar información sobre bioseguridad y preguntas frecuentes.

El sitio incluye un cotizador interactivo para elegir un sistema de uñas, agregar extras e indicar la zona. La selección se puede enviar por WhatsApp para consultar disponibilidad y coordinar una cita. Su diseño adaptable facilita la navegación desde celulares y computadoras.

Este proyecto contiene la landing page interactiva, **Mobile-First**, diseñada para promocionar estos servicios y facilitar el contacto con potenciales clientas.

---

## 📁 Estructura de Archivos Contenidos

- `index.html`: Estructura principal optimizada para dispositivos móviles y escritorio.
- `styles.css`: Estilos de apoyo, animaciones suaves y soporte para scroll y visuales.
- `script.js`: Lógica interactiva para el Cotizador/Armador de Combos, acordeón FAQ, menú móvil y widget flotante de WhatsApp.
- `README.md`: Documentación y guía de configuración rápida.

---

## 🛠️ Cómo Configurar el Número de WhatsApp

Para conectar las consultas de los clientes directamente con la dueña del negocio:

1. Abre el archivo `script.js`.
2. En la primera línea encontrarás:
   ```javascript
   const WHATSAPP_PHONE = "5491100000000";
   ```
3. Reemplaza `5491100000000` con el número telefónico real (incluyendo código de país sin el signo `+` ni espacios). Ej: `5491123456789` o `5215512345678`.
4. En `index.html`, si deseas modificar enlaces rápidos individuales, busca la frase `wa.me/5491100000000` y actualiza el número de teléfono.

---

## 🚀 Publicación / Hosting Gratis

Puedes publicar esta landing page de forma gratuita en cualquiera de estas plataformas:

- **Vercel / Netlify / GitHub Pages:** Simplemente arrastra la carpeta descomprimida o sube los archivos a tu repositorio.
- No requiere backend ni base de datos, corre 100% del lado del cliente.
