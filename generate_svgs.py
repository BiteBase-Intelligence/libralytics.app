
import os

# Colors
COLOR_PRIMARY = "#1F2A38"  # Ebony Blue
COLOR_SECONDARY = "#96a6a5" # Silver Tree
COLOR_ACCENT = "#8DA399"    # Morning Blue
COLOR_DARK = "#36454F"     # Charcoal

def save_svg(filename, content):
    path = os.path.join("public/images", filename)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Generated {path}")

# Icon Definitions (Simple Modular SVG Geometry)

# 1. Lead Generation (Magnet/Funnel)
svg_lead_gen = f"""<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:{COLOR_PRIMARY};stop-opacity:1" />
      <stop offset="100%" style="stop-color:{COLOR_DARK};stop-opacity:1" />
    </linearGradient>
  </defs>
  <path d="M60 40 L140 40 L110 100 L110 160 L90 160 L90 100 L60 40 Z" fill="url(#grad1)" />
  <circle cx="100" cy="170" r="10" fill="{COLOR_ACCENT}" />
  <path d="M50 30 L150 30" stroke="{COLOR_SECONDARY}" stroke-width="5" stroke-linecap="round" />
  <circle cx="70" cy="20" r="5" fill="{COLOR_SECONDARY}" />
  <circle cx="130" cy="20" r="5" fill="{COLOR_SECONDARY}" />
  <circle cx="100" cy="10" r="5" fill="{COLOR_SECONDARY}" />
</svg>"""

# 2. Market Intelligence (Chart/Globe)
svg_market = f"""<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="80" fill="#f0f0f0" />
  <path d="M100 20 A80 80 0 0 1 180 100 L100 100 Z" fill="{COLOR_ACCENT}" />
  <path d="M100 100 L20 100 A80 80 0 0 1 100 20 Z" fill="{COLOR_PRIMARY}" />
  <path d="M100 100 L100 180 A80 80 0 0 1 20 100 Z" fill="{COLOR_DARK}" />
  <circle cx="100" cy="100" r="40" fill="white" />
</svg>"""

# 3. Agentic AI (Robot Head/Brain)
svg_agent = f"""<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="60" width="100" height="100" rx="20" fill="{COLOR_PRIMARY}" />
  <rect x="65" y="80" width="30" height="30" rx="5" fill="{COLOR_ACCENT}" />
  <rect x="105" y="80" width="30" height="30" rx="5" fill="{COLOR_ACCENT}" />
  <rect x="70" y="130" width="60" height="10" rx="5" fill="{COLOR_SECONDARY}" />
  <circle cx="30" cy="110" r="10" fill="{COLOR_DARK}" />
  <circle cx="170" cy="110" r="10" fill="{COLOR_DARK}" />
  <path d="M30 110 L50 110" stroke="{COLOR_DARK}" stroke-width="4" />
  <path d="M170 110 L150 110" stroke="{COLOR_DARK}" stroke-width="4" />
  <path d="M100 60 L100 30" stroke="{COLOR_PRIMARY}" stroke-width="6" />
  <circle cx="100" cy="25" r="8" fill="{COLOR_ACCENT}" />
</svg>"""

# 4. Data Infrastructure (Database/Rack)
svg_infra = f"""<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="50" rx="60" ry="20" fill="{COLOR_SECONDARY}" />
  <path d="M40 50 L40 90 A60 20 0 0 0 160 90 L160 50" fill="{COLOR_PRIMARY}" />
  <path d="M40 100 L40 140 A60 20 0 0 0 160 140 L160 100" fill="{COLOR_DARK}" />
  <ellipse cx="100" cy="140" rx="60" ry="20" fill="{COLOR_DARK}" />
  <ellipse cx="100" cy="90" rx="60" ry="20" fill="{COLOR_PRIMARY}" />
</svg>"""

