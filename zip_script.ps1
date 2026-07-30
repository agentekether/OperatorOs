Add-Type -AssemblyName System.IO.Compression.FileSystem

$src = "C:\Users\Julia\.gemini\antigravity-ide\scratch\operator-os"
$zip = "C:\Users\Julia\OneDrive\Desktop\OperatorOS_Project.zip"
$tmp = "C:\Users\Julia\.gemini\antigravity-ide\scratch\export_clean"

if (Test-Path $zip) { Remove-Item -Force $zip }
if (Test-Path $tmp) { Remove-Item -Recurse -Force $tmp }

New-Item -ItemType Directory -Path $tmp | Out-Null

Get-ChildItem -Path $src -Recurse | Where-Object { 
    $_.FullName -notmatch "node_modules|dist|\.git" 
} | ForEach-Object {
    $rel = $_.FullName.Substring($src.Length + 1)
    $dest = Join-Path $tmp $rel
    if ($_.PSIsContainer) {
        New-Item -ItemType Directory -Path $dest -Force | Out-Null
    } else {
        $parent = Split-Path $dest
        if (-not (Test-Path $parent)) { New-Item -ItemType Directory -Path $parent -Force | Out-Null }
        Copy-Item -Path $_.FullName -Destination $dest -Force
    }
}

[System.IO.Compression.ZipFile]::CreateFromDirectory($tmp, $zip)
Remove-Item -Recurse -Force $tmp

Write-Host "ZIP_CREATED_VALID"
