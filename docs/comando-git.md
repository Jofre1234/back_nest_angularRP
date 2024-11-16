# comandos GitHud

# Inicializamos el Repositorio Local

git init

-Referencia del repositorio local con el repositorio remoto(GITHUD)
----

git remote add origin https://github.com/Jofre1234/back_nest_angularRP.git

# Validar Referencia

git remote -m 
----

git add .

git commit -m "proyecto base"

----

-Para Forzar
-----

 git push -u origin master
 ---

 # Moudules y Resource
 ----

nest g mo modules/auth 
CRUD nest g res modules/users  
----

 # Controllers y servicios
 ----

 nest g co modules/auth
 nest g s modules/auth
