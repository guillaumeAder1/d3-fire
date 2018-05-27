set mypath=%cd%
cd %mypath%
call npm run build
set /P comment=Enter commit comment here: 
echo %comment%
git add .
git commit -m "%comment%"
git push origin master
pause