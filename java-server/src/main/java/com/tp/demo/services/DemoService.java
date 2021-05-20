package com.tp.demo.services;

import java.util.List;

import com.tp.demo.models.Demo;

public interface DemoService {
    public List<Demo> getAllDemos();

    public Demo createDemo(Demo demo);
}
