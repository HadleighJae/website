# HOW TO PERMANENTLY ADD ALIASES TO GIT BASH

Dr. B assigned:
>"Try setting up a bash profile to hold keyboard shortcuts "aliases" For example, you can set an alias to open your shell, type the word "github" as shorthand for cd file/path/to/your/GitHubFolder."

However, I tried adding some aliases into my Git Bash Shell since I use that the most, but I realized it never saved whenever I exited the shell. So here's how I fixed this issue.

Note: This is NOT done in the Git Bash terminal. This was all manually done by clicking through my file explorer because it would not let me get to ***bash_profile.sh*** through Git Bash. This is also done on my Windows computer!

## Alias Command
```Git
alias aliasName='git command'
```
<sub>Note: The alias name you choose cannot include spaces!</sub>

## File Explorer
1. On the left hand side, scroll to where it says ***This PC*** and click on ***Local Disk (C:)***
![../../../../../Downloads/fileExplorer1.png](../../../../../Downloads/fileExplorer1.png)

2. Go to your ***Program Files*** folder (may possibly be in AppData instead
![../../../../../Downloads/fileExplorer2.png](../../../../../Downloads/fileExplorer2.png)

3. Enter your ***Git*** folder
![../../../../../Downloads/fileExplorer3.png](../../../../../Downloads/fileExplorer3.png)

4. Inside the ***Git*** folder, click on the ***etc*** folder
![../../../../../Downloads/fileExplorer4.png](../../../../../Downloads/fileExplorer4.png)

5. Go to the ***profile.d*** folder
![../../../../../Downloads/fileExplorer5.png](../../../../../Downloads/fileExplorer5.png)

6. Right click on ***bash_profile.sh*** and click ***Edit with PyCharm Community Edition***
![../../../../../Downloads/fileExplorer6.png](../../../../../Downloads/fileExplorer6.png)

<sub>If you have trouble with editing this file, you'll have to edit the etc folder permissions (directions at end of markdown)</sub>

## PyCharm

1. When you open ***PyCharm Community Edition***, you may get this popup. Just click ***Stay in LightEdit ***and it should work fine ![../../../../../Downloads/bash_profile3.png](../../../../../Downloads/bash_profile3.png)

1. The ***bash_profile.sh*** file may look like this when you open it
![../../../../../Downloads/bash_profile1.png](../../../../../Downloads/bash_profile1.png)

1. Lastly, type in as many aliases as your heart desires! I just added the aliases at the bottom of the file and it worked just fine
![../../../../../Downloads/bash_profile4.png](../../../../../Downloads/bash_profile4.png)

Now the aliases are permanently in your Git Bash! Here's an example of me using the aliases on my Git Bash Shell:
![../../../../../Downloads/gitBash.png](../../../../../Downloads/gitBash.png)

## Editing the etc Folder Permissions
1. Right click the ***etc*** folder in ***Git*** and go to ***Properties***
![../../../../../Downloads/permissionsForEtc3.png](../../../../../Downloads/permissionsForEtc3.png)

1. In ***Properties***, click on the ***Security*** tab. Click the ***Edit*** button to ***change the file permissions*** ![../../../../../Downloads/permissionsForEtc4.png](../../../../../Downloads/permissionsForEtc4.png)

1. Scroll through the ***Group or user names***. Click on ***Users*** and check ***Full control***. Click apply
![../../../../../Downloads/permissionsForEtc2.png](../../../../../Downloads/permissionsForEtc2.png)
