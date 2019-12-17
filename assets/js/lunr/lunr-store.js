var store = [{
        "title": "Quick-Start Guide",
        "excerpt":"This guide provides a quick peek at Hudi’s capabilities using spark-shell. Using Spark datasources, we will walk through code snippets that allows you to insert and update a Hudi dataset of default storage type: Copy on Write. After each write operation we will also show how to read the data...","categories": [],
        "tags": [],
        "url": "http://0.0.0.0:4000/docs/quick-start-guide/",
        "teaser":"http://0.0.0.0:4000/assets/images/500x300.png"},{
        "title": "Use Cases",
        "excerpt":"Near Real-Time Ingestion Ingesting data from external sources like (event logs, databases, external sources) into a Hadoop Data Lake is a well known problem. In most (if not all) Hadoop deployments, it is unfortunately solved in a piecemeal fashion, using a medley of ingestion tools, even though this data is...","categories": [],
        "tags": [],
        "url": "http://0.0.0.0:4000/docs/use_cases",
        "teaser":"http://0.0.0.0:4000/assets/images/500x300.png"},{
        "title": "Talks & Powered By",
        "excerpt":"Adoption Uber Apache Hudi was originally developed at Uber, to achieve low latency database ingestion, with high efficiency. It has been in production since Aug 2016, powering the massive 100PB data lake, including highly business critical tables like core trips,riders,partners. It also powers several incremental Hive ETL pipelines and being...","categories": [],
        "tags": [],
        "url": "http://0.0.0.0:4000/docs/powered_by",
        "teaser":"http://0.0.0.0:4000/assets/images/500x300.png"},{
        "title": "Comparison",
        "excerpt":"Apache Hudi fills a big void for processing data on top of DFS, and thus mostly co-exists nicely with these technologies. However, it would be useful to understand how Hudi fits into the current big data ecosystem, contrasting it with a few related systems and bring out the different tradeoffs...","categories": [],
        "tags": [],
        "url": "http://0.0.0.0:4000/docs/comparison",
        "teaser":"http://0.0.0.0:4000/assets/images/500x300.png"},{
        "title": "Concepts",
        "excerpt":"Apache Hudi (pronounced “Hudi”) provides the following streaming primitives over datasets on DFS Upsert (how do I change the dataset?) Incremental pull (how do I fetch data that changed?) In this section, we will discuss key concepts &amp; terminologies that are important to understand, to be able to effectively use...","categories": [],
        "tags": [],
        "url": "http://0.0.0.0:4000/docs/concepts",
        "teaser":"http://0.0.0.0:4000/assets/images/500x300.png"},{
        "title": "Writing Hudi Datasets",
        "excerpt":"In this section, we will cover ways to ingest new changes from external sources or even other Hudi datasets using the DeltaStreamer tool, as well as speeding up large Spark jobs via upserts using the Hudi datasource. Such datasets can then be queried using various query engines. Write Operations Before...","categories": [],
        "tags": [],
        "url": "http://0.0.0.0:4000/docs/writing_data",
        "teaser":"http://0.0.0.0:4000/assets/images/500x300.png"},{
        "title": "Querying Hudi Datasets",
        "excerpt":"Conceptually, Hudi stores data physically once on DFS, while providing 3 logical views on top, as explained before. Once the dataset is synced to the Hive metastore, it provides external Hive tables backed by Hudi’s custom inputformats. Once the proper hudi bundle has been provided, the dataset can be queried...","categories": [],
        "tags": [],
        "url": "http://0.0.0.0:4000/docs/querying_data",
        "teaser":"http://0.0.0.0:4000/assets/images/500x300.png"},{
        "title": "Configurations",
        "excerpt":"This page covers the different ways of configuring your job to write/read Hudi datasets. At a high level, you can control behaviour at few levels. Spark Datasource Configs : These configs control the Hudi Spark Datasource, providing ability to define keys/partitioning, pick out the write operation, specify how to merge...","categories": [],
        "tags": [],
        "url": "http://0.0.0.0:4000/docs/configurations",
        "teaser":"http://0.0.0.0:4000/assets/images/500x300.png"},{
        "title": "Performance",
        "excerpt":"In this section, we go over some real world performance numbers for Hudi upserts, incremental pull and compare them against the conventional alternatives for achieving these tasks. Upserts Following shows the speed up obtained for NoSQL database ingestion, from incrementally upserting on a Hudi dataset on the copy-on-write storage, on...","categories": [],
        "tags": [],
        "url": "http://0.0.0.0:4000/docs/performance",
        "teaser":"http://0.0.0.0:4000/assets/images/500x300.png"},{
        "title": "Administering Hudi Pipelines",
        "excerpt":"Admins/ops can gain visibility into Hudi datasets/pipelines in the following ways Administering via the Admin CLI Graphite metrics Spark UI of the Hudi Application This section provides a glimpse into each of these, with some general guidance on troubleshooting Admin CLI Once hudi has been built, the shell can be...","categories": [],
        "tags": [],
        "url": "http://0.0.0.0:4000/docs/admin_guide",
        "teaser":"http://0.0.0.0:4000/assets/images/500x300.png"},{
        "title": "License",
        "excerpt":"The MIT License (MIT) Copyright (c) 2013-2019 Michael Rose and contributors Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge,...","categories": [],
        "tags": [],
        "url": "http://0.0.0.0:4000/docs/license/",
        "teaser":"http://0.0.0.0:4000/assets/images/500x300.png"},{
        "title": "Markup: Another Post with Images",
        "excerpt":"Here are some examples of what a post with images might look like. If you want to display two or three images next to each other responsively use figure with the appropriate class. Each instance of figure is auto-numbered and displayed in the caption. Figures (for images or video) One...","categories": [],
        "tags": ["sample post","images","test"],
        "url": "http://0.0.0.0:4000/markup-more-images/",
        "teaser":"http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_c.jpg"},{
        "title": "Markup: Syntax Highlighting",
        "excerpt":"Syntax highlighting is a feature that displays source code, in different colors and fonts according to the category of terms. This feature facilitates writing in a structured language such as a programming language or a markup language as both structures and syntax errors are visually distinct. Highlighting does not affect...","categories": [],
        "tags": ["code","syntax highlighting"],
        "url": "http://0.0.0.0:4000/markup-syntax-highlighting/",
        "teaser":"http://0.0.0.0:4000/assets/images/markup-syntax-highlighting-teaser.jpg"},{
        "title": "Welcome to Jekyll!",
        "excerpt":"You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when...","categories": ["Jekyll"],
        "tags": ["update"],
        "url": "http://0.0.0.0:4000/jekyll/welcome-to-jekyll/",
        "teaser":"http://0.0.0.0:4000/assets/images/500x300.png"},{
        "title": "Gemified Theme -- Alpha Release",
        "excerpt":"Jekyll themes distributed as Ruby gems are finally here to make installing and upgrading much easier. Gone are the days of forking a repo just to “install it”. Or dealing with merge conflicts when pulling in upstream commits to “upgrade it”. If you’re interested in testing out Minimal Mistakes as...","categories": ["Jekyll"],
        "tags": ["update"],
        "url": "http://0.0.0.0:4000/jekyll/gemified-theme-alpha/",
        "teaser":"http://0.0.0.0:4000/assets/images/500x300.png"},{
        "title": "Gemified Theme -- Beta Release",
        "excerpt":"Hot on the heels of Jekyll v3.3.0 is a beta release of Minimal Mistakes… as a gemified theme. minimal-mistakes-jekyll can only be used with Jekyll proper. If you’re hosting on GitHub Pages or using that gem the theme won’t work. 3rd party themes haven’t been white-listed so it’s a no...","categories": ["Jekyll"],
        "tags": ["update"],
        "url": "http://0.0.0.0:4000/jekyll/gemified-theme-beta/",
        "teaser":"http://0.0.0.0:4000/assets/images/500x300.png"},]
