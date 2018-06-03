print("Hello World")

print(8 * 3.57)

print(10*365)
print(20 + 3650)

fred = 20
bob = 20

jorge = fred * bob * 2

print(jorge)

fred = 400
print(fred)

found_coins = 20
magic_coins = 10
stolen_coins = 3

coins_at_end_of_year = found_coins + magic_coins * 365 - stolen_coins * 52
print(coins_at_end_of_year)

terminator = "Arnold Shcwarzenegger is The Terminator"
print(terminator)

robocop = '''boom
boom baby
shakalaka'''
print(robocop)

silly_string = '''He said, "Aren't can't shouldn't wouldn't."'''
print(silly_string)

mypoints = 23
mypointsin2ndgame = 10
message = "I scored %s points"
print(message % mypoints)
print(message % mypointsin2ndgame)

mypoints = 27
myrebounds = 13
message = "I scored %s points and %s rebounds"
print(message % (mypoints, myrebounds))

myfood = "Pizza"
flavor_of_dessert = "Vanilla"
mydessert = "Creme Brulee"
message = "I had %s for dinner and %s %s for dessert!"
print(message % (myfood, flavor_of_dessert, mydessert))


wizard_list = ['spider legs', 'toe of frog', 'eye of a dragon', 'bat wing', 'snake skin']
print(wizard_list)
print(wizard_list[0])
wizard_list[1] = 'heart of a lion'
print(wizard_list)
print(wizard_list[2:5])
# This prints from index 2 all the way to 4 because 5 is not an index but you include it to include the 4th index

numbers = [1, 2 , 3, 4, 5]
strings = ['Penny', 'Mitch', 'Iverson', 'Webber', 'Howard']
mylist = [numbers, strings]
print(mylist)
numbers.append(6)
strings.append('Lebron')
print(mylist)
# Append adds to the end of a list
del numbers[1]
del strings[1]
print(mylist)
# del deletes from list
print(numbers + strings)
# above adds both numbers and strings into one list
numbersandnames = (numbers + strings)
print(numbersandnames)

mynames = ['Jorge', 'Ivan']
print(mynames * 3)

# tuples is the same as a list but can never be changed
favoritenumbers = (7, 15, 23)
print(favoritenumbers[0])

# maps have keys and corresponding values
favorite_sports = {'Jorge' : 'Basketball and Soccer', 'Hector' : 'Baseball', 'Ryan' : 'Football', 'Adrian' : 'College Basketball'}
print(favorite_sports['Jorge'])
del (favorite_sports['Adrian'])
print(favorite_sports)
#to replace a value in a maps
favorite_sports['Jorge'] = 'Basketball'
print(favorite_sports)
# you can't join maps with plus + operators

# review
games = ['Basketball', 'Soccer', 'Halo']
foods = ['Pizza', 'Pasta', 'Tacos', 'Burgers']
favorites = (games + foods)
print(favorites)

buildings = 3
ninjas = 25
tunnels = 2
samurai = 40
battle = ninjas * buildings + tunnels * samurai
print(battle)

first_name = 'Jorge'
last_name = 'Rodriguez'
message = 'Hi there, %s %s!'
print(message % (first_name, last_name))
