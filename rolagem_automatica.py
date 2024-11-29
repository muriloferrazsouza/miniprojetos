import pyautogui
import time

qnt = 0

while qnt < 500:
    pyautogui.scroll(-5000)
    time.sleep(1)
    qnt = qnt + 1
