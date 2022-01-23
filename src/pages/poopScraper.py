import csv
import json

with open('poopData.csv') as file:
    poopReader = csv.reader(file)
    for row in poopReader:
        poopDict = dict()
        poopDict['name'] = row[0]
        poopDict['description'] = row[1]
        poopDict['lat'] = row[2]
        poopDict['long'] = row[3]
        poopDict['gender'] = row[4]
        poopDict['cleanliness'] = row[5]
        poopDict['ambiance'] = row[6]
        poopDict['availability'] = row[7]
        poopDict['restroomSpaciousness'] = row[8]
        poopDict['stallSpaciousness'] = row[9]
        poopDict['accessibility'] = row[10]
        poopDict['privacy'] = row[11]
        poopDict['amenity'] = row[12]
        poopDict['mirror'] = row[13]
        poopDict['comment'] = row[14]
        print(json.dumps(poopDict, sort_keys=True, indent=4) + ',')


