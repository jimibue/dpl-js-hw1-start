const { user1, user2, user3, user4, user5, user6 } = require("../src/data");

const {
  userInfo,
  getNames,
  manyPosts,
  firstUserWithManyPosts,
} = require("../src/dataDemo");
// let user1 = {
//     id: 1,
//     dateJoined: new Date(2010, 3, 21),
//     name: "Forged Fire",
//     friends: [],
//     posts: [
//       {
//         text: "it will Keal",
//         likes: 321,
//         comments: ["Sweet", "Yeah"],
//       },
//       {
//         text: "it will Cut",
//         likes: 121,
//         comments: ["Noice", "COol"],
//       },
//     ],
//   };

it("test user1", () => {
  expect(user1.id).toBe(1);
  expect(user1["id"]).toBe(1);
  expect(user1.name).toBe("Forged Fire");
  // length of posts
  expect(user1.posts.length).toBe(2);
  expect(user1.posts[0].text).toBe("it will Keal");
  expect(user1.posts[1].likes).toBe(121);
  expect(user1.posts[1].comments).toEqual(["Noice", "COol"]);
  expect(user1.posts[1].comments[0]).toEqual("Noice");
});

it("tests userInfo", () => {
  let u1Info = userInfo(user1);
  expect(u1Info).toEqual({ name: "Forged Fire", postCount: 2 });
});

it("gets users names", () => {
  let users = [user1, user2, user3];
  let cloneUsers = [...users];
  // expect(getNames(users)).toEqual(['Forged Fire', 'Willis', 'Jimbo'])
  // don't mutate
  expect(getNames(users)).toEqual([user1.name, user2.name, user3.name]);
  expect(getNames([])).toEqual("no users");
  expect(users).toEqual(cloneUsers); // fail anyway
});

it("filter user with two or more posts", () => {
  // filter return a array
  let usersYo = [user1, user2, user3, user5, user4, user6];
  let usersWith2postYo = manyPosts(usersYo);
  expect(usersWith2postYo.length).toBe(4);

  // if filer doesn't match it returns []
  expect(manyPosts([])).toEqual([]);
});

it("finds user with two or more posts", () => {
  // find what ever type that object
  let usersYo = [user1, user2, user3, user5, user4, user6];
  let userWith2postYo = firstUserWithManyPosts(usersYo);
  expect(userWith2postYo.name).toBe("Forged Fire");

  // if find doesn't match it returns undefined
  expect(firstUserWithManyPosts([])).toBe(undefined);
});

it('test basic sort',()=>{

    let strings = ['b','d','a','c']    
    let names = ['chris', 'amy','carol']
    expect(strings.sort()).toEqual(['a','b','c','d'])
    expect(names.sort()).toEqual(['amy','carol','chris'])

    let nums = [4,3,2,1,6]
    expect(nums.sort()).toEqual([1,2,3,4,6])
   
})

it('test advance sort',()=>{
    let nums = [4,3,2,1,6]
    // sort mutates array
    nums.sort((a,b)=> {
        return a - b
    })
    expect(nums).toEqual([1,2,3,4,6])
    nums.sort((a,b)=> {
        return b - a
    })
    expect(nums).toEqual([6,4,3,2,1])
})

it("sorts users by id", () => {
    // find what ever type that object
    let usersYo = [user1, user2, user3, user5, user4, user6 ];
    usersYo.sort((a,b)=>{
       if(a.name > b.name){
           return 1
       }
       if(a.name < b.name){
           return -1
       }
       return 0
    })

    expect(usersYo[0].name).toBe('Doplhin')
    expect(usersYo[5].name).toBe('Willis')
  });
