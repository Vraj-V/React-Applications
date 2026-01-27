import React from 'react'
function Component(){

      let name = {
    firstName: "Vraj",
    lastName: "Valand",
    age: 22,
  }
    return (
        <>
        <div className='details'>
        <h1>{name.firstName}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tenetur consectetur molestiae sequi, a voluptates autem nesciunt eaque quibusdam ab beatae dolores asperiores quis sit ipsam repellendus iste vero aliquid.</p>
        </div>

        
        <div className='details'>
        <h1>{name.lastName}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tenetur consectetur molestiae sequi, a voluptates autem nesciunt eaque quibusdam ab beatae dolores asperiores quis sit ipsam repellendus iste vero aliquid.</p>
        </div>

        
        </>
    );
}

export default Component;