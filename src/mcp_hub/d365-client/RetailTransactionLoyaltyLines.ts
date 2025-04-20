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
import type { RetailTransactionLoyaltyLinesApi } from './RetailTransactionLoyaltyLinesApi';

/**
 * This class represents the entity "RetailTransactionLoyaltyLines" of service "d365_metadata".
 */
export class RetailTransactionLoyaltyLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionLoyaltyLinesType<T>
{
  /**
   * Technical entity name for RetailTransactionLoyaltyLines.
   */
  static override _entityName = 'RetailTransactionLoyaltyLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionLoyaltyLines entity.
   */
  static _keys = [
    'dataAreaId',
    'TransactionNumber',
    'Terminal',
    'OperatingUnitNumber',
    'LoyaltyName',
    'LoyaltyTierId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Number.
   */
  declare transactionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Loyalty Name.
   */
  declare loyaltyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Loyalty Tier Id.
   */
  declare loyaltyTierId: DeserializedType<T, 'Edm.String'>;
  /**
   * Receipt Id.
   * @nullable
   */
  declare receiptId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailTransactionLoyaltyLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionLoyaltyLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transactionNumber: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  loyaltyName: DeserializedType<T, 'Edm.String'>;
  loyaltyTierId: DeserializedType<T, 'Edm.String'>;
  receiptId?: DeserializedType<T, 'Edm.String'> | null;
}
