// Solo ejecutar si existe el div con id 'map'
if (document.getElementById('map')) {
    // Inicializar mapa
    var map = L.map('map').setView([-12.06226, -77.03656], 14);

    // Capa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Marcador arrastrable
    var marker = L.marker([-12.06226, -77.03656], { draggable: true }).addTo(map)
        .bindPopup("¿Te encuentras aquí?<br><small>Arrastra el pin para ubicar tu inmueble</small>")
        .openPopup();
    
    // Simulación de datos (puedes cargar esto desde JSON externo o API)
    const datosUbigeo = {
        "LIMA": {
            "LIMA": ["Miraflores", "San Isidro", "Surco"],
            "CALLAO": ["Bellavista", "La Perla"]
        },
        "CUSCO": {
            "CUSCO": ["Wanchaq", "Santiago", "San Sebastián"]
        }
    };

    const departamentos = Object.keys(datosUbigeo);
    const selectDepartamento = document.getElementById("departamento");
    const selectProvincia = document.getElementById("provincia");
    const selectDistrito = document.getElementById("distrito");

    // Llenar departamentos
    departamentos.forEach(dep => {
        const opt = document.createElement("option");
        opt.value = dep;
        opt.textContent = dep;
        selectDepartamento.appendChild(opt);
    });

    // Evento para provincias
    selectDepartamento.addEventListener("change", () => {
        const provincias = Object.keys(datosUbigeo[selectDepartamento.value]);
        selectProvincia.innerHTML = '<option selected disabled>Selecciona</option>';
        selectProvincia.disabled = false;
        selectDistrito.disabled = true;
        provincias.forEach(prov => {
            const opt = document.createElement("option");
            opt.value = prov;
            opt.textContent = prov;
            selectProvincia.appendChild(opt);
        });
    });

    // Evento para distritos
    selectProvincia.addEventListener("change", () => {
        const distritos = datosUbigeo[selectDepartamento.value][selectProvincia.value];
        selectDistrito.innerHTML = '<option selected disabled>Selecciona</option>';
        selectDistrito.disabled = false;
        distritos.forEach(dist => {
            const opt = document.createElement("option");
            opt.value = dist;
            opt.textContent = dist;
            selectDistrito.appendChild(opt);
        });
    });

    // Evento final para centrar mapa y mostrar distrito (ejemplo simulado)
    selectDistrito.addEventListener("change", () => {
        const distrito = selectDistrito.value;
        // Lógica simulada para centrar (ejemplo Miraflores)
        if (distrito === "Miraflores") {
            map.setView([-12.1211, -77.0306], 14);
        }
        if (distrito === "San Isidro") {
            map.setView([-12.09922, -77.03480], 14);
        }
        if (distrito === "Surco") {
            map.setView([-12.12796, -76.98669], 14);
        }
        if (distrito === "Bellavista") {
            map.setView([-12.06274, -77.12892], 14);
        }
    });
}