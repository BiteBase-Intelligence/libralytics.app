from PIL import Image
import os

source_path = 'public/assets/team_combined.png'
output_dir = 'public/assets'

try:
    img = Image.open(source_path)
    width, height = img.size
    
    # Assuming 3 equal columns
    col_width = width // 3
    
    # Crop 1: CEO (Left)
    ceo = img.crop((0, 0, col_width, height))
    ceo.save(os.path.join(output_dir, 'ceo_crop.png'))
    
    # Crop 2: CTO (Center)
    cto = img.crop((col_width, 0, col_width * 2, height))
    cto.save(os.path.join(output_dir, 'cto_nattawut.png'))
    
    # Crop 3: CFO (Right)
    cfo = img.crop((col_width * 2, 0, width, height))
    cfo.save(os.path.join(output_dir, 'cfo_angelina.png'))
    
    print("Successfully cropped images.")
    
except Exception as e:
    print(f"Error cropping images: {e}")
