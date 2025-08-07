/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.proyectohogar.inmobiliaria.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {
    @GetMapping("/user/perfil-usuario")
    public String getPerfilUsuario(){
        return "user/perfil-usuario";
    }

    @GetMapping("/user/publicar-inmueble")
    public String getPublicarInmueble(){
        return "user/publicar-inmueble";
    }
}
