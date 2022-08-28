#include <iostream>
#include <cmath>
using namespace std;



int main() {
   int sec =12;
   int input;
   int guess = 0;
   int guesslimit = 3;
   while(guesslimit > guess){
    cout << "Enter the guess : ";
    cin >> input;
    if (input == sec)
    {
        cout << "!You Win" << endl;
        cout << "you guessed the right number" << endl;
        guess = 4;
    
    
    }else{
        cout << "you guessed the wrong number" << endl;
        
        guess++;
        cout << "you have only "<<  guesslimit - guess << " left" << endl;
        
    }
    if(guess == 3){
        cout << "OUT OF GUESS" << endl;
        cout << "Try again" << endl;
    }
    
   }
    return 0;
}