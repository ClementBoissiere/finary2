import { Injectable } from '@nestjs/common';
import { Category } from '../models/category.enum';
import { CATEGORY_RULES } from './categoryRules';

@Injectable()
export class CategorizationService {
  categorize(libelle: string): Category {
    const normalizedLibelle = libelle.toLowerCase();

    for (const [category, keywords] of Object.entries(CATEGORY_RULES)) {
      if (category === Category.AUTRES) continue;

      for (const keyword of keywords) {
        if (normalizedLibelle.includes(keyword)) {
          return category as Category;
        }
      }
    }

    return Category.AUTRES;
  }
}
