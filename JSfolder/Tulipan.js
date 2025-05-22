

const apartmentDetails = [

    { id: "A1HA1", Tipology: "1 + 1", building: "A1", floor: 0, NetArea: 72.48, ComonArea: 14.33, TotalArea: 86.81, GreenArea: 50.7, TerraceArea: 0, ParkingNumber: "BLLOKUAR", statusi: "Shitur", shenime: "TEKNOFIRE" },
    { id: "A1HA2", Tipology: "2 + 1", building: "A1", floor: 0, NetArea: 100.92, ComonArea: 19.95, TotalArea: 120.87, GreenArea: 81.4, TerraceArea: 25.9, ParkingNumber: "BLLOKUAR", statusi: "Shitur", shenime: "TEKNOFIRE" },
    { id: "A1HA3", Tipology: "1 + 1", building: "A1", floor: 1, NetArea: 76, ComonArea: 15.03, TotalArea: 91.03, GreenArea: 0, TerraceArea: 0, ParkingNumber: "BLLOKUAR", statusi: "Shitur", shenime: "TEKNOFIRE" },
    { id: "A1HA4", Tipology: "2 + 1", building: "A1", floor: 1, NetArea: 125.24, ComonArea: 24.76, TotalArea: 150, GreenArea: 0, TerraceArea: 0, ParkingNumber: "BLLOKUAR", statusi: "Shitur", shenime: "TEKNOFIRE" },
    { id: "A1HA5", Tipology: "3 + 1", building: "A1", floor: 2, NetArea: 194.54, ComonArea: 38.47, TotalArea: 233.01, GreenArea: 0, TerraceArea: 0, ParkingNumber: "BLLOKUAR", statusi: "Shitur", shenime: "TEKNOFIRE" },
    { id: "A2HA1", Tipology: "1 + 1", building: "A2", floor: 0, NetArea: 72.48, ComonArea: 14.33, TotalArea: 86.81, GreenArea: 50.7, TerraceArea: 0, ParkingNumber: "NUK KA CAKTUAR", statusi: "Shitur", shenime: "GEZIM BEQAJ" },
    { id: "A2HA2", Tipology: "2 + 1", building: "A2", floor: 0, NetArea: 100.92, ComonArea: 19.95, TotalArea: 120.87, GreenArea: 60, TerraceArea: 48.7, ParkingNumber: "P01 04 - 68", statusi: "Shitur", shenime: "SHABAN XHAFERRAJ" },
    { id: "A2HA3", Tipology: "1 + 1", building: "A2", floor: 1, NetArea: 76, ComonArea: 15.03, TotalArea: 91.03, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P01 04 - 49, 50", statusi: "Shitur", shenime: "VEKO " },
    { id: "A2HA4", Tipology: "2 + 1", building: "A2", floor: 1, NetArea: 125.24, ComonArea: 24.76, TotalArea: 150, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P01 04 - 51, 52", statusi: "Shitur", shenime: "VEKO " },
    { id: "A2HA5", Tipology: "3 + 1", building: "A2", floor: 2, NetArea: 194.54, ComonArea: 38.47, TotalArea: 233.01, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P01 04 - 47, 48", statusi: "Shitur", shenime: "CIM GJOKAJ" },
    { id: "A3HA1", Tipology: "1 + 1", building: "A3", floor: 0, NetArea: 72.48, ComonArea: 14.33, TotalArea: 86.81, GreenArea: 12.4, TerraceArea: 0, ParkingNumber: "P05 01 - 01", statusi: "Shitur", shenime: "ARDJAN DEMAJ" },
    { id: "A3HA2", Tipology: "2 + 1", building: "A3", floor: 0, NetArea: 100.92, ComonArea: 19.95, TotalArea: 120.87, GreenArea: 88, TerraceArea: 10, ParkingNumber: "P05 01 - 02", statusi: "Shitur", shenime: "ARDJAN DEMAJ" },
    { id: "A3HA3", Tipology: "1 + 1", building: "A3", floor: 1, NetArea: 76, ComonArea: 15.03, TotalArea: 91.03, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P05 01 - 03, 04", statusi: "Shitur", shenime: "Ardjan ismaili(Miku Beharit)" },
    { id: "A3HA4", Tipology: "2 + 1", building: "A3", floor: 1, NetArea: 125.24, ComonArea: 24.76, TotalArea: 150, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P05 02 - 17, 18", statusi: "Shitur", shenime: "Ardjan ismaili" },
    { id: "A3HA5", Tipology: "3 + 1", building: "A3", floor: 2, NetArea: 194.54, ComonArea: 38.47, TotalArea: 233.01, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P08 01 86", statusi: "Shitur", shenime: "Erol Menkshi" },
    { id: "A4HA1", Tipology: "1 + 1", building: "A4", floor: 0, NetArea: 72.48, ComonArea: 14.33, TotalArea: 86.81, GreenArea: 0, TerraceArea: 48.3, ParkingNumber: "P01 04 - 64, 65", statusi: "Shitur", shenime: "GEZIM CAUSHI " },
    { id: "A4HA2", Tipology: "2 + 1", building: "A4", floor: 0, NetArea: 100.92, ComonArea: 19.95, TotalArea: 120.87, GreenArea: 44.2, TerraceArea: 38, ParkingNumber: "P01 04 - 66, 67", statusi: "Shitur", shenime: "GEZIM CAUSHI " },
    { id: "A4HA3", Tipology: "1 + 1", building: "A4", floor: 1, NetArea: 76, ComonArea: 15.03, TotalArea: 91.03, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P01 04 - 69", statusi: "Shitur", shenime: "Besnik Shehaj" },
    { id: "A4HA4", Tipology: "2 + 1", building: "A4", floor: 1, NetArea: 125.24, ComonArea: 24.76, TotalArea: 150, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P01 04 - 70", statusi: "Shitur", shenime: "Adi fasasda" },
    { id: "A4HA5", Tipology: "3 + 1", building: "A4", floor: 2, NetArea: 194.54, ComonArea: 38.47, TotalArea: 233.01, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P01 04 - 71, 72", statusi: "Shitur", shenime: "LUTFI GJOKA " },
    { id: "A5HA1", Tipology: "1 + 1", building: "A5", floor: 0, NetArea: 72.48, ComonArea: 14.33, TotalArea: 86.81, GreenArea: 452, TerraceArea: 123.4, ParkingNumber: "P05 02 - 1", statusi: "Shitur", shenime: "BEHAR CUKAJ" },
    { id: "A5HA2", Tipology: "2 + 1", building: "A5", floor: 0, NetArea: 100.92, ComonArea: 19.95, TotalArea: 120.87, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P05 02 - 2", statusi: "Shitur", shenime: "BEHAR CUKAJ" },
    { id: "A5HA3", Tipology: "1 + 1", building: "A5", floor: 1, NetArea: 76, ComonArea: 15.03, TotalArea: 91.03, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P05 02 - 3", statusi: "Shitur", shenime: "BEHAR CUKAJ" },
    { id: "A5HA4", Tipology: "2 + 1", building: "A5", floor: 1, NetArea: 125.24, ComonArea: 24.76, TotalArea: 150, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P05 02 - 4", statusi: "Shitur", shenime: "BEHAR CUKAJ" },
    { id: "A5HA5", Tipology: "3 + 1", building: "A5", floor: 2, NetArea: 194.54, ComonArea: 38.47, TotalArea: 233.01, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P05 02 - 5", statusi: "Shitur", shenime: "BEHAR CUKAJ" },
    { id: "A6HA1", Tipology: "1 + 1", building: "A6", floor: 0, NetArea: 72.48, ComonArea: 14.33, TotalArea: 86.81, GreenArea: 133.5, TerraceArea: 27.2, ParkingNumber: "P06 04 - 53", statusi: "Shitur", shenime: "BRUNES" },
    { id: "A6HA2", Tipology: "2 + 1", building: "A6", floor: 0, NetArea: 100.92, ComonArea: 19.95, TotalArea: 120.87, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P06 04 - 54", statusi: "Shitur", shenime: "BRUNES" },
    { id: "A6HA3", Tipology: "1 + 1", building: "A6", floor: 1, NetArea: 76, ComonArea: 15.03, TotalArea: 91.03, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P06 04 - 55", statusi: "Shitur", shenime: "BRUNES" },
    { id: "A6HA4", Tipology: "2 + 1", building: "A6", floor: 1, NetArea: 125.24, ComonArea: 24.76, TotalArea: 150, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P06 04 - 56", statusi: "Shitur", shenime: "BRUNES" },
    { id: "A6HA5", Tipology: "3 + 1", building: "A6", floor: 2, NetArea: 194.54, ComonArea: 38.47, TotalArea: 233.01, GreenArea: 0, TerraceArea: 0, ParkingNumber: "NUK KA CAKTUAR", statusi: "Shitur", shenime: "BRUNES" },
    { id: "A7HA1", Tipology: "1 + 1", building: "A7", floor: 0, NetArea: 72.48, ComonArea: 14.33, TotalArea: 86.81, GreenArea: 42.14, TerraceArea: 0, ParkingNumber: "P2 01 -01", statusi: "Shitur", shenime: "HALIL GASHI" },
    { id: "A7HA2", Tipology: "2 + 1", building: "A7", floor: 0, NetArea: 100.92, ComonArea: 19.95, TotalArea: 120.87, GreenArea: 94.5, TerraceArea: 0, ParkingNumber: "P2 01 -02", statusi: "Shitur", shenime: "HALIL GASHI" },
    { id: "A7HA3", Tipology: "1 + 1", building: "A7", floor: 1, NetArea: 76, ComonArea: 15.03, TotalArea: 91.03, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P2 01 -03", statusi: "Shitur", shenime: "HALIL GASHI" },
    { id: "A7HA4", Tipology: "2 + 1", building: "A7", floor: 1, NetArea: 125.24, ComonArea: 24.76, TotalArea: 150, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P2 01 -04", statusi: "Shitur", shenime: "HALIL GASHI" },
    { id: "A7HA5", Tipology: "3 + 1", building: "A7", floor: 2, NetArea: 194.54, ComonArea: 38.47, TotalArea: 233.01, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P2 01 -05, 06", statusi: "Shitur", shenime: "HALIL GASHI" },
    { id: "A8HA1", Tipology: "1 + 1", building: "A8", floor: 0, NetArea: 72.48, ComonArea: 14.33, TotalArea: 86.81, GreenArea: 45, TerraceArea: 0, ParkingNumber: "BLLOKUAR", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "A8HA2", Tipology: "2 + 1", building: "A8", floor: 0, NetArea: 100.92, ComonArea: 19.95, TotalArea: 120.87, GreenArea: 17, TerraceArea: 73.5, ParkingNumber: "BLLOKUAR", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "A8HA3", Tipology: "1 + 1", building: "A8", floor: 1, NetArea: 76, ComonArea: 15.03, TotalArea: 91.03, GreenArea: 0, TerraceArea: 0, ParkingNumber: "BLLOKUAR", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "A8HA4", Tipology: "2 + 1", building: "A8", floor: 1, NetArea: 125.24, ComonArea: 24.76, TotalArea: 150, GreenArea: 0, TerraceArea: 0, ParkingNumber: "BLLOKUAR", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "A8HA5", Tipology: "3 + 1", building: "A8", floor: 2, NetArea: 194.54, ComonArea: 38.47, TotalArea: 233.01, GreenArea: 0, TerraceArea: 0, ParkingNumber: "BLLOKUAR", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "A9HA1", Tipology: "1 + 1", building: "A9", floor: 0, NetArea: 72.48, ComonArea: 14.33, TotalArea: 86.81, GreenArea: 50, TerraceArea: 0, ParkingNumber: "", statusi: "Per shitje", shenime: "KUJTIM SULA" },
    { id: "A9HA2", Tipology: "2 + 1", building: "A9", floor: 0, NetArea: 100.92, ComonArea: 19.95, TotalArea: 120.87, GreenArea: 81, TerraceArea: 29.2, ParkingNumber: "", statusi: "Per shitje", shenime: "KUJTIM SULA" },
    { id: "A9HA3", Tipology: "1 + 1", building: "A9", floor: 1, NetArea: 76, ComonArea: 15.03, TotalArea: 91.03, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P03 02 - 11, 12", statusi: "Shitur", shenime: "ARDJAN MALASI" },
    { id: "A9HA4", Tipology: "2 + 1", building: "A9", floor: 1, NetArea: 125.24, ComonArea: 24.76, TotalArea: 150, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P05 03 - 25, 26", statusi: "Shitur", shenime: "ARDJAN MALASI" },
    { id: "A9HA5", Tipology: "3 + 1", building: "A9", floor: 2, NetArea: 194.54, ComonArea: 38.47, TotalArea: 233.01, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P03 02 - 07, 08", statusi: "Shitur", shenime: "ILIR IBRAJ" },
    { id: "A10HA1", Tipology: "1 + 1", building: "A10", floor: 0, NetArea: 72.48, ComonArea: 14.33, TotalArea: 86.81, GreenArea: 50, TerraceArea: 0, ParkingNumber: "P07 02 13", statusi: "Shitur", shenime: "amarildo" },
    { id: "A10HA2", Tipology: "2 + 1", building: "A10", floor: 0, NetArea: 100.92, ComonArea: 19.95, TotalArea: 120.87, GreenArea: 79, TerraceArea: 26, ParkingNumber: "P07 02 14", statusi: "Shitur", shenime: "amarildo" },
    { id: "A10HA3", Tipology: "1 + 1", building: "A10", floor: 1, NetArea: 76, ComonArea: 15.03, TotalArea: 91.03, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P07 02 10", statusi: "Shitur", shenime: "MITHAT KONDI" },
    { id: "A10HA4", Tipology: "2 + 1", building: "A10", floor: 1, NetArea: 125.24, ComonArea: 24.76, TotalArea: 150, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P07 02 11", statusi: "Shitur", shenime: "MITHAT KONDI" },
    { id: "A10HA5", Tipology: "3 + 1", building: "A10", floor: 2, NetArea: 194.54, ComonArea: 38.47, TotalArea: 233.01, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Shitur", shenime: "Matilda Dyrkaj" },
    { id: "A11HA1", Tipology: "1 + 1", building: "A11", floor: 0, NetArea: 72.48, ComonArea: 14.33, TotalArea: 86.81, GreenArea: 0, TerraceArea: 0, ParkingNumber: "BLLOKUAR", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "A11HA2", Tipology: "2 + 1", building: "A11", floor: 0, NetArea: 100.92, ComonArea: 19.95, TotalArea: 120.87, GreenArea: 44.8, TerraceArea: 18.9, ParkingNumber: "BLLOKUAR", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "A11HA3", Tipology: "1 + 1", building: "A11", floor: 1, NetArea: 76, ComonArea: 15.03, TotalArea: 91.03, GreenArea: 0, TerraceArea: 0, ParkingNumber: "BLLOKUAR", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "A11HA4", Tipology: "2 + 1", building: "A11", floor: 1, NetArea: 125.24, ComonArea: 24.76, TotalArea: 150, GreenArea: 0, TerraceArea: 0, ParkingNumber: "BLLOKUAR", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "A11HA5", Tipology: "3 + 1", building: "A11", floor: 2, NetArea: 194.54, ComonArea: 38.47, TotalArea: 233.01, GreenArea: 0, TerraceArea: 0, ParkingNumber: "BLLOKUAR", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "B1HB1", Tipology: "2 + 1", building: "B1", floor: 0, NetArea: 112.95, ComonArea: 17.57, TotalArea: 130.52, GreenArea: 45, TerraceArea: 55, ParkingNumber: "P01 01 5, 6", statusi: "Shitur", shenime: "KYMJA CEBI" },
    { id: "B1HB2", Tipology: "1 + 1", building: "B1", floor: 0, NetArea: 65.55, ComonArea: 10.19, TotalArea: 75.74, GreenArea: 34, TerraceArea: 32, ParkingNumber: "P01 01 12, 13", statusi: "Shitur", shenime: "SHKUMBIN BIMO" },
    { id: "B1HB3", Tipology: "2 + 1", building: "B1", floor: 0, NetArea: 107.1, ComonArea: 16.66, TotalArea: 123.76, GreenArea: 53, TerraceArea: 55, ParkingNumber: "P01 01 3, 4", statusi: "Shitur", shenime: "ALBA BIMO" },
    { id: "B1HB4", Tipology: "2 + 1", building: "B1", floor: 1, NetArea: 129.24, ComonArea: 20.1, TotalArea: 149.34, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P01 01 15", statusi: "Shitur", shenime: "DRITAN HISI" },
    { id: "B1HB5", Tipology: "1 + 1", building: "B1", floor: 1, NetArea: 70.75, ComonArea: 11, TotalArea: 81.75, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P01 01 1, 2", statusi: "Shitur", shenime: "Denis Mavriqi" },
    { id: "B1HB6", Tipology: "2 + 1", building: "B1", floor: 1, NetArea: 127.05, ComonArea: 19.76, TotalArea: 146.81, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P01 01 8, 9", statusi: "Rezervuar", shenime: "Lutfi Nano" },
    { id: "B1HB7", Tipology: "3 + 1", building: "B1", floor: 2, NetArea: 201.29, ComonArea: 31.31, TotalArea: 232.6, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P01 01 10, 11", statusi: "Shitur", shenime: "Vincenso Gremi" },
    { id: "B1HB8", Tipology: "3 + 1", building: "B1", floor: 2, NetArea: 148.63, ComonArea: 23.12, TotalArea: 171.75, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "B2HB1", Tipology: "2 + 1", building: "B2", floor: 0, NetArea: 112.95, ComonArea: 17.57, TotalArea: 130.52, GreenArea: 80.9, TerraceArea: 50, ParkingNumber: "P01 01 33, 3 4", statusi: "Shitur", shenime: "Altin Dinaj" },
    { id: "B2HB2", Tipology: "1 + 1", building: "B2", floor: 0, NetArea: 65.55, ComonArea: 10.19, TotalArea: 75.74, GreenArea: 14.7, TerraceArea: 20.6, ParkingNumber: "P01 01 53, 54", statusi: "Shitur", shenime: "AGIM RAMA" },
    { id: "B2HB3", Tipology: "2 + 1", building: "B2", floor: 0, NetArea: 107.1, ComonArea: 16.66, TotalArea: 123.76, GreenArea: 84.8, TerraceArea: 52.1, ParkingNumber: "P01 01 55", statusi: "Shitur", shenime: "AGIM RAMA" },
    { id: "B2HB4", Tipology: "2 + 1", building: "B2", floor: 1, NetArea: 129.24, ComonArea: 20.1, TotalArea: 149.34, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P01 01 35", statusi: "Shitur", shenime: "Mimoza bala" },
    { id: "B2HB5", Tipology: "1 + 1", building: "B2", floor: 1, NetArea: 70.75, ComonArea: 11, TotalArea: 81.75, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P01 03 57", statusi: "Shitur", shenime: "HAMDI RAMA" },
    { id: "B2HB6", Tipology: "2 + 1", building: "B2", floor: 1, NetArea: 127.05, ComonArea: 19.76, TotalArea: 146.81, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P01 03 56", statusi: "Shitur", shenime: "SAJMIR BONJAKU(renato)" },
    { id: "B2HB7", Tipology: "3 + 1", building: "B2", floor: 2, NetArea: 201.29, ComonArea: 31.31, TotalArea: 232.6, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P01 03 29", statusi: "Shitur", shenime: "Yzeir" },
    { id: "B2HB8", Tipology: "3 + 1", building: "B2", floor: 2, NetArea: 148.63, ComonArea: 23.12, TotalArea: 171.75, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P01 03 31", statusi: "Shitur", shenime: "Kemila Sejdini" },
    { id: "B3HB1", Tipology: "2 + 1", building: "B3", floor: 0, NetArea: 116.8, ComonArea: 17.63, TotalArea: 134.43, GreenArea: 128.4, TerraceArea: 0, ParkingNumber: "P05 03 - 22, 23", statusi: "Shitur", shenime: "Arjan Syziu" },
    { id: "B3HB2", Tipology: "1 + 1", building: "B3", floor: 0, NetArea: 65.55, ComonArea: 9.89, TotalArea: 75.44, GreenArea: 17.6, TerraceArea: 0, ParkingNumber: "P05 03 - 24", statusi: "Shitur", shenime: "Arjan Syziu" },
    { id: "B3HB3", Tipology: "2 + 1", building: "B3", floor: 0, NetArea: 107.1, ComonArea: 16.66, TotalArea: 123.76, GreenArea: 55.4, TerraceArea: 58, ParkingNumber: "P05 03 - 27, 28", statusi: "Shitur", shenime: "Turi oshe" },
    { id: "B3HB4", Tipology: "2 + 1", building: "B3", floor: 1, NetArea: 129.24, ComonArea: 20.1, TotalArea: 149.34, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P05-03 - 31", statusi: "Shitur", shenime: "KLODJAN HISI" },
    { id: "B3HB5", Tipology: "1 + 1", building: "B3", floor: 1, NetArea: 70.75, ComonArea: 11, TotalArea: 81.75, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Shitur", shenime: "ASTRIT GOSTURANI" },
    { id: "B3HB6", Tipology: "2 + 1", building: "B3", floor: 1, NetArea: 127.05, ComonArea: 19.76, TotalArea: 146.81, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P05-03 - 32", statusi: "Shitur", shenime: "KLODJAN HISI" },
    { id: "B3HB7", Tipology: "3 + 1", building: "B3", floor: 2, NetArea: 201.29, ComonArea: 31.31, TotalArea: 232.6, GreenArea: 0, TerraceArea: 0, ParkingNumber: "NUK KA CAKTUAR", statusi: "Rezervuar", shenime: "GEZIM BEQAJ" },
    { id: "B3HB8", Tipology: "3 + 1", building: "B3", floor: 2, NetArea: 148.63, ComonArea: 23.12, TotalArea: 171.75, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P05 03 - 25, 26", statusi: "Shitur", shenime: "ARDJAN MALASI" },
    { id: "B4HB37653", Tipology: "x", building: "B4", floor: 0, NetArea: 276.9, ComonArea: 0, TotalArea: 276.9, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "B4HB4", Tipology: "2 + 1", building: "B4", floor: 1, NetArea: 129.24, ComonArea: 20.1, TotalArea: 149.34, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "B4HB5", Tipology: "1 + 1", building: "B4", floor: 1, NetArea: 70.75, ComonArea: 11, TotalArea: 81.75, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "B4HB6", Tipology: "2 + 1", building: "B4", floor: 1, NetArea: 127.05, ComonArea: 19.76, TotalArea: 146.81, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "B4HB7", Tipology: "3 + 1", building: "B4", floor: 2, NetArea: 201.29, ComonArea: 31.31, TotalArea: 232.6, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "B4HB8", Tipology: "3 + 1", building: "B4", floor: 2, NetArea: 148.63, ComonArea: 23.12, TotalArea: 171.75, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Rezervuar", shenime: "BLLOKUAR" },
    { id: "B5HB1", Tipology: "2 + 1", building: "B5", floor: 0, NetArea: 112.95, ComonArea: 17.57, TotalArea: 130.52, GreenArea: 128.4, TerraceArea: 0, ParkingNumber: "P01 06 78, 79", statusi: "Shitur", shenime: "Sulejman Likaj" },
    { id: "B5HB2", Tipology: "1 + 1", building: "B5", floor: 0, NetArea: 65.55, ComonArea: 10.19, TotalArea: 75.74, GreenArea: 17.6, TerraceArea: 0, ParkingNumber: "", statusi: "Rezervuar", shenime: "Turi oshe" },
    { id: "B5HB3", Tipology: "2 + 1", building: "B5", floor: 0, NetArea: 107.1, ComonArea: 16.66, TotalArea: 123.76, GreenArea: 126.3, TerraceArea: 0, ParkingNumber: "P01 06 86, 87", statusi: "Shitur", shenime: "Arjan Cukaj" },
    { id: "B5HB4", Tipology: "2 + 1", building: "B5", floor: 1, NetArea: 129.24, ComonArea: 20.1, TotalArea: 149.34, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "B5HB5", Tipology: "1 + 1", building: "B5", floor: 1, NetArea: 70.75, ComonArea: 11, TotalArea: 81.75, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P01 06 80, 81", statusi: "Rezervuar", shenime: "Taulant Naci" },
    { id: "B5HB6", Tipology: "2 + 1", building: "B5", floor: 1, NetArea: 127.05, ComonArea: 19.76, TotalArea: 146.81, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P01 06 82", statusi: "Rezervuar", shenime: "Taulant Naci" },
    { id: "B5HB7", Tipology: "3 + 1", building: "B5", floor: 2, NetArea: 201.29, ComonArea: 31.31, TotalArea: 232.6, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "B5HB8", Tipology: "3 + 1", building: "B5", floor: 2, NetArea: 148.63, ComonArea: 23.12, TotalArea: 171.75, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P01 06 90, 91", statusi: "Shitur", shenime: "BESMIR SHEHAJ" },
    { id: "B6HB1", Tipology: "3 + 1", building: "B6", floor: 0, NetArea: 143, ComonArea: 22, TotalArea: 165, GreenArea: 150.5, TerraceArea: 0, ParkingNumber: "P06 03 - 42, 43, 44", statusi: "Shitur", shenime: "ARBEN SHINAJ" },
    { id: "B6HB2", Tipology: "3 + 1", building: "B6", floor: 0, NetArea: 143, ComonArea: 22, TotalArea: 165, GreenArea: 186, TerraceArea: 0, ParkingNumber: "P06 03 - 47, 48", statusi: "Shitur", shenime: "RIDJAN KARASANI" },
    { id: "B6HB4", Tipology: "2 + 1", building: "B6", floor: 1, NetArea: 129.24, ComonArea: 20.1, TotalArea: 149.34, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "B6HB5", Tipology: "1 + 1", building: "B6", floor: 1, NetArea: 70.75, ComonArea: 11, TotalArea: 81.75, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "B6HB6", Tipology: "2 + 1", building: "B6", floor: 1, NetArea: 127.05, ComonArea: 19.76, TotalArea: 146.81, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "B6HB7", Tipology: "3 + 1", building: "B6", floor: 2, NetArea: 201.29, ComonArea: 31.31, TotalArea: 232.6, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "B6HB8", Tipology: "3 + 1", building: "B6", floor: 2, NetArea: 148.63, ComonArea: 23.12, TotalArea: 171.75, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P06 05 - 45, 46", statusi: "Shitur", shenime: "ARDIT  BEJLERI" },
    { id: "B7HB1", Tipology: "3 + 1", building: "B7", floor: 0, NetArea: 143, ComonArea: 22, TotalArea: 165, GreenArea: 186, TerraceArea: 0, ParkingNumber: "P02 02 - 17, 18", statusi: "Shitur", shenime: "ERMAL SHINI" },
    { id: "B7HB2", Tipology: "3 + 1", building: "B7", floor: 0, NetArea: 143, ComonArea: 22, TotalArea: 165, GreenArea: 185, TerraceArea: 0, ParkingNumber: "P02 02 - 19, 20", statusi: "Shitur", shenime: "ELVIN LEKA" },
    { id: "B7HB4", Tipology: "2 + 1", building: "B7", floor: 1, NetArea: 129.24, ComonArea: 20.1, TotalArea: 149.34, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P02 02 - 11, 14", statusi: "Shitur", shenime: "Ledian Mimini" },
    { id: "B7HB5", Tipology: "1 + 1", building: "B7", floor: 1, NetArea: 70.75, ComonArea: 11, TotalArea: 81.75, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "B7HB6", Tipology: "2 + 1", building: "B7", floor: 1, NetArea: 127.05, ComonArea: 19.76, TotalArea: 146.81, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P02 02 - 15, 16", statusi: "Shitur", shenime: "EUGENT CAUSHI" },
    { id: "B7HB7", Tipology: "3 + 1", building: "B7", floor: 2, NetArea: 201.29, ComonArea: 31.31, TotalArea: 232.6, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P02 02 - 07, 08", statusi: "Shitur", shenime: "eringin avdo" },
    { id: "B7HB8", Tipology: "3 + 1", building: "B7", floor: 2, NetArea: 148.63, ComonArea: 23.12, TotalArea: 171.75, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P02 02 - 12, 13", statusi: "Shitur", shenime: "Edjola Diazi" },
    { id: "C1HC1", Tipology: "3 + 1", building: "C1", floor: 0, NetArea: 126.18, ComonArea: 20.38, TotalArea: 146.56, GreenArea: ?, TerraceArea: 0, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C1HC38048", Tipology: "x", building: "C1", floor: 1, NetArea: 294.34, ComonArea: 0, TotalArea: 294.34, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C1HC5", Tipology: "2 + 1", building: "C1", floor: 2, NetArea: 124.04, ComonArea: 20.04, TotalArea: 144.08, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C1HC6", Tipology: "1 + 1", building: "C1", floor: 2, NetArea: 67.99, ComonArea: 10.98, TotalArea: 78.97, GreenArea: ?, TerraceArea: 0, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C1HC7", Tipology: "2 + 1", building: "C1", floor: 2, NetArea: 108.98, ComonArea: 17.61, TotalArea: 126.59, GreenArea: ?, TerraceArea: 0, ParkingNumber: "P08 01 64, 65", statusi: "Shitur", shenime: "BASHKIM PROGRI" },
    { id: "C1HC8", Tipology: "3 + 1", building: "C1", floor: 3, NetArea: 247.4, ComonArea: 26, TotalArea: 273, GreenArea: 0, TerraceArea: 89.1, ParkingNumber: "P08 01 66, 67", statusi: "Shitur", shenime: "Vladimir Bajraktari" },
    { id: "C2HC1", Tipology: "3 + 1", building: "C2", floor: 0, NetArea: 126.18, ComonArea: 20.38, TotalArea: 146.56, GreenArea: 107.8, TerraceArea: 0, ParkingNumber: "P08 01 1, 2", statusi: "Shitur", shenime: "DASHAMIR MUSTAFA" },
    { id: "C2HC2", Tipology: "2 + 1", building: "C2", floor: 1, NetArea: 125.61, ComonArea: 20.29, TotalArea: 145.9, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P08 01 79, 80", statusi: "Shitur", shenime: "Endri Mezura" },
    { id: "C2HC3", Tipology: "1 + 1", building: "C2", floor: 1, NetArea: 67.99, ComonArea: 10.98, TotalArea: 78.97, GreenArea: 0, TerraceArea: 28.96, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C2HC4", Tipology: "2 + 1", building: "C2", floor: 1, NetArea: 121.89, ComonArea: 19.69, TotalArea: 141.58, GreenArea: 0, TerraceArea: 97.1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C2HC5", Tipology: "2 + 1", building: "C2", floor: 2, NetArea: 124.04, ComonArea: 20.04, TotalArea: 144.08, GreenArea: 0, TerraceArea: 0, ParkingNumber: "NUK KA CAKTUAR", statusi: "Shitur", shenime: "Endrit Tuka" },
    { id: "C2HC6", Tipology: "1 + 1", building: "C2", floor: 2, NetArea: 67.99, ComonArea: 10.98, TotalArea: 78.97, GreenArea: 0, TerraceArea: 0, ParkingNumber: "NUK KA CAKTUAR", statusi: "Rezervuar", shenime: "SAFETY ELEVATOR" },
    { id: "C2HC7", Tipology: "2 + 1", building: "C2", floor: 2, NetArea: 108.98, ComonArea: 17.61, TotalArea: 126.59, GreenArea: 47.32, TerraceArea: 0, ParkingNumber: "P08 01 81, 82", statusi: "Shitur", shenime: "Altin Hoxha" },
    { id: "C2HC8", Tipology: "3 + 1", building: "C2", floor: 3, NetArea: 247.4, ComonArea: 26, TotalArea: 273, GreenArea: 0, TerraceArea: 89.1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C3HC1", Tipology: "3 + 1", building: "C3", floor: 0, NetArea: 126.18, ComonArea: 20.38, TotalArea: 146.56, GreenArea: 127.5, TerraceArea: 0, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C3HC2", Tipology: "2 + 1", building: "C3", floor: 1, NetArea: 125.61, ComonArea: 20.29, TotalArea: 145.9, GreenArea: 0, TerraceArea: 36.5, ParkingNumber: "P08 01z 69, 70, 66, 67, 68", statusi: "Rezervuar", shenime: "GEZIM BEQAJ" },
    { id: "C3HC3", Tipology: "1 + 1", building: "C3", floor: 1, NetArea: 67.99, ComonArea: 10.98, TotalArea: 78.97, GreenArea: 0, TerraceArea: 28.96, ParkingNumber: "P08 02 73, 74", statusi: "Rezervuar", shenime: "Ermal Bakia" },
    { id: "C3HC4", Tipology: "2 + 1", building: "C3", floor: 1, NetArea: 121.89, ComonArea: 19.69, TotalArea: 141.58, GreenArea: 0, TerraceArea: 97.1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C3HC5", Tipology: "2 + 1", building: "C3", floor: 2, NetArea: 124.04, ComonArea: 20.04, TotalArea: 144.08, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P08 02 10", statusi: "Shitur", shenime: "MA STUDIO" },
    { id: "C3HC6", Tipology: "1 + 1", building: "C3", floor: 2, NetArea: 67.99, ComonArea: 10.98, TotalArea: 78.97, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Rezervuar", shenime: "Albert" },
    { id: "C3HC7", Tipology: "2 + 1", building: "C3", floor: 2, NetArea: 108.98, ComonArea: 17.61, TotalArea: 126.59, GreenArea: 46.5, TerraceArea: 0, ParkingNumber: "", statusi: "Shitur", shenime: "Ylli Alushi" },
    { id: "C3HC8", Tipology: "3 + 1", building: "C3", floor: 3, NetArea: 247.4, ComonArea: 26, TotalArea: 273, GreenArea: 0, TerraceArea: 89.1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C4HC1", Tipology: "3 + 1", building: "C4", floor: 0, NetArea: 126.18, ComonArea: 20.38, TotalArea: 146.56, GreenArea: 127.5, TerraceArea: 0, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C4HC2", Tipology: "2 + 1", building: "C4", floor: 1, NetArea: 125.61, ComonArea: 20.29, TotalArea: 145.9, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P08 03 14, 15, 16", statusi: "Rezervuar", shenime: "ALBERT" },
    { id: "C4HC3", Tipology: "1 + 1", building: "C4", floor: 1, NetArea: 67.99, ComonArea: 10.98, TotalArea: 78.97, GreenArea: 0, TerraceArea: 28.96, ParkingNumber: "P08 03 61, 62", statusi: "Rezervuar", shenime: "Klodian Metaj" },
    { id: "C4HC4", Tipology: "2 + 1", building: "C4", floor: 1, NetArea: 121.89, ComonArea: 19.69, TotalArea: 141.58, GreenArea: 0, TerraceArea: 97.1, ParkingNumber: "", statusi: "Rezervuar", shenime: "JP Klima" },
    { id: "C4HC5", Tipology: "2 + 1", building: "C4", floor: 2, NetArea: 124.04, ComonArea: 20.04, TotalArea: 144.08, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P08 03 63", statusi: "Shitur", shenime: "ENKELEDA TROKTHI" },
    { id: "C4HC6", Tipology: "1 + 1", building: "C4", floor: 2, NetArea: 67.99, ComonArea: 10.98, TotalArea: 78.97, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Shitur", shenime: "XENI GJOKA " },
    { id: "C4HC7", Tipology: "2 + 1", building: "C4", floor: 2, NetArea: 108.98, ComonArea: 17.61, TotalArea: 126.59, GreenArea: 196, TerraceArea: 0, ParkingNumber: "P08 03 - 59, 60", statusi: "Shitur", shenime: "XENI GJOKA " },
    { id: "C4HC8", Tipology: "3 + 1", building: "C4", floor: 3, NetArea: 247.4, ComonArea: 26, TotalArea: 273, GreenArea: 0, TerraceArea: 89.1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C5HC1", Tipology: "3 + 1", building: "C5", floor: 0, NetArea: 126.18, ComonArea: 20.38, TotalArea: 146.56, GreenArea: 127.5, TerraceArea: 0, ParkingNumber: "P08 04 - 49, 50", statusi: "Shitur", shenime: "TAULANT HOXHA" },
    { id: "C5HC2", Tipology: "2 + 1", building: "C5", floor: 1, NetArea: 125.61, ComonArea: 20.29, TotalArea: 145.9, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P08 04 - 53, 54, 55, 56", statusi: "Rezervuar", shenime: "Afrim Stojku" },
    { id: "C5HC3", Tipology: "1 + 1", building: "C5", floor: 1, NetArea: 67.99, ComonArea: 10.98, TotalArea: 78.97, GreenArea: 0, TerraceArea: 28.96, ParkingNumber: "", statusi: "Rezervuar", shenime: "GEZIM BEQAJ" },
    { id: "C5HC4", Tipology: "2 + 1", building: "C5", floor: 1, NetArea: 121.89, ComonArea: 19.69, TotalArea: 141.58, GreenArea: 0, TerraceArea: 97.1, ParkingNumber: "", statusi: "Rezervuar", shenime: "Dyert Tulipan" },
    { id: "C5HC5", Tipology: "2 + 1", building: "C5", floor: 2, NetArea: 124.04, ComonArea: 20.04, TotalArea: 144.08, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P08 04 - 51, 52", statusi: "Shitur", shenime: "Gentjan Bathore" },
    { id: "C5HC6", Tipology: "1 + 1", building: "C5", floor: 2, NetArea: 67.99, ComonArea: 10.98, TotalArea: 78.97, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C5HC7", Tipology: "2 + 1", building: "C5", floor: 2, NetArea: 108.98, ComonArea: 17.61, TotalArea: 126.59, GreenArea: 200, TerraceArea: 0, ParkingNumber: "P08 04 - 26", statusi: "Shitur", shenime: "LEONARD NUHU" },
    { id: "C5HC8", Tipology: "3 + 1", building: "C5", floor: 3, NetArea: 247.4, ComonArea: 26, TotalArea: 273, GreenArea: 0, TerraceArea: 89.1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C6HC1", Tipology: "3 + 1", building: "C6", floor: 0, NetArea: 126.18, ComonArea: 20.38, TotalArea: 146.56, GreenArea: 160, TerraceArea: 0, ParkingNumber: "P08 05 33, 34", statusi: "Shitur", shenime: "MIRSAD SHPELLZAJ" },
    { id: "C6HC2", Tipology: "2 + 1", building: "C6", floor: 1, NetArea: 125.61, ComonArea: 20.29, TotalArea: 145.9, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C6HC3", Tipology: "1 + 1", building: "C6", floor: 1, NetArea: 67.99, ComonArea: 10.98, TotalArea: 78.97, GreenArea: 0, TerraceArea: 28.96, ParkingNumber: "", statusi: "Rezervuar", shenime: "ERG GIPSE" },
    { id: "C6HC4", Tipology: "2 + 1", building: "C6", floor: 1, NetArea: 121.89, ComonArea: 19.69, TotalArea: 141.58, GreenArea: 0, TerraceArea: 97.1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C6HC5", Tipology: "2 + 1", building: "C6", floor: 2, NetArea: 124.04, ComonArea: 20.04, TotalArea: 144.08, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C6HC6", Tipology: "1 + 1", building: "C6", floor: 2, NetArea: 67.99, ComonArea: 10.98, TotalArea: 78.97, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P08 05 35, 36", statusi: "Shitur", shenime: "XENI GJOKA " },
    { id: "C6HC7", Tipology: "2 + 1", building: "C6", floor: 2, NetArea: 108.98, ComonArea: 17.61, TotalArea: 126.59, GreenArea: 254, TerraceArea: 0, ParkingNumber: "P08 05 - 37", statusi: "Shitur", shenime: "XENI GJOKA " },
    { id: "C6HC8", Tipology: "3 + 1", building: "C6", floor: 3, NetArea: 247.4, ComonArea: 26, TotalArea: 273, GreenArea: 0, TerraceArea: 89.1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C7HC1", Tipology: "3 + 1", building: "C7", floor: 0, NetArea: 126.18, ComonArea: 20.38, TotalArea: 146.56, GreenArea: 79.3, TerraceArea: 0, ParkingNumber: "P04 01 - 05, 06", statusi: "Shitur", shenime: "FREDI TOTO" },
    { id: "C7HC2", Tipology: "2 + 1", building: "C7", floor: 1, NetArea: 125.61, ComonArea: 20.29, TotalArea: 145.9, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P04 01 - 01, 21", statusi: "Shitur", shenime: "NELDI" },
    { id: "C7HC3", Tipology: "1 + 1", building: "C7", floor: 1, NetArea: 67.99, ComonArea: 10.98, TotalArea: 78.97, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Shitur", shenime: "GANIU" },
    { id: "C7HC4", Tipology: "2 + 1", building: "C7", floor: 1, NetArea: 121.89, ComonArea: 19.69, TotalArea: 141.58, GreenArea: 0, TerraceArea: 60, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C7HC5", Tipology: "2 + 1", building: "C7", floor: 2, NetArea: 124.04, ComonArea: 20.04, TotalArea: 144.08, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Rezervuar", shenime: "PERPARIM / JON SHPK " },
    { id: "C7HC6", Tipology: "1 + 1", building: "C7", floor: 2, NetArea: 67.99, ComonArea: 10.98, TotalArea: 78.97, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P04 01 - 70", statusi: "Shitur", shenime: "Lida Bardhi" },
    { id: "C7HC7", Tipology: "2 + 1", building: "C7", floor: 2, NetArea: 108.98, ComonArea: 17.61, TotalArea: 126.59, GreenArea: 32, TerraceArea: 0, ParkingNumber: "P04 01 - 4", statusi: "Shitur", shenime: "Klejdi Fejzolli" },
    { id: "C7HC8", Tipology: "3 + 1", building: "C7", floor: 3, NetArea: 247.4, ComonArea: 26, TotalArea: 273, GreenArea: 0, TerraceArea: 89.1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C8HC1", Tipology: "3 + 1", building: "C8", floor: 0, NetArea: 126.18, ComonArea: 20.38, TotalArea: 146.56, GreenArea: 127.5, TerraceArea: 0, ParkingNumber: "P04 01 - 13, 14", statusi: "Shitur", shenime: "VULLNET KARDHASHI " },
    { id: "C8HC2", Tipology: "2 + 1", building: "C8", floor: 1, NetArea: 125.61, ComonArea: 20.29, TotalArea: 145.9, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C8HC3", Tipology: "1 + 1", building: "C8", floor: 1, NetArea: 67.99, ComonArea: 10.98, TotalArea: 78.97, GreenArea: 0, TerraceArea: 0, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C8HC4", Tipology: "2 + 1", building: "C8", floor: 1, NetArea: 121.89, ComonArea: 19.69, TotalArea: 141.58, GreenArea: 0, TerraceArea: 60, ParkingNumber: "", statusi: "Per shitje", shenime: "" },
    { id: "C8HC5", Tipology: "2 + 1", building: "C8", floor: 2, NetArea: 124.04, ComonArea: 20.04, TotalArea: 144.08, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P04 01 - 11, 12", statusi: "Shitur", shenime: "ARDJAN BASHA" },
    { id: "C8HC6", Tipology: "1 + 1", building: "C8", floor: 2, NetArea: 67.99, ComonArea: 10.98, TotalArea: 78.97, GreenArea: 0, TerraceArea: 0, ParkingNumber: "P04 01 - 16", statusi: "Shitur", shenime: "Behar Sinakolli" },
    { id: "C8HC7", Tipology: "2 + 1", building: "C8", floor: 2, NetArea: 108.98, ComonArea: 17.61, TotalArea: 126.59, GreenArea: 70, TerraceArea: 0, ParkingNumber: "", statusi: "Shitur", shenime: "Klaudia Ballari" },
    { id: "C8HC8", Tipology: "3 + 1", building: "C8", floor: 3, NetArea: 247.4, ComonArea: 26, TotalArea: 273, GreenArea: 0, TerraceArea: 89.1, ParkingNumber: "", statusi: "Per shitje", shenime: "" },




]

function showApartmentDetails(apartmentId) {
    
     const   details = apartmentDetails.find(apartment => apartment.id === apartmentId);
    // Find the apartment details by ID
    if (details) {
        // Populate the details table
        document.getElementById('aptId').textContent = details.id;
        document.getElementById('aptTypology').textContent = details.Tipology;
        document.getElementById('aptFloor').textContent = details.floor;
        document.getElementById('aptBuilding').textContent = details.building;
        document.getElementById('aptNetArea').textContent = details.NetArea;
        document.getElementById('aptCommonArea').textContent = details.ComonArea;
        document.getElementById('aptTotalArea').textContent = details.TotalArea;
        document.getElementById('aptTerraceArea').textContent = details.TerraceArea;
        document.getElementById('aptplotArea').textContent = details.GreenArea;
        document.getElementById('parkingNumber').textContent = details.ParkingNumber;
        document.getElementById('status').textContent = details.statusi;

    }
}
// --- Filter by Typology on dropdown change
document.getElementById('typologyFilter').addEventListener('change', () => {
  const selectedTypology = document.getElementById('typologyFilter').value;

  apartmentDetails.forEach(apartment => {
    const btn = document.getElementById(apartment.id);
    if (!btn) return;
    console.log(apartment.id, selectedTypology, apartment.Tipology);
    if (!selectedTypology || apartment.Tipology === selectedTypology) {
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


document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners to buttons with class 'ApBtn'
    document.querySelectorAll(".planBtn").forEach(button => {
        button.addEventListener("click", function () {
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
})

document.addEventListener("DOMContentLoaded", function () {
    const buttons = [
        { btn: "tipBtnA", table: "tableA", hero: "hero-A" },
        { btn: "tipBtnB", table: "tableB", hero: "hero-B" },
        { btn: "tipBtnC", table: "tableC", hero: "hero-C" }
    ];
    const displayImage = document.getElementById("display-image");
const fullscreenContainer = document.getElementById("fullscreenContainer");
const fullscreenImage = document.getElementById("fullscreenImage");
const planContainer = document.getElementById("plan-container");

// 📌 Buttons that trigger the image
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        // Extract photo name from button.id
        const match = button.id.match(/H[A-Z0-9]+$/);
        if (!match) return;

        const planName = match[0];
        const imageSrc = `Planet_tulipan/${planName}.webp`;

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

// ✖️ Click outside image in plan-container → hide container
planContainer.addEventListener("click", (event) => {
    if (!event.target.closest("#display-image")) 
        planContainer.style.display = "none";
        document.getElementById("shiturShkrimi").classList.add("hidden");
        document.getElementById("rezervuarShkrimi").classList.add("hidden");
    })
});



