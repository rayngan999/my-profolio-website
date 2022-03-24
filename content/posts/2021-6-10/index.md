---
path: "/COVID-19-Vaccine"
cover: "./logo3.png"
date: "2021-06-10"
title: "COVID-19 Vaccine Outzome Predictor"
tags: []
published: true
---


#COVID-19 Vaccine Outzome Predictor
<hr>

<br>

###Introduction

In the United States, COVID-19 vaccines are becoming available to more and more people every day. At the time of writing this, about half of the country’s population has had at least one dose. This big step toward herd immunity makes it feel like we may finally be seeing the light at the end of this quarantine tunnel. However, there are still those who remain undecided on whether or not they should get vaccinated, for a variety of reasons. Some are skeptical about receiving any of the vaccines due to a perceived lack of data on the potential side effects. Many concerns regarding the risks of vaccination arise from exposure to myths and misinformation spread on the internet. There is a growing movement of those who distrust the government, media outlets, and scientific research findings. Some of these individuals may not be convinced by data—but others might if it is delivered in a way that is novel, transparent, and intuitive. Vaccine data is collected and shared openly with the general public; but for many, it can be difficult to access, visualize, or interpret. The goal of our project is to inform any who might still be deliberating on whether or not they should get a COVID-19 vaccine. We aim to provide objective facts and figures regarding COVID-19 vaccine side effects in a way that is tailored to each user while being easy to access and understand. 

Using the collected vaccine data, we applied our knowledge of supervised learning (specifically, logistic regression), one of the three basic machine learning categories, to find an association between each recorded COVID-19 vaccine symptom and the person’s demographics: a set of input features that include age, sex, and vaccine type. Once the association is found through training the model, it can then predict the likelihood of experiencing specific vaccine symptoms—from headaches to hospitalizations, and even deaths—given that a patient has an adverse reaction. In addition to predicting symptoms, we implemented a convolutional neural network classification model to determine patient age and sex from a selfie image. We created a heat map to show the number of people vaccinated and the number of deaths potentially related to vaccinations. For better organization and readability, we decided to create an interactive web application that utilizes each model, provides visual representations of the risks of vaccination, and helps users decide which option is better for them according to their specific demographics. 

In this report, we will be sharing the challenges we faced to create these models and the steps taken to solve them. We incorporated topics covered in this course as well as outside resources—such as relevant literature on classifying images and predicting risks—to help select and implement the models to complete this project. Those resources will be thoroughly covered in the following paper to provide a clearer explanation of how we were able to achieve significant results despite the limited data and information on the newly approved vaccines. 

###Literature Review

Machine learning models have been developed for use in healthcare settings for various purposes. By combining medical imaging and other data sources with electronic health databases, clinicians hope to improve the diagnosis and prediction of individual responses to therapies using machine learning methods. For example, some studies seek to improve patient outcomes by predicting a patient’s risk of death if infected with COVID-19. In one study, 53,100 patient features were extracted before reducing dimensions to the 9,500 distinct features from which predictions were made. [1] Precise predictions of who would benefit most from COVID-19 vaccination allow clinicians to better gauge an individual’s priority based on their unique health histories and risks of mortality. [2] Since hospitals all over the globe have finite resources, predictive models could help efficiently allocate medicines and supplies to those who are most at-risk. Previously, efforts to identify and vaccinate the most vulnerable populations were based on broad demographics and therefore less precise. 

In predicting patient risks, supervised learning models are widely used. Some governments have relied on regression models for predicting frequencies of COVID-19 infections and deaths. [3] When comparing the supervised learning methods for predicting risks of patient mortality, some research indicates that logistic regression models and artificial neural networks have comparable predictive ability, with receiver operating characteristic (ROC) curves between 0.7517 and 0.8782. [4] 
Other models aim to improve the diagnosis and detection of COVID-19 infections by analyzing health records and applying computer vision algorithms to medical images, like CT scans and chest radiographs. More than 300 such models have been developed and published since the initial outbreak of the virus. However, an extensive literature review examining each of these models found that none of them are likely candidates to be adopted for clinical use [5]. To explain these failures, researchers cited low-quality datasets, methodological flaws, insufficient documentation to replicate the model, and a lack of external validation. Due to the high risk of biases, they cautioned against using public data repositories whenever developing a model for clinical use.
Despite these risks, many public datasets provide great benefits. The Vaccine Adverse Event Reporting System (VAERS) dataset used for our project “demonstrates substantial case capture for clinically severe adverse events”. [6] There are no other publicly available sources of comprehensive vaccine risk data in the United States. The VAERS dataset was used in several non-clinical machine learning applications to reduce human workloads; for example, text mining and informative feature selection were used for automated medical text classification of VAERS reports. [7] The dataset used for our facial recognition model (UTKFace) is similarly useful for age group and sex classification. Though publicly available, its images have enough variation (lighting, pose, resolution, etc.) to generalize well and avoid overfitting. [8]

