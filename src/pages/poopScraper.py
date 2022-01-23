import csv
import json

with open('poopData.csv') as file:
    poopReader = csv.reader(file)
    print('export default')
    overallPoopDict = {}
    for row in poopReader:
        poopDict = dict()
        poopDict['name'] = row[0]
        poopDict['description'] = row[1]
        poopDict['lat'] = float(row[2])
        poopDict['long'] = float(row[3])
        poopDict['gender'] = row[4]
        poopDict['cleanliness'] = int(row[5]) if row[5].isdigit() else 0
        poopDict['ambiance'] = int(row[6]) if row[6].isdigit() else 0
        poopDict['availability'] = row[7]
        poopDict['restroomSpaciousness'] = int(row[8]) if row[8].isdigit() else 0
        poopDict['stallSpaciousness'] = int(row[9]) if row[9].isdigit() else 0
        poopDict['accessibility'] = int(row[10]) if row[10].isdigit() else 0
        poopDict['privacy'] = int(row[11]) if row[11].isdigit() else 0
        poopDict['amenity'] = int(row[12]) if row[12].isdigit() else 0
        poopDict['mirror'] = (row[13] == 'yes')
        poopDict['comment'] = row[14]
        if row[0] in overallPoopDict:
            overallPoopDict[row[0]].append(poopDict)
        else:
            overallPoopDict[row[0]] = [poopDict]

    print(json.dumps(overallPoopDict, sort_keys=True, indent=4))


