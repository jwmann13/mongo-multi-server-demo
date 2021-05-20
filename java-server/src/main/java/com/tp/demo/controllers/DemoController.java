package com.tp.demo.controllers;

import java.util.List;

import com.tp.demo.models.Demo;
import com.tp.demo.services.DemoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DemoController {
    
    @Autowired
    private DemoService service;

    @GetMapping("/demos")
    public ResponseEntity getAllDemos() {
        List<Demo> toReturn;
        try {
            toReturn = service.getAllDemos();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok(toReturn);
    }

    @PostMapping("/demos")
    public ResponseEntity saveDemo(@RequestBody Demo demo) {
        Demo saved;
        try {
            saved = service.createDemo(demo);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok(saved);
    }
}
