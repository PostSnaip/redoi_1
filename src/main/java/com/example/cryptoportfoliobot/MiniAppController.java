package com.example.cryptoportfoliobot;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MiniAppController {

    @GetMapping("/")
    public String serveMiniApp() {
        return "index.html";
    }
}