# Landing Page VIP para Servicio de Uñas Esculpidas a Domicilio

Este paquete contiene la landing page interactiva, **Mobile-First**, diseñada para promocionar los servicios a domicilio de uñas esculpidas en resina, gel y esmaltado semipermanente con curado UV/LED.

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
