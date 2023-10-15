# News Blog
This is a single-page NewsBlog React with Typescript application that allows users to input a filter string, and view top 3 filtered news based on news' title.

# How to use 
1. Enter title filter in the text box and hit the "Enter" key on your keyboard to submit (alternatively, mouse click on any other area other than the textbox).
![image](https://github.com/ryanngchoryee/NewsBlog/assets/43519076/c92d1a35-d81f-421d-9497-663a23351484)
2. Wait for the loading bar to finish.
![image](https://github.com/ryanngchoryee/NewsBlog/assets/43519076/2da4fa6d-4d34-4367-8316-f3cb1f0bb6b1)
3. Ta-da! Here goes the top 3 news based on your input filter! Use the arrow button on both side to browse through the top 3 News.
![image](https://github.com/ryanngchoryee/NewsBlog/assets/43519076/db18c5d3-ad6f-45f0-8ad5-4ca292d72020)

# Assumption Made
1. English has been choosen as default and only language.
2. Only Top 3 News will be displayed in the News Container. In cases where no news are found, a message will be displayed to notify users)
3. Upon first load of the page, top 3 news (without any title filter) will be retrieved and displayed.
4. User can submit filter either by clicking anywhere other than the textbox (unfocus), or using the keyboard "Enter" key.
5. News' image, title, desciption and source will be displayed. In cases where there are no image found, "Image not found" will be shown.
6. Data comes from news.io free account.
7. Libraries like Axios & React Boostrap has been used for devlopment

# DevOps processes
1. Azure DevOps sprint backlog has been use for task planning & execution.
https://dev.azure.com/ipainternational/BlogPage/_sprints/backlog/BlogPage%20Team/BlogPage/Sprint%201
(kindly request access if needed)
![image](https://github.com/ryanngchoryee/NewsBlog/assets/43519076/87c63e18-6fda-47a8-b850-2b4178329fdc)

