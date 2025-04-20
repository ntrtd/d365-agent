/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { PeriodChargeRuleLineCustomersApi } from './PeriodChargeRuleLineCustomersApi';
import { NoYes } from './NoYes';
import { MarkupPeriodChargeRuleLineType } from './MarkupPeriodChargeRuleLineType';
import { Currencies, CurrenciesType } from './Currencies';
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';
import {
  PeriodChargeRuleCustomers,
  PeriodChargeRuleCustomersType
} from './PeriodChargeRuleCustomers';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { SalesCharge, SalesChargeType } from './SalesCharge';

/**
 * This class represents the entity "PeriodChargeRuleLineCustomers" of service "d365_metadata".
 */
export class PeriodChargeRuleLineCustomers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PeriodChargeRuleLineCustomersType<T>
{
  /**
   * Technical entity name for PeriodChargeRuleLineCustomers.
   */
  static override _entityName = 'PeriodChargeRuleLineCustomers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PeriodChargeRuleLineCustomers entity.
   */
  static _keys = ['dataAreaId', 'RuleName', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rule Name.
   */
  declare ruleName: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Debit Charge Amount Only.
   * @nullable
   */
  declare debitChargeAmountOnly?: NoYes | null;
  /**
   * Rule Line Type.
   * @nullable
   */
  declare ruleLineType?: MarkupPeriodChargeRuleLineType | null;
  /**
   * Default Revenue Account Display Value.
   * @nullable
   */
  declare defaultRevenueAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Charge Code.
   * @nullable
   */
  declare salesChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Symbol.
   * @nullable
   */
  declare unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity Threshold.
   */
  declare quantityThreshold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Charge Amount.
   */
  declare chargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rule Line Description.
   * @nullable
   */
  declare ruleLineDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Debit Quantity Only.
   * @nullable
   */
  declare debitQuantityOnly?: NoYes | null;
  /**
   * Sales Currency Code.
   * @nullable
   */
  declare salesCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Charge Amount Currency Code.
   * @nullable
   */
  declare chargeAmountCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Monetary Threshold.
   */
  declare monetaryThreshold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare unitOfMeasure?: UnitsOfMeasure<T> | null;
  /**
   * One-to-one navigation property to the {@link PeriodChargeRuleCustomers} entity.
   */
  declare chargeRule?: PeriodChargeRuleCustomers<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare revenueAccount?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesCharge} entity.
   */
  declare salesCharge?: SalesCharge<T> | null;

  constructor(_entityApi: PeriodChargeRuleLineCustomersApi<T>) {
    super(_entityApi);
  }
}

export interface PeriodChargeRuleLineCustomersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  ruleName: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  debitChargeAmountOnly?: NoYes | null;
  ruleLineType?: MarkupPeriodChargeRuleLineType | null;
  defaultRevenueAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  salesChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  quantityThreshold: DeserializedType<T, 'Edm.Decimal'>;
  chargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  ruleLineDescription?: DeserializedType<T, 'Edm.String'> | null;
  debitQuantityOnly?: NoYes | null;
  salesCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  chargeAmountCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  monetaryThreshold: DeserializedType<T, 'Edm.Decimal'>;
  currency?: CurrenciesType<T> | null;
  unitOfMeasure?: UnitsOfMeasureType<T> | null;
  chargeRule?: PeriodChargeRuleCustomersType<T> | null;
  revenueAccount?: DimensionCombinationsType<T> | null;
  salesCharge?: SalesChargeType<T> | null;
}
