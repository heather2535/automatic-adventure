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
            Flight Satisfaction Prediction

            </h1>
            <div className="mt-8">
              <p className="text-[16px] font-light dark:text-gray-400">
              April 22, 2024
              </p>
            </div>
          
          </div>
          <div className="relative w-full">       
            <Image
              className="w-full h-auto rounded-lg shadow-lg"
              src="/image3.webp"
              width="400"
              height="300"
              alt="image"
            />
          </div>
          <p className="text-[20px] font-light"> Skills: Machine Learning, Principal Component Analysis<br/>Tools: Python, Sci-Kit Learn</p>
          <Link href="https://github.com/bellad21992/Small_Business_Loan_Prediction" passHref>
            <Button 
              className="font-light rounded-full bg-gray-300 text-black px-5 text-[18px] hover:bg-gray-400 mx-auto block" 
              style={{ height: '51px' }} 
              rel="noopener noreferrer"
              >
              GitHub Repository
            </Button>
          </Link>
          
          <h3 className="text-[20px] font-medium">Project Overview:</h3>
          <p className="font-[20px] font-light">This project uses supervised learning methods and to predict whether small business loans will be paid off in full or charged off. Using data from the U.S. Small Business Administration (SBA), the goal of the project is to create a predictive model to provide knowledge and insight to small business owners when applying for a loan. The model will be tested on example business loans to determine the most important factors and success thresholds for small business loans. Business owners can use such a model to determine whether they will be able to pay off the loans they are requesting. As small businesses are the backbone of the American economy,  this application of machine learning is beneficial in assisting the success of these businesses.</p>
          <h3 className="text-[20px] font-medium">Steps Taken:</h3>
          <ul className="font-[20px] font-light mb-2">
            <li className="font-[20px] font-light mb-2">1. Preprocessing the dataset by dropping uninformative columns, specifying data types, dummy coding categorical variables, and creating relevant columns. </li>
            <li className="font-[20px] font-light mb-2">2. Examine variable correlations and the effect of dimensionality reduction via principal component analysis.</li>
            <li  className="font-[20px] font-light mb-2">3. Train naive model, logistic regression, decision tree, random forest, and gradient boosting on the dataset and evaluate their performance. </li>
            <li  className="font-[20px] font-light mb-2">4. Identify features of highest importance to the model in the context of the problem.</li>
            <li  className="font-[20px] font-light mb-2">5. Test the model on example businesses to identify success thresholds for loans. </li>
          </ul>
          <h3 className="text-[20px] font-medium">Results:</h3>
          <p className="font-[18px] font-light">After dropping columns that are too specific and dropping rows with missing values, categorical variables are dummy coded for model training. A variable is created indicating whether the trade occurred during a recession (Dec 2007 - June 2009) since this factor is likely to influence the outcome. Next the correlation between the numerical features are examined, as seen below. </p>
            <div className="relative w-full flex flex-col items-center"> 
              <p className="text-center mb-4">Correlation Matrix Heat Map</p>
              <Image
              className="w-auto h-auto rounded-lg shadow-lg"
              src="/image3_1.webp"
              width="400"
              height="300"
              alt="image"
              />
            </div>
          <p className="font-[20px] font-light">When running PCA, it can be seen from the chart below that the first two principal components together explain 57.6% of the variance of the outcome. Principal component 0 summarizes the propensity for the loan to be larger, and explains 42.1% of the variance. Principal component 1 summarizes the propensity for the borrowing business to be larger, and explains 15.5% of the variance. Looking at the scree plot below as well, using the point of inflection at 1 the first 2 principal components will be added to the training dataset, replacing the metric variables to reduce the dimensionality of the training data. </p>
          <div className="relative w-full flex flex-col items-center"> 
              <p className="text-center mb-4">Principal Component Analysis</p>
            </div>          
            <div className="relative w-full flex justify-center gap-1">
            <div className="w-1/2 flex flex-col items-center">
              <Image
              className="w-[250px] h-auto rounded-lg shadow-lg"
              src="/image3_2.webp"
              width="200"
              height="200"
              alt="image"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <Image
              className="w-full h-auto rounded-lg shadow-lg"
              src="/image3_3.webp"
              width="400"
              height="300"
              alt="image"
              />
            </div>
            </div>
          <div className="relative w-full flex justify-center">       
            <Image
              className=" w-auto h-auto rounded-lg shadow-lg"
              src="/image3_4.webp"
              width="400"
              height="300"
              alt="image"
            />
          </div>          

          <p className="font-[20px] font-light">However, after running the model with and without PCA, it is determined that PCA decreases the model accuracy. This may be due to the fact that there are only 8 metric variables in the training data, and many of them are individually important to the models, as seen later. Replacing them with two principal components results in information lost and worse model performance, thus the original metric variables are kept without using the principal components. </p>
          <p className="font-[20px] font-light">The first model fit to the dataset is our naive base model. This is done by assigning the same prediction to all instances Paid in Full, MIS_Status = 0, then evaluating the accuracy of assigning the outcomes this way. This method gives an accuracy of 76.12%, and it&apos;s confusion matrix can be seen below. Since this is the simplest method it will be our baseline accuracy score to aim to improve upon. </p>

          <div className="relative w-full flex flex-col items-center"> 
              <p className="text-center mb-4">Correlation Matrix Heat Map</p>
              <Image
              className="w-auto h-auto rounded-lg shadow-lg"
              src="/image3_5.webp"
              width="400"
              height="300"
              alt="image"
              />
            </div>
          <p className="font-[20px] font-light">The next model attempted is a logistic regression, a commonly used model for binary classification. For this model, the odds ratio of the coefficients would allow us to see the expected change in odds that the loan is Charged Off (MIS_Status = 1) for a one-unit increase in each independent variable Xi. Our first logistic regression model was used to adjust penalty types (L1, L2) and maximum iterations which resulted in an accuracy of 76.1%. For our second model, we experimented with the best cutoff score to find the best cutoff by iterating over a range of 0.1 to 0.9. The best cutoff was found to be 0.3, which gave these performance metrics: Accuracy = 80.5%, Precision = 61.2%, Recall = 50.8%, F1 = 55.5%. This accuracy score is an improvement from the baseline model. </p>
          <p className="font-[20px] font-light">Next, decision trees are fit to the dataset. Decision Trees were chosen due to their interpretability, providing a general set of &apos;rules&apos; or decision paths for why a small business loan may be paid in full or charged off. Additionally, by listing feature importances, we would also be able to identify the most important variables for determining whether a loan is paid in full or charged off. To establish a decision tree baseline, we started with a full tree which gave an accuracy of 89.8%. This was a great starting point as its accuracy was significantly higher than our naive baseline. To account for the possibility of overfitting, a reduced tree is implemented with max_depth=10, min_samples_split = 50, min_samples_leaf = 50, and min_impurity_decrease = 0.01.The tree can be seen below. After testing it on a 5-fold cross-validation test, it resulted in an accuracy score of 84.7%. </p>
          <div className="relative w-full flex justify-center">       
            <Image
              className=" w-lg h-auto rounded-lg shadow-lg"
              src="/image3_6.webp"
              width="400"
              height="300"
              alt="image"
            />
          </div>
          <p className="font-[20px] font-light">We then utilized the GridSearchCV function to test an array of parameters and identify the most optimal parameters. The parameters searched were max_depth of 20, 30, 50, min_samples_leaf of 20, 30, 50, 100, and min_impurity_decrease of 0, 0.01, 0.001. The optimal parameters that resulted from this search were max_depth = 30, min_impurity_decrease = 0, and min_samples_leaf = 30. The 5-fold CV resulted in an accuracy of 92.8%. It also had a high recall of 85.7% and an F1 Score of 85%. Recall and F1 are looked at since the dataset is imbalanced, mostly paid in full. This was the best of all the decision tree models we experimented with, and the confusion matrix can be seen below.</p>
          <div className="relative w-full flex justify-center">       
            <Image
              className=" w-auto h-auto rounded-lg shadow-lg"
              src="/image3_7.webp"
              width="400"
              height="300"
              alt="image"
            />
            </div>
          <p className="font-[20px] font-light">Next, a Random Forest model is developed as it provides robustness against overfitting by averaging multiple decision trees, each trained on different parts of the data. This is called bagging or bootstrap aggregation. Similarly to decision trees, random forests can also offer valuable insights into feature importance. Again we established a baseline Random Forest model with n_estimators =100, which yielded a CV accuracy score of 91.2%. To improve our baseline Random Forest model, we also utilized the GridSearchCV function to test for the best parameters. Parameters tried include max_depth of 30, 50, min_samples_leaf of 30, 50, and min_impurity_decrease of 0, 0.01. This returned the best parameters of max_depth= 50, min_impurity_decrease =0, and min_samples_leaf = 30. These values resulted in a 5-fold CV accuracy score of 91.3%, which interestingly minimally improved our accuracy.</p>
          <p className="font-[20px] font-light">Lastly, we tried Gradient Boosting, an ensemble method that improves performance iteratively by focusing on errors of prior trees, optimizing performance in our imbalanced datasets where the number of non-defaults significantly exceeds the number of defaults. We experimented with different parameters and resulted in the best parameters of n_estimators = 200, learning_rate =. 0.2, and max_depth = 6. These parameters resulted in a CV accuracy score of 93.4%, Recall 85.8%, Precision 86.6%, and an F1 score of 86.2%, the best of all models we’ve experimented with. The confusion matrix is shown below. </p>
          <div className="relative w-full flex justify-center">       
            <Image
              className=" w-auto h-auto rounded-lg shadow-lg"
              src="/image3_8.webp"
              width="400"
              height="300"
              alt="image"
            />
            </div>
          <p className="font-[20px] font-light">In examining the feature importances of the top performing models below, it can be seen that the most important features are almost identical in all top-performing models. The top features are Term (loan term in months), SBA_Appv (SBA’s guaranteed amount of approved loan), DisbursementGross (amount disbursed), GRAppv (gross amount of loan approved by bank), RevLineCr (revolving line of credit = 1, no = 0), and NoEmp (number of business employees). Term has the highest importance in all models, and thus is the most important factor in determining if a loan will be charged off or paid in full. </p>
          <div className="relative w-full flex justify-center">       
            <Image
              className=" w-auto h-auto rounded-lg shadow-lg"
              src="/image3_9.webp"
              width="400"
              height="300"
              alt="image"
            />
            </div>
            <div className="relative w-full flex justify-center">       
            <Image
              className=" w-auto h-auto rounded-lg shadow-lg"
              src="/image3_10.webp"
              width="400"
              height="300"
              alt="image"
            />
            </div>
            <div className="relative w-full flex justify-center">       
            <Image
              className=" w-auto h-auto rounded-lg shadow-lg"
              src="/image3_11.webp"
              width="400"
              height="300"
              alt="image"
            />
            </div>

          <p className="font-[20px] font-light">The models that performed best were Decision Tree with 92.8% accuracy and 84.3% recall and Gradient Boosting with 93.4% accuracy and 85.8% recall. We chose to consider recall or sensitivity for our problem since false negatives are more costly. A false negative in this scenario represents a loan that was predicted to be paid in full but was charged off. Moreover, we also used recall because the class we are predicting, MIS_Status, is imbalanced (mostly paid in full). We will focus on the Decision Tree as our final model for testing since the decision tree is only 0.6% less accurate and 1.5% less recall than the gradient-boosted tree. When considering the tradeoff, the decision tree provides more interpretability with the prediction paths for business decision purposes than gradient boosting, and the difference between the accuracy and recall scores is marginal.  </p>
          <div className="relative w-full flex justify-center">       
            <Image
              className=" w-auto h-auto rounded-lg shadow-lg"
              src="/image3_12.webp"
              width="400"
              height="300"
              alt="image"
            />
            </div> 
          <p className="font-[20px] font-light">From examining the top splits of the decision tree above, we can see that the top few splits are determined by Term, or the loan term length, which is the most important feature highlighted in the feature importance charts above. At the root node, the tree splits on ‘Term <span>&lt;=</span> 59.5’ with a Gini impurity of 0.34, dividing the samples into two groups: one with 25,034 and the other with 78,584 samples. </p>
          <div className="relative w-full flex justify-center">       
            <Image
              className=" w-auto h-auto rounded-lg shadow-lg"
              src="/image3_13.png"
              width="400"
              height="300"
              alt="image"
            />
            </div>           
          <p className="font-[20px] font-light">One interesting note is that this Term value of 59.5 is at the first quartile of the distribution of Term values in the dataset, as seen above. The following node’s splits are based on further distinctions of the loan term: on the left ‘Term <span>&lt;=</span> 48.5’, and the right ‘Term <span>&lt;=</span> 82.5’, both leading to nodes with lower Gini impurities and a more refined distribution of samples. Again, we note that 82.5 is around the second quartile or median of the distribution of Term values in the dataset. This indicates that ‘Term’ is a critical factor in the early stages of decision-making within the model. As the tree branches out, additional features such as ‘DisbursementGross’ and ‘GrAppv’ are introduced, indicating the model’s transition to focusing on loan disbursement amounts, which aids in finer sample classification. </p>
          <p className="font-[20px] font-light">Next, we tested an example business with differing loan terms and disbursement amounts, since these are the most important features of decision tree and gradient boosting, the best-performing models. Our example business is in the most common small business industry in the dataset of Retail trade, has 8 business employees, created 2 jobs, had 6 jobs retained, is an existing business, not a franchise, and is in an urban location. We tested our model on 9 different business loans with small, medium, and large loan terms (60 months, 85 months, 100 months) and disbursement amounts ($34000, $80000, $200000) using the quantiles from the data distributions of Term and Disbursement seen above, as the quantile term lengths followed the rules of the decision tree model. The results of these tests can be seen below. </p>
          <div className="relative w-full flex flex-col items-center"> 
              <p className="text-center mb-4">Principal Component Analysis</p>
            </div>          
            <div className="relative w-full flex justify-center gap-1">
            <div className="w-1/2 flex flex-col items-center">
              <Image
              className="w-full h-auto rounded-lg shadow-lg"
              src="/image3_14.webp"
              width="200"
              height="200"
              alt="image"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <Image
              className="w-full h-auto rounded-lg shadow-lg"
              src="/image3_15.webp"
              width="400"
              height="300"
              alt="image"
              />
            </div>
            </div>
          
          
          
          <p className="font-[20px] font-light">The results show that shorter loan terms like 60 months are more likely to be paid in full. As the loan term gets longer, the probability of this business being able to pay in full decreases. Similarly, smaller disbursement amounts, like $34,000, are more likely to be paid in full, and as the disbursement amount grows, it becomes less clear whether the loan will be able to be paid in full. Examining the tree prediction paths above, we see predictions are mostly generated on the right side of the tree since we tested terms larger than 60, the first split of the tree. We found that loans that are significantly small in terms and amount tend to be charged off, so we focused on the full distribution of terms and amounts using the quantiles to identify which values are more likely to result in the loan being paid off. </p>
          <p className="font-[20px] font-light">These tests show that small businesses should take caution when asking for larger loans and longer loan terms, as they may be less likely to pay back the loan. If a loan is charged off, this will have negative implications for the small business. To ensure the business has a higher probability of being able to pay back the loan, they should ask for smaller amounts in shorter loan periods. This will help the business keep track of and manage smaller loans easier. Moreover, longer loans over longer periods will also yield more interest payments for the business, which is also a negative side effect for the business in terms of its cash inflow. </p>
          <h3 className="text-[20px] font-medium">Conclusions, Limitations, and Extensions</h3>
          <p className="font-[20px] font-light">In conclusion, this project used several machine learning models on the dataset, and the final chosen model is a decision tree with 93.4% accuracy and 85.8% recall. While it scores around 1% less than gradient boosting, considering the tradeoff it is still chosen as it is more interpretable for business decision making purposes. The model shows that as loan terms and disbursement amounts get larger, the model is less confident that the small business loan will be paid in full. </p>
          <p className="font-[20px] font-light">Some limitations of this project include imbalanced, skewed data, and possible outliers. As there are fewer observations with longer terms and larger disbursements, the model may be less accurate when predicting larger loans. Additionally, more test cases could be implemented to further understand the behavior and rules of the tree. </p>
          <p className="font-[20px] font-light">To improve upon our models, decision tree pruning could be implemented to achieve a simpler, more robust model. Additionally, further parameters could be tested when running a grid search to achieve a more optimal set of parameters. Lastly, neural networks could be implemented to achieve higher accuracy, but would result in a loss of interpretability. </p>

          <p className="font-[20px] font-light mb-2 mt-12">
          Thanks for reading, check out the&nbsp;  
          <Link href="https://github.com/bellad21992/Small_Business_Loan_Prediction" passHref>
            <span className="text-black underline" target="_blank" rel="noopener noreferrer">GitHub repository</span>
          </Link> 
          &nbsp;for this project and view the&nbsp; 
          <Link href="https://docs.google.com/presentation/d/1hAR4jrsW3_bTnEBxWqJSiHR4q-b5tsRKU54wiN1u6QI/edit#slide=id.g2768ca7ef44_0_65" passHref>
            <span className="text-black underline" target="_blank" rel="noopener noreferrer">presentation</span>
          </Link> slides, and final&nbsp; 
          <Link href="https://docs.google.com/document/d/1m51lB7ik-PEWAEG4e-lMpdF3PqBl12erPm653aHjTMM/edit" passHref>
            <span className="text-black underline" target="_blank" rel="noopener noreferrer">report</span>
          </Link>!
        </p>

        </div>
      </div>
    </section>
 
    </article>
  )
}

