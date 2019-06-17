



# SQL VS NOSQL


## SQL 

SQL databases use structured query language (SQL) for defining and manipulating data. 

Extremely powerful: SQL is one of the most versatile and widely-used options available, making it a safe choice and especially great for complex queries.
On the other hand, it can be restrictive. SQL requires that you use predefined schemas to determine the structure of your data before you work with it. 

In addition, all of your data must follow the same structure. 
This can require significant up-front preparation, it can mean that a change in the structure would be both difficult and disruptive to your whole system.

### Advantages:



## No SQL 
A NoSQL database, has dynamic schema for unstructured data, and data is stored in many ways: it can be column-oriented, document-oriented, 
graph-based or organized as a KeyValue store. 

This flexibility means that: 

* You can create documents without having to first define their structure.
* Each document can have its own unique structure
* Add fields as you go.




## Scalability

### SQL databases are vertically scalable, which means that you can increase the load on a single server by increasing things like CPU, RAM or SSD. 

### NoSQL databases,  are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database.

## The Structure

SQL databases are table-based, while NoSQL databases are either document-based, key-value pairs, graph databases or wide-column stores. 
This makes relational SQL databases a better option for applications that require multi-row transactions - such as an accounting system - or 
for legacy systems that were built for a relational structure.


Relational databases are really nice when you have a lot of data that’s needs to be structured in a very specific way, 
with different sets of data that relate to each other in some way.

## ACID compliance:

 ACID (Atomicity, Consistency, Isolation, Durability) is a set of properties of database transactions intended to guarantee validity even in the event of errors, 
 power failures, etc. In the context of databases, a sequence of database operations that satisfies the ACID properties 
 (and these can be perceived as a single logical operation on the data) is called a transaction. For example, a transfer of funds from one bank account to another, even involving multiple changes such as debiting one account and crediting another, is a single transaction.

ACID (Atomicity, Consistency, Isolation, Durability) compliance reduces anomalies and protects the integrity of your database by suggesting precisely how transactions 
interact with the database. Often NoSQL databases sacrifice ACID compliance with processing speed and flexibility.



##  Joins 

This is in regards to data retrieval. When developing a complex application, often times you’ll need to retrieve multiple sets of data held in different tables.
This is easily accomplished by ‘joining’ two or more tables together, and grabbing all of the information you need at once.
 
In NoSQL database — if you need to retrieve multiple sets of data, you’ll have to make multiple queries to your database!



## Examples of SQL Database and NOSQL Database

#### SQL database: MySQL, Oracle, PostgreSQL, and Microsoft SQL Server.
#### NOSql Databse: MongoDB, BigTable, Redis, RavenDB Cassandra, HBase, Neo4j and CouchDB.


## SQL vs NoSQL: MySQL vs MongoDB

### MySQL: The SQL Relational Database

* Maturity: MySQL is an extremely established database, meaning that there’s a huge community, extensive testing and quite a bit of stability.
* Compatibility: MySQL is available for all major platforms, including Linux, Windows, Mac, BSD and Solaris. It also has connectors to languages 
	like Node.js, Ruby, C#, C++, Java, Perl, Python and PHP, meaning that it’s not limited to SQL query language.
	
* Cost-effective: The database is open source and free.

* Replicable: The MySQL database can be replicated across multiple nodes, meaning that the workload can be reduced and the scalability
	and availability of the application can be increased.
	
* Sharding: While sharding cannot be done on most SQL databases, it can be done on MySQL servers. This is both cost-effective and good for business.

### MongoDB: The NoSQL Non-Relational Database


* Dynamic schema: This gives you flexibility to change your data schema without modifying any of your existing data.
* Scalability: MongoDB is horizontally scalable, which helps reduce the workload and scale your business with ease.
* Manageability: The database doesn’t require a database administrator. Since it is fairly user-friendly in this way, it can be used by both developers and administrators.
* Speed: It’s high-performing for simple queries.
* Flexibility: You can add new columns or fields on MongoDB without affecting existing rows or application performance.





