# Weather Dashboard

Aplicación web moderna para consultar el clima actual y el pronóstico de temperatura de cualquier ciudad utilizando la API de **OpenWeatherMap**.

La aplicación permite buscar ciudades mediante autocompletado, visualizar información meteorológica actual y consultar una gráfica de pronóstico de temperatura en las próximas horas.

Diseñada con una interfaz moderna tipo dashboard y pensada para funcionar correctamente en dispositivos móviles, tablets, computadores y pantallas grandes.

---

# Características

* Búsqueda de ciudades con **autocompletado en tiempo real**
* Consulta del **clima actual**
* Visualización de:
  * Temperatura
  * Humedad
  * Condiciones climáticas
* **Pronóstico de temperatura con gráfica**
* **Geolocalización automática** para mostrar el clima de la ubicación actual
* Notificaciones visuales amigables
* Loader durante peticiones a la API
* Interfaz moderna tipo dashboard
* Diseño **responsive**
* Manejo de errores cuando la ciudad no existe

---

# Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (ES6)
* jQuery
* Chart.js
* OpenWeatherMap API
* Google Material Icons

---

# Vista previa de la aplicación

La aplicación incluye:

* Buscador de ciudades
* Autocompletado dinámico
* Panel de clima actual
* Gráfica de pronóstico
* Información del clima en la ubicación actual

---

# Estructura del proyecto

```
weather-dashboard
│
├── index.html
│
├── css
│   └── index.css
│
├── js
│   └── index.js
│
└── README.md
```

---

# Instalación

Sigue los siguientes pasos para ejecutar el proyecto localmente.

## 1. Clonar el repositorio

```bash
git clone https://github.com/JhoanRojasE/weather-dashboard.git
```

## 2. Entrar en la carpeta del proyecto

```bash
cd weather-dashboard
```

## 3. Abrir el proyecto

Simplemente abre el archivo:

```
index.html
```

en tu navegador.

No es necesario instalar dependencias ni ejecutar un servidor.

---

# Configuración de la API

Este proyecto utiliza la API pública de **OpenWeatherMap**.

Para utilizar tu propia API Key:

1. Crea una cuenta en:

https://openweathermap.org/

2. Genera una API Key gratuita.

3. Reemplaza la variable `apiKey` dentro del archivo:

```
js/index.js
```

Ejemplo:

```javascript
const apiKey = "TU_API_KEY";
```

---

# Uso de la aplicación

1. Escribe el nombre de una ciudad en el buscador.
2. Selecciona una sugerencia, presiona **Buscar** o presiona **Enter**.
3. La aplicación mostrará:
   * Temperatura actual
   * Humedad
   * Condiciones climáticas
4. Se mostrará una **gráfica de pronóstico de temperatura**.
5. En la parte superior izquierda se mostrará el clima de tu ubicación actual si el navegador permite acceder a la geolocalización.

---

# Manejo de errores

La aplicación maneja distintos escenarios:

* Ciudad inexistente
* Error de conexión con la API
* Campo de búsqueda vacío

En estos casos se mostrará una notificación visual y el panel de resultados se limpiará para evitar mostrar información incorrecta.

---

# Responsividad

La interfaz fue diseñada para adaptarse a diferentes tamaños de pantalla:

* Teléfonos móviles
* Tablets
* Laptops
* Monitores grandes
* Televisores o pantallas 4K

---

# Autor

Desarrollado por **Jhoan Sebastian Rojas Escobar**

Desarrollador FullStack en Proceso.
