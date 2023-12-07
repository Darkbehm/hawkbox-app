#include <iostream>
#include <stdio.h>
#include <vector>
#include <math.h>
#include <algorithm>
using namespace std;
typedef long long llong;

const int WORMHOLE = -99999999;
const int REALT = WORMHOLE / 2;

inline char rev(char ch)
{
    switch(ch)
    {
        case 'U':
            return 'D';
        case 'D':
            return 'U';
        case 'L':
            return 'R';
        case 'R':
            return 'L';
        default:
            throw "Err";
    }
}

inline char rot90(char ch)
{
    switch(ch)
    {
        case 'U':
            return 'R';
        case 'D':
            return 'L';
        case 'L':
            return 'U';
        case 'R':
            return 'D';
        default:
            throw "Err";
    }
}

inline int xMove(char ch)
{
    switch(ch)
    {
        case 'U':
            return -1;
        case 'D':
            return 1;
        case 'L':
        case 'R':
            return 0;
        default:
            throw "Err";
    }
}

inline int yMove(char ch)
{
    switch(ch)
    {
        case 'L':
            return -1;
        case 'R':
            return 1;
        case 'U':
        case 'D':
            return 0;
        default:
            throw "Err";
    }
}

int work[5111][5111];
int F[5111][5111];
char cf[5111][5111];
int N, M;

vector<int> costs;
vector<char> path;
void solveWork(int sy, int ey)
{
    for (int i = 1; i <= N; i++)
    {
        for (int j = 1; j <= M; j++)
        {
            F[i][j] = WORMHOLE;
            if (i > 1 && F[i][j] < F[i - 1][j] + work[i][j])
            {
                F[i][j] = F[i - 1][j] + work[i][j];
                cf[i][j] = 'U';
            }
            else if (i == 1 && F[i][j] < work[i][j] && j == sy)
            {
                F[i][j] = work[i][j];
                cf[i][j] = 'S';
            }

            if (j > 1 && F[i][j] < F[i][j - 1] + work[i][j])
            {
                F[i][j] = F[i][j - 1] + work[i][j];
                cf[i][j] = 'L';
            }
        }

        for (int j = M - 1; j >= 1; j--)
        {
            if (F[i][j] < F[i][j + 1] + work[i][j] && cf[i][j + 1] != 'L')
            {
                F[i][j] = F[i][j + 1] + work[i][j];
                cf[i][j] = 'R';
            }
        }
    }

    costs.clear();
    path.clear();
    int cx = N;
    int cy = ey;

    while(true)
    {
        costs.push_back(work[cx][cy]);

        if (cf[cx][cy] == 'S')
            break;

        char cfrem = cf[cx][cy];
        path.push_back(rev(cf[cx][cy]));
        cx += xMove(cfrem);
        cy += yMove(cfrem);

        //printf("Back to %d, %d with cost %d\n", cx, cy, F[cx][cy]);
        //printf("Next will be %c\n", cf[cx][cy]);
    }

    reverse(costs.begin(), costs.end());
    reverse(path.begin(), path.end());
}

int n, m, k;
int grid[5111][5111];
bool takenInFull[5111][5111];
int sL[5111];

vector<int> fullCosts;
vector<char> fullPath;
void solveWidth(int W)
{
    bool flip = false;
    int cx = 1, cy = 1;
    llong tallyCost = 0;
    for (int i = 1; i <= m; i += W)
    {
        if (i != 1)
        {
            takenInFull[cx][cy] = true;
            fullPath.push_back('R');
            cy++;
            fullCosts.push_back(grid[cx][cy]);
        }

        N = n;
        int rEnd = min(m, i + W - 1);
        int lEnd = max(1, i - W);
        M = rEnd - lEnd + 1;

        //fprintf(stderr, "Solving [%d, %d] with %lld win atm\n", i, rEnd, tallyCost);

        for (int j = 1; j <= n; j++)
        {
            for (int in = lEnd; in <= rEnd; in++)
            {
                int val = takenInFull[j][in] ? WORMHOLE : grid[j][in];
                if (!flip)
                    work[j][in - lEnd + 1] = val;
                else
                    work[n - j + 1][in - lEnd + 1] = val;
            }
        }

        solveWork(i - lEnd + 1, M);

        for (int cst : costs)
        {
            fullCosts.push_back(cst);
            tallyCost += cst;
        }
        for (char mv : path)
        {
            if (flip && (mv == 'U' || mv == 'D'))
                fullPath.push_back(rev(mv));
            else
                fullPath.push_back(mv);

            takenInFull[cx][cy] = true;
            cx += xMove(fullPath.back());
            cy += yMove(fullPath.back());
        }

        flip = !flip;
    }
}

