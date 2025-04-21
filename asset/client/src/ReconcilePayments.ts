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
import type { ReconcilePaymentsApi } from './ReconcilePaymentsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ReconcilePayments" of service "d365_metadata".
 */
export class ReconcilePayments<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ReconcilePaymentsType<T>
{
  /**
   * Technical entity name for ReconcilePayments.
   */
  static override _entityName = 'ReconcilePayments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReconcilePayments entity.
   */
  static _keys = [
    'dataAreaId',
    'TransactionId',
    'PaymentTransLineNumber',
    'CommentTime'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Trans Line Number.
   */
  declare paymentTransLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Comment Time.
   */
  declare commentTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Comment User.
   * @nullable
   */
  declare commentUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comment Note.
   * @nullable
   */
  declare commentNote?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reconcile Status.
   * @nullable
   */
  declare reconcileStatus?: NoYes | null;

  constructor(_entityApi: ReconcilePaymentsApi<T>) {
    super(_entityApi);
  }
}

export interface ReconcilePaymentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  paymentTransLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  commentTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  commentUser?: DeserializedType<T, 'Edm.String'> | null;
  commentNote?: DeserializedType<T, 'Edm.String'> | null;
  reconcileStatus?: NoYes | null;
}
