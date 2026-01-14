import re
import os

files = [
    r'c:\Users\ACER\Desktop\evolvex-website\services.html',
    r'c:\Users\ACER\Desktop\evolvex-website\css\custom.css',
    r'c:\Users\ACER\Desktop\evolvex-website\css\tailwind.css'
]

pattern = re.compile(r'(\d+(?:\\?\.\d+)?)rem')

for file_path in files:
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
    
    with open('analysis_log.txt', 'a', encoding='utf-8') as log_file:
        log_file.write(f"--- Analyzing {os.path.basename(file_path)} ---\n")
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            matches = pattern.findall(content)
            unique_matches = sorted(set(matches), key=lambda x: float(x))
            
            log_file.write(f"Total REM occurrences: {len(matches)}\n")
            log_file.write(f"Unique values: {unique_matches}\n")
            
            # Check context for sample matches
            log_file.write("Sample contexts:\n")
            for m in unique_matches[:5]:
                # Find first occurrence index
                idx = content.find(m + 'rem')
                start = max(0, idx - 20)
                end = min(len(content), idx + 20)
                log_file.write(f"  ...{content[start:end].replace(chr(10), ' ')}...\n")

        except Exception as e:
            log_file.write(f"Error reading {file_path}: {e}\n")
        log_file.write("\n")
