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
import type { AccrualTransactionsInquiriesApi } from './AccrualTransactionsInquiriesApi';

/**
 * This class represents the entity "AccrualTransactionsInquiries" of service "d365_metadata".
 */
export class AccrualTransactionsInquiries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AccrualTransactionsInquiriesType<T>
{
  /**
   * Technical entity name for AccrualTransactionsInquiries.
   */
  static override _entityName = 'AccrualTransactionsInquiries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AccrualTransactionsInquiries entity.
   */
  static _keys = ['TransDate'];
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Manual Trans Comments.
   * @nullable
   */
  declare manualTransComments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Carry Over.
   */
  declare carryOver: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Created By User Id.
   * @nullable
   */
  declare createdByUserId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Name.
   * @nullable
   */
  declare workerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Source.
   * @nullable
   */
  declare transSource?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Used.
   */
  declare used: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accrual Id.
   * @nullable
   */
  declare accrualId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Create Date Time.
   */
  declare createDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Accrued.
   */
  declare accrued: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: AccrualTransactionsInquiriesApi<T>) {
    super(_entityApi);
  }
}

export interface AccrualTransactionsInquiriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  manualTransComments?: DeserializedType<T, 'Edm.String'> | null;
  carryOver: DeserializedType<T, 'Edm.Decimal'>;
  createdByUserId?: DeserializedType<T, 'Edm.String'> | null;
  workerName?: DeserializedType<T, 'Edm.String'> | null;
  transSource?: DeserializedType<T, 'Edm.String'> | null;
  used: DeserializedType<T, 'Edm.Decimal'>;
  accrualId?: DeserializedType<T, 'Edm.String'> | null;
  createDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  accrued: DeserializedType<T, 'Edm.Decimal'>;
}
