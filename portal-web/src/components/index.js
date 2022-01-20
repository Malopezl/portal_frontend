import React from "react";

function Main() {
    return (
        <React.Fragment>
            <tbody>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container px-4 px-lg-5">
                        <a class="navbar-brand" href="#!">Portal Web</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Home</a></li>
                            <li class="nav-item"><a class="nav-link active" aria-current="page" href="/productos">Productos</a></li>
                            <li class="nav-item"><a class="nav-link active" aria-current="page" href="/distribuidores">Distribuidores</a></li>
                            <li class="nav-item"><a class="nav-link active" aria-current="page" href="/canales-autorizados">Canales Autorizados</a></li>
                        </ul>
                        </div>
                    </div>
                </nav>
                <header class="bg-dark py-5">
                    <div class="container px-4 px-lg-5 my-5">
                        <div class="text-center text-white">
                            <h1 class="display-4 fw-bolder">Bienvenido al Portal Web</h1>
                        </div>
                    </div>
                </header>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            </tbody>
        </React.Fragment>
    );
}

export default Main;