import json
import random
from faker import Faker
from datetime import datetime, timedelta
from collections import defaultdict

class MusicDataGenerator:
    def __init__(self):
        self.faker = Faker(['fr_FR', 'en_US'])
        self.used_titles = set()  # Pour tracker les titres utilisés

        # Données fixes des producteurs
        self.producers = [
            {"id": "prod_1", "name": "Rick Rubin", "tracks": []},
            {"id": "prod_2", "name": "Max Martin", "tracks": []},
            {"id": "prod_3", "name": "Pharrell Williams", "tracks": []},
            {"id": "prod_4", "name": "Jack Antonoff", "tracks": []},
            {"id": "prod_5", "name": "Mark Ronson", "tracks": []}
        ]

        # Données fixes des artistes
        self.artists = [
            {"id": "art_1", "name": "Taylor Swift", "spotifyId": "spotify_001", "country": "US", "type": "solo"},
            {"id": "art_2", "name": "Ed Sheeran", "spotifyId": "spotify_002", "country": "UK", "type": "solo"},
            {"id": "art_3", "name": "The Weeknd", "spotifyId": "spotify_003", "country": "CA", "type": "solo"},
            {"id": "art_4", "name": "Imagine Dragons", "spotifyId": "spotify_004", "country": "US", "type": "band"},
            {"id": "art_5", "name": "Dua Lipa", "spotifyId": "spotify_005", "country": "UK", "type": "solo"},
            {"id": "art_6", "name": "Arctic Monkeys", "spotifyId": "spotify_006", "country": "UK", "type": "band"},
            {"id": "art_7", "name": "Billie Eilish", "spotifyId": "spotify_007", "country": "US", "type": "solo"},
            {"id": "art_8", "name": "Post Malone", "spotifyId": "spotify_008", "country": "US", "type": "solo"},
            {"id": "art_9", "name": "Coldplay", "spotifyId": "spotify_009", "country": "UK", "type": "band"},
            {"id": "art_10", "name": "Drake", "spotifyId": "spotify_010", "country": "CA", "type": "solo"}
        ]

        # Données pour la génération de titres
        self.title_components = {
            'nouns': ["Love", "Heart", "Night", "Dream", "Life", "Time", "Dance", "Sky", 
                     "Fire", "Rain", "Star", "Soul", "Mind", "Paradise", "Heaven", "Storm",
                     "Light", "Shadow", "Spirit", "Memory", "Hope", "Faith", "Power"],
            'adjectives': ["Sweet", "Wild", "Dark", "Bright", "Lost", "Found", "Broken", 
                         "Perfect", "Beautiful", "Endless", "Golden", "Silver", "Crystal",
                         "Electric", "Mystic", "Sacred", "Divine", "Eternal"],
            'verbs': ["Dancing", "Running", "Falling", "Flying", "Dreaming", "Waiting",
                     "Breaking", "Burning", "Singing", "Rising", "Fading", "Shining"],
            'places': ["Home", "Street", "City", "Ocean", "World", "Moon", "Paradise",
                      "Heaven", "Mountain", "Valley", "Forest", "Desert", "River"]
        }

        # Données musicales
        self.music_data = {
            'styles': ["pop", "rock", "hip-hop", "r&b", "indie", "electronic", "pop-rock", 
                      "synthpop", "disco-pop", "dance-pop", "dark-pop", "electropop"],
            'moods': ["energetic", "melancholic", "upbeat", "chill", "dark", "emotional",
                     "romantic", "angry", "peaceful", "nostalgic", "euphoric", "dreamy"],
            'instruments': ["guitar", "drums", "bass", "synth", "piano", "strings",
                          "electric_guitar", "acoustic_guitar", "808_bass"],
            'keys': ["C", "G", "D", "A", "E", "B", "F#", "C#", "Am", "Em", "Dm", "Bm", 
                    "F#m", "Gm", "Cm", "Bbm"]
        }

    def generate_unique_title(self):
        while True:
            patterns = [
                lambda: f"{random.choice(self.title_components['adjectives'])} {random.choice(self.title_components['nouns'])}",
                lambda: f"{random.choice(self.title_components['verbs'])} {random.choice(self.title_components['places'])}",
                lambda: f"{random.choice(self.title_components['nouns'])} of {random.choice(self.title_components['places'])}",
                lambda: f"The {random.choice(self.title_components['adjectives'])} {random.choice(self.title_components['nouns'])}"
            ]

            title = random.choice(patterns)()
            if title not in self.used_titles:
                self.used_titles.add(title)
                return title

    def generate_track(self, index, album_id, main_artist_id, producer_id):
        duration = f"{random.randint(2,5)}:{random.randint(10,59):02d}"

        stats = {
            "streams": random.randint(100000, 3000000000),
            "likes": random.randint(500000, 5000000),
            "shares": random.randint(100000, 1000000),
            "downloads": random.randint(200000, 1500000),
            "peakPosition": random.randint(1, 20),
            "weeklyTrend": f"{random.choice(['+', '-'])}{random.randint(1,8)}%"
        }

        musical_info = {
            "key": random.choice(self.music_data['keys']),
            "energyLevel": random.choice(["low", "medium", "high"]),
            "mood": random.choice(self.music_data['moods']),
            "instruments": random.sample(self.music_data['instruments'], k=random.randint(3, 4)),
            "style": random.choice(self.music_data['styles'])
        }

        return {
            "id": f"track_{index}",
            "title": self.generate_unique_title(),
            "isrc": f"{''.join(random.choices('ABCDEFGHIJKLMNOPQRSTUVWXYZ', k=2))}{random.randint(10000000, 99999999)}",
            "duration": duration,
            "bpm": random.randint(60, 190),
            "language": "en",
            "releaseYear": random.randint(2018, 2024),
            "albumId": album_id,
            "mainArtistId": main_artist_id,
            "producerId": producer_id,
            "featuredArtists": random.sample([a["id"] for a in self.artists], random.randint(0, 2)),
            "stats": stats,
            "musicalInfo": musical_info
        }

    def generate_album(self, artist_id, index):
        return {
            "id": f"alb_{index}",
            "title": self.generate_unique_title(),
            "releaseDate": (datetime.now() - timedelta(days=random.randint(0, 1500))).strftime("%Y-%m-%d"),
            "totalTracks": random.randint(8, 16),
            "label": random.choice(["Republic Records", "Atlantic", "XO", "Interscope", "Warner Records",
                                  "Domino", "Darkroom", "OVO", "Parlophone"]),
            "distribution": random.choice(["Universal", "Warner", "Sony", "Independent"]),
            "artistId": artist_id
        }

