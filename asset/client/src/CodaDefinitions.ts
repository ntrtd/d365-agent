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
import type { CodaDefinitionsApi } from './CodaDefinitionsApi';
import { BankCodaLedgerJournalAcType } from './BankCodaLedgerJournalAcType';
import { GlobalisationCode } from './GlobalisationCode';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "CodaDefinitions" of service "d365_metadata".
 */
export class CodaDefinitions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CodaDefinitionsType<T>
{
  /**
   * Technical entity name for CodaDefinitions.
   */
  static override _entityName = 'CodaDefinitions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CodaDefinitions entity.
   */
  static _keys = [
    'dataAreaId',
    'BankAccount',
    'TransactionGroup',
    'Transaction',
    'TransactionCategory'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Bank Account.
   */
  declare bankAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Group.
   */
  declare transactionGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction.
   */
  declare transaction: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Category.
   */
  declare transactionCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
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
   * Account Type.
   * @nullable
   */
  declare accountType?: BankCodaLedgerJournalAcType | null;
  /**
   * Account Display Value.
   * @nullable
   */
  declare accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Globalization Coda.
   * @nullable
   */
  declare globalizationCoda?: GlobalisationCode | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: CodaDefinitionsApi<T>) {
    super(_entityApi);
  }
}

export interface CodaDefinitionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  bankAccount: DeserializedType<T, 'Edm.String'>;
  transactionGroup: DeserializedType<T, 'Edm.String'>;
  transaction: DeserializedType<T, 'Edm.String'>;
  transactionCategory: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  accountType?: BankCodaLedgerJournalAcType | null;
  accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  globalizationCoda?: GlobalisationCode | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
