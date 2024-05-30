
function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });





    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

init()

function revealToSpan() {
    document.querySelectorAll(".reveal")
        .forEach(function (elem) {
            // create two spans
            var parent = document.createElement("span");
            var child = document.createElement("span");

            //parent and child both sets their respective classes
            parent.classList.add("parent");
            child.classList.add("child");

            //span parent gets child and child gets elem details
            child.innerHTML = elem.innerHTML;
            parent.appendChild(child);

            // elem replaces its value with parent span
            elem.innerHTML = "";
            elem.appendChild(parent);
        })
}


// revealToSpan();


function loaderAnimation() {
    var tl = gsap.timeline();
    tl.from("#patna .child span", {
        x: 100,
        stagger: .2,
        duration: 1.4,
        delay: 1,
        ease: Power3.easeInOut
    })
        .to("#patna .parent .child", {
            y: "-100%",
            duration: 1,

            ease: Circ.easeInOut
        })

        .to("#patna", {
            height: 0,
            duration: 1,
            ease: Circ.easeInOut
        })
        .to("#green", {
            height: "100%",
            top: 0,
            delay: -.7,
            duration: 1,
            ease: Circ.easeInOut
        })
        .to("#green", {
            height: "0%",
            delay: -.4,
            duration: 1,
            ease: Circ.easeInOut,
            onComplete: function () {
                animateHomepage();
            }

        })
}


// loaderAnimation();


function mover(){
    var tl = gsap.timeline()
    // tl.from("#mover .child",{
    //   y:"120%",
    //   duration:2,
    //   skewY:4,
    //   stagger:.5,
    //   opacity:0,
    //   onComplete:function(){
    //  setTimeout(() => {
    //           const counters = document.querySelectorAll('.value');
    //           const speed = 300;
              
    //           counters.forEach( counter => {
    //              const animate = () => {
    //                 const value = +counter.getAttribute('akhi');
    //                 const data = +counter.innerText;
                   
    //                 const time = value / speed;
    //                if(data < value) {
    //                     counter.innerText = Math.ceil(data + time);
    //                     setTimeout(animate, 1);
    //                   }else{
    //                     counter.innerText = value;
    //                   }
                   
    //              }
                 
    //              animate();
    //           });
    //          }, 1000);
        
         
         
      
      
     
    //   }
    // })
  
    tl.to("#mover",{
      top:"-100%",
      display:"none",
      delay:2,
      duration:2,
      ease:Expo.ease,
      onComplete:function(){
        function pg1t(){
        
          var tl = gsap.timeline()
          tl
          .to(".cent .child",{
            opacity:1,
            y:"0%",
            duration:2,
            ease:Circ.ease,
            skewY:0,
            // skewY:5,
            stagger:.5
          })
          }
          pg1t()
      }
    }, 

    

)
.to("#green", {
    height: "100%",
    top: 0,
    delay: -.7,
    duration: 1,
    ease: Circ.easeInOut
})
.to("#green", {
    height: "0%",
    delay: -.4,
    duration: 1,
    ease: Circ.easeInOut,
    

})
   
   
// var anim = gsap.timeline()

.from(".navbar", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger:true,

})

    .from(".row-center1", {
        y: 100,
        opacity: 0,
        duration: 0.6,
    })
    .from(".row-center2", {
        y: 100,
        opacity: 0,
        duration: 0.6,
    })
    .from(".row-center2 h1", {
        // scale: 7,
        x:-100,

        opacity: 0,
        duration: 0.6
    })

    .from(".row-center3", {
        y: 100,
        opacity: 0,
        duration: 0.6,
    })
    
  
  }
  mover()

  gsap.from("#mover h2", {
    y: 100,
    opacity: 0,
    duration:1,
   
  })



  function revealToSpan() {
    document.querySelectorAll(".reveal").forEach(function(elem){
        
        let spanParent = document.createElement("span");
        let spanChild = document.createElement("span");
        
        spanParent.classList.add("parent")
        spanChild.classList.add("child")
        
        spanChild.innerHTML = elem.innerHTML;
        // console.log(spanChild.textContent)
        spanParent.appendChild(spanChild);
        
        elem.textContent = "";
        elem.appendChild(spanParent);
    })
  }
  revealToSpan()


