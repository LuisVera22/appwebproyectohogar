package com.proyectohogar.inmobiliaria.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping({"","/"})
    public String getInicioPage(){
        return "index";
    }
    @GetMapping({"/direccion-comercial"})
    public String getDireccionComercialPage(){
        return "direccion-comercial";
    }
    @GetMapping({"/quienes-somos"})
    public String getQuienesSomosPage(){
        return "quienes-somos";
    }
    @GetMapping({"/nuestros-agentes"})
    public String getNuestrosAgentesPage(){
        return "nuestros-agentes";
    }
    @GetMapping({"/nuestros-clientes"})
    public String getNuestrosClientesPage(){
        return "nuestros-clientes";
    }
    @GetMapping({"/politica-de-privacidad"})
    public String getPoliricaPrivacidadPage(){
        return "politica-de-privacidad";
    }
    @GetMapping({"/preguntas-frecuentes"})
    public String getPreguntasFrecuentesPage(){
        return "preguntas-frecuentes";
    }
    @GetMapping({"/blogs"})
    public String getBlogsPage(){
        return "blogs";
    }
    @GetMapping({"/blog-post"})
    public String getBlogPostPage(){
        return "blog-post";
    }
    @GetMapping({"/contactenos"})
    public String getContactenosPage(){
        return "contactenos";
    }
    @GetMapping({"/comprar-o-alquilar"})
    public String getPropiedadesPage(){
        return "comprar-o-alquilar";
    }
    @GetMapping({"/nuestros-servicios"})
    public String getNuestrosServiciosPage() {
        return "nuestros-servicios";
    }
    @GetMapping({"/nuestros-inmuebles"})
    public String getNuestrosInmmueblesPage(){
        return "nuestros-inmuebles";
    }
    
    @GetMapping({"/inmueble"})
    public String getInm1ueblePage(){
        return "inmueble";
    }
    @GetMapping({"/register-persona"})
    public String getRegisterPersona(){
        return "register-persona";
    }
    @GetMapping({"/libro-reclamaciones"})
    public String getLibroReclamaciones(){
        return "libro-reclamaciones";
    }
    @GetMapping({"/registrar-agentes"})
    public String getRegistrarAgentePage(){
        return "registrar-agentes";
    }
    
       
    @GetMapping("/probar")
    public String mostrarPrueba() {
        return "probar_fragmento";
    }

    @GetMapping("/intranet")
    public String getIntranet() {
        return "intranet";
    }
}
