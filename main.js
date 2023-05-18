const contacts = require('./data.json');

// the following exercises require the data from data.json.
// you can look in that file to see the data structure you
// will be working with.

// For each exercise:
// 1. use array methods with the variable contacts to get the desired result,
// 2. store the result with a variable
// 3. appropriately log the results to the console



//You can put your solutions after each comment below:

//1. an array that contains all of the contacts that work at INSECTUS
//use filter array method to return array with contacts with contact.company === insectus
const insectusContacts = contacts.filter(contact => contact.company === 'INSECTUS')

//2. an array all of the contacts, with only the name property
//use map to return an array with only each contact's contact.name 
const contactNames = contacts.map(contact => contact.name)

//3. an array of all of the contacts over the age of 50
//use filter to return only contacts w/contact.age > 50
const contactsOver50 = contacts.filter(contact => contact.age > 50)

//4. the first ten contacts when alphabetically ordered by name
//use sort method to arrange contacts according to name ASCII values
//use slice to grab only first 10 from said list
const sortedContacts = contacts.sort((a, b) => a.name.localeCompare(b.name))
const firstTenContacts = sortedContacts.slice(0, 10)

//5. the oldest person's name
//use reduce method (which uses callback function) and ternary statement to return the oldest contact
//store oldest person's name in a variable
const oldestPerson = contacts.reduce((oldest, current) => (current.age > oldest.age ? current : oldest))
const oldestPersonName = oldestPerson.name

//6. the contact id with the name Isabella Burke
//use find method to find contact with the appropriate name
const isabellaId = contacts.find(contact => contact.name === 'Isabella Burke').id

//7. an array of all of the contacts, but with the name split up into a firstName
// and lastName properties
//map over contacts to make new array
//descructure and use split method to turn name into first and last name
//destructure copy of contact and remove name property
//return contact w/out name but add firstName and lastName
const contactsWithSplitNames = contacts.map(contact => {
    const [firstName, lastName] = contact.name.split(' ');
    const { name, ...rest } = contact; // Destructure and exclude the 'name' property
    return { ...rest, firstName, lastName };
});

//8. an array of all of the contacts where the friends property
// is an array with each contact that is their friend
//map over contacts. map over each contact's friends
//match friends to the contact with the correct id
//return the contact and their friends
const contactsWithFriendObjects = contacts.map(contact => {
    const friends = contact.friends.map(friendId => contacts.find(c => c.id === friendId))
    return { ...contact, friends }
})

//9. the average age of the contacts
//use reduce method with a sum accumulator to add each contact's age to running total
//divide total by length of contacts list
const totalAge = contacts.reduce((sum, contact) => sum + contact.age, 0)
const averageAge = totalAge / contacts.length

//10. the median age of the contacts
//map over contacts and sort by age
//find the estimated middle index
//check if the index is the precise middle or if there are two middle values
//(happens if list length is even number)
//if list length is even, average the two middle values to find the median
const sortedAges = contacts.map(contact => contact.age).sort((a, b) => a - b)
const middleIndex = Math.floor(sortedAges.length / 2)
const medianAge = sortedAges.length % 2 === 0 ? (sortedAges[middleIndex - 1] + sortedAges[middleIndex]) / 2 : sortedAges[middleIndex]

// Logging the results
// console.log('1. Contacts at INSECTUS:', insectusContacts);
// console.log('2. Contact names:', contactNames);
// console.log('3. Contacts over the age of 50:', contactsOver50);
// console.log('4. First ten contacts alphabetically:', firstTenContacts);
// console.log('5. Oldest person\'s name:', oldestPersonName);
// console.log('6. Contact ID of Isabella Burke:', isabellaId);
//console.log('7. Contacts with split names:', contactsWithSplitNames);
// console.log('8. Contacts with friend objects:', JSON.stringify(contactsWithFriendObjects, null, 2));
// console.log('9. Average age of contacts:', averageAge);
// console.log('10. Median age of contacts:', medianAge);