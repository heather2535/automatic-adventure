'use client'

import { useState, useMemo } from 'react'
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  { id: 1, title: 'Speech Audio Emotion Recognition', description: 'April 28, 2024', tags: ['Featured Projects', 'Machine Learning', 'NLP'], href: "/projects/speech-audio", image: '/image1.jpg' },
  { id: 2, title: 'City of Boston Budget Reallocation Analysis', description: 'April 22, 2024', tags: ['Data Visualization', 'Statistical Analysis'], href: "/projects/city-of-boston", image: '/image2.jpg' },
  { id: 3, title: 'Small Business Association Loan Prediction', description: 'April 22, 2024', tags: ['Featured Projects', 'Machine Learning'], href: "/projects/small-business", image: '/image3.webp' },
  { id: 4, title: 'Flight Satisfaction Prediction', description: 'December 6, 2023', tags: ['Featured Projects', 'Machine Learning'], href: "/projects/flight-satisfaction", image: '/image4.webp' },
  { id: 5, title: 'Predicting Climate Investments', description: 'October 10, 2023', tags: ['Featured Projects', 'Machine Learning'], href: "/projects/predicting-climate", image: '/image5.jpg' },
  { id: 6, title: 'Classifying Political Bias in News Media', description: 'August 3, 2023', tags: ['Featured Projects', 'NLP'], href: "/projects/als-resource", image: '/image6.webp' },
  { id: 7, title: 'COVID-19 Policy Analysis and Recommendations', description: 'May 12, 2023', tags: ['Featured Projects', 'Statistical Analysis'], href: "/projects/als-resource", image: '/image7.webp' },
  { id: 8, title: 'Forecasting Volatility in NVDA Stock Returns', description: 'December 18, 2023', tags: ['Machine Learning', 'Statistical Analysis'], href: "/projects/als-resource", image: '/image8.jpg' },
  { id: 9, title: 'Text Classification Program', description: 'April 28, 2021', tags: ['NLP'], href: "/projects/als-resource", image: '/image9.png' },
  { id: 10, title: 'Airbnb Investment Analysis', description: 'April 19, 2023', tags: ['Statistical Analysis'], href: "/projects/als-resource", image: '/image10.jpg' },
  { id: 11, title: 'Government Welfare Income vs. Health Status', description: 'May 3, 2022', tags: ['Statistical Analysis'], href: "/projects/als-resource", image: '/image11.jpg' },
  { id: 12, title: 'Analysis of Cardiovascular Disease: Causes, Treatment, and Prevention', description: 'April 12, 2022', tags: ['Statistical Analysis'], href: "/projects/als-resource", image: '/image12.jpg' },
  { id: 13, title: 'Undergraduate Housing Expenses', description: 'Nov 19, 2021', tags: ['Statistical Analysis'], href: '/projects/als-resource', image: '/image13.jpg' },
  { id: 14, title: 'Boston University Campus Waste Prediction', description: 'Nov 19, 2021', tags: ['Linear Regression'], href: "/projects/als-resource", image: '/image14.jpg' },
  { id: 15, title: 'Housing Prices in San Francisco', description: 'December 19, 2022', tags: ['Linear Regression'], href: "/projects/als-resource", image: '/image15.webp' },
  { id: 16, title: 'GDP by Region', description: 'Nov 29, 2022', tags: ['Linear Regression', 'Data Visualization'], href: "/graphics/web-development", image: '/image16.jpg' },
  { id: 17, title: 'Grocery Recommendation Engine', description: 'February 25, 2023', tags: ['Linear Regression', 'Machine Learning'], href: "/projects/als-resource", image: '/image17.jpg' },
]

const allTags = Array.from(new Set(projects.flatMap(project => project.tags)))