function menu() {
    var flag = 0
  
    document.querySelector(".menu i")
    .addEventListener("click", function(){
      if(flag == 0) {
  
  
        document.querySelector("#loader").style.top = "0%"
        flag = 1
  
      }
      else{
  
  
        document.querySelector("#loader").style.top = "-100%"
        flag = 0
  
      }
    })
  }
  menu()


  function close() {

    document.querySelector(".close i")
    .addEventListener("click", function(){
        document.querySelector("#loader").style.top="-100%"
        document.querySelector("#loader").style.transition = "all 1s";

    })
  }

  close()


















    document.addEventListener("mousemove", function (dets) {
        document.querySelector("#cursor").style.left = `${dets.x}px`
        document.querySelector("#cursor").style.top = `${dets.y}px`
    
    })

    

    function page2() {
        var videopg2 = document.querySelectorAll("#page2 video")
        videopg2.forEach(function (e) {
    
            e.addEventListener("mouseenter", function () {
                document.querySelector("#cursor").innerHTML = "View"
                e.style.scale = 0.93

                document.querySelector("#cursor").style.scale = 3.5
                // document.querySelector("#cursor").style.backgroundColor = "#F9970D"
                document.querySelector("#cursor").style.backgroundColor = "#14cf93"
                document.querySelector("#cursor").style.borderColor = "#F9970D"
                document.querySelector("#cursor").style.fontWeight = 500

            })
            e.addEventListener("mouseleave", function () {
                document.querySelector("#cursor").innerHTML = ""
                e.style.scale = 1

                document.querySelector("#cursor").style.scale = 1
                document.querySelector("#cursor").style.backgroundColor = "transparent"
                document.querySelector("#cursor").style.borderColor = "#e1e1e1"
            })
    
        })
    }

    page2()


    function page3() {
        var videopg3 = document.querySelectorAll(".projects video")
        videopg3.forEach(function (e) {
    
            e.addEventListener("mouseenter", function () {
                document.querySelector("#cursor").innerHTML = "View"
                e.style.scale = 0.93

                document.querySelector("#cursor").style.scale = 2.8
                document.querySelector("#cursor").style.backgroundColor = "white"
                document.querySelector("#cursor").style.borderColor = "white"
                document.querySelector("#cursor").style.fontWeight = 500
                document.querySelector("#cursor").style.color = "black"


            })
            e.addEventListener("mouseleave", function () {
                document.querySelector("#cursor").innerHTML = ""
                e.style.scale = 1

                document.querySelector("#cursor").style.scale = 1
                document.querySelector("#cursor").style.backgroundColor = "transparent"
                document.querySelector("#cursor").style.borderColor = "#e1e1e1"
            })
    
        })
    }

    page3()




    gsap.from("#elem h2", {
        // rotate: 5,
        y: 100,
        opacity: 0,
        duration:1,
        stagger: 0.25,
        scrollTrigger: {
          trigger: "#elem h2",
          scroller: "#main",
        //   markers: true,
          start: "top 70%",
          end: "top 69%",
          scrub: 3
        }
      })


      function buttonMove() {
        var con = document.querySelector(".con")
        var dev = document.querySelector(".dev-line")

        var videopg3 = document.querySelector(".projects video")

        var cursor = document.querySelector("#cursor")
    
        videopg3.addEventListener("mouseenter", function () {
            gsap.to(".con span", {
                y: "-3.5vw",
                color:"#F9970D"

            }),

            dev.style.width = "13vw"
        })
    
        videopg3.addEventListener("mouseleave", function () {
            gsap.to(".con span", {
                y: "0",
                color:"white"

            }),
            dev.style.width = "0vw"

        })
    }
    
    function buttonMove1() {
        var con2 = document.querySelector(".con2")
        var video2 = document.querySelector(".pro-box2 video")
        var dev2 = document.querySelector(".dev-line2")

        video2.addEventListener("mouseenter", function () {
            gsap.to(".con2 span", {
                y: "-3.5vw",
                color:"#F9970D"
            }),
            dev2.style.width = "14vw"

        })
    
        video2.addEventListener("mouseleave", function () {
            gsap.to(".con2 span", {
                y: "0",
                color:"white"
            }),
            dev2.style.width = "0vw"

        })
    }


    function ecomm() {
        var con4 = document.querySelector(".con4")
        var video4 = document.querySelector("#page4-video video")
        var line2 = document.querySelector(".page4-line2")

        video4.addEventListener("mouseenter", function () {
            gsap.to(".con4 span", {
                y: "-3.5vw",
                color:"#F9970D"
            }),
            line2.style.width = "14vw"
            video4.style.opacity= 0.8


        })
    
        video4.addEventListener("mouseleave", function () {
            gsap.to(".con4 span", {
                y: "0",
                color:"white"
            }),
            line2.style.width = "0vw"
            video4.style.opacity= 1


        })
    }

    ecomm()
    
    buttonMove()
    buttonMove1()


    function page4() {
        var videopg3 = document.querySelectorAll("#page4-video video")
        videopg3.forEach(function (e) {
    
            e.addEventListener("mouseenter", function () {
              document.querySelector("#cursor").innerHTML = "View"
                // e.style.scale = 0.93

                document.querySelector("#cursor").style.scale = 2.8
                document.querySelector("#cursor").style.backgroundColor = "white"
                document.querySelector("#cursor").style.borderColor = "white"
                document.querySelector("#cursor").style.fontWeight = 500
                document.querySelector("#cursor").style.color = "black"


            })
            e.addEventListener("mouseleave", function () {
                document.querySelector("#cursor").innerHTML = ""
                // e.style.scale = 1

                document.querySelector("#cursor").style.scale = 1
                document.querySelector("#cursor").style.backgroundColor = "transparent"
                document.querySelector("#cursor").style.borderColor = "#e1e1e1"
            })
    
        })
    }

    page4()


    function page5move() {
        var con2 = document.querySelector(".page5-dev .con")
        var videopg5 = document.querySelector(".pro5-box1 video")
        var dev1 = document.querySelector(".page5-dev .dev-line")

        videopg5.addEventListener("mouseenter", function () {
            gsap.to(".con span", {
                y: "-3.5vw",
                color:"#F9970D"
            }),
            dev1.style.width = "14vw"
            videopg5.style.opacity= 0.8


        })
    
        videopg5.addEventListener("mouseleave", function () {
            gsap.to(".con span", {
                y: "0",
                color:"white"
            }),
            dev1.style.width = "0vw"
            videopg5.style.opacity= 1


        })
    }

    page5move();


    function page5move2() {
        var con5 = document.querySelector(".page5-dev .con2")
        var video2pg5 = document.querySelector(".pro5-box2 video")
        var dev2 = document.querySelector(".page5-dev .dev-line2")

        video2pg5.addEventListener("mouseenter", function () {
            gsap.to(".con2 span", {
                y: "-3.5vw",
                color:"#F9970D"
            }),
            dev2.style.width = "14vw"
            video2pg5.style.opacity= 0.8

        })
    
        video2pg5.addEventListener("mouseleave", function () {
            gsap.to(".con2 span", {
                y: "0",
                color:"white"
            }),
            dev2.style.width = "0vw"
            video2pg5.style.opacity= 1

        })
    }

    page5move2();


    
    function page5() {
        var videopg5 = document.querySelectorAll(".projects5 video")
        videopg5.forEach(function (e) {
    
            e.addEventListener("mouseenter", function () {
                document.querySelector("#cursor").innerHTML = "View"
                e.style.scale = 0.93

                document.querySelector("#cursor").style.scale = 2.8
                document.querySelector("#cursor").style.backgroundColor = "white"
                document.querySelector("#cursor").style.borderColor = "white"
                document.querySelector("#cursor").style.fontWeight = 500
                document.querySelector("#cursor").style.color = "black"


            })
            e.addEventListener("mouseleave", function () {
                document.querySelector("#cursor").innerHTML = ""
                e.style.scale = 1

                document.querySelector("#cursor").style.scale = 1
                document.querySelector("#cursor").style.backgroundColor = "transparent"
                document.querySelector("#cursor").style.borderColor = "#e1e1e1"
            })
    
        })
    }

    page5()


    function page6spotify() {
        var spotifypg6 = document.querySelectorAll("#pg6-video video")
        spotifypg6.forEach(function (e) {
    
            e.addEventListener("mouseenter", function () {
                document.querySelector("#cursor").innerHTML = "View"
                e.style.scale = 0.93

                document.querySelector("#cursor").style.scale = 2.8
                document.querySelector("#cursor").style.backgroundColor = "white"
                document.querySelector("#cursor").style.borderColor = "white"
                document.querySelector("#cursor").style.fontWeight = 500
                document.querySelector("#cursor").style.color = "black"


            })
            e.addEventListener("mouseleave", function () {
                document.querySelector("#cursor").innerHTML = ""
                e.style.scale = 1

                document.querySelector("#cursor").style.scale = 1
                document.querySelector("#cursor").style.backgroundColor = "transparent"
                document.querySelector("#cursor").style.borderColor = "#e1e1e1"
            })
    
        })
    }

    page6spotify()


    // gsap.to("#page7 h1", {
    //     scrollTrigger:{
    //         trigger:"#page7",
    //         scroller:"#main",
    //         pin:true,
    //         start:"top top",
    //         scrub:4,

    //     },
    //     transform:"translateX(100%)",
    // })


    var tl6 = gsap.timeline({
        scrollTrigger: {
          trigger: "#page7",
          scroller: "#main",
          // markers:true,
          start: "30% 50%",
          end: "30% 49%",
          scrub: 3
        }
      })
      tl6.to("#page7", {
        backgroundColor: "black",
      })
      tl6.to("#page7 h2", {
        color: "white"
      })

      
