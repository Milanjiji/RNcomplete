#include <iostream>
#include <cmath>
using namespace std;



int main() {
    int num1,num2;
    char op;
    cout << "Enter the first number : ";
    cin >> num1;
    cout << "Enter the operator : ";
    cin >> op;
    cout << "Enter the second number : ";
    cin >> num2;

    if(op == '+'){
        cout << num1 + num2 << endl;
    }else if(op == '-'){
        cout << num1 - num2 << endl;
    }else if(op == '/'){
        cout << num1 / num2 << endl;
    }else if(op == '*'){
        cout << num1 * num2 << endl;
    }else{
        cout << "enter the correct operator" << endl;
        cout << "eg :(+,-,/,*)" << endl;
    }



    return 0;
}