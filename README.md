# development workflow

## start development server

```
npm start
```

## checkout canary branch

```
git checkout canary
```

## commit changes

```
# edit files
git add <files>
git commit -m 'Commit message'
```

## push to github to trigger canary deploy

```
git push
```

## merge to master and push to github to trigger production deploy

```
git checkout master
git merge canary
git push
```
