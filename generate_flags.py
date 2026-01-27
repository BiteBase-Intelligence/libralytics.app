
import os

def save_svg(filename, content):
    path = os.path.join("public/images/flags", filename)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Generated {path}")

if not os.path.exists("public/images/flags"):
    os.makedirs("public/images/flags")

# Simple SVG Flags (Approximate colors)

# Thailand
svg_th = """<svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
<rect fill="#F4F5F8" width="900" height="600"/>
<rect fill="#ED1C24" width="900" height="600"/>
<rect fill="#FFFFFF" y="100" width="900" height="400"/>
<rect fill="#241D4F" y="200" width="900" height="200"/>
</svg>"""

# Singapore
svg_sg = """<svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
<rect fill="#ED2939" width="900" height="300"/>
<rect fill="#FFFFFF" y="300" width="900" height="300"/>
<path fill="#FFFFFF" d="M228.164 163.626h-14.717l-4.549 13.998-4.548-13.998h-14.718l11.908-8.651-4.549-14.002 11.908 8.652 11.909-8.652-4.55 14.002 11.906 8.651zM228.164 126.31h-14.717l-4.549 13.999-4.548-13.999h-14.718l11.908-8.652-4.549-14 11.908 8.65 11.909-8.65-4.55 14 11.906 8.652zM263.66 144.965h-14.718l-4.548 14.001-4.549-14.001h-14.717l11.907-8.651-4.549-14.001 11.908 8.651 11.908-8.651-4.549 14.001 11.907 8.651zM192.668 144.965H177.95l-4.549 14.001-4.548-14.001h-14.717l11.907-8.651-4.549-14.001 11.907 8.651 11.908-8.651-4.549 14.001 11.908 8.651zM157.172 182.28h-14.717l-4.549 14-4.548-14h-14.718l11.908-8.652-4.549-14.001 11.908 8.652 11.908-8.652-4.549 14.001 11.907 8.652z"/>
<path fill="#FFFFFF" d="M149.077 75.31c44.887 0 83.056 26.697 100.82 65.517-10.439-6.3-22.625-9.923-35.61-9.923-38.904 0-70.443 31.538-70.443 70.441 0 13.966 4.195 26.974 11.393 37.955-39.757-16.142-67.957-55.51-67.957-101.325 0-60.015 48.65-108.665 108.664-108.665"/>
</svg>"""

# Japan
svg_jp = """<svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
<rect fill="#FFFFFF" width="900" height="600"/>
<circle fill="#BC002D" cx="450" cy="300" r="180"/>
</svg>"""

# Taiwan
svg_tw = """<svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
<rect fill="#FE0000" width="900" height="600"/>
<rect fill="#000095" width="450" height="300"/>
<g transform="translate(225,150)" fill="#FFF">
<circle r="75"/>
</g>
</svg>"""

# Philippines
svg_ph = """<svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
<rect fill="#0038A8" y="0" width="900" height="300"/>
<rect fill="#CE1126" y="300" width="900" height="300"/>
<polygon fill="#FFFFFF" points="0,0 363,300, 0,600"/>
<circle fill="#FCD116" cx="130" cy="300" r="50"/>
</svg>"""

# Malaysia
svg_my = """<svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
<rect fill="#CC0000" width="900" height="600"/>
<rect fill="#FFFFFF" y="42" width="900" height="42"/>
<rect fill="#FFFFFF" y="127" width="900" height="42"/>
<rect fill="#FFFFFF" y="212" width="900" height="42"/>
<rect fill="#FFFFFF" y="297" width="900" height="42"/>
<rect fill="#FFFFFF" y="382" width="900" height="42"/>
<rect fill="#FFFFFF" y="467" width="900" height="42"/>
<rect fill="#000066" width="450" height="339"/>
<circle fill="#FFCC00" cx="200" cy="170" r="80"/>
</svg>"""

# Vietnam
svg_vn = """<svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
<rect fill="#DA251D" width="900" height="600"/>
<polygon fill="#FFFF00" points="450,150 497,295 649,295 526,384 573,529 450,440 327,529 374,384 251,295 403,295"/>
</svg>"""

# Cambodia
svg_kh = """<svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
<rect fill="#032EA1" width="900" height="150"/>
<rect fill="#E00025" y="150" width="900" height="300"/>
<rect fill="#032EA1" y="450" width="900" height="150"/>
<path fill="#FFFFFF" d="M350 350 L550 350 L450 200 Z"/>
</svg>"""

# Bangladesh
svg_bd = """<svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
<rect fill="#006A4E" width="900" height="600"/>
<circle fill="#F42A41" cx="405" cy="300" r="180"/>
</svg>"""

# Pakistan
svg_pk = """<svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
<rect fill="#FFFFFF" width="225" height="600"/>
<rect fill="#115604" x="225" width="675" height="600"/>
<circle fill="#FFFFFF" cx="560" cy="300" r="150"/>
<circle fill="#115604" cx="590" cy="275" r="135"/>
<polygon fill="#FFFFFF" points="630,225 645,260 680,260 655,285 665,320 630,300 595,320 605,285 580,260 615,260"/>
</svg>"""

# Hong Kong
svg_hk = """<svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
<rect fill="#DE2910" width="900" height="600"/>
<circle fill="#FFFFFF" cx="450" cy="300" r="150"/>
</svg>"""

save_svg("th.svg", svg_th)
save_svg("sg.svg", svg_sg)
save_svg("jp.svg", svg_jp)
save_svg("tw.svg", svg_tw)
save_svg("ph.svg", svg_ph)
save_svg("my.svg", svg_my)
save_svg("vn.svg", svg_vn)
save_svg("kh.svg", svg_kh)
save_svg("bd.svg", svg_bd)
save_svg("pk.svg", svg_pk)
save_svg("hk.svg", svg_hk)
