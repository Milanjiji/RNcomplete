#include <iostream>
#include <cmath>
using namespace std;


string day(int daynum){
    string dayName;
    
    switch(daynum){
        case 1:
          dayName = "Monday";
          break;
        case 2:
          dayName = "Tuesday";
          break;
        case 3:
          dayName = "Wednesday";
          break;
        case 4:
          dayName = "Thursday";
          break;
        case 5:
          dayName = "Friday";
          break;
        case 6:
          dayName = "Saturday";
          break;
        case 7:
          dayName = "Sunday";
          break;  
        default:
            dayName = "enter the number between 1-7";
    }

    return dayName;

};
int main() {
    
    cout << day(10) << endl;


    return 0;
}