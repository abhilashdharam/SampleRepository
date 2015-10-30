function(){
var app=angular.module('store',[]);
app.controller('storeController',function(){
	this.product=gem;
});
var gems = [{
	name: 'Ruby gem',
	price: 2.95,
	description: '...',
},
{
	name: "Pentagonal Gem",
	price: 5.95,
	description: "...",
	canPurchase: false,
}];