const Projects = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => project.tags.includes(tag))
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesTags && matchesSearch
    })
  }, [selectedTags, searchQuery])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  return (
    <section className="mt-24 min-h-screen py-20 max-w-5xl mx-auto">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="relative w-full max-w-md">
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 z-0"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {allTags.map(tag => (
                <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="text-[16px] cursor-pointer h-10 px-4 font-light"
                onClick={() => toggleTag(tag)}
                >
                {tag}
                </Badge>
            ))}
          </div>
        </div>
        <article className="container mx-auto px-20 max-w-4xl max-auto shadow-lg">
        <section className="relative py-12 lg:py-24  max-w-8xl mx-auto">
      <div className="container ">
        <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 items-center">
          <div className="space-y-4">
            <p className="text-[14px] font-light dark:text-gray-400 z-index:0">
            Bella Davies | Apr 28
            </p>
            <h1 className="text-[35px] font-[200] tracking-n font-[150]">
            Speech Audio Emotion Recognition
            </h1>
            <div className="mt-8">
              <p className="text-[16px] font-light dark:text-gray-400">
              April 29, 2024
              </p>
            </div>
          
          </div>
          <div className="relative w-full">       
            <Image
              className="w-full h-auto rounded-[0px] shadow-lg"
              src="/image1.jpg"
              width="400"
              height="300"
              alt="image"
            />
          </div>
          <p className="text-[18px] font-light"> Skills: Machine Learning, NLP, Convolutional Recurrent Neural Networks <br/>Tools: Python, Sci-Kit Learn, Keras</p>
            <Link href="https://github.com/bellad21992/Speech_Audio_Emotion_Recognition" passHref>
            <a target="_blank" rel="noopener noreferrer"></a>
            <div className="flex justify-center">
              <Button 
                className="font-light rounded-[20] bg-gray-300 text-black px-5 text-[14px] hover:bg-gray-400" 
                style={{ height: '51px' }} 
                rel="noopener noreferrer"
              >
                GitHub Repository
              </Button>
            </div>
          </Link>
          <h3 className="text-[20px] font-medium  ">Project Overview</h3>
          <p className="font-[20px] font-light">This project aims to recognize and classify emotions from speech audio by collecting speech audio samples to train a neural network. The goal is to determine the emotional state of any given speaker for any given sentence spoken from the emotions of anger, calm, disgust, fear, joy, sadness, surprise, and neutral. Exploring speech emotion recognition to develop a successful model that can recognize emotions expressed in spoken language is important as it can be used in many different applications and integrated to improve many technologies we use today. It could also serve to enhance human-computer interaction, and would allow systems to adapt their responses based on the emotional tone of the users to foster more insightful and engaging interactions. </p>
        </div>
      </div>
        </section>
      <div className="prose max-w-3xl mx-auto">


        <h3 className="text-[20px] font-medium mt-8 mb-2">Steps Taken:</h3>
        <ul className="font-[20px] font-light mb-2">
          <li className="font-[20px] font-light mb-2">1. Gather audio speech data from two different sources and visualize the distribution, waveplots, and spectograms of the emotion classes.</li>
          <li className="font-[20px] font-light mb-2">2. Perform data augmentations of adding noise, stretching, and pitching to increase the training data from which features are extracted. </li>
          <li  className="font-[20px] font-light mb-2">3. Extract features from the training data to transform sound clips into numerical representations of audio signals that can be modeled.</li>
          <li className="font-[20px] font-light mb-2">4. Split the data into training and test sets, and run an initial convolutional neural network (CNN) with 1 convolutional layer.</li>
          <li className="font-[20px] font-light mb-2">5. Improve the model by adding convolutional layers, adding recurrent layers to capture more patterns and make a convolutional recurrent neural network (CRNN).</li>
          <li className="font-[20px] font-light mb-2">6. Explore variations like reducing dropout rate, changing convolutional filter size, multiple activation functions, and gated recurrent units. .</li>
        </ul>

        <h3 className="text-[20px] font-medium mt-8 mb-2">Results:</h3>

        <p className="font-[20px] font-light mb-2">
        After combining the two datasets to increase variation and voice actors in the training data, a plot is created to visualize the distribution of the emotion classes. The dataset and count of emotions are shown below. Since the classes are pretty balanced, accuracy is a good metric for evaluating the models. Together the two datasets contain 1920 audio files from 28 different voice actors, 16 male and 12 female. The actors are speaking a total of 17 different sentences in English across the 8 different emotions.
        </p>
        <div className="relative w-full">       
            <Image
              className="w-full h-auto rounded-lg shadow-lg"
              src="/image1_1.webp"
              width="400"
              height="300"
              alt="image"
  
            />
          </div>

          <div className="relative w-full mt-12">       
            <Image
              className="w-xl h-auto rounded-lg shadow-lg mx-auto"
              src="/image1_2.webp"
              width="400"
              height="300"
              alt="image"
            />
          </div>
          <p className="font-[20px] font-light mb-2 mt-12"> Before preparing the combined dataset for modeling, the waveplots and spectograms are examined for the 8 different categories of emotions. Shown below are the waveplots and spectograms for the Happy and Sad emotions, which show the most variation between the two. A waveplot shows the amplitude of an audio signal over time where time is on the x-axis and amplitude is on the y-axis. A spectogram shows the frequency of an audio signal over time, where time is on the x-axis, frequency on the y-axis, and the color representing the magnitude of the frequency. The difference between the waveplots and spectograms between the Happy and Sad emotions display the different levels of amplitude and frequency typically present when these emotions are expressed. </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative w-full">       
              <Image
                className="w-full h-auto rounded-lg shadow-lg"
                src="/image1_4.webp"
                width="400"
                height="300"
                alt="image"
              />
            </div>
            <div className="relative w-full">       
              <Image
                className="w-full h-auto rounded-lg shadow-lg"
                src="/image1_5.webp"
                width="400"
                height="300"
                alt="image"
              />
            </div>
          </div>

      <p className="font-[20px] font-light mb-2 mt-12"> Next, to observe and visualize the effect of the planned data augmentations of adding noise to the audio clips, stretching the audio clips, and increasing the pitch of the audio clips, the waveplots for each of these augmentations are shown below. Random noise is added by computing a noise amplitude that is a fraction of the maximum amplitude of the sound clip, then multiplying this noise amplitude by a randomly generated number between 0 and 1, before the result is added to the data. Time stretching stretches the audio clips using a rate parameter set to a default value of 0.8, meaning the audio is stretched to 80% of its original duration while preserving the pitch. Lastly, the pitch is shifted up by 7 semitones using the n_steps parameter.  </p>
        <div className="relative w-full">       
          <Image
            className="w-full h-auto rounded-lg shadow-lg"
            src="/image1_6.png"
            width="400"
            height="300"
            alt="image"
          />
        </div>
      <p className="font-[20px] font-light mb-2 mt-12"> After performing these three data augmentations on the original data, there are a total of 4 different versions of audio measurement data for each audio file present in the dataset, making a total of 7680 observations. This dataset with the original data in addition to 3 augmented versions, is the final training dataset from which features will be extracted to convert audio files to numerical representations for model input. Next, the following features are extracted from the total dataset: zero crossing rate, chroma short-time fourier transform, mel-frequency ceptral coefficients, root mean square value, and mel spectogram. Each feature plays a different role in the speech audio analysis, outlined in the report, and enhances the model&apos;s ability to understand and classify audio data into emotions in ways aligned with auditory perception. The resulting dataset of features is shown below.  </p>
      <div className="relative w-full">       
          <Image
            className="w-full h-auto rounded-lg shadow-lg"
            src="/image1_3.webp"
            width="400"
            height="300"
            alt="image"
          />
        </div>
      <p className="font-[20px] font-light mb-2 mt-12"> Next the data is split into training and test sets of 80% and 20% of the original training data, respectively. After splitting the data, the features must be normalized to prevent the model from valuing certain features over others during the learning process due to their larger scale. Using sklearn&apos;s standard scaler, all features are scaled to a mean of 0 and standard decation of 1. The data is resized by adding a dimension to make the data compatible for CNN modeling, facilitate better performance, and avoid errors during training.  </p>
      <p className="font-[20px] font-light mb-2 mt-12"> The first model fit to the data is a CNN with a 1 dimensional convolutional layer with 128 filters of size 5. After the convolutional layer, the Rectified Linear Unit (ReLU) activation function is added to the model, introducing non-linearity and helping the model to learn complex patterns. Next, a dropout layer is added with a dropout rate of 0.2, which helps to prevent overfitting by dropping a random sample of the input data during training. A flatten layer then flattens the data into a 1-dimensional vector, preparing the data to be inputted to a fully connected dense layer with 8 units for each prediction class. The dense layer helps the model learn high-level features and has a softmax activation function which converts the output into probabilities, making it suitable for multi-class classification problems such as this one. The model is compiled with the Adam optimizer and categorical cross-entropy loss, which is suitable for multi-class classification. This model gave a test accuracy score and f1-score of 62.76%, and will act as the baseline model for this project to improve upon. The model, confusion matrix, loss and accuracy plots, and classification report are shown below.   </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative w-full">       
              <Image
                className="w-full h-auto rounded-lg shadow-lg"
                src="/image1_7.png"
                width="400"
                height="300"
                alt="image"
              />
            </div>
            <div className="relative w-full">       
              <Image
                className="w-full h-auto rounded-lg shadow-lg"
                src="/image1_8.webp"
                width="400"
                height="300"
                alt="image"
              />
            </div>

            <div className="relative w-full">       
              <Image
                className="w-full h-auto rounded-lg shadow-lg"
                src="/image1_9.png"
                width="400"
                height="300"
                alt="image"
              />
            </div>    
        </div>

      <p className="font-[20px] font-light mb-2 mt-12"> The next model explored is a CNN with 4 convolutional layers. In this model, one-dimensional max pooling layers are applied after each convolutional layer to downsample or reduce the dimensions of the features. Flatten layers and dense layers with ReLU and softmax activation functions are also used here after the convolutional layers. There are two dropout layers with dropout rates of 0.2 and 0.3 are applied after specific layers to help prevent overfitting. The model is also compiled with the Adam optimizer and categorical cross-entropy cross entropy function. The model is trained on the training data with a learning rate reduction, which adjusts and reduces the learning rate as the loss plateaus. This second baseline CNN model resulted in a higher test accuracy of 65.63%, improving from the first baseline model. The model summary, confusion matrix, loss and accuracy plots, and classification report are shown below.  </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative w-full h-full">       
              <Image
                className="w-full h-auto rounded-lg shadow-lg"
                src="/image1_10.webp"
                width="400"
                height="300"
                alt="image"
              />
            </div>
            <div className="relative w-full">       
              <Image
                className="w-full h-auto rounded-lg shadow-lg"
                src="/image1_11.png"
                width="400"
                height="300"
                alt="image"
              />
            </div>

            <div className="relative w-full">       
              <Image
                className="w-full h-auto rounded-lg shadow-lg"
                src="/image1_12.png"
                width="400"
                height="800"
                alt="image"
              />
            </div>    
        </div>

        <p className="font-[20px] font-light mb-2 mt-12"> To further improve the performance, the next model attempted is a Convolutional Recurrent Neural Network (CRNN). A CRNN combines both convolutional and recurrent layers to capture more patterns and temporal features like energy and frequency in the audio data. The one dimensional convolutional layers use 64 convolutional filters of size 3 with ReLU activation. Max pooling is added again here to reduce the dimensions of the features. Before adding recurrent layers, a flatten layer is used to convert the data to a one-dimensional array. The flatten layer is used inside a Time Distributed wrapper, which applies a layer to each time step of the input. Together, TimeDistributed(Flatten()) converts the 2-dimensional feature map into a one-dimensional vector ready for input to recurrent layers. </p>
        <p className="font-[20px] font-light mb-2 mt-12"> The recurrent layers use LSTM units with 64 units per layer. Stacking LSTM layers helps the model to capture temporal patterns in the sequential data. Dropout layers with a dropout rate of 0.2 are added to help prevent overfitting. A dense layer with softmax activation is used to produce class probabilities, and the model is compiled with the Adam optimizer and categorical cross-entropy loss function. The model is trained and a learning rate reduction callback adjusts and reduces the learning rate as the training loss plateaus. The performance of the CRNN with 3 convolutional layers and 4 recurrent layers shows further improvement from the CNN with 4 convolutional layers. The test accuracy and f1-score of the CRNN is 67.29%. The model summary, confusion matrix, loss and accuracy plots, and classification report are shown below.  </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative w-full h-full">       
              <Image
                className="w-full h-auto rounded-lg shadow-lg"
                src="/image1_13.webp"
                width="400"
                height="300"
                alt="image"
              />
            </div>
            <div className="relative w-full">       
              <Image
                className="w-full h-auto rounded-lg shadow-lg"
                src="/image1_14.webp"
                width="400"
                height="300"
                alt="image"
              />
            </div>

            <div className="relative w-full">       
              <Image
                className="w-full h-auto rounded-lg shadow-lg"
                src="/image1_15.png"
                width="400"
                height="800"
                alt="image"
              />
            </div>    
        </div>
        <p className="font-[20px] font-light mb-2 mt-12"> As the CRNN is a jump up from our initial two baseline models, this project will attempt to make improvements to this model by varying its model architecture. To attempt to improve the model, the following variations were made to the CRNN model: reducing dropout rate, changing the filter size of the convolutional filters, adding an additional convolutional layer, using multiple activation functions, and using gated recurrent units. The results of these variations are summarized in the report. When reducing the dropout rate, a rate of 0.1 was tried instead of 0.2. The reasoning behind this is that there is limited training data, and using a smaller dropout would allow the model to learn from more of the training data during the learning process. This resulted in a test accuracy and f1 score of 67.35%. As this is only a 0.06% improvement and not significant it was not used in other following variations since 0.2 is a more standard dropout rate.   </p>
        <p className="font-[20px] font-light mb-2 mt-12"> Next, the convolutional filter size was changed from 3 to 5, to attempt to capture more complex patterns in the data. This resulted in an improvement to the model’s performance with a test accuracy and f1 score of 70.1%. Since this is an improvement, a filter size of 5 will be kept in other following variations. Next, an additional convolutional layer is added to the model to see if this would help the model capture even more complex patterns. Adding a layer resulted in a higher jump in the test accuracy and f1 scores, at 74.43%, and the additional layer will be kept in further variations. Another variation to the CRNN that was tried was using different activation functions in the convolutional layers to allow for more diverse representations of the input data and make the model more flexible, robust, and generalizable. The second layer was changed to the exponential linear unit (ELU) activation function, which allows for negative values as compared to ReLU and can be more robust to noisy input data, and the third layer was changed to the hyperbolic tangent (tanh) activation function, which also allows for negative values. The effect of trying different activation functions resulted in a further improved test accuracy and f1 score of 76.2%, so the different activation functions will be kept in the model for the final variation. The chart below shows the effect of the model variations on the test accuracy. </p>
        <div className="relative">       
          <Image
            className="max-w-1xl mx-auto h-auto rounded-lg shadow-lg"
            src="/image1_16.webp"
            width="400"
            height="300"
            alt="image"
          />
        </div>

        <p className="font-[20px] font-light mb-2 mt-12"> Lastly, this project explores the effect of using gated recurrent units (GRUs) as opposed to LSTM units, as they are simpler and more computationally efficient. Moreover, they can be more effective for smaller datasets such as the one used in this project. The effect of using GRUs instead of LSTMs resulted in the highest test accuracy and f1 scores across all models, at 76.5%, so this is the final selected model as it performs the best. The model summary, confusion matrix, loss and accuracy plots, and classification report are shown below. </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative w-full h-full">       
              <Image
                className="w-full h-auto rounded-lg shadow-lg"
                src="/image1_16.webp"
                width="400"
                height="300"
                alt="image"
              />
            </div>
            <div className="relative w-full">       
              <Image
                className="w-full h-auto rounded-lg shadow-lg"
                src="/image1_17.webp"
                width="400"
                height="300"
                alt="image"
              />
            </div>

            <div className="relative w-full">       
              <Image
                className="w-full h-auto rounded-lg shadow-lg"
                src="/image1_18.png"
                width="400"
                height="800"
                alt="image"
              />
            </div>    
        </div>
        <p className="font-[20px] font-light mb-2 mt-12"> Now that we have our final model, to evaluate this model, this project uses sound clips from the trailer Pixar’s 2015 movie, “Inside Out”. Since the model architecture was changed and improved according to the same test dataset, new unseen audio data is provided to evaluate the model in a real-world context. Three audio clips for each of the 8 emotion classes are extracted from the movie trailer to allow for more information to be gathered from the test dataset during feature extraction. Since the characters speaking in the movie are acting as specific emotions, the characters themselves are the emotion labels for their own dialogue. The three emotions in this classification problem that are not present as characters in the movie, neutral, calm, and surprise, are included as well using a human auditory evaluation of the dialogue to label these emotions.</p>
        <p className="font-[20px] font-light mb-2 mt-12"> These 24 audio files undergo the same data preparation process as the original training data. Three data augmentations are performed, adding noise, time stretching, and changing the pitch. After augmenting there are 4 versions of each audio file including the original version, resulting in 96 audio files. The same features of zero crossing rate, chroma short-time fourier transform, mel-frequency cepstral coefficients, root mean square value, and mel spectogram are extracted from the 96 audio files. The labels are one hot encoded, then the features are scaled to a mean of 0 and standard deviation of 1 and expanded to add a third dimension to make the data compatible for the final CRNN model. The model is run on the test data and provides a test accuracy of around 25%, shown below in the confusion matrix of the model predictions. </p>
        <div className="relative w-full">       
          <Image
            className="max-w-3xl mx-auto h-auto rounded-lg shadow-lg"
            src="/image1_19.webp"
            width="400"
            height="300"
            alt="image"
          />
        </div>
        <p className="font-[20px] font-light mb-2 mt-12"> Examining the confusion matrix, it can be seen that the model most accurately predicted the emotions of anger, disgust, and sadness. This makes sense since these emotions are typically stronger in the ways they are expressed, as well as being more distinguishable to both humans and machines. Since the model seems to perform better with these stronger emotions, the accuracy of strong emotions was also calculated at 42%, while the accuracy of all other emotions was only around 15%. It can also be seen that the model mixed up fear/anger, as well as happy/surprise, and sad/neutral, likely because these emotions often sound similar in the ways they are expressed, considering volume, frequency, and tone. Another observation is that there were very few predictions for calm, neutral, and surprise. This is likely due to the fact that there are no characters for these emotions in the movie (the movie has Joy, Sadness, Anger, Disgust, and Fear), so the sound clips for the other three classes were less clearly labeled on the specific character emotion and instead based on individual human perception. </p>
        <p className="font-[20px] font-light mb-2 mt-12"> Furthermore, since emotions are subjective, human natural language and dialogue may not always have exactly one clear emotion label that is agreed upon by everyone. However, the training data did have clear labeled emotions because the audio clips came from speech actors with assigned statements and emotions in a controlled environment that is not representative of natural language speech. Therefore accuracy may not be the best evaluation metric since emotions can not always be measured numerically or boiled down to one clearly labeled class. These reasons provide a few possible explanations for why the model performed well with the clearly labeled training data from a controlled environment, but perform less well with real world, unlabeled natural language speech dialogue.</p>
        <h3 className="text-[20px] font-medium mt-8 mb-2">Conclusions, Limitations, and Extensions</h3>
        <p className="font-[20px] font-light mb-2 mt-12"> In conclusion, this project provided experience for working with audio data as a new form of multimodal data. The final CRNN model had a 76% validation accuracy but 25% test accuracy. Throughout the process of building this project, there were several learning takeaways, including how to perform data augmentation and its benefits for providing variation in the training data, feature extraction for audio data, creating a convolutional neural network and convolutional recurrent neural network, and varying the model architecture and model parameters to improve overall performance. </p>
        <p className="font-[20px] font-light mb-2 mt-12"> There are a few limitations to this project including several possible reasons for the low test accuracy. Emotions being similar in the way they are expressed results in the model having difficulty distinguishing between similar emotions. Additionally, with some of the test data being self-labeled real-world speech audio data as compared to voice actors with assigned emotions, and real-world complexity of the expression and perception of human emotions complicates the machine learning aspect of emotion recognition.</p>
        <p className="font-[20px] font-light mb-2 mt-12"> There are a few ways in which this project could be further improved. Using more training data would provide more for the model to learn from, as this project has somewhat limited training data with only around 200 audio clips per emotion class. Furthermore, the model could be trained on more varied test data to provide more natural dialogue. Additionally, further data augmentations could be performed on the original data, or additional features could be extracted. One could also experiment with transformer architectures like BERT, including attention mechanisms, and trying ensemble methods to further boost learning.</p>
 




     

      </div>
        </article>

       
      </div>
    </section>
  )
}

export default Projects





