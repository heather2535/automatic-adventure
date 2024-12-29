import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
/* eslint-disable @typescript-eslint/no-unused-vars */


export default function WebDevelopmentPage() {
  return (
    <article className="container mx-auto px-20 py-10 mt-2 max-w-4xl max-auto">
  
      <section className="relative py-12 lg:py-24 mt-16 max-w-8xl mx-auto">
      <div className="container ">
        <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 items-center">
          <div className="space-y-4">
            <p className="text-[14px] font-light dark:text-gray-400">
            Bella Davies | Apr 27
            </p>
            <h1 className="text-[40px] font-light tracking-n">
            Flight Satisfaction Prediction

            </h1>
            <div className="mt-8">
              <p className="text-[16px] font-light dark:text-gray-400">
              December 6, 2023

              </p>
            </div>
          
          </div>
            <div className="relative w-full">       
            <Image
              className="w-full h-auto shadow-lg"
              src="/image4.webp"
              width="400"
              height="300"
              alt="image"
            />
            </div>
          <p className="text-[20px] font-light"> Skills: Machine Learning, Neural Networks, Deep Learning <br/>Tools: Python, Sci-Kit Learn, TensorFlow, Keras </p>
          <Link href="https://github.com/bellad21992/Predicting_Airline_Satisfaction" passHref>
            <Button 
              className="font-light rounded-full bg-gray-300 text-black px-5 text-[18px] hover:bg-gray-400 mx-auto block" 
              style={{ height: '51px' }} 
              rel="noopener noreferrer"
              >
              GitHub Repository
            </Button>
          </Link>
          <h3 className="text-[20px] font-medium">Project Overview:</h3>
          <p className="font-[20px] font-light">This project uses supervised learning methods to predict whether or not a passenger is satisfied with their flight. Using details about the flight, several different machine learning models are fit to the training data and evaluated on test data. Passenger satisfaction is important to airlines because passengers who have negative flight experiences may choose not to fly the airline in the future, leading to lost revenue for the airline. The model developed in this project can help airlines for improving business and determining which factors are most important to improve customer experiences during flights. </p>
          <h3 className="text-[20px] font-medium">Steps Taken:</h3>
          <ul className="font-[20px] font-light mb-2">
            <li className="font-[20px] font-light mb-2">1. Clean the dataset by dropping columns that are too specific and not useful to the model, dropping rows with null values, and encoding categorical variables. </li>
            <li className="font-[20px] font-light mb-2">2. Initial exploratory data analysis of passenger age, flight distance, and satisfaction. </li>
            <li  className="font-[20px] font-light mb-2">3. Create a naive model for the baseline with which to evaluate further models tested.</li>
            <li  className="font-[20px] font-light mb-2">4. Run linear regression, ridge regression, lasso regression, elastic net regression, decision tree, random forest, gradient boosting, knn, and neural network.</li>
            <li  className="font-[20px] font-light mb-2">5. Tune parameters and evaluate models to determine the most accurate model.</li>

          </ul>
          <h3 className="text-[20px] font-medium">Results:</h3>
          <p className="font-[20px] font-light">After the initial data cleaning and preprocessing, a histogram of the overall score is created as well as histograms for each sub-score (entertainment, food, ground service, seat comfort, overall service, value, and wifi). The histogram of overall score can be seen below. As shown, a large majority of customers who completed the satisfaction survey had very low ratings. Next,  we visualize passenger satisfaction by age and flight distance, also shown below. The charts show that passenger satisfaction seems to increase with age and peaks at around ages 40-50. Looking at flight distance, most neutral or dissatisfied ratings occur in flights under 1000 miles. As flight distance increases, satisfaction ratings decrease. This may also be due to the number of flights decreasing as flight distance increases. </p>
            <div className="relative w-full flex justify-center">       
            <Image
              className=" w-auto h-auto rounded-lg shadow-lg"
              src="/image4_1.webp"
              width="400"
              height="300"
              alt="image"
            />
            </div>
            <div className="relative w-full flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-center">
                  <Image
                    className="w-auto h-auto rounded-lg shadow-lg"
                    src="/image4_2.webp"
                    width="400"
                    height="300"
                    alt="image"
                  />
                </div>
                <div className="flex justify-center">
                  <Image
                    className="w-auto h-auto rounded-lg shadow-lg"
                    src="/image4_3.webp"
                    width="400"
                    height="300"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          <p className="font-[20px] font-light">Next, the data is split into training and test sets 80% and 20%, respectively. The data is standardized using sklearn&apos;s standard scaler. The first model fitted is a linear regression after adjusting the degree for polynomial features. The linear regression results in an training MSE of 0.78 and test MSE of 0.88. Next, a lasso regression is fitted the data and the best alpha value is determined to be 0.001. This model results in a training MSE of 1.02 and a test MSE of 1.03. The average of the 5-fold cross validation MSE scores is 1.02, as shown from the plot below. </p>
          <div className="relative w-full flex justify-center">       
            <Image
              className=" w-auto h-auto rounded-lg shadow-lg"
              src="/image4_4.webp"
              width="400"
              height="300"
              alt="image"
            />
            </div>
          <p className="font-[20px] font-light">Following the lasso regression, a ridge regression is the next model fitted to the data. The ridge regression results in an optimal alpha value of 27.83 with a training MSE of 1.02 and test MSE of 1.03. The average of the 5-fold cross validation MSE scores is 1.02, as seen from the plot below. These results are very similar to the lasso regression. </p>
          <div className="relative w-full flex justify-center">       
            <Image
              className=" w-auto h-auto rounded-lg shadow-lg"
              src="/image4_5.webp"
              width="400"
              height="300"
              alt="image"
            />
            </div>
          <p className="font-[20px] font-light">Next, an elastic net is fitted to the data. Elastic net is a mathematical combination of the ridge and lasso regression models. The best alpha determined from the elastic net is 0.001, and gives a training MSE of 1.02 and test MSE of 1.03. The average of the 5-fold cross validation MSE scores is again 1.02. This can be seen in the plot below. </p>
          <div className="relative w-full flex justify-center">       
            <Image
              className=" w-auto h-auto rounded-lg shadow-lg"
              src="/image4_6.webp"
              width="400"
              height="300"
              alt="image"
            />
            </div>
          <p className="font-[20px] font-light">Since we have not seen improvement in MSE from our regression models, we want to fit additional models to our data to improve upon these results. KNN or k-nearest neighbors is the next model fit to the data. Testing k-values of 10, 20, 30, 40, 50, and 60, the best k-value is found to be 40 and results in a training MSE of 0.91 and test MSE of 0.97. This is a jump in improvement, but we want to see if we can optimize the results even further. </p>
          <p className="font-[20px] font-light">Next, a single decision tree is fit to the training data, resulting in a training MSE of 0.29 and a test MSE of 1.43. The average 5-fold cross validation MSE score is 1.45. This indicates that there is overfitting present in the single decision tree, as the testing score is significantly worse than the training score. In examining the feature importances of the decision tree below, it can be seen that whether the airline is recommended or not is the most important feature to the model. This is most likely because airlines that are not recommended are the ones with negative reviews and dissatisfied passengers. </p>
          <div className="relative w-full flex justify-center">       
            <Image
              className=" w-auto h-auto rounded-lg shadow-lg"
              src="/image4_7.webp"
              width="400"
              height="300"
              alt="image"
            />
            </div>
          <p className="font-[20px] font-light">To improve upon our overfitting decision tree, a random forest is attempted. A grid search is used to identify optimal parameters. Three values of n_estimators are tried: 50, 100, and 200, while two values of max_depth are tried: 10, 20. The grid search identifies that the optimal parameters for the options tried are 200 estimators or trees with a maximum depth of 10. This random forest model results in a training MSE of 0.74 and test MSE of 0.86. The average 5-fold cross validation MSE score is 0.86. </p>
          <p className="font-[20px] font-light">This is evidence that the random forest model fit to the data improves upon the overfitting in the single decision tree, since the test MSE is higher and more similar to the training MSE. When we examine the plots of MSE for different parameter combinations shown below, it can be seen that max_depth of 10 is more important to the model than 200 estimators. </p>
            <div className="relative w-full flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex justify-center">
              <Image
                className="w-auto h-auto rounded-lg shadow-lg"
                src="/image4_8.webp"
                width="400"
                height="300"
                alt="image"
              />
              </div>
              <div className="flex justify-center">
              <Image
                className="w-auto h-auto rounded-lg shadow-lg"
                src="/image4_9.webp"
                width="400"
                height="300"
                alt="image"
              />
              </div>
            </div>
            </div>


          <p className="font-[20px] font-light">In looking at the feature importances of the random forest, we see similar feature importances as the single decision tree. Recommended airline is the most important feature to both models, and since the random forest showed a significant improvement in accuracy, this reinforces the claim that this has the most affect on the model, with a feature importance of over 0.8 while other features have importance of less than 0.1. </p>
          <div className="relative w-full flex justify-center">       
            <Image
              className=" w-auto h-auto rounded-lg shadow-lg"
              src="/image4_10.webp"
              width="400"
              height="300"
              alt="image"
            />
            </div>
          <p className="font-[20px] font-light">Next, the ensemble boosting method is attempted using AdaBoostRegressor. A grid search is used again to determine optimal parameter values. Two values of n_estimators are tried: 100, 200, and two values of learning_rate are tried: 0.01, 0.1. Three different loss functions are tried: linear, square, and exponential. After fitting the grid search, the best parameters are determined to be a learning rate of 0.01, 200 estimators, and a square loss function. This results in a training MSE of 1.09 and a test MSE of 1.1, with an average 5-fold cross validation MSE score of 1.45. </p>
          <p className="font-[20px] font-light">Lastly, a neural network is fit to the training data. The data is first scaled using the min max scaler between 0 and 1. The keras sequential model is used three fully connected dense layers, with relu (rectified linear unit) activation function and 16, 32, and 64 neurons in each layer, respectively. The final output layer has 1 neuron and a linear activation function, such that the layer returns a linear combination of the inputs received. The model is shown below. </p>
            <div className="relative w-full flex flex-col items-center">       
            <Image
              className="w-1/2 h-auto rounded-lg shadow-lg"
              src="/image4_11.webp"
              width="200"
              height="150"
              alt="image"
            />
            <Image
              className="w-1/2 h-auto rounded-lg shadow-lg mt-4"
              src="/image4_12.png"
              width="200"
              height="150"
              alt="image"
            />
            </div>
      
          <p className="font-[20px] font-light">The model is compiled with adam optimizer adjusting the weights to minimize the MSE loss function, and results in a training MSE of 0.85 and test MSE of 0.86. The average 5-fold cross validation MSE score is 0.88. This is a slightly worse than the random forest regression which had an average 5-fold cross validation MSE score of 0.86. Therefore the random forest regression is the best performing model to predict passenger flight satisfaction.</p>
          <h3 className="text-[20px] font-medium">Conclusions, Limitations, and Extensions</h3>
          <p className="font-[20px] font-light">In conclusion, this project fit several different machine learning models to the training data of passenger satisfaction data. Models that were fit to the data include linear, lasso, ridge, and elastic net regressions, single decision tree, random forest, boosting, and neural network. The best performing model was a random forest, which indicates that there is no need for more complicated models for this dataset.</p>
          <p className="font-[20px] font-light">While the best performing model&apos;s MSE of 0.86 is pretty low, there are some limitations to this project and dataset that affected the performance. The most important feature of recommended airline may be a confounding variable with passenger satisfaction ratings. Furthermore, there may be additional unaccounted factors such as connecting flights which may influence passenger satisfaction. Additionally, selection bias in satisfaction survey data may only include reviews from customers who had below-average travel experiences. </p>
          <p className="font-[20px] font-light">This project has several possible extensions to improve upon the model for business use. Further parameter tuning and optimization can increase MSE scores further, as well as exploring additional models and ensemble methods. Additionally, attempting different model architectures with the neural network could result in an improvement upon the best identified model of random forest regression. </p>
          <p className="font-[20px] font-light mb-2 mt-12">
          Thanks for reading, check out the&nbsp;  
          <Link href="https://github.com/bellad21992/Predicting_Airline_Satisfaction" passHref>
            <span className="text-black underline" target="_blank" rel="noopener noreferrer">GitHub repository</span>
          </Link> 
          &nbsp;for this project and view the&nbsp; 
          <Link href="https://docs.google.com/presentation/d/1Y1VGqqmmomfhQKzsTGiMyPWeFfVWlxXY/edit#slide=id.p8" passHref>
            <span className="text-black underline" target="_blank" rel="noopener noreferrer">presentation</span>
          </Link>!
        </p>

        </div>
      </div>
    </section>
 
    </article>
  )
}

