const myName = async () => "Andy";

const showName = async () => {
  const name = await myName();
  console.log(name);
};

showName();
