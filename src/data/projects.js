// TODO Add a couple lines about each project
const data = [

  {
    title: 'Blue Bikes Data Analysis',
    desc: 'This project was inspired by the recent free month implemented by Blue Bikes due to the MBTA Green Line \
    service being down. Last year I had ridden blue bikes a lot and often ran into the problem of not being able to \
    find bikes at the stations closest to me and not being able to find docks at stations near my destination once \
    I arrived. The goal of this project was to gain some insight on the ridership flow throughout the year, and \
    throughout the day, to better make commute decisions.',
    date: '2022-05-6',
    link: 'https://rpubs.com/qaleb2/938466',
  },

  {
    title: 'Predicting Russell 3000 Market States with Neural Networks',
    desc: 'In this paper we implemented a neural network approach to predicting market states and a trading strategy \
    to demonstrate our results. In the first part, we classified the training data into bear, bull, and static states\
    using widely accepted market definitions. We then used a non-parametric, rule-based classification algorithm by \
    Lunde and Timmerman into classify bear and bull markets which was included in a R package. In the second part, \
    we train a neural network, and generate predictions using python, using 10% of our training data as our validation\
    data set.',
    date: '2022-02-22',
    link: '/projects/IAQF_PAPER.pdf',
  },

  {
    title: 'Predicting Loan Default With Random Forest',
    desc: ' Credit loan default prediction project using R. The data consisted of 35 variables, a mixture of categorical \
    and numerical. After preprocessing by plotting and cleaning up nonsensical data, I started with a simple linear \
    regression model, then worked my way to random forest. Throughout the process, I slowly improved the F1 score by \
    doing resampling, variable selection, and testing different parameters for different models. Through playing with \
    the data, I was also able to create a new variable called age at first disbursement, by combining disbursal amount \
    and date of birth, which contributed more information to the model. Lastly, I wrote my analysis up into a report \
    using R Markdown. ',
    date: '2022-03-26',
    link: '/projects/MidtermProject.pdf',
  },

  {
    title: 'Data Analysis of Binance Trade History Using K Means',
    desc: 'This paper proposes a data analysis methodology using Pyspark and Google Cloud. The data set we deal with \
    comes from Binance exchange, which contains the trade history of all trading pairs of cryptos. First, we examine \
    the structure and assess complexity of the data, highlighting the difficulties we may encounter. Then, we use \
    pyspark for processing the data and transferring the original data into tidy data. We also apply Pyspark SQL \
    query for data manipulation and obtain some basic statistical information of the data. Finally, we use pyspark \
    to implement the K-means method, with the aim of exploring and classifying the market behaviors in cryptos.',
    date: '2022-05-5',
    link: '/projects/810project.pdf',
  },

  {
    title: 'Mutual Fund Style Classification From Prospectus With Natural Language Processing',
    desc: 'This paper applies Natural Language Processing (specifically the word2vec skip-gram deep learning model) \
    to mutual fund summary texts to be able to predict the investment style a fund uses. A knowledge base is created \
    by using the most commonly occurring words unique to each type of fund. Then, we form the two possible inputs for \
    our modeling: (1) the minimum distance between the vectorized sentences and the knowledge base, and (2) the vector \
    representation of the most representative sentences. For input of type (1) we applied a Random Forest, and for inputs\
    of type (2) we applied a convolutional neural network. ',
    date: '2022-05-6',
    link: '/projects/mf815_final_project.pdf',
  },

  {
    title: 'Fixed Income Final Project',
    desc: 'We implement and assess the following four interpolation methods: raw interpolation, natural cubic spline \
    interpolation, cubic B-spline interpolation, and monotone convex interpolation (Hagan-West method). Methods are \
    assessed based on whether the forwards are positive, their continuity, stability, and locality.',
    date: '2022-05-6',
    link: '/projects/Yield_Curve Construction.pdf',
  },


];

export default data;
