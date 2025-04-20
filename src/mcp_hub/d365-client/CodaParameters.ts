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
import type { CodaParametersApi } from './CodaParametersApi';
import { NoYes } from './NoYes';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "CodaParameters" of service "d365_metadata".
 */
export class CodaParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CodaParametersType<T>
{
  /**
   * Technical entity name for CodaParameters.
   */
  static override _entityName = 'CodaParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CodaParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Auto Create New Bank Accounts.
   * @nullable
   */
  declare isAutoCreateNewBankAccounts?: NoYes | null;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Sales Tax Group.
   * @nullable
   */
  declare itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Number Display Value.
   * @nullable
   */
  declare accountNumberDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revenue Account Display Value.
   * @nullable
   */
  declare revenueAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Account Display Value.
   * @nullable
   */
  declare costAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prefix New Bank Accounts.
   * @nullable
   */
  declare prefixNewBankAccounts?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ignore Cash Discount.
   * @nullable
   */
  declare ignoreCashDiscount?: NoYes | null;
  /**
   * Is Override Statement In Case Of No Matching.
   * @nullable
   */
  declare isOverrideStatementInCaseOfNoMatching?: NoYes | null;
  /**
   * Coda Deviation.
   */
  declare codaDeviation: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: CodaParametersApi<T>) {
    super(_entityApi);
  }
}

export interface CodaParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  isAutoCreateNewBankAccounts?: NoYes | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  accountNumberDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  revenueAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  costAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  prefixNewBankAccounts?: DeserializedType<T, 'Edm.String'> | null;
  ignoreCashDiscount?: NoYes | null;
  isOverrideStatementInCaseOfNoMatching?: NoYes | null;
  codaDeviation: DeserializedType<T, 'Edm.Decimal'>;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
