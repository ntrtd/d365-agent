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
import type { ExpenseRatesApi } from './ExpenseRatesApi';
import { NoYes } from './NoYes';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "ExpenseRates" of service "d365_metadata".
 */
export class ExpenseRates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExpenseRatesType<T>
{
  /**
   * Technical entity name for ExpenseRates.
   */
  static override _entityName = 'ExpenseRates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpenseRates entity.
   */
  static _keys = ['dataAreaId', 'Expense'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Expense.
   */
  declare expense: DeserializedType<T, 'Edm.String'>;
  /**
   * Over Rate Payroll Is Transfer To Tax Base.
   * @nullable
   */
  declare overRatePayrollIsTransferToTaxBase?: NoYes | null;
  /**
   * Over Rate Payroll Income.
   * @nullable
   */
  declare overRatePayrollIncome?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rate Item Sales Tax Group.
   * @nullable
   */
  declare rateItemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rate I Amounts Include Sales Tax.
   * @nullable
   */
  declare rateIAmountsIncludeSalesTax?: NoYes | null;
  /**
   * Rate Sales Tax Group.
   * @nullable
   */
  declare rateSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rate Main Account Display Value.
   * @nullable
   */
  declare rateMainAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Over Rate Item Sales Tax Group.
   * @nullable
   */
  declare overRateItemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Over Rate Main Account Display Value.
   * @nullable
   */
  declare overRateMainAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Over Rate Default Dimension Display Value.
   * @nullable
   */
  declare overRateDefaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vat Operation Code.
   * @nullable
   */
  declare vatOperationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rate Default Dimension Display Value.
   * @nullable
   */
  declare rateDefaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Over Rate Payroll Retention.
   * @nullable
   */
  declare overRatePayrollRetention?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rate.
   */
  declare rate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Over Rate Is Amounts Include Sales Tax.
   * @nullable
   */
  declare overRateIsAmountsIncludeSalesTax?: NoYes | null;
  /**
   * Over Rate Sales Tax Group.
   * @nullable
   */
  declare overRateSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: ExpenseRatesApi<T>) {
    super(_entityApi);
  }
}

export interface ExpenseRatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  expense: DeserializedType<T, 'Edm.String'>;
  overRatePayrollIsTransferToTaxBase?: NoYes | null;
  overRatePayrollIncome?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  rateItemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  rateIAmountsIncludeSalesTax?: NoYes | null;
  rateSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  rateMainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  overRateItemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  overRateMainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  overRateDefaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  vatOperationCode?: DeserializedType<T, 'Edm.String'> | null;
  rateDefaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  overRatePayrollRetention?: DeserializedType<T, 'Edm.String'> | null;
  rate: DeserializedType<T, 'Edm.Decimal'>;
  overRateIsAmountsIncludeSalesTax?: NoYes | null;
  overRateSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
