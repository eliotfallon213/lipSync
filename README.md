# lipSync


##Introduction
Some quick prototypes done as a proof of concept for an application which would allow a user to record themselves talking or singing along to an audio track then allow them to download it share it or play it back.

The questions I was trying to answer were:
- How might we be able to get hold of people's videos or make it easy for people to record videos?
- Can this be done without the need for backend processing of the video? This can take time which effects the UX and also require more server power so is less scalable.

##Installation
- To install the application first clone the repository. 
- Then open a CLI inside the directory you have cloned it to.
- Install the Node modules (```npm install```).
- Install the Bower packages (```bower install```)
- Using a Grunt task, run the Node server to open the application in your browser. (```grunt serve```).

###Use the top menu to move between pages.

##The YouTube page
This page was to highlight that you could use Javascript controls for a HTML5 video (either local or embedded from a video service) and another Audio track at ther same time.

This method obivously has a few drawbacks such as the possibility of the two becoming unsynced, but would give a much wider selection of videos.

##Web Record
###Limited browser support
This page utilises the narrowly supported ```Navigator.getUserMedia()``` to record a video to a video file without the requirement for backend processing.
