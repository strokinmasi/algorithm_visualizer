# SMALL DEVELOPMENT LOG

This project is a algorithm visualizer for pathfinding algorithms, created to introduce as much customizability to pathfinding algorithms as possible.

Overall with this project I want to simply achieve :>

- I want to learn how to setup nice looking UI
- I want to learn the basic algorithms and how they work
- I want to learn to use react and useStates etc
- I want to learn javascript, a very common coding language that can be used for a variety of tasks

current goals, updated with every future log update :>

- need to implement wall functionality
- need to implement grid cleanup after a pathfinding alrgorithm has been run
- need to implement material-ui
- need to write tests :(

# LOGS

### LOG 1 : July 30th

Notes/

this entire project was overhauled from a previously started algorithm visualizer I made, however I was not
happy with my previous attempt and therefore I started over.

Achieved/

- created basic interactable grid
- implemented different node types and node click functionality
- node types include, wall, start node, end node, empty node


### LOG 2 : August 4th

Notes/

The grid now functions properly and I now want to start implementing the good old dijstra algorithm, a great starting
algorithm which in reality, is just BFS in this non-weighted grid like this. This gives me a possible extension to this
project, to add a weighted graph or grid later.

Achieved/

- started implementation of BFS, learning how to manipulate nodes
- created a tool system
- clicking on a node will do different actions depending on what tool is selected

### LOG 3 : August 5th

Notes/

Took a long time to realise how states really work in react, they dont just update whenever I want them to and also had to learn about asynchronous functions and delay to allow the pathfinding to look cleaner. I think I may need to add a helper function section of the code. Will be adding that to the goals

Achieved/

- almost fully implemented the BFS search algorithm
- added the new node "visited" to show a node has been searched

### LOG 4 : August 6th

Notes/

learned more about asynchronous functions in order to get the pathing and the BFS search to actually visually display through a delayed animation. This is my first search algorithm completely finished!

Achieved/

- completely implemented a decent visual for the BFS and pathing
- implemented a gridUtils file to keep all helper functions, may make one for algorithms later

### LOG 5 : August 6th

Notes/

DFS was very quick as it was very similar to BFS, it just used a stack instead of a queue. I also realised that DFS didn't actually always find the shortest path, infact most of the time it would not find a short path but a long winding path. I think I will implement the A* path finding algorithm next

Achieved/

- finished DFS file although it looks mostly like the BFS file


### LOG 6 : August 6th

Notes/

Astar was a new algorithm for me as it was not taught in my university's Data algorithms course, however after learning it I realised it was a very strong algorithm and very fast algorithm while also accurate. I also realised that Dijkstra was not implementable in this grid as it is unweighted, Dijstra acts like BFS in an unweighted graph so no point implementing it right now.

I need to start implemented wall functionality now, and grid cleanup after a search algorithm has ended

Acheived/

- completed Astar search, definitely the fastest search algorithm right now

### LOG 6 : August 14th

Notes/

Wrote the first test just to setup the features, decided to use vitest as it was the most up to date tester with the best features. Will have to learn how to use it.

Acheived/

- wrote the first test and also setup all of vistest