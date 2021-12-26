// create graphql root resolver
const rootResolver = {
  hello: () => "Hello from graphql.",
  getRecipe: () => {
    return {
      name: "Mango Shake",
      category: "juice",
      description: "How to create mango shake at home.",
      instructions: "Mix mango pulp with milk in a blender.",
      createdDate: "12/12/2022",
      likes: 100000,
      username: "mango_man",
    }
  },
  addRecipe: (body) => {
    const {
      name,
      category,
      description,
      instructions,
      likes,
      username
    } = body

    return {
      name,
      category,
      description,
      instructions,
      likes,
      username
    };
  }
};


// export graphql root resolver
module.exports = rootResolver;