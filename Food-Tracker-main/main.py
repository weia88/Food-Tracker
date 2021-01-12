# In progress - Currently only adds and write new data
# Doesn't read old data yet, still need to do that somehow

import json

food_journal = []
food_dictionary_cal = {}


# Function to add the food eaten on the specific date, specific time and calories
def add_food(food, date, time, calorie):
    food_journal.append({
        'name': food,
        'date': date,
        'time': time,
        'calories': calorie
    })


# Function to add any food from the food_journal to a dictionary of food and their calories
def add_food_cal(food, calorie):
    if food not in food_dictionary_cal:
        food_dictionary_cal[food] = calorie


# This saves the created dictionary in a json text file
def write_json(name, array):
    with open(name + '.txt', 'w') as outfile:
        json.dump(array, outfile)


# This reads the created dictionary from a json text file (Currently prints in console)
def read_json(name):
    with open(name + '.txt') as json_file:
        data = json.load(json_file)
        if name == 'food_journal':
            for key in data:
                print(key['name'])
                print(key['date'])
                print(key['time'])
                print(key['calories'])
        else:
            for key in data:
                print(key)
                print(food_dictionary_cal[key])


if __name__ == '__main__':
    add_food('Chicken', '12/1/2021', '12:00am', 50)
    add_food('Pho', '12/1/2021', '11:00am', 155)
    add_food('Fish', '12/1/2021', '11:00am', 0)
    #add_food_cal('Chicken', '50')
    #add_food_cal('Fish', '20')
    #print(food_dictionary_cal)
    # print(food_journal)
    write_json('food_journal', food_journal)
    write_json('food_dictionary_cal', food_dictionary_cal)
    #read_json('food_journal')
    read_json('food_dictionary_cal')
