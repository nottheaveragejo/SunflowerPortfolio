import React, { Component } from 'react';

class Leaves extends Component {
  constructor() {
    super();
    this.state = {
      rightTechnologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'C#',
        'Unity',
        'Vuforia',
        'PHP',
        'Gatsby',
        'React',
        'Redux',
        'Node',
        'Express',
        'EJS',
        'Pug/Jade',
        'Sequelize',
        'MongoDB',
        'PSQL',
        'MySQL',
        'Heroku',
        'Now',
        'Netlify',
        'AGILE'
      ],
    };
  }

  render() {
    return (
      <div>
        <h1 className="techName">Technologies I know</h1>
        <div className="leavesContainer">
        {
          this.state.rightTechnologies.map((leaf, ind )=> {
            if(ind % 2 == 0){
              return(
                <div className="rsingleLeafStem">
                <div className='rightLeaf' key={ind}> {leaf}</div>
                </div>
              )
              }
              else{
               return(
                <div className="lsingleLeafStem">
               <div className='leftLeaf' key={ind}> {leaf}</div>
               </div>
               )
              }

          })
        }
        </div>
      </div>
    );
  }
}
export default Leaves
