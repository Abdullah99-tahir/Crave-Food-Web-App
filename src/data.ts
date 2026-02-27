export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  image: string;
  categories: string[];
  menu: MenuItem[];
}

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Burger Joint',
    rating: 4.8,
    deliveryTime: '20-30 min',
    deliveryFee: 2.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7tWKyw6zBuQzMffAxLeNgZco249Qn1VkN9w&s',
    categories: ['Burgers', 'American', 'Fast Food'],
    menu: [
      {
        id: 'm1',
        name: 'Classic Cheeseburger',
        description: '100% beef patty with cheddar cheese, lettuce, tomato, and our signature sauce.',
        price: 8.99,
        image: 'https://leitesculinaria.com/wp-content/uploads/2020/02/classic-cheeseburger-1200.jpg',
        category: 'Burgers'
      },
      {
        id: 'm2',
        name: 'Double Bacon Burger',
        description: 'Two beef patties, crispy bacon, american cheese, pickles, and onions.',
        price: 12.99,
        image: 'https://thumbs.dreamstime.com/b/double-cheeseburger-deluxe-decker-many-ingredients-seeded-bun-50618341.jpg',
        category: 'Burgers'
      },
      {
        id: 'm3',
        name: 'French Fries',
        description: 'Crispy golden fries seasoned with sea salt.',
        price: 3.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYOFvOMlVJiBKvxYuwjBGzEx55zkA-I1dWFQ&s',
        category: 'Sides'
      },
      {
        id: 'm4',
        name: 'Onion Rings',
        description: 'Thick-cut onion rings battered and fried to perfection.',
        price: 4.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJx9_FYQEhenu529smPOSecuWX6bqN_GPoDA&s',
        category: 'Sides'
      }
    ]
  },
  {
    id: '2',
    name: 'Sushi Master',
    rating: 4.9,
    deliveryTime: '40-50 min',
    deliveryFee: 4.99,
    image: 'https://img-cdn.publive.online/fit-in/1200x675/filters:format(webp)/sanjeev-kapoor/media/media_files/2025/08/05/fried-sushi-yt-2025-08-05-11-37-18.jpg',
    categories: ['Sushi', 'Japanese', 'Asian'],
    menu: [
      {
        id: 'm5',
        name: 'Spicy Tuna Roll',
        description: 'Fresh tuna mixed with spicy mayo, cucumber, and topped with sesame seeds.',
        price: 14.99,
        image: 'https://dinnerthendessert.com/wp-content/uploads/2023/06/Spicy-Tuna-Rolls-13-e1722979848482.jpg',
        category: 'Rolls'
      },
      {
        id: 'm6',
        name: 'Salmon Nigiri',
        description: 'Two pieces of fresh salmon over pressed vinegared rice.',
        price: 6.99,
        image: 'https://misophat.com/wp-content/uploads/2020/05/salmon-nigiri.jpg',
        category: 'Nigiri'
      },
      {
        id: 'm7',
        name: 'Dragon Roll',
        description: 'Eel, cucumber, topped with avocado and eel sauce.',
        price: 16.99,
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExIWFRUXFhYWFRUXFRcWFxYXFRUXFhgVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLysBCgoKDg0OGxAQGy0lHyUtLSstLS0tLS0tLS0tLS0tLS0vLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA/EAABAwIEBAQDBwIFAgcAAAABAAIRAyEEBRIxBkFRYRMicYEykaEHQlKxwdHwFCMVYnLh8YKSFiRDU6Kywv/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwQABf/EACkRAAICAgIBBAEEAwEAAAAAAAABAhEDIRIxQQQTIlFhMnGBkRSh8CP/2gAMAwEAAhEDEQA/AMJxzlXh1C4CxWSC7ZxllPi0iQLgSFxjFUSxxBSxY0hLUsJkFKBTAHUSKUAVxwcLRZHgdQCz4Wt4TxAkAqWZtR0VwpOWyTi8CWbBQSuhHBNe2VS5hkPMLDHKvJucPoy+9l1rhPRToNiNlznBZcRUII5W9Vo3l1KnvYBTz5VFqh4YnKLN/ltWm9hqmLTCwHGHGZLiykQADE/sq7A5riDQfTZJBmPdZzNMrdSZrqGCdgh7nOo9GNqXgYxWNLzqe4n1KZfjByElTMm4Xq4kB0w1brKOH8PQbpcA53MlVeKKVsVfg5uGPebNhT8Nw/WeJHLktxXxmConXU8t4ENJ+gCewObYau8to1BqB+EjST6A7owcWtdDOLi6ZWZNQLWQ8aXD2lWja2kSHGU1xXjqFNppl4FbTqa3mel1zmnn9Qfe2NweSzT9LNtuDK+4qpl3xTmdV8tJssvlGPdTfE2Kl4nMRU53Kpn0yHStWBSSqRnn3ZKz50ulVEqbjnSBKhLfDojLsMOR6klEmFFSgSkyguOASiRlEuOCRIFBccEhCMBTGULJZSoaMeRBhGpfhoJfcH9pnopjBUZHZcj4+yI0qheBYrqeQYnUweiHEuTNr0yCPRddAZ55hGFZZ3lbqFQtcIuq5UEDATjQkAo5XHDik4HFGm6QoYKWwpZKwp0zo2RcSggAla7C4plQclxKk8i4KvMr4gfT3Nlhyem8xNsPUeJG14gBY6WhFh6b8RpBs3n37KvbnrarYKuxi2UaEjosHqE402tl5ZahS8kzw6dEQ2AAsRmD/wCqrnU6GN26WVbnefvqODASJOy1PBvDdDMP7RrFjqcOe1vxOBtudhKt6f08k+Uu2ZpZFVIsqWbUcLgjXnxQ1wYKbDBk9Se11n+I+Ly99MUqYbTcBqO7pIuC7lCvOKeD6FGuAKj20gCRTJkA6fiv1hU2G4dZUJv5BEnr6d12XPii+L68mrD6ebXJd+BdKmKrQ8EObNxILgOpHJUH9QMLitVRgqeYaBF29DIXTMt4WwtCm4Uy5pfGpxMk/NYnP+H3MrOIGovcSyNw2LA/VLiSxybXTWik5e6kvNg4j4g8fS5tBp0iCd3exVG7KtcvY2J+Kefstdl/C9SoGgNDQBc8zPNR+LmvwFJraIBeXgTGqWi8dkYSlKSr+wTUIxd/0YCvltXXDWGeQg3S/Bc1vns7mCup4TMRUpBzmhri2/a14KyXEeCYWEi2n+brV7km6ZleONNoosVg9TAYVZUwRC0NHHNdTjmFFDwVojNog4JlA6iQkFpWhdSaU27CtT+4I8RQlFKu3YEJmpl4R9xC+2yplCVNfgU07CFNyQriyMiTrqBCQWFG0CmO4VklS6piyThWQEh7pKhJ8pGmC4xDRI5QQGOwcI4ywC3FMyFyrh7EaXBdIwFfU0KhnKvijhVmJabQ7kVx7PuGa2GcZaS3kRsvRNFyRjMtp1QQ5oIPUIp0Bo8ulGF2TiP7M6dSXUvI7pyXNM64ZxGFPnYY/ELhOmK0VISwE2CnAicONKWCm2pYKVoZMdpVi02K1fD2K8f+24F3MBZFbX7PntZqdpl7rN7Dqsfq4R4W/A6YxWywVHtq1afghjiGzYvA5wlZRiHYLGePh3kyC0hw8rmmCWmPQX7K4zbL6+JqagwhoIAJ6TuApv8AguGoNBqHVG5cYHyXm/5ErtP+BoQc3ZW51xrWOYU6rmk4ctZTfSIDgQfie3vJ+ie4v4upYetSp4VrHMEiq0C4JI0wfYqtzvF0ahijTaZMayL+3RUg4dE6nOkrXFQyr/0iXUpw/TIvs24uJswweg5KBlWY63zVqvk2ETEpzJeHKdRxc4+UcupVngMtpAub4Zhro8QgxJ6Dey7JGMY7dBTlOVItsDmDaJA8Zx1dTZZTjnHvbUafEJJAI2jeLR6KJmmcBuIfTa4upAAM2Bbps6Dsb3722UbMBUMPAa9rbw9sO0u2iNrQfdLjxShJOTFkrT4isNn9QDS42TGZ5oCwsF9SlYPJX1qRrtALA3VoaS+pP4dAH6quq5eTfUGtgwXNeHSNwQQBadwSO+4WmMd7JuUqor6boKcbVT1LDtIDoJtPINAMRM8vUjdR6Y8SS0ab7cj6Rt3HdPa7CoNaHxXRjEKG5pBgoBMB2TRXSxWUIBKErjiWXopCYCBK6zqHi0FNnDgpAepdMQEJSoMY2Qq9gojWp3GPuiiy6OkN5GCUaS4oKhPkXeHzst2K1WTcdBgh65wHhA1Qn4keR3bK+OKD93getlqsDm9Op8LgfdeW3VjyMKZl2eV6BllQj3Q4sKkvJ6spuBTGPyynUaQ5oMrjHD32pPaQ2s2R1C6vkWfU8S0OY4EFLy3TG4atHPeMvs4F6mHEHct5H0XL6tJzHFrhBFiCvVmgEXXIvta4ZDf/ADDBB+9HPunTEaOYNKWEy1PtamFRIwOFdUcGhbvDNZhKY5VDEmNh0Q4AycaPFcLlTeIcsrYiq2kxgDLE1PpC8v1knNqC6s0+2+F+SHmHFZgaDeNlRZjgsZiXUy5rtLrzyABvK2OV8Etw7z4n9yRY9Fq6GBaGwBaFLDBQdx/2N4pmAwWT6WanCBIv2Vnicma9hsRO3X1U/M6/heUtlna8yoVLFVfDmIvIDt46KkU+xmWfBnDQIcAPhiajgbTyA5nn/AjxfCuOGKe4VA7DEHSxrocD5QCWlto8xMG9lpOFs4oMwznOqsHmJdcSDpbaNztHssrxL9pbySzCt0gW8RwBce4BsPeVTI4OHGfknHJwlaKJmIwWFxbcN/TGo4vDDMBrC6ST5ruOxI7nmrviWrgq1T+k1hlXwvF1ANDANQYA8yJMbDkFhquV18VVdiD8bzJcbaja8AADYbAJw8GOcdTqoBiIiec7qKnhiqbf892UeXJJ2kF/4XxNJ4p0MwYKRILnsqmm5pNj5WmXWA5/JazNuDqGMdrONeXBjWASwjy8yYkkkk781mGcJH/3B/2/7oHhio0hzKgBFwRLSPQhP/mR+yXGX0VGe5MxmMGFZWcWyGk6bg6ZIibx1/ZVVXCuBLabmOA5tuD05CF0bhUU8OXjFUZfUkHEtGp0OsWvPxDrI99pLeV/Z49rXvNVr5cPDLLh1NvwkmLOPaR6q/vRcLiPjVz+RhqmXVdIc9sW+nUdkx/TrpOf5VUpYTTTGqo1thvebgel4XPGl8A1GaHOvERaSNuW2y6DtWPNJOhkUUfhJ0vSDUTiBCmifSShUS9crgkenSunsQ+Al7BQMbUgJO3QekQnHU5P1SmcKOaXUKs+6EXRGcUEkoKtEhmUSU5pFiISU5ECCCC44MLT8F8TVMJVbclhIDgsup2T4N1aq1jRJJHtdJNJrZTFJqR6pyrFeJTa7qAVnftKc3+kqT+FWWTPFGg0E7NA+QXMftR4qFT+ywyJ8xH5KaekPJU2c6pp8KPh1La1VJHXeEWgYVnotNk9DXUHa5WV4SqzhGei2HChOt55QAvNSvLT+zdJ1jv8FpicKN1W47ENpUy7orvErAcbZmKLDz5R3OyrNU9EIb7MtxHndSq9rWEMAPxmAJBiJPcqLjnV6gLXVC0tHnePLbZTMDkzXYUsrkONRxdHNgN7Hsbqjq1DTHg1KhdoMB95c2+mRyIsNzb3WecvEe/+2WyPgtLsbpkHytdYCAIjmZkzJ95V9lGSkw4tJ7mw+qj5I7DtcHBhe/lbV8mhbLL31KgBawQfxGDHoAVknyk6imLjx1uQluDIAEgegSxgmxefmkVjU2qHw5J06QXGBzt19E/Uy8sAc6oe8k/kF0fTTkWbSIdbAt5E/wDcVj+McZWoGmyk50vmCACZBHlFu62mJwdVj2ubDmOJl2xZa2rqLG/7pmjgar3kEBsbEkO189htvHsrY/Tyxy5NJ/gSTT10V2C8Wo2XN+ScZj6tCRSfE3LXCWk+h29oVrhcQLti7bGLj5osdhW1B35EbhZHyhK+hpRT6M1mXGlUWqUQe7XR9CLfNZ7iOq19GjXb99xt0EGR8x9FIz3DuY7S+45EbH/dZnFSIbJ0iSBNhO8BelgnyW+zLKbVphGomy9NlJWpIe7Hg9O0iSVGVll9GBqKEnQ0VbCq9FT4994VtiXWJVI0a3o4l5BN+CVRpw1N1TZSawiyiYkpo7dgnpEZBGgrETsOMyDA4oSNIJ6WVBi/s1b/AOnV9llMPmdRmxKsKXFVUfeK6mhbXkk1Ps5rDZ4QZ9nVXnUaE2eMan4imK3F1Qj4j80Lkd8Szw/ALBepWt0EBaDAPwWBEsgu68/muc4jPajuZUGpiXu3JQcZPsZSS6NzxHx6+oCymYGyxD6heZJkptjFJpU0YxSA5NjtEKS0JDKdlbcOYLxq7G8gZPoEZOlYIq3R03JcN4eHpt5wJWgyHFFlQNizt1AbT2jYCE6yWuDhyMry1L5cj0JRuNGqxroXIOLJrZhRpfdnUeY63+S6vXrBzQRdcyxFBrcxqvdJDaUt7E2stM35M8F4JmFwI1OpgnU6dMAnbnITmTfZvTcBWq1jU816YECJ5umT15K/4KLHU6gsXh899MCD6TP8K0orWAMW6KeLHfykdlb5FThMjpUpDGNaLWaAB8ggaLTVDR5bEmLfDFuvMKdiKoFwPYRcxteyqMbmFKifEeQI+8SLWuASVVxQqtiM2qMbUYY2aY94/ZQv8UD3im3pYkWlY7ivPhXc3wi4CRpO5dPTSdtlHo5w+kQ2QXtgy3bckySNgeXXnG8XKtmiONvVGsy3iR1apUw9TC1qRph3ne2abtJ0iHAc5kRMgbprMMc9j2hjSRUs57nANpgReCQT7W3J70ruOnBhbUoy42kPAF7bx+SqWcWgaBXpOgG/Ntpi4MnpsrRmpk5Y3A6XTy9tOk6HnURLnCLW3FiLdI6KrNVpuxjhLQTqge5jcrMZxx20Cp4WHc4kDzuaWtBHIMN7AneNlecNY6nVoNLageTJc6YcCTJbHLf/AGQy4ozVMnGTRn+Isyoud4DzpqH4bGAeXmFhKxWZMgj+cluK/CNN1SpVfWdVqEkgABrGTtYEkkDuB2WSzbC6XOa4+YWaY+JQhjjiaURZ/LbKtlOQgaasX0g1rRzi6bLAVpKpaIrKMlWFR8ANCjl0Ig7mUj2x1oiZnVgQo+UsuSUzjqupylYZsM9VZqoV9k1uf7D1YyVXYjdTWusoNQyV2NUCbsbRJUIKpKiaUktSmoEhUJjDqKQaClByXIXHEDwU7ToKRCkUmIHDDaCdY1PTZG1gQCJcukcEZF4NPxXjzv5dAqLhHh/xXCq8eRt2j8RH6LoRMBY/U5b+KNWDHXyYum6EwMYbpTqoTbQ0rGvo1C8vzV2vTyJhK4rp08ODinWEaX9wVTZhUq0KzatIB7dn0z+YPVQsPnzq9Os3FWaah0NcNm9FpxxXDbITfyVIveBcspY/B1n6qlPXU0sq03FlRuloJ0OH3SXQRsY7CNs3CilTYzW52hjW63mXO0tA1PdzcYknqSsf9lOEfTp1yKwNHxS2lSbGllg8uJiS46m84sVpeJsaKdFzpiOfKe/ZaHUYaIfKUtmZ4n4gZpcylVAq3AIAc1pBvIO+xHv7rB51hn4tw1VnaJPktpDt5sLzfeYhW9an4hIO8yDF+kfzolYPLXvkNsObt/lyXlrPknK46PUWHHCOyso8MBtMNFcO5BpaYtym99krEZLVptLnNAHW5Lo59ltcqyQMAEbfyVPq4Jotplp3HL17FNkx5HuwQywWqOR1aJADjzEjnaSI+bSpGU4DxHAnl8I6XJn2P8stdmvDUDVTlzBeN+ZJA+ZspGW0aIYIAJgXH0CT3GtC5Gqsp81ykCmYAsFl8gaynizqEawRJFoJBM+oXQ8wc3SVicmAfj3EtLmsEm1rm0/I7rVgk+Vfg8+fZvcmyhtEHwi4tIgtLnOHzdJn3VPnmVCqZqUgx0wCDqgDZ02JG3JbfK2NFOGN0i8T19eahZpQaQdXQ36StM4pixOKZtVAcANwL9pUJtczZPcRgDEVNO0/p+SLKMPMvOw29UJaVlY/Qo003j36Wwpbt5VLmVaShBWwydIhtEn3Vo8QIUPL6cu9FKruk2VMjuVCw0rG3GGqJKk4k2AUWE0RZCtKCW0oI2AW1KBukApSsZxxwHJJRBBzFwRyU9SeoifY20rjh4uWh4VyP+oPiVLUWm/+c/hH6qpyTLziK9OiLF7gJ6Dcn5Arp9YMoxTpgBjPKB6bk91m9RlcFS7L4MfJ2+hYrhvla3S0CAByRCueajtrA7J8ELz0r7N70PNeEk40TCrsZiWU93X6KkxeZPALmtvyHX2VFH6Ff5NVVeXc4VTmZpkQQHHqqLB5++qSwtc0jnBhWDKZ3N/X9F0lx7Oi+XRovsxq1G4h9EOApFrqhaRu8aWgtPIwRPZvuLr7RmvbhC5phoe3xrb07iZ5AOLHE9GlUnB2Bc7F09L9OmXk8y0WLQO+oD3K2/FOBbWoPpunS4EEcjIIgjmL7dgtGN8obM+RccmjnuU05bETLfnbqdlocjZppsZpggX/ACgfJYnhitUpVabH6g6k0sqMJs6wE9zYET1PVbbD1f7rnAgAtZDeZiZI6ch7LOocZF3PlGi+o0kKrbJNKsDzSsTXAaTvHJaGlRBXZXawHOmIFiPVc7zF9XDYh5LSKZedLrxc8ld4us4hlVwLXvJdE/C0/CLf5Yn3VzmWXCvRNN+/3exAssH6nZqnGlRkcbmw8JxBVrwPlgZQ8V7fPVE3mYJJAIJtYj3lYTB4F5xT6FRwDaREt/G4mQ3/AEwJPy5rsHD+WGziB4dyyZk8w5oPLuTNu62YcXDb8mCXeyxo2YBtFh6QLKBnFEeE+fwlW9Vo357LLcWudTw9WprnTJDTAEbAW9VaR0ezi+YjXVcReTA9rfop5IYwMHLf1UOdN+aJri5TlsstCsRUsSqKo6SrHMaloVYQr4lWyeR+CwwIhhPVKpXKTUdDQ0dEvDDmpvyxvFEfFG6ZASqhklEAqrSEY6GIk4EEpwlgSnNHNJala5WgzhHsj2S/DnbmnfB2XHDIbPonRTiOiQ8QlgzyQONb9mbQce221Oo4ewA/VazNaID3jY6j9brIfZrW0Y9k7FlRv/x1f/lbjiKmdJqtHIEjmR2WH1P6kbfTfpZSVXhogGO6i/4uYgS0c3Hn6KL/AFXj1AyDoBlx9rbJzG02vqNAENJiOtplSSS7LN30KYzxPMLN/Ebk9gFKoUmAfDfru4/soWKoua4NBMkTYWA7IMc6NImZAJ5n0/Jc9hRLNZoJESe38uhTDndbGI29lR5iMXTe3wWtg7TpN+cz+iv6dWo2mC5kEm8OBvtJlBxpBUrdFjlOKfh6zHMLA6Q0gncOsQ7n8ugXT8aFxoUA93mgG0mSJI6R/LLoOH4mDnt8QaGOaIJ5PuTqJ2Bt6QqYppaZLNjbpoz/ABnkVQk4nDgOe0eal8OsC/lP4x33+Sosq4l10hUfRqNAkOOhz4gls+UTuOi6NicY0OaNTZc7QBqFy4Ej/wCp+axOd5VWoPf4Th4VTUSwzLXukuLCBeSdV9iTuFbhGXZHlJCMRxu3yGk11Rwc3U1rHk6SYNgOX7dlNGeU6rHvNRwH3h4b2uv1JEiSCLKhoO/o9BrUoaXs1vDhBa5zdcncFov7fLb4ptIDW2C3q0y2+9wg8aoPNpmPz/F1a7RSotd4pMy9rmAA2kuI9bellqcprYkN1VKLXAhvhhhOqwAJeXWN5MpyrRaaPiMcIaCQW326RunBnzXUwyC1/la2xgkkCx5QL3+qHtxQXOTKjKeBHhxqPLS59QvqOfdzpfLmiNreWfeFu8LV3YAAGwBf6AdFX4YYg6GERTIdqqFw1t6ADeT6fok1sI2m5uglsuaCd7FwBmZlP0TqydiyQCuQfaBnLjGHD9QEFx52Nge9gfl1XWc2rsGkOcBLoAJA1HSTpA+8YBMdlxPjGqzEY9/giQxrWvLRZ1RpdJtvAIbP+RLJDQM+4dUtogSplXCEbiFBxz9ISLZRqirxT5ck0GS4BIVpk2FkOf8A9I/VaJPjEjFcpDLqd047ytTxp391GxhtCknZVqiKAgEEYViI4EESCUIyCU+yOaaaz0RVGmbXWgzkyk8czCBrzsYUZtDmTCcbRHVccKa8k3Upl1Ha1O6+UoHE7LMUaNVlVvxMcHevIj3BI911jx24igH032eJtytcdiIj1XHmuEbqfkOeuwtSR5mH4m+v3h3WfPi57XZow5OGn0XuMoPw74aD5iBH1sfQEKyqNFQS21RsESIMibQff5q6pGnimNqMcCLQR1HI9DKdfhmPtV8rwPLUFgegP1sVicv7NiSKgVGVacjyuHKPhPMHtI+ig1HD4xED4wN+xHv+iWKFahVdqE0zI1R5TsL9Lzv9Uwa4c5xIEAX9hB+Zt3RSCT6dZjwGuMn7ruvMT81La8E6HNv0/YqkwJAp+YQCSR1FhB+an08RrpSdxsefRCSCmO1aOmdIh1+sPH4d7OT4qCswt1QenfoRz6pFJ5cwTzt691WPqEXvIMA8yCYulqwia+CcXC2l7SCLkGeTmnf0I5hFhnYpr3OZVfrMa9Z8Q87+ebdx1VjRxYePOCYJEntzBF5/ZQquPh2k+aPhcfKfYi4TxlJdAaT7KTOMtxNYg1ajnxtq2F9w1tgomX5Q01GMrOc2lqGsAmNPMADrb5rQVcebbkE2JvE3v7o2VJsR/O6opy8ie3F9Gvy7NcHAoUHNY0WAgsEDpqA1bKzo5dTdUaXAFsnU07GfKJB73+S54WaSIG52O38upjXOaPK57Y/C9wj0gpvd+xPZ+mdRxOM07ct1x3i3j2pXez+n102MJJnSfEJAgkRaPPAnmDvYTMXUqvY4eNVh0BwNR5BG3M2F7jnzVPiOHxFj/t2Q95M5YaJ+Z/aK6tgqlB9H+69nhuqavJBgOdp3BibbSZ7K2yDJG4PCNL2/3qgD3zu3VsztAie8qn4d4WD67C/4GHW7vpuAfUx7StHxNj9/5fkoZ8nOoIpjhx2Y/PKomP53WRzKpJhXWYVpkrO1HSSVqwxojldja2dDC+DhmAi+nUfV11l8swvi1qdP8TgD6bn6AraZ2+TA6/QJfUy2o/yP6eNJy/gz1QR/Oqq8UZKs8S65VPUdJKfEiWRhJYCSE+wKrJiIQTsIkthoQ1yUH2/kpotSVpMw68hIkwg0Tz/dOtAELjhEpxokfz6p0NB6T8ktoPYLjhDGT2SnUhHZE8d/klsslYUS8nzSrhX6qTon42HZ3qOvfcfRdJyXPqWLY6LOaPOw/EB17juPzXLS4DeE2yuWuD2ktIPlcCQR7jZRyYYz35LY8rh+x14hwZEyw2I5wSBaeR6KsxuStdpNJ/l2LIsHCd28iqTh7jYBvhYgRaG1QDBPLxB93/ULei01YAXDgZAc1zeYN7OHL6X5rJKEovZrjNSVoocxY+mIcIJIAtv6dUdWvADAI25Cwnn7hXdXGtBAezWIsYh3y2KrMTlusTSdc7g7+lrhD9xxNXFBvlDth0j+FRPFBi/f/n3TVfB+FAeLm88vYosPhQTMnqf2XUjrZY4OoGtEzeSRf7yGJoNqOBB2vAUCsS12nUdr8/Qdtk/TLmxFydz07XQqthsdqYJptB9hf2TrMOzYA2H8lRa2Me20X+vO6TTxDnfFJ9P1XUw2iU5nmEGw/wCICkudAuLnko9PENA7/kkVcUJ3k/kloNi6rwfKCZO/YJD3GbH+Hv7BBpiwMkqxyjDh7w2x5u9Ag3SCW+X0/CoAuHmfc+nIfr7rGcSYuTpH8lK49zQtr/2nmYa1w1GG3gAQbd1nHyJJcXHe5/KU2PFpTfkjLJbcUV+Z1eSrYT+JqanFNALbBUiEnbNDwRh5qvqn7jLf6nW/IFLzbMNNRwcABs2+46p3AYn+lwgdEuqOLv8ApFgs9isUapLzYFwAHaZKlCDnkcmtdDZMihBRT2ScRWlpMQqwKZjasi3NQ1aCJSFNUqmFHpqSxCRyF6UEJQSDFeKke6OSQjQWwxiU9TcAgguCLFj6+6ddU6/zsgguOCNQ7D1R0j1d7QjQQOCqSEgCf25IkEBhbWA2HupuW5pXwxhhlv4HGW36fh9veUEEKTVM5Oto0WHz1lUxBDhfSbx1h2xG/T0VnTqNJAmDvt1/JBBZcsFF6NuKblG2WeKpOLQZDtrO6WUXGUWgANHhu7XF0EFBIrZEZgXtJkjeJ5nvPJJfZ0QCeZ6egQQQscQ4PcfLt1tKk0qceVzDf/Nb6IILmwCHUByaB7lJODG4tdEghYyQ0MLfc+spvNcXUwmHLmOIc8gauYHQIIIxdySYmTUG0YyrWJc2TLvjcTzcVIxtYht+iNBbMiVpGTE9MqNScoDU4N6kD5okE0ujkazjJzadBlMC+kNHpzuspSZOgDa590EFP0+sVh9RvLQeI3A6JlBBUj0I+xykpIKCCWQUHKCCCQJ//9k=',
        category: 'Rolls'
      }
    ]
  },
  {
    id: '3',
    name: 'Pizza Paradiso',
    rating: 4.6,
    deliveryTime: '30-45 min',
    deliveryFee: 1.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyfu43aJ94a_w8VYyiO5Zuc4Sc03RjnfLmaQ&s',
    categories: ['Pizza', 'Italian'],
    menu: [
      {
        id: 'm8',
        name: 'Margherita Pizza',
        description: 'Classic tomato sauce, fresh mozzarella, and basil.',
        price: 16.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX2w-6ljxAJtEImAJ4zBsRnou1CoSAVmgvQw&s',
        category: 'Pizza'
      },
      {
        id: 'm9',
        name: 'Pepperoni Pizza',
        description: 'Tomato sauce, mozzarella, and loaded with pepperoni.',
        price: 18.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHspWXnS9Xi0-ZRmPo0ClM0Wrv1fYWqq9eQ&s',
        category: 'Pizza'
      },
      {
        id: 'm10',
        name: 'Garlic Knots',
        description: 'Oven-baked dough knots tossed in garlic butter and parmesan.',
        price: 5.99,
        image: 'https://www.kingarthurbaking.com/sites/default/files/2022-05/garlic-knots-2.jpg',
        category: 'Sides'
      }
    ]
  },
  {
    id: '4',
    name: 'Green Bowl',
    rating: 4.7,
    deliveryTime: '15-25 min',
    deliveryFee: 3.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThAnCYFhDCCFc2h9JFxXSdrNNqXZF8gOC7EA&s',
    categories: ['Healthy', 'Salads', 'Vegan'],
    menu: [
      {
        id: 'm11',
        name: 'Quinoa Power Bowl',
        description: 'Quinoa, roasted sweet potatoes, kale, avocado, and tahini dressing.',
        price: 13.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKmNZs4P6SsvcTgWEx-S-EE7YilMALje7Dw&s',
        category: 'Bowls'
      },
      {
        id: 'm12',
        name: 'Caesar Salad',
        description: 'Crisp romaine, parmesan, croutons, and creamy Caesar dressing.',
        price: 10.99,
        image: 'https://d2rluq6rcpndy0.cloudfront.net/img/caesar-salad.jpeg',
        category: 'Salads'
      }
    ]
  },
  {
    id: '5',
    name: 'Taco Fiesta',
    rating: 4.5,
    deliveryTime: '25-40 min',
    deliveryFee: 2.49,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP4ME1vuNLcWzWn_mDzS_2nmptP5COiRqvcQ&s',
    categories: ['Mexican', 'Tacos'],
    menu: [
      {
        id: 'm13',
        name: 'Al Pastor Tacos',
        description: 'Three corn tortillas with marinated pork, pineapple, cilantro, and onion.',
        price: 11.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS740sZ95c1IneKwuITFF0eUIaLKHiw4pEixQ&s',
        category: 'Tacos'
      },
      {
        id: 'm14',
        name: 'Guacamole & Chips',
        description: 'Freshly mashed avocado with lime, cilantro, and crispy tortilla chips.',
        price: 6.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmvmXVoOn4sc0e6pfCksTS-KLypIo2D49zw&s',
        category: 'Sides'
      }
    ]
  },
  {
    id: '6',
    name: 'Wok & Roll',
    rating: 4.4,
    deliveryTime: '35-50 min',
    deliveryFee: 0.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwZM_EKSuwNNR7IJ5JFwIPnzWhh06j1DKe7g&s',
    categories: ['Asian', 'Chinese', 'Noodles'],
    menu: [
      {
        id: 'm15',
        name: 'Pad Thai',
        description: 'Rice noodles stir-fried with egg, peanuts, bean sprouts, and tamarind sauce.',
        price: 13.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQClEjqgNZOX2F-jank7j92jq2d-Lf-azN7Xg&s',
        category: 'Noodles'
      },
      {
        id: 'm16',
        name: 'Orange Chicken',
        description: 'Crispy chicken pieces tossed in a sweet and tangy orange sauce, served with rice.',
        price: 14.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1PH-qfKuXcFn-Bgk98YHIX76JPSvLuL1nyQ&s',
        category: 'Mains'
      }
    ]
  }
];
