import csv
import json

with open('poopData.csv') as file:
    poopReader = csv.reader(file)
    for row in poopReader:
        poopDict = dict()
        poopDict['name'] = row[0]
        poopDict['category'] = row[1]
        poopDict['gender'] = row[2]
        poopDict['cleanliness'] = row[3]
        poopDict['ambiance'] = row[4]
        poopDict['availability'] = row[5]
        poopDict['privacy'] = row[6]
        poopDict['amenity'] = row[7]
        poopDict['mirror'] = row[8]
        poopDict['comments'] = row[9]
        print(json.dumps(poopDict, sort_keys=True, indent=4) + ',')


