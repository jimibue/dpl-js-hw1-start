const { user1, user2, user3, user4, user5, user6 } = require("./data");

// add friends
const addFriends = () => {
  user1.friends.push(user2, user3, user4);
  user2.friends.push(user1, user3);
  user3.friends.push(user1, user2);
  user4.friends.push(user1);
  console.log(user1.friends.length);
};

// userObj: {
//     id: number;
//     dateJoined: Date;
//     name: string;
//     friends: any[];
//     posts: {
//         text: string;
//         likes: number;
//         comments: string[];
//     }[];
// }

//write a function that takes a user and returns the an object with name, num_of_posts
function userInfo(userParam) {
  return { name: userParam.name, postCount: userParam.posts.length };
}

// expect users []:user
function getNames(users) {
  //map: go through each thing in the array and performs a fucntion on that thing
  // what that function is pushed  into a new array, which is returned once
  // the map call is done
  if (users.length === 0) {
    return "no users";
  }

  let infos = users.map((user) => {
    return user.name;
  });

  return infos;
  console.log("dead code you will never see this ever");
}
// bob is an array users
const manyPosts = (users) => {
  // if the function you give filter return true it pushed it to the new array
  return users.filter((user) => {
    return user.posts.length >= 2; //true/false
  });
};

const firstUserWithManyPosts = (users) => {
  // find return the first thing that return true
  return users.find((user) => {
    return user.posts.length >= 2; //true/false
  });
};


  userInfo,
  manyPosts,
  getNames,
  firstUserWithManyPosts,
};
