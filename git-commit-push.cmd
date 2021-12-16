@echo off
set /p message="Nhap message: "
git add .
git commit -a -m %message%
git push

set /p c="Press Enter to exit "
