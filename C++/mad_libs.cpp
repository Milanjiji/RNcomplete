#include <iostream>
#include <cmath>
using namespace std;

int main() {
  
    string color,pnoun,celeb;
    cout << "Enter a color: ";
    getline(cin,color);
    cout << "Enter a PluralNoun: ";
    getline(cin,pnoun);
    cout << "Enter a Celebrity: ";
    getline(cin,celeb);

    cout << "Roses are " << color << " ";
    cout << pnoun << " are blue ";
    cout << "I love " << celeb << endl;
    
    return 0;
}