# Industry 1: Food
svg_food = f"""<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="80" fill="{COLOR_PRIMARY}" />
  <path d="M60 80 Q100 150 140 80" stroke="{COLOR_SECONDARY}" stroke-width="8" fill="none" />
  <path d="M80 80 L80 40" stroke="{COLOR_ACCENT}" stroke-width="6" />
  <path d="M120 80 L120 40" stroke="{COLOR_ACCENT}" stroke-width="6" />
  <path d="M100 80 L100 40" stroke="{COLOR_ACCENT}" stroke-width="6" />
</svg>"""

# Industry 2: Retail
svg_retail = f"""<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M60 60 L140 60 L160 160 L40 160 Z" fill="{COLOR_PRIMARY}" />
  <path d="M80 60 A 20 20 0 0 1 120 60" stroke="{COLOR_SECONDARY}" stroke-width="8" fill="none" />
  <circle cx="100" cy="110" r="15" fill="{COLOR_ACCENT}" />
</svg>"""

# Industry 3: Property
svg_property = f"""<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="60" y="80" width="40" height="80" fill="{COLOR_DARK}" />
  <rect x="110" y="50" width="50" height="110" fill="{COLOR_PRIMARY}" />
  <rect x="70" y="90" width="20" height="20" fill="{COLOR_SECONDARY}" />
  <rect x="120" y="70" width="30" height="20" fill="{COLOR_SECONDARY}" />
  <rect x="120" y="100" width="30" height="20" fill="{COLOR_ACCENT}" />
</svg>"""

# Industry 4: Finance
svg_finance = f"""<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="40" y="40" width="120" height="120" rx="10" fill="{COLOR_PRIMARY}" />
  <circle cx="100" cy="100" r="30" stroke="{COLOR_SECONDARY}" stroke-width="8" fill="none" />
  <path d="M100 80 L100 120 M80 100 L120 100" stroke="{COLOR_ACCENT}" stroke-width="8" />
  <circle cx="140" cy="60" r="10" fill="{COLOR_SECONDARY}" />
</svg>"""

# Industry 5: Healthcare
svg_health = f"""<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="85" y="40" width="30" height="120" fill="{COLOR_PRIMARY}" rx="5" />
  <rect x="40" y="85" width="120" height="30" fill="{COLOR_PRIMARY}" rx="5" />
  <circle cx="100" cy="100" r="20" fill="{COLOR_SECONDARY}" />
  <path d="M90 100 L110 100 M100 90 L100 110" stroke="#fff" stroke-width="4" />
</svg>"""

# Tech Sources
svg_food_src = svg_food
svg_geo_src = f"""<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="80" fill="{COLOR_PRIMARY}" />
  <path d="M20 100 L180 100" stroke="{COLOR_SECONDARY}" stroke-width="2" />
  <path d="M100 20 L100 180" stroke="{COLOR_SECONDARY}" stroke-width="2" />
  <ellipse cx="100" cy="100" rx="80" ry="30" stroke="{COLOR_ACCENT}" stroke-width="2" fill="none" />
  <ellipse cx="100" cy="100" rx="30" ry="80" stroke="{COLOR_ACCENT}" stroke-width="2" fill="none" />
</svg>"""

svg_digital_src = f"""<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="60" y="40" width="80" height="120" rx="10" fill="{COLOR_DARK}" />
  <rect x="70" y="50" width="60" height="80" fill="#fff" />
  <circle cx="100" cy="145" r="8" fill="{COLOR_SECONDARY}" />
  <path d="M80 70 L120 70 M80 90 L110 90" stroke="{COLOR_PRIMARY}" stroke-width="4" />
</svg>"""


# Generate files
if not os.path.exists("public/images"):
    os.makedirs("public/images")

save_svg("feature1.svg", svg_lead_gen)
save_svg("feature2.svg", svg_market)
save_svg("feature3.svg", svg_agent)
save_svg("feature4.svg", svg_infra)

save_svg("usecase1.svg", svg_food)
save_svg("usecase2.svg", svg_retail)
save_svg("usecase3.svg", svg_property)
save_svg("usecase4.svg", svg_finance)
save_svg("usecase5.svg", svg_health)

save_svg("source_food.svg", svg_food_src)
save_svg("source_geo.svg", svg_geo_src)
save_svg("source_digital.svg", svg_digital_src)
