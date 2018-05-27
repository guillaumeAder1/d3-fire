cd C:\Users\gader\Documents\_projects\private\d3-fire
set /P comment=Enter comment here: 
echo %comment%
pause
git add .
git commit -m "%comment%"
git push origin master
pause