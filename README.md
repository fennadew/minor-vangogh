# meesterproef
[Link to the prototype](https://sam-guliker.github.io/minor-vangogh/)

This project is made in collaboration with Sam Guliker and is commissioned by the [Vincent Van Gogh museum](https://www.vangoghmuseum.nl/). The project is an addition to the existing multimedia tour. The assignment was to develop an interface which visitors from the museum can personalize their visit with by choosing various themes.

We have designed and tested this interface in 5 weeks. The end result is a prototype of the personalized multimedia tour.

![Giphy](https://github.com/fennadew/minor-vangogh/blob/master/images/gif.gif)

# Table of Contents
1. [Branches by me](#branches-by-me)
2. [Learning goals](#learning-goals)

# Branches by me
- [arduino](https://github.com/fennadew/minor-vangogh/tree/arduino)
    <p>In this branch I started the arduino connection with the WIFI and the connection with the distance sensor, so we could measure the people who were in front of the paintings.</p>

- [Personal-tour](https://github.com/fennadew/minor-vangogh/tree/personal-tour)
   <p>In this branch I made a protype for the A/B test. You could swipe through themes and add them to your list.</p> 
   
- [swipe](https://github.com/fennadew/minor-vangogh/tree/swipe)
   <p>When we started this branch we decided to take the app in an different direction. We took the apps from the branches  personal-tour and questionnaire togheter and wanted to create an app similar to Tinder. In this branch I made the swipe        page and the swipe functionality.</p>

- [features](https://github.com/fennadew/minor-vangogh/tree/features)
    <p>In this branch I improved the swipe functionality and started animations of the buttons which Sam finished.</p>
   
- [hotfix](https://github.com/fennadew/minor-vangogh/tree/hotfix)
  <p>In this branch I fixed all known bugs and let the user add and delete themes on the overview page.</p>
   
- [zerostate](https://github.com/fennadew/minor-vangogh/tree/zerostate)
   <p>In this branch I added zero states to the swipe page.</p>
   
- [improvement-1](https://github.com/fennadew/minor-vangogh/tree/improvement-1)
   <p>In this branch I fixed the issue we encountered during testing. Because the info of the themes could collapse and expand, I removed the swiping functionallity, so it didn't had two interactions (swiping is the other one). However, the info is pretty big so people started swiping and nothing happend. So I added the swiping interaction as well and it worked just fine.</p>

- [improvement-2](https://github.com/fennadew/minor-vangogh/tree/improvement-2)
   <p>In this branch I worked on the tour page.</p


# Learning goals

## Real time web 
<b>Learning goal: Get real time data of a node MCU and connect this with Socket.js</b>

Real time data get inside by means of a NodeMCU. I worked with this for a week to get data from a HC-SR04 Ultrasone sensor so we could measure the amount of people in front of a painting. I also connected to WIFI to post this data on a server. However, at the first feedback meeting we found out that working with sensors was not a good idea, so we moved away from the idea.

## Web design
<b>Learning goal: I want to examine the needs of the user. This is important for the interaction and flow of the design. The user must be able to achieve his goal by using the app. I am going to do this by means of user scenarios and tests.</b>

We have written user scenario's for the flow of the interface and the interactions. We created or app based on the user scenario and the users needs.

<b>User scenario personalisation</b><br>
Ryan arrives at the gogh museum. This was an impulsive idea. He doesn't feel like seeing everything and spending hours in the museum. However, he would like to have some more information about the paintings, so he gets a device for the mutimedia tour. He wants to find a suitable tour quickly with interesting topics that won't take too long.

<b>Result</b><br>
The user can choose from many themes. There are 14 in total. These are quite a few themes. By keeping the themes and information about the themes on one page, the user can quickly go through the themes. All they have to do is swipe left or right to add or skip a theme. The information can be folded in and out to better view the theme's image. The user can see how long the themes last and how long the tour lasts in total after adding the themes. He can look back at his selection or start the tour at any time. 

<b>I was in charge of the swiping page. You can checkout the </b>[code here](https://github.com/fennadew/minor-vangogh/blob/master/src/components/ThemesList.js)
![Swipe](https://github.com/fennadew/minor-vangogh/blob/master/images/swipe.png)


<b>User scenario tour</b><br>
Fransisco & Dafne are from Italy. They go to the van gogh museum to admire his work. They want to participate in the multimedia tour. They pick up a device at the desk and start the personalization tour. After selecting all themes, they start the tour. On the screen they see their position on the map. The map also shows the first painting of the tour. They know where to go to find the painting.

The app shows a floor plan for each floor and the paintings of the tour are shown on it. The paintings are in a list underneath the map with their name and number. The number op the painting is also shown on the map. The first painting is extra large indicated on the map.  When you scroll through to the next painting, that one will be enlarged on the map. 

In the future we would like the visitor to be able to see where he is in the building. We faked that in the app for now. We would also want to be able to give them instructions on where to go.

<b>I was in charge of the tour page. You can checkout the </b>[code here](https://github.com/fennadew/minor-vangogh/blob/master/src/components/Map.js)

![Tour](https://github.com/fennadew/minor-vangogh/blob/master/images/tour.png)


### Testing

#### A/B Usability test classmates
We both made a prototype. We had two ideas and wanted to see which users liked the most to use. I made a prototype were  you could view and add your own themes to the tour. I kept this prototype in the style of Van Gogh Museum

<details>
<summary>Pictures of the prototype I made</summary>
<img  style={width: 50%} src="https://github.com/fennadew/minor-vangogh/blob/master/images/picture1.png">
<img style={width: 50%} src="https://github.com/fennadew/minor-vangogh/blob/master/images/picture2.png">
<img style={width: 50%} src="https://github.com/fennadew/minor-vangogh/blob/master/images/picture3.png">
</details>


[Link to branch](https://github.com/fennadew/minor-vangogh/tree/personal-tour)

<b>Findings</b>  
The following came out of the test results: 
- People who want to make a personalised tour take the time to do so
- The start button of prototype A was too clogged up
- People felt that the questionnaire was not personal and that it was vague
- People did not bother to go to the info page of the theme

<b>Design Choices</b>  
From these test results we decided to make different elements of the prototypes and to make a nice fusion of them.

The user has to make a choice for each theme. He can do this to swip left or right. The info of the theme is on the same page instead of individually. The start button has been made clearer. Both prototypes also had a timer. We used the overview page of prototype A.

#### Usability test museumplein
We tested our final app with (real) people at museumplein. 

<b>Conclusions</b>  
1. On the text field the swipe function was removed because it also had a click function. However, all test persons tried to swip over the text field and therefore the swipe didn't succeed. 

    <b>Improvement: </b>We have made sure that you can also swipe over the text field

2. The test persons want to have more information about the themes.

    <b>Improvement: </b>We decided to leave the text field unfolded by default.  

3. The test subjects were not interested in the overview page this is because they are confident about the choices they made. This was the last step before they could start the tour. 

    <b>Improvement: </b>We now put the overview page in a menu item but left it out of the flow.  
 

Some pictures of the test  
<details>
<summary>Image 1</summary>

![Test 1](https://github.com/fennadew/minor-vangogh/blob/master/src/images/test1.jpeg)

</details>
<details>
<summary>Image 2</summary>

![Test 2](https://github.com/fennadew/minor-vangogh/blob/master/src/images/test2.jpeg)

</details>
<details>
<summary>Image 3</summary>

![Test 3](https://github.com/fennadew/minor-vangogh/blob/master/src/images/test3.jpeg)

</details>


## Webapp from Scratch
We wanted to make a web app to recreate the look and feel of a native app. We also didn't want to use a database because this was not a learning goal of both of us. With a web app, all data in JavaScript will continue to exist because the website will not be reloaded when you navigate to another page. For example, we were able to transfer data we had obtained on one page to other pages. 

We have chosen React because you can reuse components and the syntax is very easy. React also uses a virtual DOM. This one lives in your memory and not on your screen and looks at the most effective way to make changes to the real overseas departments. They also have a large community.

In React I have worked a lot with map, filter and reduce. We had an array of objects with information about all the theme's. I had to use this data to do templating. Lists of selected and non-selected themes had to be splitten. The tour also had to be generated and all paintings had to be displayed by floor.

<details>
<summary>Code snippet map, filter en reduce</summary>

```
 setFloor() {
    let floor;

    let paintings = this.state.selected.map(obj => {
      return obj.paintings;
    });

    paintings = paintings.reduce(function(a, b) {
      return a.concat(b);
    }, []);

    if (this.state.radio === "floor-0") {
      floor = paintings.filter(obj => {
        return obj.floor === 0;
      });
    } else if (this.state.radio === "floor-1") {
      floor = paintings.filter(obj => {
        return obj.floor === 1;
      });
    } else if (this.state.radio === "floor-2") {
      floor = paintings.filter(obj => {
        return obj.floor === 2;
      });
    } else {
      floor = paintings.filter(obj => {
        return obj.floor === 3;
      });
    }

    return floor;
  }

  ```
  
</details>

<details>
<summary>Code snippet of the swipe (dislike/like) functionality</summary>

```
handleTouchStart = e => {
    this.setState({
      mouseDown: true,
      startPosition: typeof e === "object" ? e.touches[0].pageX : undefined,
      device: "mobile",
      transition: false
    });
};

handleDragMove = e => {
    let position;
    if (this.state.device === "mobile") {
      if (typeof e === "object") {
        if (e.touches) {
          position = e.touches[0].pageX;
        }
      } else {
        position = undefined;
      }
    } else {
      position = e.pageX;
    }

    let difFromStart;
    if (position) {
      difFromStart = position - this.state.startPosition;
    } else {
      difFromStart = 0;
    }

    let deg = difFromStart / 20;
    let reducedSwipe = difFromStart / 5;

    let opacity = 1 - Math.abs(difFromStart / 50);

    this.setState({
      transform: reducedSwipe,
      pullDeltaX: difFromStart,
      rotate: deg,
      opacity
    });
  }; 
  
  ```

[Full code of the swipe functionality](https://github.com/fennadew/minor-vangogh/blob/master/src/components/ThemesList.js)
</details>

<details>
<summary>Code snippet of the swiping through paintings</summary>

```
  handleSwipeMove = e => {
    e.preventDefault();
    if (e.touches) {
      if (!this.state.scrolling) {
        let startPosition = this.state.startPosition;
        let newIndex;
        let floor = this.setFloor();

        if (startPosition > e.touches[0].pageX) {
          newIndex =
            this.state.paintingIndex < floor.length - 1
              ? this.state.paintingIndex + 1
              : floor.length - 1;
        } else if (startPosition < e.touches[0].pageX) {
          newIndex =
            this.state.paintingIndex > 0 ? this.state.paintingIndex - 1 : 0;
        } else {
          newIndex = this.state.paintingIndex;
        }
        this.setState({
          scrolling: true,
          paintingIndex: newIndex,
          transform: this.state.pixelsPerProject * newIndex
        });

        timeOut = setTimeout(() => {
          this.setState({
            scrolling: false
          });
        }, 1000);
      }
    }
  };
```

[Full code of swiping through paintings with their visibility on the map](https://github.com/fennadew/minor-vangogh/blob/master/src/components/Map.js)
</details>


## CSS to the rescue
<b>Learning goal: Make a pleasurable interface for the visitors of the van Gogh museum</b>

We had thought of adding a zero state. I implemented the zero state in the main functionality of the app (the swipe) so that people immediately understand the interface. 

The swipe is a pleasurable functionality because it animates your interaction. Because it's so easy and feels good, the user enjoys doing it. 

The further you swip to the left or right, the more the themes change into a like or dislike. This gives the user good feedback about what he is doing. 

## Performance matters
<b>Learning goal: Make a super fast app with high perfomance, so it gets the look and feel of a native app</b>

<p>
When you build an app with React, there are already some standard perfomance things in the package like the auto minification of JavaScript, and a service worker. 

We wanted to have a Service Worker because it caches the pages and images. Images must be loaded quickly during swiping. For a nice effect, a service worker is certainly important. 

I checked if I could improve anything myself. I added a .htaccess file to GZIP the website. I compressed all of the images I used via tinypic. I also minified my SASS. 

Finally, I changed the manifest with the needed icons. </p>


<details>
<summary>The final audit</summary>

<img src="https://github.com/fennadew/minor-vangogh/blob/master/images/perfomance.png">

</details>

### 

# Wishlist
- [ ] When you swiped there will be a painting animation instead of a like or dislike icon
- [ ] Loader more into Van Gogh's theme
- [ ] More animations and smooth transitions
- [ ] See were you are on the map
- [ ] Get directions to paintings 


# Lisence
Copyright © 2018 Sam Guliker & Fenna de Wilde.  
Released under the [MIT license](https://opensource.org/licenses/MIT)
