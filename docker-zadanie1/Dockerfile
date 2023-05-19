# Wersja node
FROM node:14-alpine AS build

# Autor pliku 
LABEL author="Tomasz Koltys"

# Ustawienie katalogu roboczego
WORKDIR /app

# Skopiowanie plików aplikacji serwera do kontenera
COPY package*.json ./
COPY server.js ./

# Zainstalowanie zależności
RUN npm install

# Etap 2
FROM node:14-alpine

# Autor pliku
LABEL author="Tomasz Koltys"

# Ustawienie katalogu roboczego
WORKDIR /app

# Skopiowanie plików aplikacji serwera
COPY --from=build /app .

# Dodanie do pliku logs.txt informacji o dacie uruchomienia
RUN echo "$(date) - Serwer uruchomiony." >> logs.txt

# Port na ktorym bedzie nasluchiwal serwer
ENV PORT=3000

# Sprawdzanie stanu zdrowia aplikacji poprzez wykonanie żądania http na endpoint '/health' co 30s
HEALTHCHECK --interval=30s CMD curl -f http://localhost:${PORT}/health || exit 1

# Uruchamianie serwera
CMD ["node", "server.js"]


