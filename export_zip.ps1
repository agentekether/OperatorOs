$src = "C:\Users\Julia\.gemini\antigravity-ide\scratch\operator-os"
$tmp = "C:\Users\Julia\.gemini\antigravity-ide\scratch\temp_export"
$zip = "C:\Users\Julia\OneDrive\Desktop\OperatorOS_Project.zip"

if (Test-Path $tmp) { Remove-Item -Recurse -Force $tmp }
if (Test-Path $zip) { Remove-Item -Force $zip }

New-Item -ItemType Directory -Path $tmp | Out-Null
Copy-Item -Path "$src\*" -Destination $tmp -Recurse -Exclude "node_modules","dist",".git"
Compress-Archive -Path "$tmp\*" -DestinationPath $zip -Force
Remove-Item -Recurse -Force $tmp
Write-Host "Project successfully archived to $zip"
