---
path: "/fingerprinting-research"
cover: "./fingerprint2.jpg"
date: "2018-10-17"
title: "Fingerprinting Research"
tags: []
published: true
---

<img src="https://i.ibb.co/7GCPQHm/UC-Davis-Logo.png">

#Browser Fingerprinting Reasearch 
UC Davis (Industry collaborators: Apple, Mozilla)
<hr>

<br>

###Accomplishments:
During my research, I worked with professor Zubair Shafiq for studying the impact of various obfuscation techniques against existing browser fingerprinting detection approaches. 

In order to learn more about the effects of obfuscated methods on existing browser fingerprinting detection, we first needed to have a dataset of obfuscated and original scripts to put to test. Using the web crawling framework OpenWPM [1], I have collected 59507 scripts from various websites domains that were identified to contain fingerprinting scripts from previous research [2]. From these scripts, I then filtered out the duplicate scripts that were from the same top level website domains. The top level website domains are the domains of the scripts that were collected from the crawl.

Through the process of filtering, the dataset resulted in 26078 scripts. I then used three web-based online obfuscators and three offline obfuscators to create a dataset of obfuscated scripts. Here are the javascript obfuscators that I used: Javascript Obfuscator [3], a canadian tech company that provides encoding and obfuscation technologies to prevent reverse engineering, DaftLogic [4], a collection of resources, tools, and information that focus on modern web API’s tools and programming languages, Google Closure Compiler [5], a tool that modifies and reformat javascript codes developed by Google, jfogs [6], an open source javascript obfuscation tool, BeautifyTools [7], an online collection of tools for developers, and obfuscator.io [8], a javascript obfuscator tool developed by Timofey Kachalov. Having 26k * 7 scripts is a big computational challenge if we were to obfuscate each script manually. Therefore I created various automation scripts for each of the obfuscators to ensure I can scale up the generation of different obfuscated scripts.

After I understood the inner workings of FP Inspector [2], I was then able to run the dynamic analysis on the dataset that was generated. FP Inspector trains classifiers to learn fingerprinting behaviors using both static and dynamic analysis. The reason I ran dynamic analysis instead of static analysis was because dynamic analysis was the primary detection technique for obfuscation.
To ensure the results for the obfuscated scripts will be validated, I first ran the dynamic analysis detection on non-obfuscated scripts as a control group. Then for the obfuscated scripts, I used the website crawling framework OpenWPM to crawl through each obfuscated version of the scripts and replaced the scripts on the fly using MITM proxy [10].

###Skills Acquired:
As an undergraduate, I was able to apply my knowledge from classes to the real world and was able to gain hands-on research experience. I have learned how to use OpenWPM to crawl various websites and extract information necessary for  research purposes. From analyzing the crawled results, I have gained insights in managing and arranging sqlite databases using python. In addition, I have gained the knowledge of creating web automation solutions on a large scale using selenium [9] as well as various command line automations. Lastly, I have learned how to use subprocess to run multiple MITM proxies [10] in parallel. 

###Objectives Completed:
The objective of this research project was to study the impact of obfuscation and develop obfuscation-resistant fingerprinting detection approaches. Though not all the objectives are completed since this research project will be continuing next quarter, I believe that I have completed most of the objectives set for this quarter and is in a good place of finishing the research. I have created solutions to generate obfuscation dataset, gained in-depth knowledge of the inner workings for existing browser fingerprinting detection approaches, and finished the fingerprinting analysing for the control group. For creating solutions to generate obfuscation dataset, I have created a pipeline that would separate  each obfuscated script into different folders based on the obfuscation techniques used. I have also created an algorithm that would save the progress of obfuscation so that if any obfuscator was accidentally shut down, it can still continue obfuscating without having to start from the beginning again.

The next step of this research is to run OpenWPM in parallel for all the obfuscated scripts and create a database of these crawls. Then I will run the analysis on this database to see whether obfuscation would have an effect on FP Inspector [2]. From these results, I will be able to improve the existing browser fingerprinting detection method based on our observations and knowledge on various obfuscation techniques.

###Citations:
[1] OpenWPM: https://github.com/mozilla/OpenWPM

[2] FP Inspector: https://umariqbal.com/papers/fpinspector-sp2021.pdf

[3] Javascript Obfuscator: https://javascriptobfuscator.com/

[4] DaftLogic: https://www.daftlogic.com/

[5] Google Closure Compiler: https://developers.google.com/closure/compiler

[6] jfogs: https://github.com/zswang/jfogs

[7] BeautifyTools: https://beautifytools.com/javascript-obfuscator.php

[8] Obfuscator.io: https://obfuscator.io/

[9] Selenium: https://www.selenium.dev/documentation/en/

[10] MITM Proxy: https://mitmproxy.org/





####Objective:

Existing browser fingerprinting detection approaches rely on static or dynamic analysis of JavaScript code. However, they are not robust against code obfuscation. The goal of this project is to study the impact of obfuscation and develop obfuscation-resistant fingerprinting detection approaches.

####Goal & Educational Objectives:

This research is going to allow me to gain hands-on experience of real-world security and machine learning applications. For this research, I will participate in weekly meetings as well as contribute in any possible ways, whether it is to write code to automate the generation of obfuscation dataset, gain an in-depth understanding of the state-of-the-art FP-Inspector tool, and to improve FP-Inspector by implementing a obfuscation code detection module. This project will also allow me to get experience working in a research setting with other researchers.

####Motivation:

From my previous programming experience, I have learned Python, C++, Html, CSS, and Javascript. Since this research is mainly focused on analyzing Javascript, I feel I could put my skills to test and allow me to expand my knowledge on this field.

####Project Plan:

- We will first understand and learn the inner workings of FP-Inspector, as well as, popular JavaScript obfuscation tools. 
- We will then research different available obfuscators and analyze which ones are most likely to impact FP-Inspector’s accuracy. 
- Next, we will gather a dataset of both obfuscated and non-obfuscated fingerprinting scripts using different automated obfuscators. 
- Using this dataset, we are going to put the FP-Inspector to test and evaluate its robustness against different obfuscators. 
- Finally, we plan to improve FP-Inspector’s design and implementation by using the insights we have gained thus far from aforementioned steps.
