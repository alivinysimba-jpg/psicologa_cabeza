INSTRUCCIONES RÁPIDAS (versión para copiar y pegar)

Archivos incluidos:
- index.html
- styles.css
- script.js
- CNAME
- robots.txt
- sitemap.xml
- README.md

PASOS PARA PUBLICAR EN GITHUB PÁGES (sin tocar código)
1. Entra en https://github.com y accede con tu cuenta (alivinysimba-jpg).
2. Crea un nuevo repositorio llamado: psicologacabeza
   - Público (Public)
   - No añadas README ni .gitignore desde la creación.
3. Abre el repositorio y haz clic en "Upload files".
4. Arrastra todos los archivos de esta carpeta y suéltalos. Haz Commit changes.
5. Ve a Settings → Pages:
   - Build and deployment: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Save. Espera unos segundos.
6. Verifica el enlace temporal: https://alivinysimba-jpg.github.io/psicologacabeza

AÑADIR DOMINIO (www.psicologacabeza.com)
1. Dentro del repo, crea un archivo nuevo (Add file → Create new file) llamado EXACTAMENTE: CNAME
   - En el contenido pega: www.psicologacabeza.com
   - Commit changes.
2. En el panel DNS de tu registrador (donde compraste el dominio) añade:
   - CNAME: host = www  value = alivinysimba-jpg.github.io
   - A records (para apex sin www):
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
3. Espera la propagación (puede tardar 15 min - 2 h). Tu sitio quedará activo en https://www.psicologacabeza.com

FORMULARIO (recomendado)
- Por defecto el formulario usa mailto: abre el correo del usuario.
- Si quieres recibir mensajes desde la web sin que se abra el correo, regístrate en Formspree (https://formspree.io), crea un formulario y copia la URL (algo como https://formspree.io/f/XXXXXXXX).
- En GitHub edita index.html: en la etiqueta <form ...> añade action="https://formspree.io/f/XXXXXXXX" y elimina data-mailto attribute (o déjalo, pero Formspree será prioritario).
- Guarda y prueba. Formspree enviará mensajes a tu email.

SEO y verificación en Google
1. Abre Google Search Console (https://search.google.com/search-console) y añade www.psicologacabeza.com.
2. Verifica siguiendo las instrucciones (puede ser por proveedor de dominio o por archivo HTML).
3. Envía sitemap: https://www.psicologacabeza.com/sitemap.xml

PROBLEMAS FRECUENTES
- Si la web no aparece: limpiar cache del navegador y esperar 1-2 horas.
- Si el formulario no se envía: usa mailto como fallback o configura Formspree.
- Si el dominio no apunta: revisa los registros DNS y que el CNAME apunte exactamente a alivinysimba-jpg.github.io

Si quieres, te guío paso a paso por mensajes —dime en qué paso estás y te explico exactamente lo que tienes que hacer en tu pantalla.
