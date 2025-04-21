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
import type { PbsItemizationsApi } from './PbsItemizationsApi';

/**
 * This class represents the entity "PbsItemizations" of service "d365_metadata".
 */
export class PbsItemizations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PbsItemizationsType<T>
{
  /**
   * Technical entity name for PbsItemizations.
   */
  static override _entityName = 'PbsItemizations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PbsItemizations entity.
   */
  static _keys = [
    'dataAreaId',
    'CCTransUniqueID',
    'SubcategoryCode',
    'TransactionDate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cc Trans Unique Id.
   */
  declare ccTransUniqueId: DeserializedType<T, 'Edm.String'>;
  /**
   * Subcategory Code.
   */
  declare subcategoryCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Exch Code Local Currency.
   * @nullable
   */
  declare exchCodeLocalCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Credit Card Currency.
   */
  declare amountCreditCardCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Local Currency.
   */
  declare amountLocalCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exch Code Credit Card Currency.
   * @nullable
   */
  declare exchCodeCreditCardCurrency?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PbsItemizationsApi<T>) {
    super(_entityApi);
  }
}

export interface PbsItemizationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  ccTransUniqueId: DeserializedType<T, 'Edm.String'>;
  subcategoryCode: DeserializedType<T, 'Edm.String'>;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exchCodeLocalCurrency?: DeserializedType<T, 'Edm.String'> | null;
  amountCreditCardCurrency: DeserializedType<T, 'Edm.Decimal'>;
  amountLocalCurrency: DeserializedType<T, 'Edm.Decimal'>;
  exchCodeCreditCardCurrency?: DeserializedType<T, 'Edm.String'> | null;
}
