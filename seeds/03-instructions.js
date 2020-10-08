
exports.seed = function(knex) {
  const steps =[
    {
      step_number: 1,
    instructions: 'Add all ingredients to food processor',
  recipie_id: 3
},{
      step_number: 2,
      instructions: 'blend until smooth',
      recipie_id: 3
    },{
      step_number: 1,
    instructions: 'cook rice according to instructions on package, let cool for at least 30 mins',
  recipie_id: 2
    },{
      step_number: 2,
    instructions: 'Place rice in bottom of your favorite bowl',
  recipie_id: 2
    },{
      step_number: 3,
    instructions: 'Arrange all other ingredients on top of rice in whatever way is aesthetically pleasing to you',
  recipie_id: 2
},{
  step_number: 1,
  instructions: 'Add all ingredients except water to food processor, pulse several time suntil mixture becomes coarse crumbs, if you do not have a food processor you can mix by hand with a fork',
recipie_id: 1
},{
  step_number: 2,
    instructions: 'Add hot water and pulse or mix until a sticky dough forms',
  recipie_id: 1
},{
  step_number: 3,
    instructions: 'knead dough on a surface dusted with flour',
  recipie_id: 1
},{
  step_number: 4,
    instructions: 'Divide into evenly shaped balls (should yield around 15 balls), let dough rest for 15 minutes',
  recipie_id: 1
},{
  step_number: 5,
    instructions: 'Roll out each ball using a rolling pin until it is about the same thickness of a dime',
  recipie_id: 1
},{
  step_number: 6,
    instructions: 'In a skillet over medium-high heat cook each tortilla for about 20 seconds on each side',
  recipie_id: 1
}
  ]
      return knex('instructions').insert(steps);

};
