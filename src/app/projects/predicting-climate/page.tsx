import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function WebDevelopmentPage() {
  return (
    <article className="container mx-auto px-20 py-10 mt-2 max-w-4xl max-auto shadow-lg">
  
      <section className="relative py-12 lg:py-24 mt-16 max-w-8xl mx-auto">
      <div className="container ">
        <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 items-center">
          <div className="space-y-4">
            <p className="text-[14px] font-light dark:text-gray-400">
            Bella Davies | Dec 6, 2023
            </p>
            <h1 className="text-[40px] font-light tracking-n">
            Predicting Climate Investments


            </h1>
            <div className="mt-8">
              <p className="text-[16px] font-light dark:text-gray-400">
              October 10, 2023
              </p>
            </div>
          
          </div>
          <div className="relative w-full">       
            <Image
              className="w-full h-auto shadow-lg"
              src="/image5.jpg"
              width="400"
              height="300"
              alt="image"
            />
          </div>
          <p className="text-[20px] font-light"> Skills: Machine Learning, Natural Language Processing, Data Visualization<br/>Tools: Python, Scikit-Learn, NLTK</p>
          <Link href="https://github.com/bellad21992/Predicting_Climate_Investments" passHref>
            <Button 
              className="font-light rounded-full bg-gray-300 text-black px-5 text-[18px] hover:bg-gray-400 mx-auto block" 
              style={{ height: '51px' }} 
              rel="noopener noreferrer"
              >
              GitHub Repository
            </Button>
          </Link>
          <h3 className="text-[20px] font-medium">Project Overview:</h3>
          <p className="font-[20px] font-light">This project uses supervised learning methods and natural language processing to classify climate investment projects into 11 categories of climate finance, then predicts the amount of investment towards each category. The goal of the project is to train a model to accurately predict the amount of funding that was approved for a specific climate project. As climate change worsens and climate disasters increase, there has been an increase in global climate funds and projects aimed at combating and mitigating these climate disasters and providing assistance to affected communities. With that comes the need for accurate models to ensure the proper amount of funding. The model developed in this project can be used by climate funds and banks to help determine the amount of funding needed for future climate initiatives. </p>
          <h3 className="text-[20px] font-medium">Steps Taken:</h3>
          <ul className="font-[20px] font-light mb-2">
            <li className="font-[20px] font-light mb-2">1. Filtered dataset using key words for projects relating to investments in climate services and early warning systems. </li>
            <li className="font-[20px] font-light mb-2">2. Cleaned dataset by encoding dummy variables, adding columns which calculated the project duration and project status (completed or not), and dropped redundant columns.</li>
            <li  className="font-[20px] font-light mb-2">3. Used natural language processing to categorize project names into 11 categories of climate investment by using count vectorizer, TFIDF transformer, and SGD classifier. </li>
            <li  className="font-[20px] font-light mb-2">4. Explored the cleaned dataset with added categories which will be used to train the model. Plotted the number of projects per category, average amount of funding approved per category, and more initial visualizations of the data.</li>
            <li  className="font-[20px] font-light mb-2">5. Removed outliers with abnormally large amounts of funding approved outside the 95th percentile, scaled the data, and split into training and test sets.</li>
            <li  className="font-[20px] font-light mb-2">6. Implemented a random forest regressor and gradient boosting regressor, then combined the models with a stacking regressor.</li>
            <li  className="font-[20px] font-light mb-2">7. Plotted feature importances of the final stacking regressor to identify the most relevant features the model uses to predict the amount of funding</li>


          </ul>
          <h3 className="text-[20px] font-medium">Results:</h3>
          <p className="font-[18px] font-light">After cleaning the dataset by filtering for key words, encoding dummy variables, and adding relevant columns, the text of the project names are then vectorized and an SGD classifier is used to categorize the climate project names using the dataset of pre-train labels. This served as a dictionary to classify projects accordingly. The classification report for the categorization of climate project names is shown below. </p>
            <div className="relative w-full flex flex-col items-center"> 
              <Image
              className="w-auto h-auto rounded-lg shadow-lg"
              src="/image5_1.webp"
              width="400"
              height="300"
              alt="image"
              />
            </div>
            <div className="relative w-full flex justify-center gap-1">
              <div className="w-1/2 flex flex-col items-center">
                <Image
                  className="w-auto h-auto rounded-lg shadow-lg"
                  src="/image5_2.webp"
                  width="400"
                  height="300"
                  alt="image"
                />
              </div>
              <div className="w-1/2 flex flex-col items-center">
                <Image
                  className="w-auto h-auto rounded-lg shadow-lg"
                  src="/image5_3.png"
                  width="400"
                  height="300"
                  alt="image"
                />
              </div>
            </div>
          <p className="font-[20px] font-light">Next, in exploring the data that includes the newly classified categories, charts are created to visualize the total number of projects and average amount of funding per category, as shown above. We can see that governance, provision and application of climate services, and capacity development have the most number of projects in these categories. However as shown, observation systems, user interfaces, and detection, observation, monitoring, analysis, and forecasting of hazards required the most amount of funding on average in these categories.  The visualizations below display the total number of projects per year and the total amount of funding approved per year. These show that the number of projects per year has increased over time since 2003, with some decrease following COVID-19 in the years following 2020. The average amount of funding approved per year has some fluctuations with a general increase.</p>
          <div className="relative w-full flex flex-col items-center"> 
            </div>          
            <div className="relative w-full flex justify-center gap-1">
            <div className="w-1/2 flex flex-col items-center">
              <Image
              className="w-full h-auto rounded-lg shadow-lg"
              src="/image5_4.webp"
              width="400"
              height="300"
              alt="image"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <Image
              className="w-full h-auto rounded-lg shadow-lg"
              src="/image5_5.webp"
              width="400"
              height="300"
              alt="image"
              />
            </div>
            </div>
          <div className="relative w-full flex justify-center">       
            <Image
              className=" w-auto h-auto rounded-lg shadow-lg"
              src="/image5_6.webp"
              width="400"
              height="300"
              alt="image"
            />
          </div>          

          <p className="font-[20px] font-light">Before modeling, we want to eliminate outliers of projects that required amounts of funding higher than the 95th percentile. To visualize this, the box plot above is generated, and 168 outliers were detected out of the 3,240 initial climate projects of the cleaned dataset. The average amount of funding across all the cleaned data was 9.42 million, and without the higher end outliers the average was 6.67 million. The removal of outliers was found to increase the accuracy of the model, possibly due to the fact that these outliers do not represent the majority of climate projects that require funding and will need special attention to determine the amount of funding outside of a predictive model. </p>
          <p className="font-[20px] font-light">Next, the data is split into a training set and test set following an 80/20 ratio, then scaled using the standard scaler, or z-score normalization. Then, a random forest regressor is fit on the training data and used to predict on the test data, producing a training accuracy of 92.38% and a test accuracy of 50.01%. A gradient boosting regressor gave a training accuracy of 90.91% and a test accuracy of 50.77%. When combining the two models in a stacking regressor, the training accuracy becomes 88.44% and the test accuracy is 51.5%. While this is an improvement from both models initially and begins to reduce the overfitting that occurs from both, further parameter tuning is necessary to reduce overfitting more and generate a higher test accuracy score. </p>

          <div className="relative w-full flex flex-col items-center">               <Image
              className="w-full h-auto rounded-lg shadow-lg"
              src="/image5_7.webp"
              width="400"
              height="300"
              alt="image"
              />
            </div>
          <p className="font-[20px] font-light">To see how the model makes decisions and which features are most important, we generate a feature importance plot, shown above. As seen, the Green Climate Fund, Clean Technology Fund, Approved Year, Project Duration, and economic Sector were the top 5 features that had the most affect on the model. Of the categories created using natural language processing, we can see that governance and user interface are among the top 15 important features. To see why certain funds are more important to the model than others, we created a plot of different funds and the amount of funding approved for each. </p>
          <p className="font-[20px] font-light text-center mb-4">Climate Fund vs. Amount of Funding Approved</p>
            <div className="relative w-full flex flex-col items-center">               <Image
                className="w-full h-auto rounded-lg shadow-lg"
                src="/image5_8.webp"
                width="400"
                height="300"
                alt="image"
                />
              </div>
          <p className="font-[20px] font-light">As seen above, the Green Climate Fund and Clean Technology Fund had the most amount of funding approved, significantly higher than other funds. This helps to explain why these funds were the top 2 features that were most important to the model, since the model has learned that climate projects from these 2 funds require higher amounts of funding to be approved than projects that come from other climate funds. </p>
    
          <h3 className="text-[20px] font-medium">Conclusions, Limitations, and Extensions</h3>
          <p className="font-[20px] font-light">In conclusion, this project was able to use natural language processing to categorize thousands of names of climate projects into 11 categories of climate funding. After adding a column for these categories in the dataset then implementing machine learning models of random forest and gradient boosting, a predictive model was created to predict the amount of funding that would be approved for any given climate project. The final model recognizes certain climate funds that require higher amounts of funding, the approved year of the project, project duration, and economic sector. </p>
          <p className="font-[20px] font-light">This project has possibilities for extension. Further parameter tuning of both the natural language processor which categorizes projects as well as the final regressor would result in a higher final accuracy. Additionally, it would be beneficial to implement more regression models like ridge regression, lasso regression, k-nearest neighbors, and decision tree. Experimenting with these would allow us to compare accuracies of the different models since they perform differently depending on the characteristics of the training data, then tune parameters and choose the model with the highest accuracy.</p>

        </div>
      </div>
    </section>
 
    </article>
  )
}