###Dataset Description

Our vaccine risk dataset was provided by the Vaccine Adverse Event Reporting System (VAERS). The VAERS reporting system was designed to detect unexpected patterns of adverse events that could indicate a safety problem with a vaccine. The labeled dataset contains information about reported adverse events of individuals who received COVID-19 vaccines, including patient symptoms, demographics, and past medical histories. Each sample is a report that is either sent in by the patient or by their medical professional. If a patient receiving a vaccine has an adverse event, their doctors, medical staff, and vaccine manufacturers are required to report it to VAERS. Adverse events include any abnormal medical findings, like symptoms or laboratory results, that are associated with the use of a medicinal product. Serious adverse events include hospitalizations, significant disabilities, life-threatening illnesses, or deaths. 
The dataset is available on the VAERS website as three .csv files with 34,122 samples. [9] The attributes of interest are the information about each patient (i.e., age, sex, location, medical conditions, medications taken, medication allergies) and the vaccine they received (i.e., type, manufacturer, route, injection site, and whether it was the first or second dose). 
To train our facial recognition algorithm, we used the UTKFace dataset from Kaggle. [10] It is a .csv file with 27,305 “images” (strings of pixel values) of faces that are labeled with attributes, including age and gender. These images are varied in their facial positioning, facial expression, illumination, occlusion, and resolution, but all are the same size: 48x48 pixels.

###Solution Overview

Our proposed solution uses two different supervised learning methods: logistic regression and convolutional neural networks. Logistic regression models are used to predict the probabilities of adverse reactions to COVID-19 vaccines given patient attributes and vaccine type. One regression model predicts the risk of individual symptoms and the other predicts the risks of serious adverse reactions or outcomes, like disability, hospitalization, or death. The convolutional neural network models are used to classify images of faces. One neural network classifies images by gender and the other classifies images by age group. We used a web framework for Python to build an interactive website incorporating each of these models.

###Risk Prediction

When choosing the models for the project, our group members found that logistic regression was more applicable than linear regression. Linear regression is geared more towards predicting continuous values than determining probabilities. We used logistic regression for finding the probability distribution of each binary dependent variable. The model outputs values that are between 0 and 1 and sum to 1, where 0 represents the minimum likelihood of an event occurring while 1 represents the maximum likelihood. Each value of a dependent variable is thus a probability of a particular outcome given the input features. 

Our input matrix contains four features. The patient age group is a value between 0 and 1, scaled using Scikit-Learn’s encoder. The patient sex is a binary value, either encoded as a 0 or 1. The vaccine manufacturers are categorical values representing Pfizer/BioNTech, Moderna, or J&J/Janssen; samples with other vaccines that are not available in the United States were dropped from the dataset. Lastly, the vaccine dose series is a categorical value, either 1 or 2, and represents which vaccine dose the patient receives.

In predicting COVID-19 vaccine symptoms, the binary dependent variables were individual symptoms, like “fatigue” or “fever”. Given the huge number of unique symptoms in the dataset, we chose to merge similar symptoms. For example, any symptoms related to “pain” were merged into a single binary variable. We also dropped symptoms that were incredibly rare from the dataset. After preprocessing, there were 76 dependent variables in total, with each one-hot encoded to a 0 or 1 using the Scikit-Learn label encoder. The input matrix of features (the patient attributes and vaccine types) was fit to a Scikit-Learn logistic regression model. A 70:30 train-test split was used when fitting the data to the model. Once trained, the testing set was used to gauge the model’s accuracy for each dependent variable. These values ranged from ~0.831 to ~0.993.

<p align="center">
<img src="https://i.ibb.co/DKdjJ1y/Screen-Shot-2022-01-24-at-5-24-03-PM.png">
</p>

