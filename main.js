let url = "https://2d195695-12b1-42a7-93c3-724afe4273b7.mock.pstmn.io/user/all";

fetch(url)
  .then((response) => response.json())
  .then((response) => {
    response.forEach((element) => {
      console.log(`Hello, ${element.first_name}! Welcome to Devtoolkit #2`);
    });
  });

