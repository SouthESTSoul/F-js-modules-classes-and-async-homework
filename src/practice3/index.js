// export const getPoetry = () => {
//  return fetch("https://v1.jinrishici.com/all.json")
// 	  .then((response) => {
// 		return response.json();
// 	  })
// 	  .then((json) => {
// 		const {origin, author, content} = json;
// 		return [origin, author, content];
// 	  })
// 	  .catch(error => {
// 		console.log(error);
// 	  });
// };

export const getPoetry  =  async () =>{
  const response = await fetch("https://v1.jinrishici.com/all.json");

  const { origin, author, content } = await response.json();
  return [origin, author, content];
};
