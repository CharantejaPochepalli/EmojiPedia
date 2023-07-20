import React from "react";
import Entry from "./entry";
import emojipedia from "./emojipedia";

// function App() {
//   return (
//    1. <div>
//       <h1>
//         <span>emojipedia</span>
//       </h1>
//       <dl className="dictionary">
//     <div class="term"> <Entry
//   //         emoji=" 💪"
//   //         name="Tense Biceps"
//   //         description=" “You can do that!” or “I feel strong!” Arm with tense biceps. 
//   //         Also used in connection
//   //          with doing sports, e.g. at the gym."

//   //       /></div>
//         // <div class="term"><Entry
//         //   emoji=" 🙏"
//         //   name="Person with folded hands"
//         //   description="Two hands pressed together. Is currently very introverted, 
//         //   saying a prayer, or hoping for enlightenment.
//         //    Is also used as a “high five” or to say thank you."

//          /> </div>
//         // <div class="term"><Entry
//         //   emoji=" 🤣"
//         //   name="Rolling On The Floor, Laughing"
//         //   description="This is funny! A smiley face, rolling on the floor, laughing. 
//         //   The face is laughing boundlessly. 
//         //   The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."

//         /></div> 
//       </dl>
//     </div>
    //2. <div>
    //   <h1>
    //     <span>emojipedia</span>
    //   </h1>
    //   <dl className="dictionary">
    //      <div class="term"> <Entry
    //     //   emoji=" 💪"
    //     //   name="Tense Biceps"
    //     //   description=" “You can do that!” or “I feel strong!” Arm with tense biceps. 
    //     //   Also used in connection
    //     //    with doing sports, e.g. at the gym."

    //     // /></div>
    //     // <div class="term"><Entry
    //     //   emoji=" 🙏"
    //     //   name="Person with folded hands"
    //     //   description="Two hands pressed together. Is currently very introverted, 
    //     //   saying a prayer, or hoping for enlightenment.
    //     //    Is also used as a “high five” or to say thank you."

    //     // /> </div>
    //     // <div class="term"><Entry
    //     //   emoji=" 🤣"
    //     //   name="Rolling On The Floor, Laughing"
    //     //   description="This is funny! A smiley face, rolling on the floor, laughing. 
    //     //   The face is laughing boundlessly. 
    //     //   The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."

    //     /></div>
        
    //   </dl>
    // </div>
    
  // );
// }
// Method-3 Mapping method best method i.e dynamically adding using props:
function createEntry(emojiTerm)  //here emojiTerm is props name we are allocating 
{
  return(<Entry
  key={emojiTerm.id}
  emoji={emojiTerm.emoji}
  name={emojiTerm.name}
  description={emojiTerm.meaning}
  />)
}

function App(){
  return(
    <div>
    <h1>
    <span>Emojipedia</span>
    </h1>
    <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  )
}



export default App;
//The <dl> tag defines a description list. The <dl> tag is used in conjunction with <dt> (defines terms/names) and <dd> (describes each term/name).
/* 
The <dt> HTML element specifies a term in a description or definition list, and as such must be used inside a <dl> element. It is usually followed by a <dd> element; however, multiple <dt> elements in a row indicate several terms that are all defined by the immediate next <dd> element.
*/
/*The subsequent <dd> (Description Details) element provides the definition or other related text associated with the term specified using <dt>.*/