The model for predicting patient outcomes used logistic regression with the same input matrix. The target variables (or dependent variables) for this model were a set of patient outcomes: death, life-threatening illness, hospitalization, disability, and whether the patient recovered. The dataset was originally organized into columns where patients who met any of those conditions were recorded as ‘y’, and were otherwise recorded as ‘NaN’. For readability purposes, those were changed into 0 and 1 for negative and positive, respectively.

###Image Classification

Our image classification models used convolutional neural networks—regularized versions of multilayer perceptrons—to extract some of the features for the risk prediction model. The target variable for one of the classification models was the age group, a categorical variable representing a range of ages and of which there are ten possible values. The other model’s target variable was sex, a binary category. Instead of having the user directly input their age and sex, they can supply the classification model with an image and have it predict these features. K-Nearest Neighbors (KNN) is another approach for image classification, but we decided on CNNs due to the large dataset.

The input to each model is a 48x48 array of pixel values, which were normalized and reshaped to be read by Tensorflow. The input layer has a node for each of these values. Each hidden layer in the network used ReLU as the activation function, while Softmax was used for the output layer’s activation function. These models used one fully connected (or “dense”) layer, in which each of the nodes in the layer is connected to every node in the previous layer. The convolutional layers of the network can take into account the value of a single pixel and each of the pixels that surround it.

The models were trained using an 80:20 train-test data split: 18,964 samples were used for training and 4,741 samples were used for testing. To prevent overfitting and handle loss for the networks, a dropout approach was used for regularization. This means certain nodes are chosen to be ignored at random during the training phase. The dropout approach helps the nodes of the network to learn independently of each other, rather than interdependently. A stochastic gradient descent method, the Adam algorithm, was used to optimize the network and minimize the mean squared error (MSE). The models were trained for 3 epochs each, with a batch size of 64. Then each model was then evaluated for accuracy. The model classifying images based on age group scored ~0.49 while the model classifying images based on sex scored ~0.84.

<p align="center">
<img src="https://i.ibb.co/Hg3pDHR/Screen-Shot-2022-01-24-at-5-24-26-PM.png">
</p>

###Interactive Web Application:

The Streamlit framework was used to create an interactive representation of our models and their outputs. Using this framework allowed us to develop a web application quickly while using the same programming language as the one we used to develop our machine learning models: Python. In the Streamlit architecture, interactive web page elements and widgets are produced using only simple Python functions. 
Some of our challenges stemmed from learning how the Streamlit dataflow model works. Whenever something on the screen has to be updated, Streamlit will run the entire Python script again, from top to bottom. Any widget interaction causes the app to refresh; for example, clicking a button or dragging a slider. Since Streamlit does not come with state management out-of-the-box, data must be linked to the session so that a state can be preserved across script refreshes. Calling the state.sync() function at the end of the application script avoids a mandatory rollback of each widget on the page and allows for navigation between sections of the web application. 

Users begin at the welcome page which explains our project and its goals. There is a navigation sidebar on the left for users to move between the pages. On the Predict page, the application asks for the user’s input (independent variables) to calculate the predictions. These inputs include the patient attributes and their choice between three vaccines: Pfizer/BioNTech, Moderna, and J&J/Janssen. They can also select between their first dose or their second dose of the vaccine. As an additional challenge for our project and a lighthearted activity for the user, we included a way for users to upload selfie images using the Python Image Library. After uploading an image, it is cropped and resized to 48x48 pixels to fit the same dimensions as images used in the facial recognition training dataset. Once in this format, the pixel values can be read from the image and converted into strings for the facial recognition model. The web application also syncs with real-time video inputs like webcams by using a WebRTC component for computer vision models. Users can capture a still image, select their face, and have their image automatically cropped and resized to the correct dimensions. The image classifier then predicts the outputs: age group (a discrete age category) and sex (a binary value). These attribute values are output on the page, stored as session variables, and used as input for the subsequent logistic regression models. After each regression model is finished running, the outputs are displayed as percentages. 

Each of the machine learning models was saved and loaded from the file system as .pkl files. Deploying the models using Streamlit required shipping the one-hot and scalar encoders along with each pretrained model. Isolation testing was performed in virtual environments to resolve any bugs. Our Git repository was then hosted using the Heroku cloud platform and Streamlit.io.

