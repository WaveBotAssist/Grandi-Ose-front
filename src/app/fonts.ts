// app/fonts.ts
import { Source_Sans_3 } from 'next/font/google'; // Remplacez Inter par votre police

export const source_Sans_3 = Source_Sans_3({
  subsets: ['latin'], // Spécifiez les sous-ensembles nécessaires
  weight: ['400'], // Définissez les poids des polices
  variable: '--font-sourceSans3', // Créez une variable CSS pour plus de flexibilité
});
