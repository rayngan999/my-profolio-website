---
path: "/fingerprinting-research"
cover: "./logo.png"
date: "2022-04-12"
title: "Fingerprinting Research"
tags: []
published: true
---

<img src="https://i.ibb.co/7GCPQHm/UC-Davis-Logo.png">


#Browser Fingerprinting Reasearch 
UC Davis (Industry collaborators: Apple, Mozilla)
<hr>

<br>


As the web moves away from stateful tracking, browser fingerprinting is becoming more prevalent. Unfortunately, existing approaches to detect browser fingerprinting do not take into account potential evasion tactics such as code obfuscation.

This research aims to evaluate the robustness of state-of-the-art fingerprinting detection approaches against code obfuscation. However, it is challenging to conduct this evaluation in the wild because JavaScript obfuscation on the web is uncommon or limited to simpler obfuscation techniques. Thus, any in the wild evaluation of fingerprinting detection approaches would be biased towards non-obfuscated scripts. 

To address this challenge, we design and implement a testbed that is able to seamlessly replace any target script with its obfuscated counterpart. The testbed allows us to evaluate the robustness of fingerprinting detection approaches against JavaScript obfuscation tools in a controlled manner. 


### Testbed
<img src="https://i.ibb.co/sydV7N6/Streamline-drawio-1.png" >

Overview of the evaluation approach: 

(1) We crawl web pages with an extended version of OpenWPM that extracts JavaScript source files and their execution traces. 

(2) The original JavaScript source files serve as the control group. To generate the treatment group, we pass the JavaScript source files to different obfuscators. 

(3) We pass the both the control group and treatment group to Fp-Inspector's static analysis and dynamic analysis components. 

(4) We take Fp-Inspector's results and identify which classifications varied across the control group and treatment group.


### Replacement Mechanism for Dynamic Analysis



<img src="https://i.ibb.co/VB9XY3R/Replacement-drawio-1.png" >

Since dynamic analysis requires execution traces of the javaScript, I developed a replacement mechanism tp replace the obfuscated versions of the scripts on-the-fly for the treatment group.

(1) While visiting a web page using OpenWPM, we intercept HTTP requests to fetch JavaScript using the mitmProxy. 

(2) If the script URL of an intercepted HTTP request matches that of an obfuscated script, mitmProxy returns the obfuscated script as the HTTP response payload.

(3) If there is no match, then the HTTP request is relayed to the intended server to fetch the original script.


### Evaluation 
By comparing the output of the control (original) and the treatment (obfuscated) group, we are able to systematically evaluate the robustness of fingerprinting detection against different obfuscation tools.

## Results
- Combined method of static and dynamic analysis achieves 99.8% accuracy against various obfuscators tested.

- Static analysis can introduce false negatives but is covered by dynamic analysis. 

- Obfuscation does not cause any significant false positives. 

- Combing static and dynamic analysis is still effective.


## Notes
During my research, I worked with professor Zubair Shafiq for studying the impact of various obfuscation techniques against existing browser fingerprinting detection approaches. 

In order to learn more about the effects of obfuscated methods on existing browser fingerprinting detection, we first needed to have a dataset of obfuscated and original scripts to put to test. Using the web crawling framework OpenWPM [1], I have collected 59507 scripts from various websites domains that were identified to contain fingerprinting scripts from previous research [2]. From these scripts, I then filtered out the duplicate scripts that were from the same top level website domains. The top level website domains are the domains of the scripts that were collected from the crawl.

Through the process of filtering, the dataset resulted in 26078 scripts. I then used three web-based online obfuscators and three offline obfuscators to create a dataset of obfuscated scripts. Here are the javascript obfuscators that I used: Javascript Obfuscator [3], a canadian tech company that provides encoding and obfuscation technologies to prevent reverse engineering, DaftLogic [4], a collection of resources, tools, and information that focus on modern web API’s tools and programming languages, Google Closure Compiler [5], a tool that modifies and reformat javascript codes developed by Google, jfogs [6], an open source javascript obfuscation tool, BeautifyTools [7], an online collection of tools for developers, and obfuscator.io [8], a javascript obfuscator tool developed by Timofey Kachalov. Having 26k * 7 scripts is a big computational challenge if we were to obfuscate each script manually. Therefore I created various automation scripts for each of the obfuscators to ensure I can scale up the generation of different obfuscated scripts.

After I understood the inner workings of FP Inspector [2], I was then able to run the dynamic analysis on the dataset that was generated. FP Inspector trains classifiers to learn fingerprinting behaviors using both static and dynamic analysis. The reason I ran dynamic analysis instead of static analysis was because dynamic analysis was the primary detection technique for obfuscation.
To ensure the results for the obfuscated scripts will be validated, I first ran the dynamic analysis detection on non-obfuscated scripts as a control group. Then for the obfuscated scripts, I used the website crawling framework OpenWPM to crawl through each obfuscated version of the scripts and replaced the scripts on the fly using mitmProxy [10].

As an undergraduate, I was able to apply my knowledge from classes to the real world and was able to gain hands-on research experience. I have learned how to use OpenWPM to crawl various websites and extract information necessary for  research purposes. From analyzing the crawled results, I have gained insights in managing and arranging sqlite databases using python. In addition, I have gained the knowledge of creating web automation solutions on a large scale using selenium [9] as well as various command line automation. Lastly, I have learned how to use subprocess to run multiple mitmProxy [10] in parallel. 



### Citations
[1] OpenWPM: https://github.com/mozilla/OpenWPM

[2] FP Inspector: https://umariqbal.com/papers/fpinspector-sp2021.pdf

[3] Javascript Obfuscator: https://javascriptobfuscator.com/

[4] DaftLogic: https://www.daftlogic.com/

[5] Google Closure Compiler: https://developers.google.com/closure/compiler

[6] jfogs: https://github.com/zswang/jfogs

[7] BeautifyTools: https://beautifytools.com/javascript-obfuscator.php

[8] Obfuscator.io: https://obfuscator.io/

[9] Selenium: https://www.selenium.dev/documentation/en/

[10] mitmProxy: https://mitmproxy.org/


<a href="https://web.cs.ucdavis.edu/~zubair/students.html"> Gunrock Breakerspace (Professor Zubair's lab) </a>