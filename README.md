# Setup Server Aquaponic

Buka terminal di server (Debian/Ubuntu) dan jalankan langkah-langkah berikut:

### 1. Konfigurasi Mosquitto MQTT

Tambahkan listener ke file konfigurasi (`/etc/mosquitto/mosquitto.conf`):

```conf
listener 1883
protocol mqtt
allow_anonymous true

listener 9001
protocol websockets
allow_anonymous true
```

Restart layanan mosquitto:

```sh
sudo systemctl restart mosquitto
```

### 2. Install Dependencies Poryek

Masuk ke folder proyek dan jalankan:

```sh
npm install
npm install -g pm2 serve
```

### 3. Jalankan Scheduler (Backend)

```sh
pm2 start scheduler.js --name "aquaponic-scheduler"
pm2 save
pm2 startup
```

### 4. Build & Hosting Frontend (Aplikasi Web)

```sh
npm run build
pm2 start serve --name "aquaponic-web" -- -s dist -l 3000
```

> Akses web melalui browser di `http://[IP_SERVER]:3000`
