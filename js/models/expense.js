
App.Expense = DS.Model.extend({
  date: DS.attr('date'),
  description: DS.attr('string'),
  payer:  DS.attr('user'),
  amount: DS.attr('numeric'),
  users: DS.hasMany('user'),
  isSelected: DS.attr('boolean'),
});

App.Expense.FIXTURES = [
	{
		id: '1',
		date: '2014-02-15',
		description: 'bazar',
		payer: 'vikas',
		amount: '27',
		users: 'vg',
		isSelected: false
	}
];