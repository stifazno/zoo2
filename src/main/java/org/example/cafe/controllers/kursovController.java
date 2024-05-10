package org.example.cafe.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class kursovController {
    @GetMapping("/")
    public String main(Model model) {
        return "kursov";
    }
    @GetMapping("/kursov")
    public String kursov(Model model) {
        return "kursov";
    }
}
