import pyautogui
import time

qntd = 0
pos = 0

while qntd < 150:
    time.sleep(3)
    pyautogui.scroll(-50000)
    time.sleep(2)
    #print(pyautogui.position())
    #pyautogui.moveTo(1130, 701) #monitor
    pyautogui.moveTo(879, -363) #tv
    time.sleep(1)
    pyautogui.click()
    qntd = qntd + 1
    print(qntd)