const fs = require('fs');

try {
  let content = fs.readFileSync('experience.html', 'utf8');
  
  const replacements = {
    'Images/img (18).jpg': 'Images/img (1).jpg',
    'https://picsum.photos/id/104/100/100': 'Images/img (2).jpg',
    'https://picsum.photos/id/106/100/100': 'Images/img (3).jpg',
    'https://picsum.photos/id/20/100/100': 'Images/img (4).jpg',
    'https://picsum.photos/id/15/100/100': 'Images/img (5).jpg',
    'https://picsum.photos/id/16/100/100': 'Images/img (6).jpg',
    'https://picsum.photos/id/29/100/100': 'Images/img (7).jpg',
    'https://picsum.photos/id/30/100/100': 'Images/img (8).jpg',
    'https://placehold.co/100x100/9c89b8/white?text=E': 'Images/person (1).jpg',
    'https://placehold.co/100x100/6c9ebf/white?text=D': 'Images/person (2).jpg',
    'https://placehold.co/100x100/c77d6e/white?text=M&S': 'Images/person (3).jpg',
    'https://picsum.photos/id/22/400/400': 'Images/img (10).jpg'
  };

  for (const [oldUrl, newUrl] of Object.entries(replacements)) {
    content = content.replace(oldUrl, newUrl);
  }

  fs.writeFileSync('experience.html', content, 'utf8');
  console.log('Successfully replaced image URLs in experience.html');
} catch (e) {
  console.error(e);
}
