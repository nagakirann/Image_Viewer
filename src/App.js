import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const playerData = [
      { id: 1, name: "Rohit Sharma", image: "https://static.javatpoint.com/biography/images/rohit-sharma.png" },
      { id: 2, name: "Virat Kohli", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX25AmrsJ76_KKqmE0H8WGlojbD6IJltBS_--M8OWSW7NaH1Ja3zj3hFFv80YughC8piI&usqp=CAU" },
      {id: 3,name:"Shubman Gill",image:"https://d13ir53smqqeyp.cloudfront.net/fc-player-images/11533.png"},
      {id: 4,name:"Surya Kumar Yadav",image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/331100/331163.png"},
      {id: 5,name:"Shikhar Dhawan",image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316500/316524.png"},
      {id: 6,name:"Rishabh Pant",image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/323000/323036.png"},
      {id: 7,name:"Sanju Samson",image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/322700/322701.png"},
      {id: 8,name:"KL Rahul",image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/resizedimageskirti/1125_compress.png"},
      {id: 9,name:"Shreyas Iyer",image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/323000/323035.png"},
      {id: 10,name:"Ishan Kishan",image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/331100/331165.png"},
      {id: 11,name:"Hardik Pandya",image:"https://d13ir53smqqeyp.cloudfront.net/fc-player-images/5983.png"},
      {id: 12,name:"Manish Pandya",image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/323000/323052.png"},
      {id: 13,name:"Krunal Pandya",image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/322600/322614.png"},
      {id: 14,name:"Jasprit Bumrah",image:"https://d13ir53smqqeyp.cloudfront.net/fc-player-images/1532.png"},
      {id: 15,name:"Bhuvneshwar Kumar",image:"https://cricket.upcomingwiki.com/public/images/gallery/91651.png"},
      {id: 16,name:"Mohammad Shami",image:"https://cricket.upcomingwiki.com/public/images/gallery/78965.png"},
      {id: 17,name:"Ravichandran Ashwin",image:"https://miro.medium.com/v2/resize:fit:1170/1*ynQHZ0XegjnmPBmr6Ye3pw@2x.jpeg"},
      {id: 18,name:"Axar Patel",image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/331100/331164.png"},
      {id: 19,name:"Rinku Singh",image:"https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2023/12/Screenshot-2023-12-13-at-3.06.03-PM.png?size=*:900"},
      {id: 20,name:"Kuldeep Yadav",image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319900/319943.png"},
      {id: 21,name:"Ajinkya Rahane",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7vjdIvU7W8VpLmCc9fXaijDqpi8fHF9Xo9fMfRO9LVeBueXOZccbIbTOQrgPcbUsNClE&usqp=CAU"},
      {id: 22,name:"Suresh Raina",image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316500/316523.png"},
      {id: 23,name:"Ravindra Jadeja",image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316600/316600.png"},
      {id: 24,name:"Mohit Sharma",image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316700/316702.png"},
      {id: 25,name:"Mohammed SIraj",image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/322600/322611.png"},
      
    ];

    setPlayers(playerData);
  }, []);

  return (
    <div className="container">
      <div className="heading">
          <h1>Indian Team Players</h1>
      </div>

      <div className="image-grid">
        {players.map(player => (
          <div key={player.id} className="player-item">
            <img src={player.image} alt={player.name} />
            <p>{player.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
