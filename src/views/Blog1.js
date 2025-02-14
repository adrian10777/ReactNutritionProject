// import React from 'react';
// import '../CSSFiles/header.css'
// import '../CSSFiles/footer.css'
// import '../CSSFiles/socialmedia.css'
// import '../CSSFiles/blogposts.css'

// const Blog1 = props => {

//     return (

//         <div>

//             <div className="header">
//                 <strong><h2>What Are We Designed To Eat?</h2></strong>
//             </div>

//             <div className="row">
//                 <div className="leftcolumn">
//                     <div className="card">
//                         <h2>TITLE HEADING</h2>
//                         <h5>October 1, 2021 / 2 minutes of reading</h5>
//                         <div className="fakeimg" style={{height:"200px"}}>Image</div>
//                         <p>Humans are not biologically made for the consumption of meat. Our teeth are flat and not sharp enough to tear through flesh and bone yet alone through a paper envelope. Our lengthy digestive tract is that of an herbivore. Our digestion begins in the mouth as the salivary glands secrete an enzyme designed to break down complex carbohydrates called amylase. Carnivores secrete an enzyme designed to break down uric acid in meat. No wonder there is so much disease because we are eating what is not designed for us.</p>
//                         <p>The length of the digestive tract is a strong indicator of what type of food is normally eaten, and our digestive tract is 12-14 times our shoulder-to-hip trunk length, the same as fruit-eating animals.</p>
//                         <p>Herbivores (cattle) have a gut-length 20 times their body length, since it takes longer to digest the fiber content in their diet. The shortest tracts are found in meat-eaters.</p>
//                         <p>The reality is we all have a manual. Every car has a designer, and the designer designs the car to run on a specific fuel to stay in optimal condition. What happens if you put the wrong fuel? Or what happens if you put water instead? The car is not going to function properly. For us to know our manual we must know who designed us. The bible says in the beginning God created us to eat this diet “And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth, and every tree, in the which is the fruit of a tree yielding seed; to you it shall be for meat.” (Genesis 1:29). This diet includes grains, nuts, seeds, fruits, and legumes. Our other alternative is that we were created by a primordial soup and have no purpose, no true manual, and that we can eat unclean meats filled with toxins and parasites and meat with no consequence because there is no right and no wrongs. You choose, but as for me and my house we would eat our fruits and vegetables!</p>
//                         <strong><h5>Things To Do?</h5></strong>
//                         <p>Eat what we were naturally intended to eat. Fruits, grains, nuts, seeds, legumes, and vegetables.</p>
//                         <strong><h5>Conclusion:</h5></strong>
//                         <p>Need help implementing our natural diet to your life? Make sure to check out my new program “How To Thrive On A Vegan Diet”!</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )

// }

// export default Blog1;

import React from 'react';
import '../CSSFiles/header.css';
import '../CSSFiles/footer.css';
import '../CSSFiles/socialmedia.css';
import '../CSSFiles/blogTemplate.css';
import eating from '../Static/images/girl-eating-watermelon.jpg'

const Blog1 = props => {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <h2 className="blog-title">What Are We Designed To Eat?</h2>
      </header>

      <div className="blog-content">
        <article className="blog-post">
          <p className="post-meta">February 13, 2025 / 2 minutes of reading</p>
          <div className="post-image">
            <img id="watermelon" src={eating} alt="blog-img" />
          </div>
          <p className="post-content">
            Humans are not biologically made for the consumption of meat. Our teeth are flat and not sharp enough to tear through flesh and bone, let alone through a paper envelope...
          </p>
          <p className="post-content">
            The length of the digestive tract is a strong indicator of what type of food is normally eaten, and our digestive tract is 12-14 times our shoulder-to-hip trunk length, the same as fruit-eating animals...
          </p>
          <p className="post-content">
            Herbivores (cattle) have a gut-length 20 times their body length, since it takes longer to digest the fiber content in their diet...
          </p>
          <p className="post-content">
            The reality is we all have a manual. Every car has a designer, and the designer designs the car to run on a specific fuel to stay in optimal condition...
          </p>
          <h2 id='blue'>Things To Do?</h2>
          <p>Eat what we were naturally intended to eat. Fruits, grains, nuts, seeds, legumes, and vegetables.</p>
          <h2 id='blue'>Conclusion:</h2>
          <p>Need help implementing our natural diet to your life? Make sure to check out my new program “How To Thrive On A Vegan Diet”!</p>
          <br />
          <br />
          <p>&copy; {new Date().getFullYear()}  Your Blog | All rights reserved.</p>
        </article>
      </div>
    </div>
  );
}

export default Blog1;
