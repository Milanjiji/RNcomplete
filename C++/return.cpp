#include <iostream>
#include <cmath>
using namespace std;

int name(int num1, int num2){
    
    int sum =  num1 + num2;
    return sum; 
    
}

int main() {
    int values = name(10, 20);
    cout << values <<  endl;
    
    return 0;
}