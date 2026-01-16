import { Test, TestingModule } from '@nestjs/testing';
import { CategorizationService } from './CSV/categorization/categorization.service';
import { Category } from './CSV/models/category.enum';

describe('CategorizationService', () => {
  let categorizationService: CategorizationService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [CategorizationService],
    }).compile();

    categorizationService = app.get<CategorizationService>(CategorizationService);
  });

  describe('categorize', () => {
    it('should categorize supermarket transactions as COURSES', () => {
      expect(categorizationService.categorize('CARREFOUR MARKET PARIS')).toBe(Category.COURSES);
      expect(categorizationService.categorize('LIDL SUPERMARCHE')).toBe(Category.COURSES);
    });

    it('should categorize restaurant transactions as RESTAURANTS', () => {
      expect(categorizationService.categorize("MCDONALD'S PARIS")).toBe(Category.RESTAURANTS);
      expect(categorizationService.categorize('UBER EATS LIVRAISON')).toBe(Category.RESTAURANTS);
    });

    it('should categorize transport transactions as TRANSPORT', () => {
      expect(categorizationService.categorize('STATION TOTAL AUTOROUTE')).toBe(Category.TRANSPORT);
      expect(categorizationService.categorize('SNCF BILLET TGV')).toBe(Category.TRANSPORT);
    });

    it('should categorize subscription transactions as ABONNEMENTS', () => {
      expect(categorizationService.categorize('NETFLIX MENSUEL')).toBe(Category.ABONNEMENTS);
    });

    it('should categorize health transactions as SANTE', () => {
      expect(categorizationService.categorize('PHARMACIE DU CENTRE')).toBe(Category.SANTE);
    });

    it('should categorize housing transactions as LOGEMENT', () => {
      expect(categorizationService.categorize('EDF ELECTRICITE')).toBe(Category.LOGEMENT);
    });

    it('should categorize entertainment transactions as LOISIRS', () => {
      expect(categorizationService.categorize('UGC CINE CITE')).toBe(Category.LOISIRS);
    });

    it('should categorize income as REVENUS', () => {
      expect(categorizationService.categorize('VIREMENT RECU SALAIRE')).toBe(Category.REVENUS);
    });

    it('should categorize bank fees as BANQUE', () => {
      expect(categorizationService.categorize('FRAIS BANCAIRES MENSUELS')).toBe(Category.BANQUE);
    });

    it('should categorize unknown transactions as AUTRES', () => {
      expect(categorizationService.categorize('ACHAT AMAZON LIVRE')).toBe(Category.AUTRES);
    });
  });
});
