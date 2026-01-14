import re
import os
import glob

# Define files to process
html_files = glob.glob(r'c:\Users\ACER\Desktop\evolvex-website\*.html')
css_files = glob.glob(r'c:\Users\ACER\Desktop\evolvex-website\css\*.css')
all_files = html_files + css_files

# Regex to match REM values
# Matches: 1rem, 0.5rem, 2.6rem, 2\.6rem (escaped in CSS)
pattern = re.compile(r'(\d+(?:\\?\.\d+)?)rem')

def convert_to_px(match):
    val_str = match.group(1)
    
    # Handle escape sequence in CSS selectors (e.g. 2\.6)
    is_escaped = '\\' in val_str
    clean_val_str = val_str.replace('\\', '')
    
    try:
        val_float = float(clean_val_str)
        px_val = val_float * 16
        
        # Format: remove trailing .0 if integer
        if px_val.is_integer():
            px_str = f"{int(px_val)}"
        else:
            px_str = f"{px_val:g}"
            
        # Re-apply escape if needed (only if result has a dot)
        if is_escaped and '.' in px_str:
            px_str = px_str.replace('.', '\\.')
            
        return f"{px_str}px"
    except ValueError:
        return match.group(0) # Fallback

for file_path in all_files:
    print(f"Processing {os.path.basename(file_path)}...")
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content, count = pattern.subn(convert_to_px, content)
        
        if count > 0:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"  Converted {count} occurrences.")
        else:
            print("  No occurrences found.")
            
    except Exception as e:
        print(f"  Error: {e}")
