// JA JavaScript File
const apartmentDetails = [


    { id:"CA02", sector: "A", floor: "0", typology: "1+1", scale: "A,B", netArea: 74.9, loggiaArea: 9.77, totalNetArea: 84.67, commonArea: 28.89, totalArea:113.56, verandaArea: 16.47, poolArea: 17.92, greenTerraceArea:00, usableTerrace: 0, plotArea: 54.25, storeArea: 13.57, aptParking: "P01", statusi: "Shitur", shenime: "Beni Hekur" },
    { id:"CA03", sector: "A", floor: "0", typology: "2+1", scale: "A,B", netArea: 97.54, loggiaArea: 10.56, totalNetArea: 108.1, commonArea: 36.88, totalArea:144.98, verandaArea: 24.29, poolArea: 17.98, greenTerraceArea:00, usableTerrace: 0, plotArea: 84.27, storeArea: 18.47, aptParking: "P02", statusi: "Shitur", shenime: "Beni Hekur" },
    { id:"CA05", sector: "A", floor: "0", typology: "2+1", scale: "A,B", netArea: 96.93, loggiaArea: 16, totalNetArea: 112.93, commonArea: 38.53, totalArea:151.46, verandaArea: 41.31, poolArea: 21.39, greenTerraceArea:00, usableTerrace: 0, plotArea: 63.49, storeArea: 18.78, aptParking: "P72", statusi: "Shitur", shenime: "Beni Hekur" },
    { id:"CA06", sector: "A", floor: "0", typology: "1+1", scale: "C", netArea: 86.63, loggiaArea: 4, totalNetArea: 90.63, commonArea: 30.92, totalArea:121.55, verandaArea: 31.23, poolArea: 22.58, greenTerraceArea:00, usableTerrace: 0, plotArea: 45.1, storeArea: 23.27, aptParking: "P09", statusi: "Shitur", shenime: "Beni Hekur" },
    { id:"CA08", sector: "A", floor: "0", typology: "1+1", scale: "C", netArea: 62.34, loggiaArea: 4.13, totalNetArea: 66.47, commonArea: 22.68, totalArea:89.15, verandaArea: 30.12, poolArea: 21.39, greenTerraceArea:00, usableTerrace: 0, plotArea: 69.04, storeArea: 0, aptParking: "P10", statusi: "Shitur", shenime: "Beni Hekur" },
    { id:"CA09", sector: "A", floor: "1", typology: "2+1", scale: "A,B", netArea: 96.91, loggiaArea: 15.22, totalNetArea: 112.13, commonArea: 38.26, totalArea:150.39, verandaArea: 3.08, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 16.03, aptParking: "P03", statusi: "Shitur", shenime: "Beni Hekur" },
    { id:"CA11", sector: "A", floor: "1", typology: "2+1", scale: "A,B", netArea: 97.91, loggiaArea: 7.94, totalNetArea: 105.85, commonArea: 36.12, totalArea:141.97, verandaArea: 17.26, poolArea: 0, greenTerraceArea:21.750, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P71", statusi: "Shitur", shenime: "Beni Hekur" },
    { id:"CA12", sector: "A", floor: "1", typology: "2+1", scale: "A,B", netArea: 86.17, loggiaArea: 13.63, totalNetArea: 99.8, commonArea: 34.05, totalArea:133.85, verandaArea: 24.23, poolArea: 0, greenTerraceArea:18.030, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P70", statusi: "Shitur", shenime: "Beni Hekur" },
    { id:"CA15", sector: "A", floor: "1", typology: "1+1", scale: "C", netArea: 66.78, loggiaArea: 1.69, totalNetArea: 68.47, commonArea: 23.36, totalArea:91.83, verandaArea: 16.03, poolArea: 0, greenTerraceArea:9.580, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P13", statusi: "Shitur", shenime: "Beni Hekur" },
    { id:"CA16", sector: "A", floor: "1", typology: "1+1", scale: "C", netArea: 62.34, loggiaArea: 7.41, totalNetArea: 69.75, commonArea: 23.8, totalArea:93.55, verandaArea: 13.64, poolArea: 0, greenTerraceArea:12.570, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P64", statusi: "Shitur", shenime: "Beni Hekur" },
    { id:"CA17", sector: "A", floor: "1", typology: "2+1", scale: "D", netArea: 94.89, loggiaArea: 13.81, totalNetArea: 108.7, commonArea: 37.09, totalArea:145.79, verandaArea: 21.39, poolArea: 20.46, greenTerraceArea:00, usableTerrace: 0, plotArea: 89.3, storeArea: 0, aptParking: "P17", statusi: "Shitur", shenime: "Beni Hekur" },
    { id:"CA18", sector: "A", floor: "1", typology: "1+1", scale: "D", netArea: 61.78, loggiaArea: 9.81, totalNetArea: 71.59, commonArea: 24.43, totalArea:96.02, verandaArea: 23.26, poolArea: 22.32, greenTerraceArea:00, usableTerrace: 0, plotArea: 55.98, storeArea: 0, aptParking: "P18", statusi: "Shitur", shenime: "Beni Hekur" },
    { id:"CA21", sector: "A", floor: "1", typology: "2+1", scale: "E", netArea: 99.68, loggiaArea: 6.24, totalNetArea: 105.92, commonArea: 36.14, totalArea:142.06, verandaArea: 54.42, poolArea: 22.32, greenTerraceArea:00, usableTerrace: 0, plotArea: 49.23, storeArea: 31.24, aptParking: "P25", statusi: "Shitur", shenime: "Beni Hekur" },
    { id:"CA23", sector: "A", floor: "2,3", typology: "2+1", scale: "A", netArea: 125.29, loggiaArea: 8.02, totalNetArea: 133.31, commonArea: 45.49, totalArea:178.8, verandaArea: 8.67, poolArea: 0, greenTerraceArea:00, usableTerrace: 133.04, plotArea: 0, storeArea: 0, aptParking: "P15", statusi: "Shitur", shenime: "Beni Hekur" },
    { id:"CA24", sector: "A", floor: "2", typology: "2+1", scale: "A", netArea: 90.5, loggiaArea: 7.94, totalNetArea: 98.44, commonArea: 33.59, totalArea:132.03, verandaArea: 7.99, poolArea: 0, greenTerraceArea:00, usableTerrace: 48.25, plotArea: 0, storeArea: 0, aptParking: "P16", statusi: "Shitur", shenime: "Beni Hekur" },
    { id:"CA27", sector: "A", floor: "2", typology: "1+1", scale: "C", netArea: 63.85, loggiaArea: 0, totalNetArea: 63.85, commonArea: 21.79, totalArea:85.64, verandaArea: 7.69, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P59", statusi: "Shitur", shenime: "Beni Hekur" },
    { id:"CA28", sector: "A", floor: "2", typology: "2+1", scale: "D", netArea: 94.14, loggiaArea: 13.81, totalNetArea: 107.95, commonArea: 36.83, totalArea:144.78, verandaArea: 0, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P21", statusi: "Shitur", shenime: "Beni Hekur" },
    { id:"CA29", sector: "A", floor: "2", typology: "1+1", scale: "D", netArea: 69.49, loggiaArea: 9.03, totalNetArea: 78.52, commonArea: 26.79, totalArea:105.31, verandaArea: 6.39, poolArea: 0, greenTerraceArea:13.740, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P54", statusi: "Shitur", shenime: "Beni Hekur" },
    { id:"CA30", sector: "A", floor: "2", typology: "2+1", scale: "D", netArea: 94.94, loggiaArea: 9.8, totalNetArea: 104.74, commonArea: 35.74, totalArea:140.48, verandaArea: 3.32, poolArea: 0, greenTerraceArea:11.20, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P63", statusi: "Shitur", shenime: "Beni Hekur" },
    { id:"CA31", sector: "A", floor: "2", typology: "2+1", scale: "E", netArea: 90.58, loggiaArea: 10.32, totalNetArea: 100.9, commonArea: 34.43, totalArea:135.33, verandaArea: 4.19, poolArea: 0, greenTerraceArea:7.740, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P29", statusi: "Shitur", shenime: "Beni Hekur" },
    { id:"CA32", sector: "A", floor: "2", typology: "2+1", scale: "E", netArea: 86.8, loggiaArea: 13.93, totalNetArea: 100.73, commonArea: 34.37, totalArea:135.1, verandaArea: 12.44, poolArea: 0, greenTerraceArea:18.260, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P30", statusi: "Per Shitje", shenime: "0" },
    { id:"CA33", sector: "A", floor: "2", typology: "1+1", scale: "F", netArea: 62.55, loggiaArea: 0, totalNetArea: 62.55, commonArea: 21.34, totalArea:83.89, verandaArea: 27.58, poolArea: 20.16, greenTerraceArea:00, usableTerrace: 0, plotArea: 80.56, storeArea: 10.98, aptParking: "P35", statusi: "Per Shitje", shenime: "0" },
    { id:"CA34", sector: "A", floor: "2", typology: "2+1", scale: "F", netArea: 98.58, loggiaArea: 0, totalNetArea: 98.58, commonArea: 33.64, totalArea:132.22, verandaArea: 33.55, poolArea: 22.16, greenTerraceArea:00, usableTerrace: 0, plotArea: 77.84, storeArea: 0, aptParking: "P36", statusi: "Per Shitje", shenime: "0" },
    { id:"CA35", sector: "A", floor: "3", typology: "2+1", scale: "D", netArea: 94.14, loggiaArea: 0, totalNetArea: 94.14, commonArea: 32.12, totalArea:126.26, verandaArea: 13.82, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P56", statusi: "Shitur", shenime: "Beni Hekur" },
    { id:"CA36", sector: "A", floor: "3,4", typology: "2+1", scale: "D", netArea: 138.08, loggiaArea: 9.03, totalNetArea: 147.11, commonArea: 50.19, totalArea:197.3, verandaArea: 9.45, poolArea: 0, greenTerraceArea:00, usableTerrace: 125.92, plotArea: 0, storeArea: 0, aptParking: "P55", statusi: "Shitur", shenime: "Beni Hekur" },
    { id:"CA39", sector: "A", floor: "3", typology: "2+1", scale: "E", netArea: 86.8, loggiaArea: 14.05, totalNetArea: 100.85, commonArea: 34.41, totalArea:135.26, verandaArea: 0, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P47", statusi: "Per Shitje", shenime: "0" },
    { id:"CA41", sector: "A", floor: "3", typology: "2+1", scale: "F", netArea: 97.83, loggiaArea: 14.44, totalNetArea: 112.27, commonArea: 38.31, totalArea:150.58, verandaArea: 6.75, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 53.46, storeArea: 0, aptParking: "P44", statusi: "Per Shitje", shenime: "0" },
    { id:"CA43", sector: "A", floor: "3", typology: "2+1", scale: "F", netArea: 100.6, loggiaArea: 0, totalNetArea: 100.6, commonArea: 34.32, totalArea:134.92, verandaArea: 41.3, poolArea: 22.68, greenTerraceArea:00, usableTerrace: 0, plotArea: 62.47, storeArea: 10.5, aptParking: "P41", statusi: "Per Shitje", shenime: "0" },
    { id:"CA46", sector: "A", floor: "4", typology: "1+1", scale: "F", netArea: 62.55, loggiaArea: 0, totalNetArea: 62.55, commonArea: 21.34, totalArea:83.89, verandaArea: 8.25, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P42", statusi: "Per Shitje", shenime: "0" },
    { id:"CA48", sector: "A", floor: "4", typology: "1+1", scale: "F", netArea: 62, loggiaArea: 0, totalNetArea: 62, commonArea: 21.15, totalArea:83.15, verandaArea: 9.9, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P43", statusi: "Per Shitje", shenime: "0" },
    { id:"CA49", sector: "A", floor: "4", typology: "2+1", scale: "F", netArea: 85.41, loggiaArea: 14.02, totalNetArea: 99.43, commonArea: 33.93, totalArea:133.36, verandaArea: 0, poolArea: 0, greenTerraceArea:17.10, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P45", statusi: "Per Shitje", shenime: "0" },
    { id:"CA51", sector: "A", floor: "5", typology: "1+1", scale: "F", netArea: 63.85, loggiaArea: 4.29, totalNetArea: 68.14, commonArea: 23.25, totalArea:91.39, verandaArea: 27.95, poolArea: 0, greenTerraceArea:00, usableTerrace: 22.06, plotArea: 0, storeArea: 0, aptParking: "P46", statusi: "Per Shitje", shenime: "0" },
    { id:"CA53", sector: "A", floor: "6", typology: "2+1", scale: "F", netArea: 88.02, loggiaArea: 0, totalNetArea: 88.02, commonArea: 30.03, totalArea:118.05, verandaArea: 14.25, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P37", statusi: "Per Shitje", shenime: "0" },
    { id:"CB02", sector: "B", floor: "0", typology: "1+1", scale: "A", netArea: 61.73, loggiaArea: 0, totalNetArea: 61.73, commonArea: 21.66, totalArea:83.39, verandaArea: 14.58, poolArea: 21.78, greenTerraceArea:00, usableTerrace: 0, plotArea: 23.73, storeArea: 9.051, aptParking: "P01", statusi: "Rezervuar", shenime: "Shoku i Neldit" },
    { id:"CB03", sector: "B", floor: "0", typology: "2+1", scale: "A", netArea: 86.5, loggiaArea: 0, totalNetArea: 86.5, commonArea: 30.36, totalArea:116.86, verandaArea: 34.72, poolArea: 22.35, greenTerraceArea:00, usableTerrace: 0, plotArea: 43.74, storeArea: 10.132, aptParking: "P02", statusi: "Rezervuar", shenime: "Luli Bujari" },
    { id:"CB04", sector: "B", floor: "1", typology: "1+1", scale: "A+B", netArea: 63.03, loggiaArea: 0, totalNetArea: 63.03, commonArea: 22.12, totalArea:85.15, verandaArea: 24.21, poolArea: 22.32, greenTerraceArea:00, usableTerrace: 0, plotArea: 66.69, storeArea: 6.36, aptParking: "P03", statusi: "Per Shitje", shenime: "0" },
    { id:"CB05", sector: "B", floor: "1", typology: "2+1", scale: "A+B", netArea: 85.52, loggiaArea: 6.24, totalNetArea: 91.76, commonArea: 32.2, totalArea:123.96, verandaArea: 11.86, poolArea: 0, greenTerraceArea:52.770, usableTerrace: 0, plotArea: 0, storeArea: 6.39, aptParking: "P51", statusi: "Per Shitje", shenime: "0" },
    { id:"CB07", sector: "B", floor: "1", typology: "1+1", scale: "A+B", netArea: 61.77, loggiaArea: 5.04, totalNetArea: 66.81, commonArea: 23.45, totalArea:90.26, verandaArea: 4.69, poolArea: 0, greenTerraceArea:21.470, usableTerrace: 0, plotArea: 0, storeArea: 13.09, aptParking: "P50", statusi: "Per Shitje", shenime: "0" },
    { id:"CB08", sector: "B", floor: "1", typology: "1+1", scale: "A+B", netArea: 68.86, loggiaArea: 0, totalNetArea: 68.86, commonArea: 24.17, totalArea:93.03, verandaArea: 14.39, poolArea: 22.37, greenTerraceArea:00, usableTerrace: 0, plotArea: 44.04, storeArea: 10.56, aptParking: "P07", statusi: "Per Shitje", shenime: "0" },
    { id:"CB09", sector: "B", floor: "1", typology: "2+1", scale: "A+B", netArea: 86.57, loggiaArea: 9.28, totalNetArea: 95.85, commonArea: 33.64, totalArea:129.49, verandaArea: 27.78, poolArea: 20.64, greenTerraceArea:00, usableTerrace: 0, plotArea: 34.35, storeArea: 0, aptParking: "P08", statusi: "Per Shitje", shenime: "0" },
    { id:"CB12", sector: "B", floor: "2", typology: "1+1", scale: "A+B", netArea: 63.07, loggiaArea: 8.78, totalNetArea: 71.85, commonArea: 25.22, totalArea:97.07, verandaArea: 1.53, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P09", statusi: "Per Shitje", shenime: "0" },
    { id:"CB13", sector: "B", floor: "2", typology: "2+1", scale: "A+B", netArea: 85.55, loggiaArea: 6.2, totalNetArea: 91.75, commonArea: 32.2, totalArea:123.95, verandaArea: 12.92, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P46", statusi: "Per Shitje", shenime: "0" },
    { id:"CB14", sector: "B", floor: "2", typology: "1+1", scale: "A+B", netArea: 61.55, loggiaArea: 9.08, totalNetArea: 70.63, commonArea: 24.79, totalArea:95.42, verandaArea: 5.82, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P45", statusi: "Per Shitje", shenime: "0" },
    { id:"CB15", sector: "B", floor: "2", typology: "1+1", scale: "A+B", netArea: 61.55, loggiaArea: 8.31, totalNetArea: 69.86, commonArea: 24.52, totalArea:94.38, verandaArea: 5.34, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P44", statusi: "Per Shitje", shenime: "0" },
    { id:"CB18", sector: "B", floor: "2", typology: "2+1", scale: "C", netArea: 116.82, loggiaArea: 13.5, totalNetArea: 130.32, commonArea: 45.73, totalArea:176.05, verandaArea: 8.42, poolArea: 0, greenTerraceArea:11.880, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P13", statusi: "Per Shitje", shenime: "0" },
    { id:"CB21", sector: "B", floor: "2", typology: "2+1", scale: "C", netArea: 99.14, loggiaArea: 0, totalNetArea: 99.14, commonArea: 34.79, totalArea:133.93, verandaArea: 9.03, poolArea: 21.29, greenTerraceArea:00, usableTerrace: 0, plotArea: 84.88, storeArea: 0, aptParking: "P14", statusi: "Per Shitje", shenime: "0" },
    { id:"CB22", sector: "B", floor: "3", typology: "1+1", scale: "A+B", netArea: 62.86, loggiaArea: 0, totalNetArea: 62.86, commonArea: 22.06, totalArea:84.92, verandaArea: 8.79, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P40", statusi: "Per Shitje", shenime: "0" },
    { id:"CB23", sector: "B", floor: "3", typology: "2+1", scale: "A+B", netArea: 85.54, loggiaArea: 11.54, totalNetArea: 97.08, commonArea: 34.07, totalArea:131.15, verandaArea: 6.66, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P39", statusi: "Per Shitje", shenime: "0" },
    { id:"CB24", sector: "B", floor: "3", typology: "1+1", scale: "A+B", netArea: 61.75, loggiaArea: 0, totalNetArea: 61.75, commonArea: 21.67, totalArea:83.42, verandaArea: 9.09, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P38", statusi: "Per Shitje", shenime: "0" },
    { id:"CB25", sector: "B", floor: "3", typology: "1+1", scale: "A+B", netArea: 61.55, loggiaArea: 0, totalNetArea: 61.55, commonArea: 21.6, totalArea:83.15, verandaArea: 8.31, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P37", statusi: "Per Shitje", shenime: "0" },
    { id:"CB27", sector: "B", floor: "3", typology: "2+1", scale: "A+B", netArea: 89.19, loggiaArea: 0, totalNetArea: 89.19, commonArea: 31.3, totalArea:120.49, verandaArea: 11.72, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P36", statusi: "Per Shitje", shenime: "0" },
    { id:"CB29", sector: "B", floor: "3", typology: "1+1", scale: "C", netArea: 62.55, loggiaArea: 10.02, totalNetArea: 72.57, commonArea: 25.47, totalArea:98.04, verandaArea: 0, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P10", statusi: "Per Shitje", shenime: "0" },
    { id:"CB31", sector: "B", floor: "3", typology: "2+1", scale: "C", netArea: 95.96, loggiaArea: 10.32, totalNetArea: 106.28, commonArea: 37.3, totalArea:143.58, verandaArea: 16.48, poolArea: 0, greenTerraceArea:26.40, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P11", statusi: "Per Shitje", shenime: "0" },
    { id:"CB34", sector: "B", floor: "4", typology: "1+1", scale: "A+B", netArea: 68.13, loggiaArea: 0, totalNetArea: 68.13, commonArea: 23.91, totalArea:92.04, verandaArea: 10.42, poolArea: 0, greenTerraceArea:00, usableTerrace: 59.5, plotArea: 0, storeArea: 0, aptParking: "P12", statusi: "Per Shitje", shenime: "0" },
    { id:"CB35", sector: "B", floor: "4", typology: "1+1", scale: "C", netArea: 63.85, loggiaArea: 0, totalNetArea: 63.85, commonArea: 22.41, totalArea:86.26, verandaArea: 10.23, poolArea: 0, greenTerraceArea:00, usableTerrace: 48.42, plotArea: 0, storeArea: 0, aptParking: "P18", statusi: "Per Shitje", shenime: "0" },
    { id:"CB36", sector: "B", floor: "4+5", typology: "2+1", scale: "C", netArea: 127.53, loggiaArea: 10.03, totalNetArea: 137.56, commonArea: 48.28, totalArea:185.84, verandaArea: 10.16, poolArea: 0, greenTerraceArea:00, usableTerrace: 93.87, plotArea: 0, storeArea: 0, aptParking: "P19", statusi: "Per Shitje", shenime: "0" },
    { id:"CB37", sector: "B", floor: "4", typology: "2+1", scale: "C", netArea: 95.72, loggiaArea: 0, totalNetArea: 95.72, commonArea: 33.59, totalArea:129.31, verandaArea: 10.32, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P35", statusi: "Per Shitje", shenime: "0" },
    { id:"CB39", sector: "B", floor: "4", typology: "1+1", scale: "D", netArea: 62.64, loggiaArea: 8.61, totalNetArea: 71.25, commonArea: 25, totalArea:96.25, verandaArea: 16.06, poolArea: 22.24, greenTerraceArea:00, usableTerrace: 0, plotArea: 35.28, storeArea: 0, aptParking: "P23", statusi: "Per Shitje", shenime: "0" },
    { id:"CB41", sector: "B", floor: "5", typology: "1+1", scale: "D", netArea: 61.03, loggiaArea: 0, totalNetArea: 61.03, commonArea: 21.42, totalArea:82.45, verandaArea: 8.7, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P24", statusi: "Per Shitje", shenime: "0" },
    { id:"CB42", sector: "B", floor: "5", typology: "2+1", scale: "D", netArea: 86.34, loggiaArea: 11.69, totalNetArea: 98.03, commonArea: 34.4, totalArea:132.43, verandaArea: 30.76, poolArea: 21.11, greenTerraceArea:00, usableTerrace: 0, plotArea: 22.24, storeArea: 0, aptParking: "P27", statusi: "Per Shitje", shenime: "0" },
    { id:"CB44", sector: "B", floor: "6", typology: "2+1", scale: "D", netArea: 87.64, loggiaArea: 0, totalNetArea: 87.64, commonArea: 30.76, totalArea:118.4, verandaArea: 11.84, poolArea: 0, greenTerraceArea:00, usableTerrace: 22.06, plotArea: 0, storeArea: 0, aptParking: "P28", statusi: "Per Shitje", shenime: "0" },
    { id:"CC01", sector: "C", floor: "0", typology: "1+1", scale: "A", netArea: 76.04, loggiaArea: 0, totalNetArea: 76.04, commonArea: 27.36, totalArea:103.4, verandaArea: 30.02, poolArea: 21.98, greenTerraceArea:00, usableTerrace: 0, plotArea: 22.23, storeArea: 0, aptParking: "P01", statusi: "Shitur", shenime: "Namik Liko" },
    { id:"CC02", sector: "C", floor: "0", typology: "1+1", scale: "A", netArea: 61.04, loggiaArea: 0, totalNetArea: 61.04, commonArea: 21.96, totalArea:83, verandaArea: 28.69, poolArea: 21.38, greenTerraceArea:00, usableTerrace: 0, plotArea: 20.67, storeArea: 0, aptParking: "P02", statusi: "Rezervuar", shenime: "Renato" },
    { id:"CC03", sector: "C", floor: "0", typology: "1+1", scale: "A", netArea: 65.29, loggiaArea: 14.13, totalNetArea: 79.42, commonArea: 28.57, totalArea:107.99, verandaArea: 17.52, poolArea: 21.6, greenTerraceArea:00, usableTerrace: 0, plotArea: 16.59, storeArea: 0, aptParking: "P03", statusi: "Rezervuar", shenime: "Renato" },
    { id:"CC04", sector: "C", floor: "0", typology: "1+1", scale: "A", netArea: 61.62, loggiaArea: 5.76, totalNetArea: 67.38, commonArea: 24.24, totalArea:91.62, verandaArea: 30.57, poolArea: 21.83, greenTerraceArea:00, usableTerrace: 0, plotArea: 11.72, storeArea: 12.24, aptParking: "P04", statusi: "Rezervuar", shenime: "Renato" },
    { id:"CC06", sector: "C", floor: "0", typology: "2+1", scale: "B", netArea: 90.51, loggiaArea: 9.03, totalNetArea: 99.54, commonArea: 35.81, totalArea:135.35, verandaArea: 13.13, poolArea: 0, greenTerraceArea:94.910, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P42", statusi: "Per Shitje", shenime: "0" },
    { id:"CC08", sector: "C", floor: "0", typology: "1+1", scale: "C", netArea: 62.42, loggiaArea: 10.16, totalNetArea: 72.58, commonArea: 26.11, totalArea:98.69, verandaArea: 22.2, poolArea: 22, greenTerraceArea:00, usableTerrace: 0, plotArea: 46.89, storeArea: 0, aptParking: "P41", statusi: "Per Shitje", shenime: "0" },
    { id:"CC10", sector: "C", floor: "0", typology: "1+1", scale: "D", netArea: 63.63, loggiaArea: 9.75, totalNetArea: 73.38, commonArea: 26.4, totalArea:99.78, verandaArea: 25.02, poolArea: 20.85, greenTerraceArea:00, usableTerrace: 0, plotArea: 77.5, storeArea: 0, aptParking: "P15", statusi: "Per Shitje", shenime: "0" },
    { id:"CC12", sector: "C", floor: "0", typology: "2+1", scale: "E", netArea: 90.28, loggiaArea: 10.56, totalNetArea: 100.84, commonArea: 36.28, totalArea:137.12, verandaArea: 16.85, poolArea: 22.08, greenTerraceArea:00, usableTerrace: 0, plotArea: 70.87, storeArea: 0, aptParking: "P19", statusi: "Per Shitje", shenime: "0" },
    { id:"CC13", sector: "C", floor: "0", typology: "2+1", scale: "E", netArea: 85.61, loggiaArea: 0, totalNetArea: 85.61, commonArea: 30.8, totalArea:116.41, verandaArea: 38.23, poolArea: 21.14, greenTerraceArea:00, usableTerrace: 0, plotArea: 77.33, storeArea: 0, aptParking: "P18", statusi: "Per Shitje", shenime: "0" },
    { id:"CC14", sector: "C", floor: "0", typology: "1+1", scale: "E", netArea: 62.94, loggiaArea: 6.45, totalNetArea: 69.39, commonArea: 24.97, totalArea:94.36, verandaArea: 21.87, poolArea: 21.41, greenTerraceArea:00, usableTerrace: 0, plotArea: 62.23, storeArea: 0, aptParking: "P17", statusi: "Per Shitje", shenime: "0" },
    { id:"CC17", sector: "C", floor: "0", typology: "1+1", scale: "G", netArea: 63.24, loggiaArea: 1.14, totalNetArea: 64.38, commonArea: 23.16, totalArea:87.54, verandaArea: 25.56, poolArea: 21.39, greenTerraceArea:00, usableTerrace: 0, plotArea: 13.06, storeArea: 0, aptParking: "P58", statusi: "Per Shitje", shenime: "0" },
    { id:"CC18", sector: "C", floor: "1", typology: "1+1", scale: "A", netArea: 62.55, loggiaArea: 8.49, totalNetArea: 71.04, commonArea: 25.56, totalArea:96.6, verandaArea: 11.09, poolArea: 0, greenTerraceArea:13.630, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P40", statusi: "Per Shitje", shenime: "0" },
    { id:"CC19", sector: "C", floor: "1", typology: "1+1", scale: "A", netArea: 61.36, loggiaArea: 10.05, totalNetArea: 71.41, commonArea: 25.69, totalArea:97.1, verandaArea: 5.26, poolArea: 0, greenTerraceArea:15.980, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P36", statusi: "Per Shitje", shenime: "0" },
    { id:"CC22", sector: "C", floor: "1", typology: "1+1", scale: "A", netArea: 63.01, loggiaArea: 10.22, totalNetArea: 73.23, commonArea: 26.35, totalArea:99.58, verandaArea: 4.56, poolArea: 0, greenTerraceArea:12.870, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P35", statusi: "Per Shitje", shenime: "0" },
    { id:"CC23", sector: "C", floor: "1", typology: "1+1", scale: "B", netArea: 63.04, loggiaArea: 9.75, totalNetArea: 72.79, commonArea: 26.19, totalArea:98.98, verandaArea: 14.56, poolArea: 0, greenTerraceArea:11.610, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P34", statusi: "Per Shitje", shenime: "0" },
    { id:"CC27", sector: "C", floor: "1", typology: "2+1", scale: "C", netArea: 91.74, loggiaArea: 0, totalNetArea: 91.74, commonArea: 33.01, totalArea:124.75, verandaArea: 14.84, poolArea: 0, greenTerraceArea:14.840, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P30", statusi: "Per Shitje", shenime: "0" },
    { id:"CC28", sector: "C", floor: "1", typology: "1+1", scale: "D", netArea: 63.63, loggiaArea: 9.75, totalNetArea: 73.38, commonArea: 26.4, totalArea:99.78, verandaArea: 0, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P29", statusi: "Per Shitje", shenime: "0" },
    { id:"CC29", sector: "C", floor: "1,2", typology: "2+1", scale: "D", netArea: 127.48, loggiaArea: 7.66, totalNetArea: 135.14, commonArea: 48.62, totalArea:183.76, verandaArea: 12.09, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P28", statusi: "Per Shitje", shenime: "0" },
    { id:"CC30", sector: "C", floor: "1", typology: "1+1", scale: "E", netArea: 81.11, loggiaArea: 0, totalNetArea: 81.11, commonArea: 29.18, totalArea:110.29, verandaArea: 12.45, poolArea: 0, greenTerraceArea:7.440, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P24", statusi: "Per Shitje", shenime: "0" },
    { id:"CC32", sector: "C", floor: "1", typology: "1+1", scale: "E", netArea: 63.28, loggiaArea: 9.75, totalNetArea: 73.03, commonArea: 26.27, totalArea:99.3, verandaArea: 9.95, poolArea: 0, greenTerraceArea:10.610, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P43", statusi: "Per Shitje", shenime: "0" },
    { id:"CC33", sector: "C", floor: "1", typology: "2+1", scale: "F", netArea: 103.2, loggiaArea: 0, totalNetArea: 103.2, commonArea: 37.13, totalArea:140.33, verandaArea: 53.21, poolArea: 20.4, greenTerraceArea:00, usableTerrace: 0, plotArea: 49.4, storeArea: 0, aptParking: "P44", statusi: "Per Shitje", shenime: "0" },
    { id:"CC34", sector: "C", floor: "1", typology: "1+1", scale: "F", netArea: 61.6, loggiaArea: 6.57, totalNetArea: 68.17, commonArea: 24.53, totalArea:92.7, verandaArea: 0, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 7.5, storeArea: 0, aptParking: "P45", statusi: "Per Shitje", shenime: "0" },
    { id:"CC35", sector: "C", floor: "1", typology: "2+1", scale: "F", netArea: 98.04, loggiaArea: 9.12, totalNetArea: 107.16, commonArea: 38.55, totalArea:145.71, verandaArea: 0, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 36.59, storeArea: 0, aptParking: "P49", statusi: "Per Shitje", shenime: "0" },
    { id:"CC38", sector: "C", floor: "1", typology: "1+1", scale: "G", netArea: 61.1, loggiaArea: 0, totalNetArea: 61.1, commonArea: 21.98, totalArea:83.08, verandaArea: 20.52, poolArea: 0, greenTerraceArea:14.860, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P50", statusi: "Per Shitje", shenime: "0" },
    { id:"CC39", sector: "C", floor: "1", typology: "1+1", scale: "G", netArea: 63.24, loggiaArea: 6.9, totalNetArea: 70.14, commonArea: 25.24, totalArea:95.38, verandaArea: 12.82, poolArea: 0, greenTerraceArea:13.750, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P59", statusi: "Per Shitje", shenime: "0" },
    { id:"CC40", sector: "C", floor: "2", typology: "1+1", scale: "A", netArea: 63.85, loggiaArea: 0, totalNetArea: 63.85, commonArea: 22.97, totalArea:86.82, verandaArea: 11.01, poolArea: 0, greenTerraceArea:00, usableTerrace: 81.81, plotArea: 0, storeArea: 0, aptParking: "P27", statusi: "Per Shitje", shenime: "0" },
    { id:"CC41", sector: "C", floor: "2,3", typology: "2+1", scale: "A", netArea: 126.86, loggiaArea: 10.47, totalNetArea: 137.33, commonArea: 49.41, totalArea:186.74, verandaArea: 13.43, poolArea: 0, greenTerraceArea:00, usableTerrace: 37, plotArea: 0, storeArea: 0, aptParking: "P26", statusi: "Per Shitje", shenime: "0" },
    { id:"CC42", sector: "C", floor: "2", typology: "1+1", scale: "A", netArea: 63.01, loggiaArea: 0, totalNetArea: 63.01, commonArea: 22.67, totalArea:85.68, verandaArea: 10.62, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P25", statusi: "Per Shitje", shenime: "0" },
    { id:"CC43", sector: "C", floor: "2", typology: "1+1", scale: "B", netArea: 63.04, loggiaArea: 0, totalNetArea: 63.04, commonArea: 22.68, totalArea:85.72, verandaArea: 9.75, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P08", statusi: "Per Shitje", shenime: "0" },
    { id:"CC46", sector: "C", floor: "2", typology: "1+1", scale: "C", netArea: 63.85, loggiaArea: 0, totalNetArea: 63.85, commonArea: 22.97, totalArea:86.82, verandaArea: 27.28, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P23", statusi: "Per Shitje", shenime: "0" },
    { id:"CC47", sector: "C", floor: "2,3", typology: "2+1", scale: "E", netArea: 126.4, loggiaArea: 8.44, totalNetArea: 134.84, commonArea: 48.51, totalArea:183.35, verandaArea: 18.9, poolArea: 0, greenTerraceArea:00, usableTerrace: 34.37, plotArea: 0, storeArea: 0, aptParking: "P66", statusi: "Per Shitje", shenime: "0" },
    { id:"CC48", sector: "C", floor: "2", typology: "2+1", scale: "E", netArea: 86.15, loggiaArea: 0, totalNetArea: 86.15, commonArea: 31, totalArea:117.15, verandaArea: 13.8, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P65", statusi: "Per Shitje", shenime: "0" },
    { id:"CC49", sector: "C", floor: "2", typology: "1+1", scale: "E", netArea: 63.28, loggiaArea: 0, totalNetArea: 63.28, commonArea: 22.77, totalArea:86.05, verandaArea: 9.75, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P51", statusi: "Per Shitje", shenime: "0" },
    { id:"CC51", sector: "C", floor: "2", typology: "1+1", scale: "F", netArea: 76.89, loggiaArea: 0, totalNetArea: 76.89, commonArea: 27.66, totalArea:104.55, verandaArea: 6.57, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P63", statusi: "Per Shitje", shenime: "0" },
    { id:"CC52", sector: "C", floor: "2", typology: "2+1", scale: "F", netArea: 98.04, loggiaArea: 1.7, totalNetArea: 99.74, commonArea: 35.88, totalArea:135.62, verandaArea: 7.42, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P64", statusi: "Per Shitje", shenime: "0" },
    { id:"CC54", sector: "C", floor: "2", typology: "2+1", scale: "G", netArea: 93.36, loggiaArea: 11.53, totalNetArea: 104.89, commonArea: 37.74, totalArea:142.63, verandaArea: 7.35, poolArea: 0, greenTerraceArea:14.780, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P60", statusi: "Per Shitje", shenime: "0" },
    { id:"CC57", sector: "C", floor: "3", typology: "2+1", scale: "F", netArea: 91.8, loggiaArea: 0, totalNetArea: 91.8, commonArea: 33.03, totalArea:124.83, verandaArea: 10.8, poolArea: 0, greenTerraceArea:00, usableTerrace: 58.1, plotArea: 0, storeArea: 0, aptParking: "P11", statusi: "Per Shitje", shenime: "0" },
    { id:"CC58", sector: "C", floor: "3,4", typology: "2+1", scale: "F", netArea: 127.69, loggiaArea: 8.28, totalNetArea: 135.97, commonArea: 48.92, totalArea:184.89, verandaArea: 27.95, poolArea: 0, greenTerraceArea:00, usableTerrace: 21.29, plotArea: 0, storeArea: 0, aptParking: "P12", statusi: "Per Shitje", shenime: "0" },
    { id:"CC59", sector: "C", floor: "3", typology: "2+1", scale: "G", netArea: 93.36, loggiaArea: 3.9, totalNetArea: 97.26, commonArea: 34.99, totalArea:132.25, verandaArea: 7.63, poolArea: 0, greenTerraceArea:00, usableTerrace: 93.16, plotArea: 0, storeArea: 0, aptParking: "P20", statusi: "Per Shitje", shenime: "0" },
    { id:"CD01", sector: "D", floor: "0", typology: "2+1", scale: "AB", netArea: 105.59, loggiaArea: 0, totalNetArea: 105.59, commonArea: 32.97, totalArea:138.56, verandaArea: 56.72, poolArea: 22.37, greenTerraceArea:00, usableTerrace: 0, plotArea: 140.46, storeArea: 16.29, aptParking: "P1", statusi: "Per Shitje", shenime: "0" },
    { id:"CD02", sector: "D", floor: "0", typology: "1+1", scale: "AB", netArea: 60.97, loggiaArea: 8.39, totalNetArea: 69.36, commonArea: 21.66, totalArea:91.02, verandaArea: 23.85, poolArea: 21.4, greenTerraceArea:00, usableTerrace: 0, plotArea: 25.74, storeArea: 16.29, aptParking: "P2", statusi: "Per Shitje", shenime: "0" },
    { id:"CD04", sector: "D", floor: "0", typology: "2+1", scale: "AB", netArea: 95.87, loggiaArea: 2.11, totalNetArea: 97.98, commonArea: 30.6, totalArea:128.58, verandaArea: 52.67, poolArea: 20.26, greenTerraceArea:00, usableTerrace: 0, plotArea: 26.09, storeArea: 16.08, aptParking: "P3", statusi: "Per Shitje", shenime: "0" },
    { id:"CD05", sector: "D", floor: "0", typology: "1+1", scale: "AB", netArea: 86.8, loggiaArea: 10.16, totalNetArea: 96.96, commonArea: 30.28, totalArea:127.24, verandaArea: 21.25, poolArea: 21.87, greenTerraceArea:00, usableTerrace: 0, plotArea: 17.04, storeArea: 18.31, aptParking: "P77", statusi: "Per Shitje", shenime: "0" },
    { id:"CD08", sector: "D", floor: "1", typology: "2+1", scale: "AB", netArea: 103.42, loggiaArea: 0, totalNetArea: 103.42, commonArea: 32.3, totalArea:135.72, verandaArea: 25.94, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 6.19400164347193, aptParking: "P76", statusi: "Per Shitje", shenime: "0" },
    { id:"CD09", sector: "D", floor: "1", typology: "1+1", scale: "AB", netArea: 62.89, loggiaArea: 7.75, totalNetArea: 70.64, commonArea: 22.06, totalArea:92.7, verandaArea: 0, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 5.68905585731933, aptParking: "P75", statusi: "Per Shitje", shenime: "0" },
    { id:"CD10", sector: "D", floor: "1", typology: "1+1", scale: "AB", netArea: 76.98, loggiaArea: 0, totalNetArea: 76.98, commonArea: 24.04, totalArea:101.02, verandaArea: 21.72, poolArea: 0, greenTerraceArea:15.210, usableTerrace: 0, plotArea: 0, storeArea: 6.23888571335216, aptParking: "P74", statusi: "Per Shitje", shenime: "0" },
    { id:"CD14", sector: "D", floor: "1", typology: "2+1", scale: "AB", netArea: 90.48, loggiaArea: 11, totalNetArea: 101.48, commonArea: 31.69, totalArea:133.17, verandaArea: 20.86, poolArea: 0, greenTerraceArea:23.020, usableTerrace: 0, plotArea: 0, storeArea: 15.33, aptParking: "P73", statusi: "Per Shitje", shenime: "0" },
    { id:"CD15", sector: "D", floor: "1", typology: "1+1", scale: "CD", netArea: 67.72, loggiaArea: 9.24, totalNetArea: 76.96, commonArea: 24.03, totalArea:100.99, verandaArea: 19.22, poolArea: 21.46, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 16.4, aptParking: "P68", statusi: "Rezervuar", shenime: "Renato" },
    { id:"CD16", sector: "D", floor: "1", typology: "1+1", scale: "CD", netArea: 76.36, loggiaArea: 11.09, totalNetArea: 87.45, commonArea: 27.31, totalArea:114.76, verandaArea: 28.74, poolArea: 23.29, greenTerraceArea:6.840, usableTerrace: 0, plotArea: 0, storeArea: 14.5, aptParking: "P67", statusi: "Per Shitje", shenime: "0" },
    { id:"CD18", sector: "D", floor: "1", typology: "1+1", scale: "CD", netArea: 61.93, loggiaArea: 12.07, totalNetArea: 74, commonArea: 23.11, totalArea:97.11, verandaArea: 16.73, poolArea: 23.61, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 16.34, aptParking: "P66", statusi: "Per Shitje", shenime: "0" },
    { id:"CD19", sector: "D", floor: "1", typology: "2+1", scale: "CD", netArea: 86.17, loggiaArea: 0, totalNetArea: 86.17, commonArea: 26.91, totalArea:113.08, verandaArea: 16.43, poolArea: 0, greenTerraceArea:7.640, usableTerrace: 0, plotArea: 0, storeArea: 16.4, aptParking: "P59", statusi: "Per Shitje", shenime: "0" },
    { id:"CD21", sector: "D", floor: "1", typology: "1+1", scale: "E", netArea: 69.37, loggiaArea: 7.45, totalNetArea: 76.82, commonArea: 23.99, totalArea:100.81, verandaArea: 15.87, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 54.07, storeArea: 15.54, aptParking: "P29", statusi: "Per Shitje", shenime: "0" },
    { id:"CD23", sector: "D", floor: "1", typology: "1+1", scale: "E", netArea: 76.46, loggiaArea: 0, totalNetArea: 76.46, commonArea: 23.88, totalArea:100.34, verandaArea: 35.88, poolArea: 21.73, greenTerraceArea:00, usableTerrace: 0, plotArea: 43.76, storeArea: 17.24, aptParking: "P30", statusi: "Per Shitje", shenime: "0" },
    { id:"CD25", sector: "D", floor: "1", typology: "1+1", scale: "E", netArea: 99.59, loggiaArea: 0, totalNetArea: 99.59, commonArea: 31.1, totalArea:130.69, verandaArea: 14.18, poolArea: 17.44, greenTerraceArea:00, usableTerrace: 0, plotArea: 43.83, storeArea: 9.55, aptParking: "P25", statusi: "Per Shitje", shenime: "0" },
    { id:"CD26", sector: "D", floor: "2", typology: "1+1", scale: "AB", netArea: 63.59, loggiaArea: 13.26, totalNetArea: 76.85, commonArea: 24, totalArea:100.85, verandaArea: 0, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 11.0078181381267, aptParking: "P72", statusi: "Per Shitje", shenime: "0" },
    { id:"CD27", sector: "D", floor: "2", typology: "2+1", scale: "AB", netArea: 85.6, loggiaArea: 13.1, totalNetArea: 98.7, commonArea: 30.82, totalArea:129.52, verandaArea: 8.4, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 8.44942615495355, aptParking: "P10", statusi: "Per Shitje", shenime: "0" },
    { id:"CD29", sector: "D", floor: "2", typology: "1+1", scale: "AB", netArea: 62.19, loggiaArea: 3.96, totalNetArea: 66.15, commonArea: 20.66, totalArea:86.81, verandaArea: 8.15, poolArea: 0, greenTerraceArea:16.020, usableTerrace: 0, plotArea: 0, storeArea: 11.2097964525878, aptParking: "P11", statusi: "Per Shitje", shenime: "0" },
    { id:"CD30", sector: "D", floor: "2", typology: "1+1", scale: "AB", netArea: 63.67, loggiaArea: 0, totalNetArea: 63.67, commonArea: 19.88, totalArea:83.55, verandaArea: 26.66, poolArea: 0, greenTerraceArea:36.730, usableTerrace: 0, plotArea: 0, storeArea: 19.4796863280204, aptParking: "P12", statusi: "Per Shitje", shenime: "0" },
    { id:"CD32", sector: "D", floor: "2", typology: "1+1", scale: "CD", netArea: 75.71, loggiaArea: 3.57, totalNetArea: 79.28, commonArea: 24.76, totalArea:104.04, verandaArea: 10.15, poolArea: 0, greenTerraceArea:12.960, usableTerrace: 0, plotArea: 0, storeArea: 17.22, aptParking: "P60", statusi: "Per Shitje", shenime: "0" },
    { id:"CD35", sector: "D", floor: "2", typology: "2+1", scale: "CD", netArea: 86.04, loggiaArea: 10.42, totalNetArea: 96.46, commonArea: 30.12, totalArea:126.58, verandaArea: 25.73, poolArea: 0, greenTerraceArea:30.30, usableTerrace: 0, plotArea: 0, storeArea: 13.35, aptParking: "P61", statusi: "Per Shitje", shenime: "0" },
    { id:"CD36", sector: "D", floor: "2", typology: "1+1", scale: "CD", netArea: 62.53, loggiaArea: 12.24, totalNetArea: 74.77, commonArea: 23.35, totalArea:98.12, verandaArea: 0, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P18", statusi: "Per Shitje", shenime: "0" },
    { id:"CD38", sector: "D", floor: "2", typology: "1+1", scale: "E", netArea: 63.79, loggiaArea: 8.79, totalNetArea: 72.58, commonArea: 22.67, totalArea:95.25, verandaArea: 29.02, poolArea: 0, greenTerraceArea:47.750, usableTerrace: 0, plotArea: 0, storeArea: 8.52, aptParking: "P26", statusi: "Per Shitje", shenime: "0" },
    { id:"CD40", sector: "D", floor: "2", typology: "1+1", scale: "E", netArea: 61.68, loggiaArea: 10.31, totalNetArea: 71.99, commonArea: 22.48, totalArea:94.47, verandaArea: 49.01, poolArea: 0, greenTerraceArea:68.920, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P31", statusi: "Per Shitje", shenime: "0" },
    { id:"CD42", sector: "D", floor: "2", typology: "1+1", scale: "E", netArea: 83.72, loggiaArea: 11.49, totalNetArea: 95.21, commonArea: 29.73, totalArea:124.94, verandaArea: 19, poolArea: 0, greenTerraceArea:47.090, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P45", statusi: "Per Shitje", shenime: "0" },
    { id:"CD43", sector: "D", floor: "2", typology: "2+1", scale: "F", netArea: 87.73, loggiaArea: 0, totalNetArea: 87.73, commonArea: 27.4, totalArea:115.13, verandaArea: 34.35, poolArea: 22.32, greenTerraceArea:00, usableTerrace: 0, plotArea: 29.76, storeArea: 15.35, aptParking: "P35", statusi: "Per Shitje", shenime: "0" },
    { id:"CD44", sector: "D", floor: "2", typology: "2+1", scale: "F", netArea: 87.67, loggiaArea: 0, totalNetArea: 87.67, commonArea: 27.38, totalArea:115.05, verandaArea: 34.26, poolArea: 20.79, greenTerraceArea:00, usableTerrace: 0, plotArea: 31.28, storeArea: 15.35, aptParking: "P36", statusi: "Shitur", shenime: "Anteo" },
    { id:"CD47", sector: "D", floor: "3", typology: "1+1", scale: "B", netArea: 63.07, loggiaArea: 3.24, totalNetArea: 66.31, commonArea: 20.71, totalArea:87.02, verandaArea: 15.14, poolArea: 0, greenTerraceArea:00, usableTerrace: 34.74, plotArea: 0, storeArea: 16.6183268731557, aptParking: "P14", statusi: "Rezervuar", shenime: "Renato" },
    { id:"CD48", sector: "D", floor: "3", typology: "1+1", scale: "CD", netArea: 69.43, loggiaArea: 7.43, totalNetArea: 76.86, commonArea: 24, totalArea:100.86, verandaArea: 0, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P19", statusi: "Rezervuar", shenime: "Renato" },
    { id:"CD49", sector: "D", floor: "3,4", typology: "2+1", scale: "CD", netArea: 126.28, loggiaArea: 8.72, totalNetArea: 135, commonArea: 42.16, totalArea:177.16, verandaArea: 17.11, poolArea: 0, greenTerraceArea:00, usableTerrace: 66.55, plotArea: 0, storeArea: 0, aptParking: "P20", statusi: "Per Shitje", shenime: "0" },
    { id:"CD51", sector: "D", floor: "3,4", typology: "2+1", scale: "CD", netArea: 126.8, loggiaArea: 6.08, totalNetArea: 132.88, commonArea: 41.5, totalArea:174.38, verandaArea: 16.34, poolArea: 0, greenTerraceArea:00, usableTerrace: 64.43, plotArea: 0, storeArea: 16.4035366569014, aptParking: "P51", statusi: "Per Shitje", shenime: "0" },
    { id:"CD52", sector: "D", floor: "3", typology: "2+1", scale: "CD", netArea: 85.85, loggiaArea: 10.63, totalNetArea: 96.48, commonArea: 30.13, totalArea:126.61, verandaArea: 0, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 16.4035366569014, aptParking: "P52", statusi: "Shitur", shenime: "Viktor Shima" },
    { id:"CD53", sector: "D", floor: "3,4", typology: "2+1", scale: "CD", netArea: 136.31, loggiaArea: 6.79, totalNetArea: 143.1, commonArea: 44.69, totalArea:187.79, verandaArea: 12.18, poolArea: 0, greenTerraceArea:00, usableTerrace: 90.06, plotArea: 0, storeArea: 0, aptParking: "P50", statusi: "Per Shitje", shenime: "0" },
    { id:"CD56", sector: "D", floor: "3", typology: "1+1", scale: "E", netArea: 63.37, loggiaArea: 0, totalNetArea: 63.37, commonArea: 19.79, totalArea:83.16, verandaArea: 8.7, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P46", statusi: "Per Shitje", shenime: "0" },
    { id:"CD58", sector: "D", floor: "3", typology: "2+1", scale: "E", netArea: 85.47, loggiaArea: 12.29, totalNetArea: 97.76, commonArea: 30.53, totalArea:128.29, verandaArea: 6.51, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P47", statusi: "Per Shitje", shenime: "0" },
    { id:"CD59", sector: "D", floor: "3", typology: "1+1", scale: "E", netArea: 84.13, loggiaArea: 11.29, totalNetArea: 95.42, commonArea: 29.8, totalArea:125.22, verandaArea: 0, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P32", statusi: "Per Shitje", shenime: "0" },
    { id:"CD60", sector: "D", floor: "3", typology: "2+1", scale: "F", netArea: 87.29, loggiaArea: 0, totalNetArea: 87.29, commonArea: 27.26, totalArea:114.55, verandaArea: 21.58, poolArea: 0, greenTerraceArea:17.680, usableTerrace: 0, plotArea: 0, storeArea: 13.67, aptParking: "P37", statusi: "Per Shitje", shenime: "0" },
    { id:"CD61", sector: "D", floor: "3", typology: "2+1", scale: "F", netArea: 86.32, loggiaArea: 17.1, totalNetArea: 103.42, commonArea: 32.3, totalArea:135.72, verandaArea: 0, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 0, storeArea: 0, aptParking: "P42", statusi: "Per Shitje", shenime: "0" },
    { id:"CD62", sector: "D", floor: "3", typology: "2+1", scale: "F", netArea: 89.37, loggiaArea: 0, totalNetArea: 89.37, commonArea: 27.91, totalArea:117.28, verandaArea: 18.77, poolArea: 0, greenTerraceArea:00, usableTerrace: 0, plotArea: 34.96, storeArea: 0, aptParking: "P43", statusi: "Per Shitje", shenime: "0" },
    { id:"CD65", sector: "D", floor: "3", typology: "1+1", scale: "G", netArea: 61.48, loggiaArea: 3.6, totalNetArea: 65.08, commonArea: 20.32, totalArea:85.4, verandaArea: 16.38, poolArea: 17.84, greenTerraceArea:00, usableTerrace: 0, plotArea: 6.44, storeArea: 0, aptParking: "P44", statusi: "Rezervuar", shenime: "Amerikani" },
    { id:"CD66", sector: "D", floor: "3", typology: "1+1", scale: "G", netArea: 69.39, loggiaArea: 0, totalNetArea: 69.39, commonArea: 21.67, totalArea:91.06, verandaArea: 24.54, poolArea: 26.32, greenTerraceArea:00, usableTerrace: 0, plotArea: 26.32, storeArea: 0, aptParking: "P48", statusi: "Per Shitje", shenime: "0" },
    { id:"CD67", sector: "D", floor: "4", typology: "1+1", scale: "E", netArea: 64.24, loggiaArea: 0, totalNetArea: 64.24, commonArea: 20.06, totalArea:84.3, verandaArea: 10.91, poolArea: 0, greenTerraceArea:00, usableTerrace: 33.86, plotArea: 0, storeArea: 0, aptParking: "P33", statusi: "Per Shitje", shenime: "0" },
    { id:"CD68", sector: "D", floor: "4", typology: "1+1", scale: "E", netArea: 85.44, loggiaArea: 0, totalNetArea: 85.44, commonArea: 26.68, totalArea:112.12, verandaArea: 11.27, poolArea: 0, greenTerraceArea:00, usableTerrace: 61.41, plotArea: 0, storeArea: 0, aptParking: "P34", statusi: "Per Shitje", shenime: "0" },
    { id:"CE02", sector: "E", floor: "0", typology: "2+1", scale: "A", netArea: 85.41, loggiaArea: 0, totalNetArea: 85.41, commonArea: 23.56, totalArea:108.97, verandaArea: 35.94, poolArea: 20.75, greenTerraceArea:00, usableTerrace: 0, plotArea: 25.04, storeArea: 5.18411007116672, aptParking: "P2", statusi: "Shitur", shenime: "Fjordi Mustafaj" },
    { id:"CE03", sector: "E", floor: "0", typology: "1+1", scale: "A", netArea: 75.36, loggiaArea: 0, totalNetArea: 75.36, commonArea: 20.79, totalArea:96.15, verandaArea: 21.11, poolArea: 21.52, greenTerraceArea:00, usableTerrace: 0, plotArea: 107.92, storeArea: 5.18411007116672, aptParking: "P1", statusi: "Rezervuar", shenime: "Renato" },
    { id:"CE04", sector: "E", floor: "1", typology: "2+1", scale: "A", netArea: 90.64, loggiaArea: 0, totalNetArea: 90.64, commonArea: 25.01, totalArea:115.65, verandaArea: 27.53, poolArea: 0, greenTerraceArea:37.870, usableTerrace: 0, plotArea: 0, storeArea: 5.58806670008881, aptParking: "P3", statusi: "Per Shitje", shenime: "0" },
    { id:"CE05", sector: "E", floor: "1", typology: "2+1", scale: "A", netArea: 92.19, loggiaArea: 0, totalNetArea: 92.19, commonArea: 25.43, totalArea:117.62, verandaArea: 39.63, poolArea: 0, greenTerraceArea:51.340, usableTerrace: 0, plotArea: 0, storeArea: 5.59928771755886, aptParking: "P4", statusi: "Per Shitje", shenime: "0" },
    { id:"CE07", sector: "E", floor: "1", typology: "1+1", scale: "A", netArea: 63.32, loggiaArea: 0, totalNetArea: 63.32, commonArea: 17.47, totalArea:80.79, verandaArea: 29.39, poolArea: 0, greenTerraceArea:53.650, usableTerrace: 0, plotArea: 0, storeArea: 8.52797327724396, aptParking: "P11", statusi: "Per Shitje", shenime: "0" },
    { id:"CE09", sector: "E", floor: "1", typology: "2+1", scale: "A", netArea: 85.55, loggiaArea: 0, totalNetArea: 85.55, commonArea: 23.6, totalArea:109.15, verandaArea: 30.17, poolArea: 0, greenTerraceArea:105.120, usableTerrace: 0, plotArea: 0, storeArea: 9.35832857002824, aptParking: "P10", statusi: "Per Shitje", shenime: "0" },
    { id:"CE10", sector: "E", floor: "1", typology: "2+1", scale: "A", netArea: 107.11, loggiaArea: 0, totalNetArea: 107.11, commonArea: 29.55, totalArea:136.66, verandaArea: 33.07, poolArea: 0, greenTerraceArea:86.460, usableTerrace: 0, plotArea: 0, storeArea: 8.71873057423494, aptParking: "P14", statusi: "Per Shitje", shenime: "0" },




    //Vilat =====

    { id: "VI03", sector: "Villa", typology: "TWIN", Kat0Area: 96.44, Kati1Area: 91.4, verandaArea: 23.63, poolArea: 27.8, plotArea: 365.21, TotalArea: 187.84, status: "bolv", floor: "1", scale: "A", netArea: 0, loggiaArea: 0, totalNetArea: 0, commonArea: 0, terraceArea: 0, usableTerrace: 0, storeArea: 8.72, statusi: "Shitur", shenime: "Beni Hekur" },
    { id: "VI04", sector: "Villa", typology: "TWIN", Kat0Area: 96.44, Kati1Area: 91.4, verandaArea: 23.63, poolArea: 27.8, plotArea: 365.21, TotalArea: 187.84, status: "bolv", floor: "1", scale: "A", netArea: 0, loggiaArea: 0, totalNetArea: 0, commonArea: 0, terraceArea: 0, usableTerrace: 0, storeArea: 8.72, statusi: "Per shitje", shenime: "0" },
    { id: "VI05", sector: "Villa", typology: "INDIVUDUAL", Kat0Area: 92.53, Kati1Area: 71.12, verandaArea: 23.63, poolArea: 27.8, plotArea: 549.85, TotalArea: 163.65, status: "bolv", floor: "1", scale: "A", netArea: 0, loggiaArea: 0, totalNetArea: 0, commonArea: 0, terraceArea: 0, usableTerrace: 0, storeArea: 8.72, statusi: "Per shitje", shenime: "0" },
    { id: "VI06", sector: "Villa", typology: "TWIN", Kat0Area: 92.53, Kati1Area: 71.12, verandaArea: 23.63, poolArea: 27.8, plotArea: 666.88, TotalArea: 163.65, status: "bolv", floor: "1", scale: "A", netArea: 0, loggiaArea: 0, totalNetArea: 0, commonArea: 0, terraceArea: 0, usableTerrace: 0, storeArea: 8.72, statusi: "Rezervuar", shenime: "Climatherm" },
    { id: "VI07", sector: "Villa", typology: "TWIN", Kat0Area: 96.44, Kati1Area: 91.4, verandaArea: 23.63, poolArea: 27.8, plotArea: 358.72, TotalArea: 187.84, status: "bolv", floor: "1", scale: "A", netArea: 0, loggiaArea: 0, totalNetArea: 0, commonArea: 0, terraceArea: 0, usableTerrace: 0, storeArea: 8.72, statusi: "Per shitje", shenime: "0" },
    { id: "VI08", sector: "Villa", typology: "INDIVUDUAL", Kat0Area: 92.53, Kati1Area: 71.12, verandaArea: 23.63, poolArea: 27.8, plotArea: 440.21, TotalArea: 163.65, status: "bolv", floor: "1", scale: "A", netArea: 0, loggiaArea: 0, totalNetArea: 0, commonArea: 0, terraceArea: 0, usableTerrace: 0, storeArea: 8.72, statusi: "Shitur", shenime: "0" },
    { id: "VI10", sector: "Villa", typology: "TWIN", Kat0Area: 92.53, Kati1Area: 71.12, verandaArea: 23.63, poolArea: 27.8, plotArea: 297.88, TotalArea: 163.65, status: "bolv", floor: "1", scale: "A", netArea: 0, loggiaArea: 0, totalNetArea: 0, commonArea: 0, terraceArea: 0, usableTerrace: 0, storeArea: 8.72, statusi: "Per shitje", shenime: "0" },
    { id: "VI11", sector: "Villa", typology: "INDIVUDUAL", Kat0Area: 96.44, Kati1Area: 91.4, verandaArea: 23.63, poolArea: 27.8, plotArea: 253.53, TotalArea: 187.84, status: "bolv", floor: "1", scale: "A", netArea: 0, loggiaArea: 0, totalNetArea: 0, commonArea: 0, terraceArea: 0, usableTerrace: 0, storeArea: 8.72, statusi: "Per shitje", shenime: "0" },
    { id: "VI16", sector: "Villa", typology: "TWIN", Kat0Area: 95.14, Kati1Area: 70.63, verandaArea: 67.2, poolArea: 31.82, plotArea: 398.54, TotalArea: 165.77, status: "bolv", floor: "1", scale: "A", netArea: 0, loggiaArea: 0, totalNetArea: 0, commonArea: 0, terraceArea: 0, usableTerrace: 0, storeArea: 8.72, statusi: "Per shitje", shenime: "0" },
    { id: "VI17", sector: "Villa", typology: "TWIN", Kat0Area: 95.14, Kati1Area: 70.63, verandaArea: 41.31, poolArea: 31.82, plotArea: 226.35, TotalArea: 165.77, status: "bolv", floor: "1", scale: "A", netArea: 0, loggiaArea: 0, totalNetArea: 0, commonArea: 0, terraceArea: 0, usableTerrace: 0, storeArea: 8.72, statusi: "Per shitje", shenime: "0" },
    { id: "VI18", sector: "Villa", typology: "TWIN", Kat0Area: 95.14, Kati1Area: 70.63, verandaArea: 55.01, poolArea: 30.4, plotArea: 378.36, TotalArea: 165.77, status: "bolv", floor: "1", scale: "A", netArea: 0, loggiaArea: 0, totalNetArea: 0, commonArea: 0, terraceArea: 0, usableTerrace: 0, storeArea: 8.72, statusi: "Per shitje", shenime: "0" },
    { id: "VI19", sector: "Villa", typology: "INDIVUDUAL", Kat0Area: 96.44, Kati1Area: 91.4, verandaArea: 23.63, poolArea: 27.8, plotArea: 393.34, TotalArea: 187.84, status: "bolv", floor: "1", scale: "A", netArea: 0, loggiaArea: 0, totalNetArea: 0, commonArea: 0, terraceArea: 0, usableTerrace: 0, storeArea: 8.72, statusi: "Per shitje", shenime: "0" },
    { id: "VI20", sector: "Villa", typology: "INDIVUDUAL", Kat0Area: 96.44, Kati1Area: 91.4, verandaArea: 23.63, poolArea: 27.8, plotArea: 435.6, TotalArea: 187.84, status: "bolv", floor: "1", scale: "A", netArea: 0, loggiaArea: 0, totalNetArea: 0, commonArea: 0, terraceArea: 0, usableTerrace: 0, storeArea: 8.72, statusi: "Per shitje", shenime: "0" },
    { id: "VI22", sector: "Villa", typology: "TWIN", Kat0Area: 99.09, Kati1Area: 75.29, verandaArea: 53.55, poolArea: 37.2, plotArea: 529.5, TotalArea: 174.38, status: "bolv", floor: "1", scale: "A", netArea: 0, loggiaArea: 0, totalNetArea: 0, commonArea: 0, terraceArea: 0, usableTerrace: 0, storeArea: 8.72, statusi: "Per shitje", shenime: "0" },
    { id: "VI23", sector: "Villa", typology: "TWIN", Kat0Area: 99.09, Kati1Area: 75.29, verandaArea: 49.41, poolArea: 34.41, plotArea: 329.59, TotalArea: 174.38, status: "bolv", floor: "1", scale: "A", netArea: 0, loggiaArea: 0, totalNetArea: 0, commonArea: 0, terraceArea: 0, usableTerrace: 0, storeArea: 8.72, statusi: "Per shitje", shenime: "0" },

]


function showApartmentDetails(apartmentId) {

    const details = apartmentDetails.find(apartment => apartment.id === apartmentId);
    // Find the apartment details by ID
    if (details) {
        // Populate the details table
        document.getElementById('aptId').textContent = details.id;
        document.getElementById('aptSector').textContent = details.sector;
        document.getElementById('aptFloor').textContent = details.floor;
        document.getElementById('aptTypology').textContent = details.typology;
        document.getElementById('aptScale').textContent = details.scale;
        document.getElementById('aptNetArea').textContent = details.netArea;
        document.getElementById('aptLoggiaArea').textContent = details.loggiaArea;
        document.getElementById('aptTotalNetArea').textContent = details.totalNetArea;
        document.getElementById('aptCommonArea').textContent = details.commonArea;
        document.getElementById('aptTotalArea').textContent = details.totalArea;
        document.getElementById('aptVerandaArea').textContent = details.verandaArea;
        document.getElementById('aptPoolArea').textContent = details.poolArea;
        document.getElementById('aptgreenTerraceArea').textContent = details.greenTerraceArea;
        document.getElementById('aptusableTerrace').textContent = details.usableTerrace;
        document.getElementById('aptplotArea').textContent = details.plotArea;
        document.getElementById('aptstoreArea').textContent = details.storeArea;
        document.getElementById('aptParking').textContent = details.aptParking;
        
        document.getElementById('aptStatus').textContent = details.statusi;
      //  document.getElementById('areaFloor0').textContent = details.Kat0Area;
      //  document.getElementById('areaFloor1').textContent = details.Kati1Area;
    }
}


// --- Filter by Typology on dropdown change

document.getElementById('typologyFilter').addEventListener('change', () => {
  const selectedTypology = document.getElementById('typologyFilter').value;

  apartmentDetails.forEach(apartment => {
    const btn = document.getElementById(apartment.id);
    if (!btn) return;

    if (!selectedTypology || apartment.typology === selectedTypology) {
      btn.style.display = 'inline-block';
    } else {
      btn.style.display = 'none';
    }
  });
});

// --- Filter by Area on button click
function filterByArea() {
  const maxArea = parseFloat(document.getElementById('areaFilter').value);
      const input = document.getElementById('areaFilter');
    const value = input.value.trim();
    if (value==='') return; // Do nothing if no value


  apartmentDetails.forEach(apartment => {
    const btn = document.getElementById(apartment.id);
    if (!btn) return;

    if (!isNaN(maxArea) && apartment.totalArea <= maxArea) {
      btn.style.display = 'inline-block';
    } else {
      btn.style.display = 'none';
    }
  });
}

// --- Reset all buttons when clicking inside area textbox
document.getElementById('areaFilter').addEventListener('click', () => {
  const input = document.getElementById('areaFilter');
  const value = input.value.trim();

  if (value === '') return; // Do nothing if no value

  // Reset visibility of all apartment buttons
  apartmentDetails.forEach(apartment => {
    const btn = document.getElementById(apartment.id);
    if (btn) btn.style.display = 'inline-block';
  });
});

document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners to buttons with class 'ApBtn'
    document.querySelectorAll(".planBtn").forEach(button => {
        button.addEventListener("click", function () {
            console.log("Button clicked:", button.id); // Log the button ID

            const apartmentId = button.id; // Extract apartment ID from button ID
            if (apartmentId) {
                showApartmentDetails(apartmentId);
            }
        });
    });


    const shiturText = document.getElementById("shiturShkrimi");
    const rezervuarText = document.getElementById("rezervuarShkrimi");

    apartmentDetails.forEach(apartment => {
        const button = document.getElementById(apartment.id); // Get the button by ID
        if (button) {
            // Apply initial colors
            if (apartment.statusi === "Shitur") {
                button.style.backgroundImage = "linear-gradient(to top, #FFB9B9 0%, #ff9999 80%, #FDFDFD 100%)";
                button.style.color = "#A80000";
                button.style.fontWeight = "bold";
            } else if (apartment.statusi === "Rezervuar") {
                button.style.backgroundImage = "linear-gradient(to top, #FFEBD1 0%, #ffC170 80%, #FDFDFD 100%)";
                button.style.color = "red";
                button.style.fontWeight = "bold";

            }

            // Add click event listener
            button.addEventListener("click", function () {
                if (apartment.statusi === "Shitur") {
                    shiturText.classList.remove("hidden");
                    rezervuarText.classList.add("hidden");
                } else if (apartment.statusi === "Rezervuar") {
                    rezervuarText.classList.remove("hidden");
                    shiturText.classList.add("hidden");
                } else {
                    shiturText.classList.add("hidden");
                    rezervuarText.classList.add("hidden");
                }
            });
        }
    });

        const displayImage = document.getElementById("display-image");
        const fullscreenContainer = document.getElementById("fullscreenContainer");
        const fullscreenImage = document.getElementById("fullscreenImage");
        const planContainer = document.getElementById("plan-container");

        // 📌 Buttons that trigger the image
        document.querySelectorAll(".planBtn").forEach(button => {
            button.addEventListener("click", () => {
                // Extract photo name from button.id

                const imageSrc = `Planet_JA/${button.id}_FULL-3.webp`;
                // Display the image in main view
                displayImage.src = imageSrc;

                // Show the container if it was hidden
                planContainer.style.display = "block";
            });
        });

        // 🖼 Click on display image → open fullscreen
        displayImage.addEventListener("click", () => {
            fullscreenImage.src = displayImage.src;
            fullscreenContainer.classList.remove("hidden");

            // Request full screen (works best on mobile)
            if (fullscreenContainer.requestFullscreen) {
                fullscreenContainer.requestFullscreen();
            } else if (fullscreenContainer.webkitRequestFullscreen) {
                fullscreenContainer.webkitRequestFullscreen(); // Safari
            } else if (fullscreenContainer.msRequestFullscreen) {
                fullscreenContainer.msRequestFullscreen(); // IE
            }
        });

        // 🔙 Click on fullscreen image → close fullscreen
        fullscreenImage.addEventListener("click", () => {
            fullscreenContainer.classList.add("hidden");

            // Exit full screen
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else if (document.webkitFullscreenElement) {
                document.webkitExitFullscreen();
            } else if (document.msFullscreenElement) {
                document.msExitFullscreen();
            }
        });
        window.addEventListener("orientationchange", () => {
            // Force redraw/resizing (if needed)
            if (document.fullscreenElement) {
                fullscreenImage.style.maxWidth = window.innerWidth + "px";
                fullscreenImage.style.maxHeight = window.innerHeight + "px";
            }
        });

        //Click outside image in plan-container → hide container
        planContainer.addEventListener("click", (event) => {
            if (!event.target.closest("#display-image")) {
                planContainer.style.display = "none";
                document.getElementById("shiturShkrimi").classList.add("hidden");
                document.getElementById("rezervuarShkrimi").classList.add("hidden");
            }
        });

  



})
