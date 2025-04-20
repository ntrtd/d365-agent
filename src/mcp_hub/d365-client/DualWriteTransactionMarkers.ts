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
import type { DualWriteTransactionMarkersApi } from './DualWriteTransactionMarkersApi';
import { DualWriteTransactionStatus } from './DualWriteTransactionStatus';

/**
 * This class represents the entity "DualWriteTransactionMarkers" of service "d365_metadata".
 */
export class DualWriteTransactionMarkers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DualWriteTransactionMarkersType<T>
{
  /**
   * Technical entity name for DualWriteTransactionMarkers.
   */
  static override _entityName = 'DualWriteTransactionMarkers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DualWriteTransactionMarkers entity.
   */
  static _keys = [
    'TransactionId',
    'TransactionCreatedDateTime',
    'FnOTransactionStatus'
  ];
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Created Date Time.
   */
  declare transactionCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Fn O Transaction Status.
   * @nullable
   */
  declare fnOTransactionStatus?: DualWriteTransactionStatus | null;
  /**
   * Fn O Transaction Id Reference.
   */
  declare fnOTransactionIdReference: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: DualWriteTransactionMarkersApi<T>) {
    super(_entityApi);
  }
}

export interface DualWriteTransactionMarkersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  transactionId: DeserializedType<T, 'Edm.String'>;
  transactionCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fnOTransactionStatus?: DualWriteTransactionStatus | null;
  fnOTransactionIdReference: DeserializedType<T, 'Edm.Int64'>;
}
