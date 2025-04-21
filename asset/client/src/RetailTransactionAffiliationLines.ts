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
import type { RetailTransactionAffiliationLinesApi } from './RetailTransactionAffiliationLinesApi';

/**
 * This class represents the entity "RetailTransactionAffiliationLines" of service "d365_metadata".
 */
export class RetailTransactionAffiliationLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionAffiliationLinesType<T>
{
  /**
   * Technical entity name for RetailTransactionAffiliationLines.
   */
  static override _entityName = 'RetailTransactionAffiliationLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionAffiliationLines entity.
   */
  static _keys = [
    'dataAreaId',
    'AffiliationName',
    'OperatingUnitNumber',
    'Terminal',
    'TransactionNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Affiliation Name.
   */
  declare affiliationName: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Number.
   */
  declare transactionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Receipt Number.
   * @nullable
   */
  declare receiptNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailTransactionAffiliationLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionAffiliationLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  affiliationName: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionNumber: DeserializedType<T, 'Edm.String'>;
  receiptNumber?: DeserializedType<T, 'Edm.String'> | null;
}
