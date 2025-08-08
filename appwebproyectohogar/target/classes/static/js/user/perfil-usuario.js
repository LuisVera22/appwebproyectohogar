const contentData = {
    perfil: {
        content: `
        <div class="d-flex justify-content-center mb-5"> 
            <img src="/img/agente.jpg" alt="Foto de perfil"
            class="rounded-circle border border-3 border-white" style="width: 150px; height: 150px; object-fit: cover;">
        </div>

        <h4 class="pb-3">Información Personal</h4>
        <ul class="list-group mb-3">
            <li class="list-group-item">Nombre: Jose Carlos Espinoza Quispe</li>
            <li class="list-group-item">Género: Masculino</li>
            <li class="list-group-item">Correo: juan.perez@example.com</li>
            <li class="list-group-item">Teléfono: +51 987654321</li>
            <li class="list-group-item">Ubicación: Lima, Perú</li>
        </ul>
        <button class="btn btn-primary" data-toggle="modal" data-target="#editarModal">Editar Información</button>
        `
    },
    favoritos: {
        title: "Favoritos",
        content: "Aquí se muestran tus propiedades favoritas."
    },
    historial: {
        content: `
            <h4 class="pb-3">Historial de Reservas/Solicitudes</h4>
            <ul class="list-group">
            <li class="list-group-item d-flex align-items-center bg-success text-white">
                <i class="bi bi-check-circle-fill mr-2"></i>
                Reservado: Departamento en Miraflores (10/04/2025)
            </li>
            <li class="list-group-item d-flex align-items-center bg-warning text-dark">
                <i class="bi bi-hourglass-split mr-2"></i>
                Solicitud pendiente: Casa en Surco (15/04/2025)
            </li>
            </ul>
        `
    },
    descartados: {
        title: "Descartados",
        content: "Propiedades que descartaste."
    },
    alertas: {
        title: "Búsquedas y alertas",
        content: "No guardaste ninguna búsqueda. Crea alertas para encontrar tu próximo hogar."
    }
};
/* Cambiar contedido dinamico con transiccion (animacion) */
function showContent(section) {
    const main = document.getElementById("mainContent");

    main.classList.remove("fade-in");
    main.classList.add("fade-out");

    setTimeout(() => {
        main.innerHTML = `
            ${contentData[section].title ? `<h2>${contentData[section].title}</h2>` : ""}
            ${contentData[section].content}
        `;
        main.classList.remove("fade-out");
        main.classList.add("fade-in");
    }, 300);

    // Cambiar botón activo
    const buttons = document.querySelectorAll('.sidebar button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

/* Mostrar pequeño modal al dar click en la imagen de la parte superior */
function toggleProfileMenu() {
    const menu = document.getElementById('profile-menu');
    menu.classList.toggle('hidden');
    }

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', function(event) {
    const isClickInside = document.querySelector('.profile-container').contains(event.target);
    if (!isClickInside) {
        document.getElementById('profile-menu').classList.add('hidden');
    }
});

    /* Mostrar pequeño cuadro de SweetAlert2 para confirmar cerrado de sesion */
    document.addEventListener('DOMContentLoaded', () => {
    const cerrarSesionLink = document.querySelector('#cerrarSesion');

    cerrarSesionLink.addEventListener('click', (event) => {
        event.preventDefault(); // Evita que se recargue la página o redirija

        Swal.fire({
        title: '¿Estás seguro?',
        text: '¿Deseas cerrar sesión?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, cerrar sesión',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6'
        }).then((result) => {
        if (result.isConfirmed) {
            // Aquí puedes redirigir al login o hacer logout
            // Por ejemplo:
            window.location.href = '/'; // Ajusta la ruta según tu estructura
        }
        });
    });
    });


/* Vista previa de foto de perfil */
document.getElementById('inputFoto').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const img = document.getElementById('fotoPerfil');
        img.src = URL.createObjectURL(file);
    }
});
 
$(document).ready(function () {
$('.notification-item').on('click', function () {
    const title = $(this).data('title');
    const message = $(this).data('message');

    Swal.fire({
        title: title,
        text: message,
        icon: 'info',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#3085d6'
    });
});
});
