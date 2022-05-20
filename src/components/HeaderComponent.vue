<template>
    <header id="header">
            <div class="center">
                <!-- LOGO -->
                <div id="logo">
                    <img src="../assets/logo.png" class="app-logo" alt="Logotipo" />
                    <span id="brand">
                        <strong>Guillem</strong> Castaño Medina
                    </span>
                </div>
                
                <!-- MENU -->
                <nav id="menu">
                    <ul>
                        <li>
                            <router-link to="/home">Inicio</router-link>
                        </li>
                        <li>
                            <router-link to="/blog">blog</router-link>

                        </li>
                        <li>
                            <router-link to="/form">formulario</router-link>
                        </li>
                        <li>
                            <router-link to="/pagina">pagina</router-link>
                        </li>       
                        <li>
                            <router-link to="/hello">pagina2</router-link>
                        </li>                       
                    </ul>
                </nav>

                <!--LIMPIAR FLOTADOS-->
                <div class="clearfix"></div>
            </div>
        </header>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>