// var clutter = "";

// document.querySelector("#page8 h1").textContent.split("").forEach(function (dets) {
//   clutter = clutter + `<span>${dets}</span>`

//   document.querySelector("#page8 h1").innerHTML = clutter;
// })

// gsap.to("#page8 h1 span", {
//   scrollTrigger: {
//     trigger: "#page8 h1 span",
//     start: "top bottom",
//     end: "bottom top",
//     scroller: "#main",
//     scrub: .5,
//   },
//   stagger: .2,
//   color: "red"
// })




gsap.from("#elem8 h1", {
    // rotate: 5,
    y: 100,
    opacity: 0,
    duration:1,
    stagger: 0.25,
    scrollTrigger: {
      trigger: "#elem8 h1",
      scroller: "#main",
    //   markers: true,
      start: "top 70%",
      end: "top 69%",
      scrub: 3
    }
  })

  
  function page5move2() {
    var con5 = document.querySelector(".page5-dev .con2")
    var video2pg5 = document.querySelector(".pro5-box2 video")
    var dev2 = document.querySelector(".page5-dev .dev-line2")

    video2pg5.addEventListener("mouseenter", function () {
        gsap.to(".con2 span", {
            y: "-3.5vw",
            color:"#F9970D"
        }),
        dev2.style.width = "14vw"
        video2pg5.style.opacity= 0.8

    })

    video2pg5.addEventListener("mouseleave", function () {
        gsap.to(".con2 span", {
            y: "0",
            color:"white"
        }),
        dev2.style.width = "0vw"
        video2pg5.style.opacity= 1

    })
}





 
function page6() {
    var con6 = document.querySelector(".page6-dev .con6")
    var video6 = document.querySelector("#pg6-video video")
    var dev6 = document.querySelector(".page6-dev .dev-line6")

    video6.addEventListener("mouseenter", function () {
        gsap.to(".con6 span", {
            y: "-3.5vw",
            color:"#F9970D"
        }),
        dev6.style.width = "13.4vw"
        video6.style.opacity= 0.8

    })

    video6.addEventListener("mouseleave", function () {
        gsap.to(".con6 span", {
            y: "0",
            color:"white"
        }),
        dev6.style.width = "0vw"
        video6.style.opacity= 1

    })
}

page6();


var heading10 = document.querySelector("#page10 h1")
var page10w = document.querySelector(".page10-w")
var line10 = document.querySelector(".page10-line")

page10w.addEventListener("mouseenter", function() {
    gsap.to(".page10-w h1", {
        y:"-12vw",
        // color:"#F9970D"
        color:"#14cf93"

    }),
    line10.style.width = "83vw"
})

page10w.addEventListener("mouseleave", function(){
    gsap.to(".page10-w h1", {
        y:"0",
        color:"white"
    }),
    line10.style.width = "0vw"

})