char viz[5111][5111];

void applyNormalizer(int normalizer)
{
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            grid[i][j] -= normalizer;
        }
    }
}


int cx = 1, cy = 1;
int tmp[5111][5111];
void ROTALL()
{
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= m; j++)
        {
            tmp[j][n - i + 1] = grid[i][j];
        }
    }

    for (int i = 1; i <= m; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            grid[i][j] = tmp[i][j];
        }
    }

    int rcx = cx, rcy = cy;

    cx = rcy;
    cy = n - rcx + 1;

    swap(m, n);

    for (int i = 0; i < fullPath.size(); i++)
    {
        fullPath[i] = rot90(fullPath[i]);
    }

}

int main()
{
    freopen("5.txt", "r", stdin);
    freopen("out", "w", stdout);

    scanf("%d %d %d", &m, &n, &k);

    int totalL = 0;
    for (int i = 1; i <= k; i++)
    {
        scanf("%d", &sL[i]);
        totalL += sL[i];
    }

    int normalizer = 0;
    llong totalSum = 0;
    int totalCnt = 0;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= m; j++)
        {
            char inp[15];
            scanf("%s", inp);
            string sinp = inp;

            if (sinp == "*")
            {
                grid[i][j] = WORMHOLE;
            }
            else
            {
                grid[i][j] = stoi(sinp);

                totalSum += grid[i][j];
                totalCnt++;
            }
        }
    }
    normalizer = int(round(double(totalSum) / double(totalCnt)));
    normalizer = 21;
    //ROT, 31, 7 opt for 3
    // ? opt for 4
    //24 opt for 5

    ///m--; ROTALL();
    applyNormalizer(normalizer);
    solveWidth(8);

    if (fullPath.size() < totalL)
    {
        fprintf(stderr, "ERROR - full path %d vs totalL %d\n", fullPath.size(), totalL);
        return 0;
    }

    fprintf(stderr, "Full path %d vs totalL %d\n", fullPath.size(), totalL);
    fprintf(stderr, "Normalizer %d\n", normalizer);

    applyNormalizer(-normalizer);
    cx = 1;
    cy = 1;
    ///ROTALL(); ROTALL(); ROTALL();

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= m; j++)
        {
            viz[i][j] = '.';
        }
    }

    int curInd = 0;
    llong res = 0LL;
    for (int i = 1; i <= k; i++)
    {
        printf("%d %d", cy - 1, cx - 1);

        res += grid[cx][cy];

        viz[cx][cy] = '0' + i % 10;
        for (int j = 1; j < sL[i]; j++)
        {
            char mv = fullPath[curInd];

            printf(" %c", mv);

            cx += xMove(mv);
            cy += yMove(mv);
            curInd++;

            viz[cx][cy] = '0' + i % 10;

            res += grid[cx][cy];
            if (res < 0)
            {
                fprintf(stderr, "HURRR at %d, %d | %d [%lld]\n", cx, cy, grid[cx][cy], res);

                if (res < -1000)
                    exit(1);
            }
        }
        printf("\n");

        char mv = fullPath[curInd];
        cx += xMove(mv);
        cy += yMove(mv);
        curInd++;
    }

    if (false)
    {
        for (int i = 1; i <= n; i++)
        {
            for (int j = 1; j <= m; j++)
            {
                printf("%c", viz[i][j]);
            }
            printf("\n");
        }
    }

    fprintf(stderr, "Score: %lld\n", res);

    return 0;
}
