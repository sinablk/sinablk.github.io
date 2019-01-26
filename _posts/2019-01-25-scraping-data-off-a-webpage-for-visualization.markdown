---
layout: post
title:  Scraping data off a webpage for visualization
date:   2019-01-25
author: Ali Sina
summary: Creating nice, clean, and informative plots is an art. In this brief post, I extract data from a website and plot the data using a few plotting rules of thumb, or just one - "Data looks better naked!""
tags: [visualization, python, plotting, web_scraping]
postFooter: Additional information, and maybe a <a href="#">link or two</a>.
---
Creating a good plot is always tricky. You're constantly in a balancing act between having too much  information on the graph or having too little. At the end of the day, it's all about experimenting, trying to find that perfect graph looks good without withholding necessary information from the audience. In other words, the job of an analyst-designer is to create a graph that conveys all the information with the smallest number of elements. In the majority of cases, though, we can follow a few rules of thumb for creating effective plots:

![gif](https://static1.squarespace.com/static/56713bf4dc5cb41142f28d1f/5671e8bf816924fc22651410/5671eae2816924fc2265189a/1450306274301/data-ink.gif)
> [Source](https://www.darkhorseanalytics.com/blog/data-looks-better-naked)

### Getting started

For my data, I use a small table from a [blog](https://thinkermag.tumblr.com) that lists the salaries of a few heads of state. I use the `requests` library to scrap the data from the webpage:

```python
import requests

#get the URL
r = requests.get('http://thinkermag.tumblr.com/post/177266283773/this-is-a-list-of-salaries-of-heads-of-state-and')

#extract content from page
c = r.content
c
```




    b'<!DOCTYPE html><script>var \__pbpa = true;</script><script>var translated_warning_string = \'Warning: Never enter your Tumblr password unless \\u201chttps://www.tumblr.com/login\\u201d\\x0ais the address in your web browser.\\x0a\\x0aYou should also see a green \\u201cTumblr, Inc.\\u201
    .
    .
    .
    </div>



Extract just the table that I need using HTML's `<li\>` tag:


```python
content = [i.getText() for i in main_content.findAll('li')]    
content
```




    ['Afghanistan, Ashraf Ghani, $13,400. Age: 69',
     'Australia, General Sir Peter Cosgrove, $507,340. Age: 71',
     'Bahamas, Marguerite Pindling, $37,000. Age: 86',
     'Brazil, Michel Temer, $120,000. Age: 77',
     'Canada, Justin Trudeau, $260,200. Age: 46',
     'China, Xi Jinping, $22,000. Age: 65',
     'Denmark, Lars Løkke Rasmussen, $249,774. Age: 54',
     'Egypt, Abdel Fattah el-Sisi, $70,400. Age: 63',
     'France, Emmanuel Macron, $194,300. Age: 40',
     'Germany, Frank-Walter Steinmeier, $240,933. Age: 62',
     'Ghana, Nana Akufo-Addo, $76,000. Age: 74',
     'Hong Kong, Carrie Lam, $639,650. Age: 61',
     'India, Narendra Modi, $28,000. Age: 67',
     'Iran, Hassan Rouhani, $18,947. Age: 69',
     'Iraq, Faud Masum, $809,673. Age: 80',
     'Japan, Shinzo Abe, $202,700. Age: 63',
     'Kazakhstan, Nursultan Nazarbayev, $20,400. Age: 78',
     'Pakistan, Mamnoon Hussain, $46,600. Age: 62',
     'Russia, Vladimir Putin, $136,000. Age: 65',
     'Singapore, Lee Hsien Loong, $1,631,000. Age: 66',
     'United Kingdom, Theresa May, $215,980. Age: 61',
     'United States, Donal Trump, $400,000. Age: 72']



### Data cleaning
The data is now in one long list where each element is a string and contains all the info for that head of state. To make it plottable, we need to split the strings into lists to be added to a dataframe later:


```python
countries = [i.split(',', 1)[0] for i in content]
countries
```




    ['Afghanistan',
     'Australia',
     'Bahamas',
     'Brazil',
     'Canada',
     'China',
     'Denmark',
     'Egypt',
     'France',
     'Germany',
     'Ghana',
     'Hong Kong',
     'India',
     'Iran',
     'Iraq',
     'Japan',
     'Kazakhstan',
     'Pakistan',
     'Russia',
     'Singapore',
     'United Kingdom',
     'United States']




```python
names = [i.split(',')[1] for i in content]
names
```




    [' Ashraf Ghani',
     ' General Sir Peter Cosgrove',
     ' Marguerite Pindling',
     ' Michel Temer',
     ' Justin Trudeau',
     ' Xi Jinping',
     ' Lars Løkke Rasmussen',
     ' Abdel Fattah el-Sisi',
     ' Emmanuel Macron',
     ' Frank-Walter Steinmeier',
     ' Nana Akufo-Addo',
     ' Carrie Lam',
     ' Narendra Modi',
     ' Hassan Rouhani',
     ' Faud Masum',
     ' Shinzo Abe',
     ' Nursultan Nazarbayev',
     ' Mamnoon Hussain',
     ' Vladimir Putin',
     ' Lee Hsien Loong',
     ' Theresa May',
     ' Donal Trump']




```python
age = [i.split(':')[-1].split('.')[0] for i in content]
age
```




    [' 69',
     ' 71',
     ' 86',
     ' 77',
     ' 46',
     ' 65',
     ' 54',
     ' 63',
     ' 40',
     ' 62',
     ' 74',
     ' 61',
     ' 67',
     ' 69',
     ' 80',
     ' 63',
     ' 78',
     ' 62',
     ' 65',
     ' 66',
     ' 61',
     ' 72']




```python
salaries = [i.split('$')[-1].split('.')[0] for i in content]
salaries

```




    ['13,400',
     '507,340',
     '37,000',
     '120,000',
     '260,200',
     '22,000',
     '249,774',
     '70,400',
     '194,300',
     '240,933',
     '76,000',
     '639,650',
     '28,000',
     '18,947',
     '809,673',
     '202,700',
     '20,400',
     '46,600',
     '136,000',
     '1,631,000',
     '215,980',
     '400,000']



Create the dataframe:


```python
import pandas as pd
df = pd.DataFrame({'Country': countries,
                  'Leader': names,
                  'Age': age,
                  'Salary': salaries})
df.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Country</th>
      <th>Leader</th>
      <th>Age</th>
      <th>Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Afghanistan</td>
      <td>Ashraf Ghani</td>
      <td>69</td>
      <td>13,400</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Australia</td>
      <td>General Sir Peter Cosgrove</td>
      <td>71</td>
      <td>507,340</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Bahamas</td>
      <td>Marguerite Pindling</td>
      <td>86</td>
      <td>37,000</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Brazil</td>
      <td>Michel Temer</td>
      <td>77</td>
      <td>120,000</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Canada</td>
      <td>Justin Trudeau</td>
      <td>46</td>
      <td>260,200</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.dtypes
```




    Country    object
    Leader     object
    Age        object
    Salary     object
    dtype: object




```python
#convert dtypes of columns to corrent type
df['Age'] = df['Age'].apply(pd.to_numeric)
df['Salary'] = df['Salary'].str.replace(',', '').apply(pd.to_numeric)
```


```python
df.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Country</th>
      <th>Leader</th>
      <th>Age</th>
      <th>Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Afghanistan</td>
      <td>Ashraf Ghani</td>
      <td>69</td>
      <td>13400</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Australia</td>
      <td>General Sir Peter Cosgrove</td>
      <td>71</td>
      <td>507340</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Bahamas</td>
      <td>Marguerite Pindling</td>
      <td>86</td>
      <td>37000</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Brazil</td>
      <td>Michel Temer</td>
      <td>77</td>
      <td>120000</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Canada</td>
      <td>Justin Trudeau</td>
      <td>46</td>
      <td>260200</td>
    </tr>
  </tbody>
</table>
</div>



The `Age` and `Salary` columns need to be fixed to their proper datatype.

```python
df.dtypes
```




    Country    object
    Leader     object
    Age         int64
    Salary      int64
    dtype: object


### The fun part: plotting

```python
import matplotlib as plt

#sort the dataframe based on Salary
df = df.sort_values('Salary', ascending=False).reset_index()
```


```python
#create a quick plot
df.plot(kind='barh', x='Leader', y='Salary', figsize=(14,10))
```



![png](/images/soup/output_24_1.png)


And then create a final, stylized plot:


```python
#pick style
plt.style.use('fivethirtyeight')
plt.rcParams['font.size'] = 14

import seaborn as sns
import matplotlib.pyplot as plt
#create basic figure
fig, ax = plt.subplots(figsize=(10,8))
sns.barplot(x='Salary', y='Leader', data=df,
           color='crimson', edgecolor = 'k', linewidth=1, ax=ax)

#annotate bars
for i, row in df.iterrows():
    plt.text(x=row['Salary']+8000, y=i+0.15, s=row['Country'], size=14, color='crimson')

#labels
plt.xticks(size=16)
plt.xlabel('Total Annual Salary ($)', fontweight='bold', labelpad=20)
plt.ylabel('')
plt.title('Salaries of Heads of State/Government', fontweight='bold')

#caption
txt = 'Source: Wikipedia (https://en.wikipedia.org/wiki/List_of_salaries_of_heads_of_state_and_government)'
plt.text(x=0, y=25, s=txt, size=12, fontstyle='italic', color='grey')
```



![png](/images/soup/output_26_1.png)


[<i class="fab fa-github-alt fa-2x"></i>](https://github.com/alisiina/misc/blob/master/Soup%20and%20Split.ipynb) *View on Github*


* * *
