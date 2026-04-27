import tkinter as tk
from tkinter import messagebox

def calculateOfJoy():
    results = [var_math.get(), var_code.get(), var_gym.get(), var_teach.get()]
    currValue = sum(results) 

    match currValue:
        case 4:
            messagebox.showinfo("Успех!","Отличная работа! Отдыхай как пожелаешь!🐲❤️")
        case 3:
             messagebox.showinfo("Неплохо!","Хороший день, но можно лучше. Можно погулять или глянуть что нибудь..")
        case 2:
             messagebox.showinfo("Могло быть и лучше","Средне. Ограничься в просмотре.")
        case _:
             messagebox.showinfo("Отстой..","Это никуда не годится..")

root = tk.Tk()
root.title("Трекер Привычек")
root.geometry("300x250")

var_math = tk.BooleanVar()
var_code = tk.BooleanVar()
var_gym = tk.BooleanVar()
var_teach = tk.BooleanVar()

tk.Label(root, text="Что ты сделал сегодня?", font=("Arial", 16)).pack(pady=10)

tk.Checkbutton(root, text="Математика (40 мин)", variable=var_math).pack(anchor="w", padx=20)
tk.Checkbutton(root, text="Кодил (40 мин)", variable=var_code).pack(anchor="w", padx=20)
tk.Checkbutton(root, text="Ходил в зал", variable=var_gym).pack(anchor="w", padx=20)
tk.Checkbutton(root, text="Учеба успешна", variable=var_teach).pack(anchor="w", padx=20)

btn = tk.Button(root, text="Рассчитать результат", command=calculateOfJoy)
btn.pack(pady=20)

root.mainloop()
