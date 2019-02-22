---
layout: post
title:  Tree-based methods
date:   2019-02-22
author: Ali Sina
summary: A draft summary and description
mathjax: true
tags: [statistics, machine_learning, statistical_learning, nonlinear, trees, decision_trees, random_forests, bagging, boosting]
postFooter: Additional information, and maybe a <a href="#">link or two</a>.
---

> This is the first in a [series](https://alisiina.github.io/2019/01/28/statistical-learning-series.html) of posts that I'm doing on statistical learning. All the material is based on [An Introduction to Statistical Learning](http://www-bcf.usc.edu/~gareth/ISL/) book which was taught by the authors and Stanford University professors Trevor Hastie and Rob Tibshirani. The aim is to condense the concepts taught in the course and the material in the book to a series of under-10-minute reads.

### Decision trees

A decision tree is built by dividing the feature space $X_1, X_2,...,X_p$ into distinct and non-overlapping regions. The data is split at certain cutpoints so as to minimize the RSS. But this is too complex so tree is pruned then.

For both classification and regression.

Trees are easy to explain, especially coz they can be intuitively visualized. Decision trees mimic human decision making more closely. Do not have good prediction accuracy but can be improved with bagging which takes bootstrapped samples $B$, train the model on $b$th sample and average the predictions, given by:

$$ \hat{f}_{bag}(x) = \frac{1}{B} \sum_{b=1}^B \hat{f}^{\ast b}(x) $$

This is only for a regression trees. In a classification setting, a *majority vote* is taken to estimate accuracy, which is simply the most commonly occuring class in $B$ predictions.

### Random forests

Suppose in a dataset, one of predictors has a strong relationship with the response variable. In such a situation, our decision trees from each bootstrapped sample will look the same and, therefore, average the predictions though bagging will not lead to a great reduction in the prediction error.

Random forests avoid this problem by choosing a random sample of $m$ predictors from the full set of $p$ predictors each time a split is made.

Although can be used with almost any statistical learning method to improve prediction accuracy, **boosting** is primarily used with decision trees and random forests. Boosting works similarly to bagging. The difference is that boosting builds decision trees by slightly modifying the original dataset with information from previosly grown trees. So, unlike bagging, boosting is *sequential*.

In a regression setting, boosting fits a decision tree to the current residual instead of the response $Y$. This decision tree is then added to the fitted function in order to update the residuals. Boosting for classification works a slightly similar but far more complex way. Much of the behavior of the boosting is controlled by three tuning parameters.[^1]

{% include socialsharing.html %}


* * *
##### FOOTNOTES


[^1]: THe tuning paramters of boosting.
