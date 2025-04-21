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
import type { RTax25TaxTablesApi } from './RTax25TaxTablesApi';
import { RTax25TaxModule } from './RTax25TaxModule';
import { TaxTypeW } from './TaxTypeW';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "RTax25TaxTables" of service "d365_metadata".
 */
export class RTax25TaxTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RTax25TaxTablesType<T>
{
  /**
   * Technical entity name for RTax25TaxTables.
   */
  static override _entityName = 'RTax25TaxTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RTax25TaxTables entity.
   */
  static _keys = ['dataAreaId', 'Module', 'Code'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Module.
   * @nullable
   */
  declare module?: RTax25TaxModule | null;
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Allowance Decrease Base 387.
   * @nullable
   */
  declare allowanceDecreaseBase387?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allowance Decrease Base 387 Value.
   */
  declare allowanceDecreaseBase387Value: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Main Account Display Value.
   * @nullable
   */
  declare mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allowance By Reduction Of Tax Value.
   */
  declare allowanceByReductionOfTaxValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Budget Revenue Code.
   * @nullable
   */
  declare budgetRevenueCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allowance Decrease Base 391.
   * @nullable
   */
  declare allowanceDecreaseBase391?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allowance By Reduction Of Rate.
   * @nullable
   */
  declare allowanceByReductionOfRate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allowance Decrease Base 391 Value.
   */
  declare allowanceDecreaseBase391Value: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allowance By Reduction Of Rate Value.
   */
  declare allowanceByReductionOfRateValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Type Of Tax.
   * @nullable
   */
  declare typeOfTax?: TaxTypeW | null;
  /**
   * Allowance By Reduction Of Tax.
   * @nullable
   */
  declare allowanceByReductionOfTax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: RTax25TaxTablesApi<T>) {
    super(_entityApi);
  }
}

export interface RTax25TaxTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  module?: RTax25TaxModule | null;
  code: DeserializedType<T, 'Edm.String'>;
  allowanceDecreaseBase387?: DeserializedType<T, 'Edm.String'> | null;
  allowanceDecreaseBase387Value: DeserializedType<T, 'Edm.Decimal'>;
  mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  allowanceByReductionOfTaxValue: DeserializedType<T, 'Edm.Decimal'>;
  budgetRevenueCode?: DeserializedType<T, 'Edm.String'> | null;
  allowanceDecreaseBase391?: DeserializedType<T, 'Edm.String'> | null;
  allowanceByReductionOfRate?: DeserializedType<T, 'Edm.String'> | null;
  allowanceDecreaseBase391Value: DeserializedType<T, 'Edm.Decimal'>;
  allowanceByReductionOfRateValue: DeserializedType<T, 'Edm.Decimal'>;
  typeOfTax?: TaxTypeW | null;
  allowanceByReductionOfTax?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
