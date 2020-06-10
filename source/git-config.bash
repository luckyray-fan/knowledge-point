#!/bin/sh

# set push
git config --global alias.pu 'push'

#set checkout
git config --global alias.co 'checkout'

#set commit
git config --global alias.m 'commit -m'
git config --global alias.mnv '!f(){ git commit -m \"$1\" --no-verify; };f'

#set add
git config --global alias.a 'add'

#set add all
git config --global alias.aa 'add .'

#set status
git config --global alias.s 'status'

#set pull
git config --global alias.pl 'pull'

#set commit reset
git config --global alias.rcm 'reset --soft HEAD~1'

#set quick push
git config --global alias.qpu '!f(){ git add . && git commit -m \"$1\" --no-verify && git push; };f'

#set restore
git config --global alias.ra 'restore --staged'

#git branch
git config --global alias.br 'branch'

git config --global alias.cz 'commit'

git config --global alias.ac '!f(){ git add . && git commit; };f'
