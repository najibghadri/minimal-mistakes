---
title: 'Self-supervised Driving Scene Understanding with Energy-based concept models based on CNN synergy and stereo imaging'
date: 2020-03-20
permalink: /thesis-scene-understanding/
tags:
  - research
collection: publications
---

The concept is the following: I use modern CNNs suchs as YOLOv3, R-CNN or others to perform object detection, semantic segmentation, and additional
feature detections with classical methods to achieve lane detection such as Hough transform and perform object tracking and distance
estimation by using stereo imaging.

For this project I decided that I will train my system on a simulation. This gives me great freedom and efficiency to focus on developing
the algorithms instead of worrying about the lack of good datasets, because as we know, generating a dataset is half of the hustle in ML today (yet). 
However in a simulation you can do anythis almost instantly if you put aside the rendering time. Put arbitrary number of cameras anywhere, use any car,
be on any kind of road, use camera effects, generate ground truth of any kind programatically (bounding boxes, segmentation, depth, steering data, location data).

After extensive research I stumbled upon [CARLA Simulator](http://carla.org/). The project is developed by the Barcelonian university UAB's computer vision CVC Lab. This simulator has a really good API that let's us do what I described above in python.

The following is the rendering architecture in my system. Front stereo imaging, two 45° angled corner stereos and two side stereos.
Here you can see how it looks like with one image for each side:

  <video
    loop
    muted
    autoplay
    preload="auto"
    poster="/media/thesis/montage.jpg"
    >
    <source src="/media/thesis/montage2.webm" type="video/webm">
    <source src="/media/thesis/montage2.mp4" type="video/mp4">
  </video>

With the output combination of these algorithms then I will perform ”self-supervised” deep-learning
with continuous energy-based method to learn the latent space of generic driving scene scenarios.