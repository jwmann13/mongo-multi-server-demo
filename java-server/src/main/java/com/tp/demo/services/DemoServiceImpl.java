package com.tp.demo.services;

import java.util.List;

import com.tp.demo.models.Demo;
import com.tp.demo.repositories.DemoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DemoServiceImpl implements DemoService {
    @Autowired
    private DemoRepository repository;

    public List<Demo> getAllDemos() {
        return repository.findAll();
    }

    public Demo createDemo(Demo demo) {
        return repository.save(demo);
    }
}
