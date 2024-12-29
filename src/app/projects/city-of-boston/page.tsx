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
            Bella Davies | Apr 27
            </p>
            <h1 className="text-[40px] font-light tracking-n">
            City of Boston Budget Reallocation Analysis

            </h1>
            <div className="mt-8">
              <p className="text-[16px] font-light dark:text-gray-400">
              April 28, 2024
              </p>
            </div>
          
          </div>
          <div className="relative w-full">       
            <Image
              className="w-full h-auto rounded-lg shadow-lg"
              src="/image2.jpg"
              width="400"
              height="300"
              alt="image"
            />
          </div>
          <p className="text-[20px] font-light"> Skills: Data Visualization, Data Analysis <br/>Tools: Python, SQL, Tableau </p>
          <Link href="https://github.com/bellad21992/City_Budget_Analysis" passHref>
            <Button 
              className="font-light rounded-full bg-gray-300 text-black px-5 text-[18px] hover:bg-gray-400 mx-auto block" 
              style={{ height: '51px' }} 
              rel="noopener noreferrer"
              >
              GitHub Repository
            </Button>
          </Link>
          <h3 className="text-[20px] font-medium">Project Overview:</h3>
          <p className="font-[20px] font-light">The goal of this project is to show that more of the City of Boston’s operating budget money could be shifted towards participatory budgeting, from which members of the public are allowed to decide how to allocate resources. Though $40 million was requested, only $4 million has been allocated towards participatory budgeting. Using data from the past five years, we want to identify where there is an underutilization, or underspending, of past budgets in order to advocate for this shift. In addition, we want to explore how the budget may be freed from other areas where it is being utilized, such as in the police budget. </p>
          <h3 className="text-[20px] font-medium">Steps Taken:</h3>
          <ul className="font-[20px] font-light mb-2">
            <li className="font-[20px] font-light mb-2">1. Identify data needed to answer key questions regarding departmental budget underutilization and police officer overtime hours and pay. </li>
            <li className="font-[20px] font-light mb-2">2. Use data to create visualizations and conduct analysis of budget, spending, and surplus within departments. </li>
            <li  className="font-[20px] font-light mb-2">3. Summarize results and explore potential arguments for reallocation.</li>
          </ul>
          <h3 className="text-[20px] font-medium">Results:</h3>
          <ul className="font-[20px] font-light mb-2">
            <li className="font-[20px] font-light mb-2">1. Is there any underutilization of operational budget from the last several years from which we can advocate for a transfer of the variance to participatory budgeting?</li>
            <li className="font-[20px] font-light mb-2">2. How much money would be saved from overtime hours worked by police officers if civilian flaggers were used instead? </li>
            <li  className="font-[20px] font-light mb-2">3. Summarize results and explore potential arguments for reallocation.</li>
          </ul>
          <p className="font-[20px] font-light">The data used is the City of Boston&apos;s Operating Budget data. To identify where there is underutilization, analysis must be done on the spending and surplus within departments. The chart below is created to identify the top departments from which an argument could be made for a reallocation of resources. Using feasibility rankings for how possible it is to argue for a reallocation, along with the departmental surplus in 2022, the most recently available year of data, the 10 departments highlighted in red will be further analyzed for departmental surplus which could be reallocated towards participatory budgeting. </p>
            <div className="relative w-full flex justify-center">       
            <Image
              className=" w-auto h-auto rounded-lg shadow-lg"
              src="/image2_1.webp"
              width="400"
              height="300"
              alt="image"
            />
            </div>
          <p className="font-[20px] font-light">Next, we want to compare the yearly surplus in the past 5 years, the average surplus over the past 5 years, and the surplus in the most recent year, for these departments with high surplus. The chart below provides a comparison of surplus among the top departments. </p>
          <div className="relative w-full flex justify-center">       
            <Image
              className=" w-auto h-auto rounded-lg shadow-lg"
              src="/image2_2.webp"
              width="400"
              height="300"
              alt="image"
            />
            </div>
          <p className="font-[20px] font-light">For each of these departments with high surplus, two dashboards are created. The first dashboard, shown below, summarizes the underutilization analysis for the department broken down by programs within the department. The three charts included are the yearly surplus in the past 5 years, the average surplus over the past 5 years, and the most recent surplus in 2022. The average surplus and 2022 surplus are categorized by personnel spending and non-personnel spending to address the question about overspending on personnel. The dashboard created has a filter effect, in which users can select the department of interest to generate the corresponding charts in the dashboard. The dashboard below displays the underutilization analysis for the Boston Center for Youth and Families, the department with the highest surplus in 2022. </p>
          <div className="relative w-full flex justify-center">       
            <Image
              className=" w-auto h-auto rounded-lg shadow-lg"
              src="/image2_3.webp"
              width="400"
              height="300"
              alt="image"
            />
            </div>
          <p className="font-[20px] font-light">As seen from the dashboard above, the Boston Center for Youth and Families had a $3.4M total surplus in 2022. Most of this surplus is in the personnel category, with $2.5M surplus, while the non-personnel category has $882k in surplus. This indicates possible over budgeting in the personnel category and a potential argument there for reallocation to participatory budgeting. The top programs within this department with surplus in 2022 were Sports and Fitness with $1.5M and Youth and Family Services with $893k. </p>
          <p className="font-[20px] font-light">The second dashboard summarizes the budget vs. spending analysis for each of the departments with high surplus. This dashboard includes a yearly breakdown of budget and spending in the personnel vs. non-personnel categories of the department, the average budget and spending over the past 5 years in the personnel vs. non-personnel categories for each program within the department, and the 2022 budget and spending in the personnel vs. non-personnel categories for each program within the department. This dashboard also includes a filter effect, in which users can select the department of interest to generate the corresponding charts in the dashboard. The dashboard shown below corresponds to the Boston Center for Youth and Families as well, the top department with surplus in 2022. </p>
          <div className="relative w-full flex justify-center">       
            <Image
              className=" w-auto h-auto rounded-lg shadow-lg"
              src="/image2_4.webp"
              width="400"
              height="300"
              alt="image"
            />
            </div>
          <p className="font-[20px] font-light">As seen from the dashboard above, personnel spending is significantly higher than non-personnel spending for the Boston Center for Youth and Families. This is also the case when exploring the dashboards of the other departments of high surplus. Furthermore, spending is less than the budget for both categories in 2022. The program with the highest spending is the Administration and Policy program at around $16.6M on average in the past 5 years and $15.7M in 2022. This program also has the highest proportion of non-personnel spending as compared to other programs in this department. The breakdown of the other departments of high surplus is included in the presentation for this project. </p>
          <p className="font-[20px] font-light">This next section will explore the Boston Police Department to address key question #2. The Boston Police Department is one of the largest departments in the city with the most spending after the education department. Much of their spending is on personnel services, and the city is curious whether reassigning special police tasks to civilian flaggers would help with the high spending. Dashboard 1, summarizing the underutilization analysis, is shown below. As seen from the dashboard, the Boston Police Department has -$24M total in surplus in 2022, with -$24M in personnel services and +$111k in non-personnel services. The specific programs in the police department with the most surplus were Admin and Technology with $1.5M in surplus, and operations with $886K in surplus.</p>
          <div className="relative w-full flex justify-center">       
            <Image
              className=" w-auto h-auto rounded-lg shadow-lg"
              src="/image2_5.webp"
              width="400"
              height="300"
              alt="image"
            />
            </div>
          <p className="font-[20px] font-light">Next, we will look at Dashboard 2 summarizing the budget vs. spending analysis for the Boston Police Department. As seen in the dashboard below, personnel spending is significantly higher than non-personnel spending, and spending is higher than the budget in both categories. The program in this department with the highest spending is the Bureau of Field Services at around $200M spending on average over the past 5 years, followed by the Bureau of Investigative services at around $70M. The programs of Admin & Technology and Operations have a higher proportion of non-personnel spending than other programs.</p>
          <div className="relative w-full flex justify-center">       
            <Image
              className=" w-auto h-auto rounded-lg shadow-lg"
              src="/image2_6.webp"
              width="400"
              height="300"
              alt="image"
            />
            </div>
          <p className="font-[20px] font-light">Next, we want to explore overtime pay within specific police assignments, to see how much is being spent paying police officers overtime where civilian flaggers could be used to save money. The dashboard below shows the overtime pay analysis for detail assignments, which make up the majority of police assignments. The chart on the left displays the amount overpaid (overtime hours * overtime rate) for the past 3 years, and the chart on the right displays the amount of hours that were paid vs. worked. The City of Boston&apos;s policy for overtime police work requires police officers to be paid either 4 hours or 8 hours for overtime work regardless of the actual number of hours worked - for 0-4 hours worked overtime, officers are always paid for 4 overtime hours; for 4-8 hours worked overtime, officers are always paid for 8 overtime hours. Due to this policy there is often a discrepancy between the number of hours that are paid and worked, and the chart below highlights this.</p>
          <div className="relative w-full flex justify-center">       
            <Image
              className=" w-auto h-auto rounded-lg shadow-lg"
              src="/image2_7.webp"
              width="400"
              height="300"
              alt="image"
            />
            </div>
          <p className="font-[20px] font-light">As seen from the dashboard above, there is around $6M being overpaid for hours not worked on average between 2020 and 2022. In 2022, there is around $7M overpaid for detail assignments. This makes up around 30% of the overspending in the entire police department as there was a negative surplus of -$24M in 2022. We also want to look at overtime hours for detail assignments, court assignments, and special events assignments. </p>
          <p className="font-[20px] font-light">Since we only have pay data for detail assignments, looking at the hours for all assignments can provide insight into how much more is spent on the other two assignment types for which we don&apos;t have pay rates data. The dashboard below includes 4 charts: the total hours overpaid (not worked) yearly in the past 5 years, the hours overpaid yearly in the past 5 years broken down by assignment type, the total hours paid vs. worked yearly in the past 5 years, and the hours paid vs. worked yearly in the past 5 years broken down by assignment type. </p>
          <div className="relative w-full flex justify-center">       
            <Image
              className=" w-auto h-auto rounded-lg shadow-lg"
              src="/image2_8.png"
              width="400"
              height="300"
              alt="image"
            />
            </div> 
          <p className="font-[20px] font-light">As seen from the dashboard above, for detail and court assignments there were around 190K total overpaid hours in 2022. For detail assignments specifically, there were around 149K overpaid hours. There were 37K overpaid hours for court assignments, and 4K overpaid hours for special events assignments. </p>
          <p className="font-[20px] font-light">These charts display a large amount of overpaid hours and overtime pay within the police department. Mitigating some of this to civilian flaggers may help reduce police spending and argue for a reallocation of funds to participatory budgeting. In looking at the departments with high surplus the 9 departments selected display a $9.4M total surplus in 2022, and the police department&apos;s $7M overpaid to police officers in detail assignments can also be potentially reallocated. </p>
          <h3 className="text-[20px] font-medium">Conclusions, Limitations, and Extensions</h3>
          <p className="font-[20px] font-light">In conclusion, this project was able to conduct a thorough investigation and analysis in to the City of Boston departmental budgets and identify key departments of interest with high surplus. It was found that personnel spending is significantly higher than non-personnel spending in most departments of interest, and that there is a significant amount overpaid to police officers in the Boston Police Department. </p>
          <p className="font-[20px] font-light">Some limitations of this project include access to city data. Although this data is publicly available, it differs by year in regards to the information provided and format. Due to this it can be difficult to obtain data from past years to conduct the analysis over time, in addition to departmental budget fluctuations in each year. Additionally, without pay rates for all police assignments we are unable to identify the exact amount spent on overtime police assignments of all types. </p>
          <p className="font-[20px] font-light">There are a few ways to extend upon this project. One would be to obtain data for a further break down of program expense categories, including personnel services, contractual services, supplies and materials, current charges and obligations, and equipment. Additionally, obtaining overtime pay details for past years would provide a more comprehensive view of how overtime has been spent in recent years. Lastly, including recently released 2023 data can provide more recent insights into department budgets. </p>
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

