# Program that reads in JSON format Food_journal
# Writes a dictionary of foods and their calories
# Configures the Food_journal by adding calorie values to entries without them

import json

# food_journal is an array containing the food journal entries
# food_dictionary is a dictionary of foods and their calories
food_journal = []
food_cal = {}


# Reads in the Json files and turn them into arrays/dictionaries to be used
def initialize_data():
    global food_journal
    global food_cal
    food_journal = read_json('food_journal')
    food_cal = read_json('food_cal')


# Function to add the food eaten on the specific date, specific time and calories
def add_food(food, date, time, calorie):
    if date not in food_journal:
        food_journal[date] = []
    else:
        temp_food_dict = {
            'name': food,
            'time': time,
            'calories': calorie}
        food_journal[date].append(temp_food_dict)


# Function to add any food from the food_journal to a dictionary of food and their calories
def add_food_cal(food, calorie):
    if food not in food_cal:
        food_cal[food] = calorie


# This saves the created dictionary in a json text file
def write_json(name, array):
    with open(name + '.txt', 'w') as outfile:
        json.dump(array, outfile)


# This reads the created dictionary from a json text file (Currently prints in console)
def read_json(name):
    with open(name + '.txt') as json_file:
        data = json.load(json_file)
        return data


# Loops through all the food_journal entries and extract the names and calories into food_cal
def fill_food_cal():
    for array in food_journal:
        for entry in food_journal[array]:
            food = entry['name']
            calorie = entry['calories']
            add_food_cal(food, calorie)
    write_json('food_cal', food_cal)


# Loops through all food_journal entries and sees whether the calories in them
# are 0, if so then it searches in food_cal for the right calories and inserts it back
def complete_food_journal():
    for array in food_journal:
        for entry in food_journal[array]:
            food = entry['name']
            calorie = entry['calories']
            if calorie == 0:
                # print(food_journal[calorie])
                # print(food_cal[food])
                entry['calories'] = food_cal[food]
    write_json('food_journal', food_journal)


if __name__ == '__main__':
    initialize_data()
    # fill_food_cal()
    # complete_food_journal()
