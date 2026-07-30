$src = "C:\Users\Julia\.gemini\antigravity-ide\scratch\operator-os"
$outFile = "C:\Users\Julia\OneDrive\Desktop\OperatorOS_FULL_CONTEXT.md"

if (Test-Path $outFile) { Remove-Item -Force $outFile }

Add-Content -Path $outFile -Value "# OperatorOS (GridOps) - Full Codebase and Product Context`n" -Encoding UTF8

$files = Get-ChildItem -Path $src -Recurse | Where-Object { 
    -not $_.PSIsContainer -and $_.FullName -notmatch "node_modules|dist|\.git|ps1" 
}

foreach ($f in $files) {
    $rel = $f.FullName.Substring($src.Length + 1)
    Add-Content -Path $outFile -Value "## File: $rel`n````" -Encoding UTF8
    Get-Content $f.FullName -Raw | Add-Content -Path $outFile -Encoding UTF8
    Add-Content -Path $outFile -Value "`n````n" -Encoding UTF8
}

Write-Host "DOC_CREATED_VALID"