def generate_music_data():
    generator = MusicDataGenerator()

    albums = []
    tracks = []
    track_count = 0

    # Distribution équilibrée des tracks aux producteurs
    producer_track_counts = defaultdict(int)

    # Génération des albums (1-2 par artiste)
    for artist in generator.artists:
        for _ in range(random.randint(1, 2)):
            album = generator.generate_album(artist["id"], len(albums) + 1)
            albums.append(album)

            # 3-5 tracks par album
            for _ in range(random.randint(3, 5)):
                track_count += 1

                # Sélection du producteur avec le moins de tracks
                producer = min(generator.producers, key=lambda p: producer_track_counts[p["id"]])
                producer_track_counts[producer["id"]] += 1

                track = generator.generate_track(
                    track_count,
                    album["id"],
                    album["artistId"],
                    producer["id"]
                )
                tracks.append(track)
                producer["tracks"].append(track["id"])

    return {
        "producers": generator.producers,
        "artists": generator.artists,
        "albums": albums,
        "tracks": tracks
    }

if __name__ == "__main__":
    try:
        data = generate_music_data()

        with open('music_data.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

        print("Données musicales générées avec succès !")
        print(f"Producteurs : {len(data['producers'])}")
        print(f"Artistes : {len(data['artists'])}")
        print(f"Albums : {len(data['albums'])}")
        print(f"Tracks : {len(data['tracks'])}")

    except Exception as e:
        print(f"Erreur lors de la génération : {str(e)}")
