#include <iostream>
#include <cmath>
using namespace std;

int main() {
   
   // getting the integer value from the user
//    int age;
//    cout << "enter the age :";
//    cin >> age;
//    cout << "you are basicly " << age << " older" << endl;

   // getting the string value like a sentence
    // getting the entire line
    // you can use the cin mehod if you only want a word or letter
    // but to get the entire line use getline

    string name;
    cout << "enter your name: ";
    getline(cin,name);
    cout << "your name is " << name << endl;
    return 0;
}