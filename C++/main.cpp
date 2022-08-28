#include <iostream>
#include <cmath>
using namespace std;



int main() {
    int num1 = 7;
    double num2 = 4.3345354;
    string name = "helllllo livon";
    cout << &num1 << endl;
    cout << &num2 << endl;
    cout << &name << endl;

    int *pNum1 = &num1;
    cout << pNum1 << endl;
}