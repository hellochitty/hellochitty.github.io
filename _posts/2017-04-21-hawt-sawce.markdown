---
layout: post
title:	"HAWT SAWCE"
image:	/assets/hawt_sawce/hawt_sawce_thumb.png
date:   2017-04-21 10:00:00 -0400
categories:	digital
hover-tag: Programming + UI/UX Design
---
When I was a child, my grandfather penned a nickname for me. He called me "chili chithra" due to my love for all things spicy. I can't count the number the times people have asked me if I wanted some main course to go with my hot sauce.

With hot sauce being such an integral part of my life, I think about it a little more that is normal. Obviously, my first full-stack app had to be hot sauce related... because, obviously.


![HAWT SAWCE front page](/assets/hawt_sawce/hawt_sawce_front.png)
I built [HAWT SAWCE](http://www.hawtsawceapp.com) using a RoR backend, PostgreSQL backend, and React/Redux front-end (view code on [github](https://github.com/hellochitty/Hawt-Sawce)). All the development and design is my own work. Being a one woman design and dev shop was REALLY hard. I found myself Rubber Duck Debugging all the time, and felt like I became my own best friend/worst enemy. However, a big plus of being alone was that I could work at whatever hours I wanted. There were no dependencies on external players, and thus I was able to stick to and beat my projected timelines.
![HAWT SAWCE sawces](/assets/hawt_sawce/hawt_sawce_sawces.png)
<br><br>
An interesting component to build was my sawce sorter.
![HAWT SAWCE gif](/assets/hawt_sawce/hawt_sawce_sorting.gif)

The dropdown was implemented using Material-UI.
<br>
<br>
Here's how it works:
1.  On each dropdown click, an AJAX request is sent to my backend with a code representing the sort option selected.
2. The rails backend then does the appropriate ActiveRecord query which hits the database.
3. The response sent back to the front-end is an array containing the IDs of the sawces sorted in the correct order, and this result is then stored in my front-end store.
4. All of the sawces are already in the store due to an AJAX call made during the 'componentDidMount' lifecycle step. These are stored in a hash, with the keys being the sauce_ids, and the values being the entire sawce object.
5. With the sawces already in state, the sawces can then be displayed in order by doing an O(n) lookup using the array of IDs and the hash of sawces.

I hope you have fun using [HAWT SAWCE](http://www.hawtsawceapp.com). You can create an account, edit your account details, add/edit/delete sawces, checkin/remove checkin for sawces, and add comments on others' checkins!
<br>
<br>
Ideally, I'd like to see [HAWT SAWCE](http://www.hawtsawceapp.com) in mobile form. A mobile app will be critical to [HAWT SAWCE's](http://www.hawtsawceapp.com) success and I intend on working to create one soon!
