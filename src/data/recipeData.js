const recipes = [
  {
    title: "Noodle Chicken Soup",
    difficulty: "Intermediate",
    time: "25 ",
    kcal: "95 ",
    type: "Meat",
    rating: 3,
    image:
      "https://img.freepik.com/free-photo/high-angle-tasty-composition-noodles-table_23-2148803860.jpg?t=st=1732553866~exp=1732557466~hmac=a697964d114014a8406daed69c8af91225c4a677547c88c2e4c706da005a6bf2&w=360",
    youtubeLink: "https://www.youtube.com/watch?v=dummy1",
    instructions:
      "Cook the noodles. Add chicken broth. Simmer with spices and serve hot.",
  },
  {
    title: "Salad with Raw Tuna",
    difficulty: "Advanced",
    time: "25 ",
    kcal: "95 ",
    type: "Fish",
    rating: 5,
    image:
      "https://img.freepik.com/free-photo/tuna-salad-with-sliced-eggs_140725-3969.jpg?t=st=1732553949~exp=1732557549~hmac=a1718458ae9ba7932bed36cf13c5774fbbc3dd97508b2209cb0cc05c2e27472a&w=740",
    youtubeLink: "https://www.youtube.com/watch?v=dummy2",
    instructions:
      "Prepare fresh tuna slices. Mix with greens and drizzle olive oil. Garnish with eggs.",
  },
  {
    title: "Pasta with Spinach",
    difficulty: "Beginner",
    time: "25 ",
    kcal: "95 ",
    type: "Veg",
    rating: 4,
    image:
      "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19737.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=dummy3",
    instructions:
      "Cook pasta until al dente. Sauté spinach with garlic and mix with pasta.",
  },
  {
    special: true, // Mark the fourth card as "special"
    title: "Mentorship Program",
    description:
      "A mentor will track your progress and give you tips for faster culinary growth",
  },
  {
    title: "Fruit Smoothie Bowl",
    difficulty: "Beginner",
    time: "15 ",
    kcal: "120 ",
    type: "Veg",
    rating: 4.5,
    image:
      "https://img.freepik.com/free-photo/smoothie-bowl-with-fruits-nuts_2829-5418.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=dummy4",
    instructions:
      "Blend fruits with yogurt. Pour into a bowl and top with nuts and seeds.",
  },
  {
    title: "Grilled Salmon",
    difficulty: "Advanced",
    time: "30 ",
    kcal: "220 ",
    type: "Fish",
    rating: 4.8,
    image:
      "https://img.freepik.com/free-photo/beef-steak_74190-715.jpg?t=st=1732630738~exp=1732634338~hmac=b4e0d17c140a1bc0633a70ef5efc24677ba58a2fbf382e88771e05d34f769085&w=360",
    youtubeLink: "https://www.youtube.com/watch?v=dummy5",
    instructions:
      "Grill the salmon and squeeze lemon juice on top. Garnish with herbs.",
  },
  {
    title: "Vegetarian Burrito",
    difficulty: "Intermediate",
    time: "20 ",
    kcal: "250 ",
    type: "Veg",
    rating: 4.2,
    image:
      "https://img.freepik.com/free-photo/vegetarian-burrito-wrap-with-beans-rice_1150-22101.jpg?t=st=1732553866~exp=1732557466~hmac=a697964d114014a8406daed69c8af91225c4a677547c88c2e4c706da005a6bf2&w=360",
    youtubeLink: "https://www.youtube.com/watch?v=dummy6",
    instructions:
      "Warm the tortilla. Add rice, beans, and vegetables. Wrap and serve.",
  },
  {
    title: "Beef Stir-Fry",
    difficulty: "Intermediate",
    time: "25 ",
    kcal: "300 ",
    type: "Meat",
    rating: 4.6,
    image:
      "https://img.freepik.com/premium-photo/beef-broccoli-stir-fry-small-wok_1105327-7093.jpg?w=740",
    youtubeLink: "https://www.youtube.com/watch?v=dummy7",
    instructions:
      "Stir-fry beef with garlic and vegetables. Add soy sauce and serve.",
  },
  {
    title: "Avocado Toast",
    difficulty: "Beginner",
    time: "10 ",
    kcal: "150 ",
    type: "Veg",
    rating: 5,
    image:
      "https://img.freepik.com/free-photo/avocado-toast-on-wooden-table_1150-22105.jpg?t=st=1732553866~exp=1732557466~hmac=a697964d114014a8406daed69c8af91225c4a677547c88c2e4c706da005a6bf2&w=360",
    youtubeLink: "https://www.youtube.com/watch?v=dummy8",
    instructions:
      "Toast the bread and spread mashed avocado on top. Sprinkle with salt and pepper.",
  },
  {
    title: "Chicken Caesar Salad",
    difficulty: "Intermediate",
    time: "20 ",
    kcal: "220 ",
    type: "Meat",
    rating: 4.7,
    image:
      "https://img.freepik.com/free-photo/chicken-caesar-salad-bowl_1150-20971.jpg?t=st=1732553866~exp=1732557466~hmac=a697964d114014a8406daed69c8af91225c4a677547c88c2e4c706da005a6bf2&w=360",
    youtubeLink: "https://www.youtube.com/watch?v=dummy9",
    instructions:
      "Grill the chicken. Toss with romaine lettuce, croutons, and Caesar dressing.",
  },
  {
    title: "Spaghetti Bolognese",
    difficulty: "Intermediate",
    time: "40 ",
    kcal: "500 ",
    type: "Meat",
    rating: 4.9,
    image:
      "https://img.freepik.com/free-photo/spaghetti-with-minced-meat-tomato-cubes-cheese-mint_140725-6808.jpg?ga=GA1.1.783543716.1699971383&semt=ais_hybrid",
    youtubeLink: "https://www.youtube.com/watch?v=dummy10",
    instructions:
      "Cook pasta, prepare bolognese sauce with ground beef, tomatoes, and seasonings.",
  },
  {
    title: "Vegetable Stir Fry",
    difficulty: "Beginner",
    time: "15 ",
    kcal: "180 ",
    type: "Veg",
    rating: 4.4,
    image:
      "https://img.freepik.com/free-photo/vegetable-stir-fry-bowl-with-rice_1150-21355.jpg?t=st=1732553866~exp=1732557466~hmac=a697964d114014a8406daed69c8af91225c4a677547c88c2e4c706da005a6bf2&w=360",
    youtubeLink: "https://www.youtube.com/watch?v=dummy11",
    instructions:
      "Stir-fry vegetables like bell peppers, carrots, and broccoli with soy sauce.",
  },
];

export default recipes;
