#include <iostream>
#include <cmath>
using namespace std;



int main() {
    int num1 = 7;
    double num2 = 4.3345354;
    string name = "helllllo livon";

    // using & as a pointer to point to the address where my variables stores


    // cout << &num1 << endl;
    // cout << &num2 << endl;
    // cout << &name << endl;

    // storing memmory address of age in another ariable
    // not the * before the name of the ariabel

    int *pNum1 = &num1;
    cout << pNum1 << endl;
}