#include <iostream>
#include <cmath>
using namespace std;


int power(int basenum, int powerNum){
    int result = 1;
    for(int i = 0; i < powerNum; i++){
        result = result * basenum;
    }
    return result;
}

int main() {
    cout << power(2,3) << endl;
    return 0;
}
// nested loop exampe
/*
int numbers[3][2] = {
        {1,2},
        {3,4},
        {5,6}
    };
    for(int i = 0; i < 3;i++){
        for(int j = 0;j < 2; j++){
            cout << numbers[i][j] ;
        }
        cout << endl;
    }
*/