function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth * 0.7;
canvas.height = window.innerHeight ;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth * 0.7;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
img002.png
img003.png
img004.png
img005.png
img006.png
img007.png
img008.png
img009.png
img010.png
img011.png
img012.png
img013.png
img014.png
img015.png
img016.png
img017.png
img018.png
img019.png
img020.png
img021.png
img022.png
img023.png
img024.png
img025.png
img026.png
img027.png
img028.png
img029.png
img030.png
img031.png
img032.png
img033.png
img034.png
img035.png
img036.png
img037.png
img038.png
img039.png
img040.png
img041.png
img042.png
img043.png
img044.png
img045.png
img046.png
img047.png
img048.png
img049.png
img050.png
img051.png
img052.png
img053.png
img054.png
img055.png
img056.png
img057.png
img058.png
img059.png
img060.png
img061.png
img062.png
img063.png
img064.png
img065.png
img066.png
img067.png
img068.png
img069.png
img070.png
img071.png
img072.png
img073.png
img074.png
img075.png
img076.png
img077.png
img078.png
img079.png
img080.png
img081.png
img082.png
img083.png
img084.png
img085.png
img086.png
img087.png
img088.png
img089.png
img090.png
img091.png
img092.png
img093.png
img094.png
img095.png
img096.png
img097.png
img098.png
img099.png
img100.png
img101.png
img102.png
img103.png
img104.png
img105.png
img106.png
img107.png
img108.png
img109.png
img110.png
img111.png
img112.png
img113.png
img114.png
img115.png
img116.png
img117.png
img118.png
img119.png
img120.png
img121.png
img122.png
img123.png
img124.png
img125.png
img126.png
img127.png
img128.png
img129.png
img130.png
img131.png
img132.png
img133.png
img134.png
img135.png
img136.png
img137.png
img138.png
img139.png
img140.png
img141.png
img142.png
img143.png
img144.png
img145.png
img146.png
img147.png
img148.png
img149.png
img150.png
img151.png
img152.png
img153.png
img154.png
img155.png
img156.png
img157.png
img158.png
img159.png
img160.png
img161.png
img162.png
img163.png
img164.png
img165.png
img166.png
img167.png
img168.png
img169.png
img170.png
img171.png
img172.png
img173.png
img174.png
img175.png
img176.png
img177.png
img178.png
img179.png
img180.png
img181.png
img182.png
img183.png
img184.png
img185.png
img186.png
img187.png
img188.png
img189.png
img190.png
img191.png
img192.png
img193.png
img194.png
img195.png
img196.png
img197.png
img198.png
img199.png
img200.png
img201.png
img202.png
img203.png
img204.png
img205.png
img206.png
img207.png
img208.png
img209.png
img210.png
img211.png
img212.png
img213.png
img214.png
img215.png
img216.png
img217.png
img218.png
img219.png
img220.png
img221.png
img222.png
img223.png
img224.png
img225.png
img226.png
img227.png
img228.png
img229.png
img230.png
img231.png
img232.png
img233.png
img234.png
img235.png
img236.png
img237.png
img238.png
img239.png
img240.png
img241.png
img242.png
img243.png
img244.png
img245.png
img246.png
img247.png
img248.png
img249.png
img250.png
img251.png
img252.png
img253.png
img254.png
img255.png
img256.png
img257.png
img258.png
img259.png
img260.png
img261.png
img262.png
img263.png
img264.png
 `;
  return data.split("\n")[index];
}

const frameCount = 264;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.scale(-1, 1);
  
  // Adjust the drawing position after flipping
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;

  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    -canvas.width + centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
  
  // Restore the context to its original state
  ctx.restore();
}

ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})

const badges = document.querySelectorAll('.badge');
const tooltip = document.getElementById('tooltip');

const skillDetails = {
    "C++/C": "Proficient in C++, java, Python, PL/SQL with experience in developing efficient solutions.",
    "Java": "Crafted websites with a focus on developing an intuitive, seamless web experiences.",
    "Python": "Experience with various AI/ML tools for building intelligent systems along with understanding and processing human language",
    "JavaScript": "Communication | Adaptability and Flexibility | Leadership with Teamwork | Critical Thinking",
    "MySQL": "Proficient in leveraging technologies like Power BI, AI/ML tools, and Azure DevOps to drive data-driven insights, streamline operations, and enhance project efficiency. ",
};
badges.forEach(badge => {
  badge.addEventListener('mouseover', (e) => {
      const skill = badge.dataset.skill;
      tooltip.textContent = skillDetails[skill];
      tooltip.style.display = 'block';
      tooltip.style.left = `${e.pageX + 10}px`;
      tooltip.style.top = `${e.pageY + 10}px`;
      tooltip.style.opacity = 1;
  });

  badge.addEventListener('mouseout', () => {
      tooltip.style.display = 'none';
      tooltip.style.opacity = 0;
  });
});

window.addEventListener('scroll', function() {
  const footer = document.querySelector('.footer');
  const footerHeight = footer.offsetHeight;
  const scrollPosition = window.scrollY + window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollPosition >= documentHeight - footerHeight) {
      footer.style.opacity = '1';
      footer.querySelector('h2').style.animationPlayState = 'running';
  }
});

function toggleExperience(expId) {
  // Get all experience detail elements
  var allExpDetails = document.getElementsByClassName('exp-details');
  for (var i = 0; i < allExpDetails.length; i++) {
    allExpDetails[i].style.display = 'none';
  }

  var expDetails = document.getElementById(expId);
  if (expDetails.style.display === "block") {
    expDetails.style.display = "none";
  } else {
    expDetails.style.display = "block";
  }
}
