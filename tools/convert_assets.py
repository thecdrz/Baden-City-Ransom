#!/usr/bin/env python3
"""
Convert PNG assets to base64 data URIs for embedding in HTML
"""
import base64
import glob
import os

def png_to_data_uri(png_path):
    """Convert a PNG file to a data URI"""
    with open(png_path, 'rb') as f:
        png_data = f.read()
    b64_data = base64.b64encode(png_data).decode('utf-8')
    return f"data:image/png;base64,{b64_data}"

def create_asset_js():
    """Create a JavaScript object with all assets as data URIs"""
    assets = {}
    
    # Process all PNG files
    png_files = glob.glob("*.png")
    
    for png_file in sorted(png_files):
        # Create a clean key name
        key = png_file.replace("NES - River City Ransom _ Street Gangs - ", "")
        key = key.replace(".png", "")
        key = key.replace(" ", "_").replace("&", "and").replace("(", "").replace(")", "")
        key = key.replace("__", "_").replace("-", "_")
        
        # Convert to data URI
        data_uri = png_to_data_uri(png_file)
        assets[key] = data_uri
        print(f"Processed: {png_file} -> {key}")
    
    # Write JavaScript asset object
    with open("assets.js", "w") as f:
        f.write("// River City Ransom Assets as Data URIs\n")
        f.write("const RCR_ASSETS = {\n")
        for key, data_uri in assets.items():
            # Split long data URIs for readability
            if len(data_uri) > 100:
                data_parts = [data_uri[i:i+80] for i in range(0, len(data_uri), 80)]
                f.write(f'  "{key}": "{data_parts[0]}" +\n')
                for part in data_parts[1:-1]:
                    f.write(f'    "{part}" +\n')
                f.write(f'    "{data_parts[-1]}",\n')
            else:
                f.write(f'  "{key}": "{data_uri}",\n')
        f.write("};\n")
    
    print(f"\nGenerated assets.js with {len(assets)} assets")
    return assets

if __name__ == "__main__":
    create_asset_js()
