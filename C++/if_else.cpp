#include <iostream>
#include <cmath>
using namespace std;



int main() {
    bool ismale = false;
    bool istall = false;
    if(ismale && istall){
        cout << "is true you are male and tall" << endl;
    }else if(ismale == true && istall == false){
        cout << " you are male but not tall" << endl;
    }else if(ismale == false && istall == true){
        cout << " you are not male and tall" << endl;
    }
    else{
        cout << "no you are not male and not tall" << endl;
    }
    
    return 0;
}