<p align="center">
<img src="https://i.ibb.co/TqjvtB9/Screen-Shot-2022-01-24-at-5-25-16-PM.png">
</p>

###User Interface and Visualizations:

To better visualize the data we were working with, we created a bar graph and interactive heatmap. The bar graph displayed information pertaining on the number of vaccines that were distributed per state, by date. The heatmap was also based on the U.S. states, and by adjusting the slider you can scroll through the data day-by-day, and it would change based on the dataset. The more opaque the state, the more vaccinations were given. We observed from the heatmap that the state that has distributed the most vaccines was California. There was also an option to switch the data that was displayed on the heatmap from vaccinations distributed to deaths that occurred after a vaccine. This was a relevant statistic to include in our data visualization model, but due to the extremely small rate of occurrence, the day-to-day changes in the heatmap were not as extreme.

###Conclusion and Discussion

Starting with just an idea for something relevant and useful given the events that are currently happening around the world, our group wanted to create a model to help alleviate the existing and ongoing concerns of vaccines, specifically for COVID-19. By using the knowledge we learned from this class and outside resources, our group challenged ourselves and created multiple models for this project to successfully work. Although we were able to gain significant results that were thought to be unachievable due to limited resources, we did face a handful of minor issues while creating and implementing our models onto the website. 

After much research and attempts to find the appropriate methods to create the models, we found that logistic regression was the most fitting for our symptoms prediction models instead of linear regression. As for the image classification model, we chose to use a convolutional neural network (CNN or ConvNet) instead of K-Nearest Neighbors (KNN). We did not learn about convolutional neural networks in depth during this class, but we found that its predictions were more accurate and efficient than that of the latter method. 

Even though we used a lot of what we learned from class and prior computer science knowledge to make this project possible, this overall experience was a great learning opportunity to fully understand the ideas of machine learning and apply them to a real-world problem.

The code to our work is provided in our GitHub repository, which can be found using this link: <a href="https://github.com/rayngan999/COVID19-Vaccination-Symptoms-Prediction-ML-Tool
"> Github Link </a>




###References

[1] Estiri, Hossein et al. Predicting COVID-19 mortality with electronic medical records. 2021. Med. 4, 15. https://doi.org/10.1038/s41746-021-00383-x 

[2] Wedlund, Leia and Kvedar, Joseph. New machine learning model predicts who may benefit most from COVID-19 vaccination. 2021. Med. 4, 59. https://doi.org/10.1038/s41746-021-00425-4

[3] Gupta, Rajan et al. Machine Learning Models for Government to Predict COVID-19 Outbreak. 2020. Digital Government: Research and Practice. 1, 4. https://doi.org/10.1145/3411761

[4] Jaimes, Fabian et al. Comparison between logistic regression and neural networks to predict death in patients with suspected sepsis in the emergency room. 2005. Critical Care. 9, 150. https://doi.org/10.1186/cc3054 

[5] Roberts, Michael et al. Common pitfalls and recommendations for using machine learning to detect and prognosticate for COVID-19 using chest radiographs and CT scans. 2021. Nature Machine Intelligence. 3, 199–217. https://doi.org/10.1038/s42256-021-00307-0 

[6] Miller, Elaine R. et al. The reporting sensitivity of the Vaccine Adverse Event Reporting System (VAERS) for anaphylaxis and for Guillain-Barré syndrome. 2020. Vaccine. 38, 47. doi: 10.1016/j.vaccine.2020.09.072.

[7] Botsis, Taxiarchis et al. Text mining for the Vaccine Adverse Event Reporting System: medical text classification using informative feature selection. 2011. Journal of the American Medical Informatics Association. doi: 10.1136/amiajnl-2010-000022.

[8] Levi, Gil and Hassner, Tal. Age and Gender Classification Using Convolutional Neural Networks. 2015. IEEE Workshop on Analysis and Modeling of Faces and Gestures, IEEE Conf. on Computer Vision and Pattern Recognition, Boston.

[9] “VAERS Data.” Vaccine Adverse Event Reporting System. 2021.
https://vaers.hhs.gov/data.html. 

[10] “UTKFace Large Scale Face Dataset.” UTKFace. 2021. https://susanqq.github.io/UTKFace/ 
