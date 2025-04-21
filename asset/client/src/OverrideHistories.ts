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
import type { OverrideHistoriesApi } from './OverrideHistoriesApi';

/**
 * This class represents the entity "OverrideHistories" of service "d365_metadata".
 */
export class OverrideHistories<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements OverrideHistoriesType<T>
{
  /**
   * Technical entity name for OverrideHistories.
   */
  static override _entityName = 'OverrideHistories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OverrideHistories entity.
   */
  static _keys = [
    'dataAreaId',
    'SalesOrderId',
    'TransactionId',
    'ChargeCode',
    'OverrideTime'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Order Id.
   */
  declare salesOrderId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Charge Code.
   */
  declare chargeCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Override Time.
   */
  declare overrideTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Original Value.
   * @nullable
   */
  declare originalValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Terminal.
   * @nullable
   */
  declare terminal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Amount.
   */
  declare overrideAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Store.
   * @nullable
   */
  declare store?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overridden Value.
   * @nullable
   */
  declare overriddenValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Reason.
   * @nullable
   */
  declare overrideReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Amount.
   */
  declare originalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * User Id.
   * @nullable
   */
  declare userId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ax User Id.
   * @nullable
   */
  declare axUserId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Markup Trans Rec Id.
   */
  declare markupTransRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Channel.
   */
  declare channel: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Overridden Field Number.
   */
  declare overriddenFieldNumber: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: OverrideHistoriesApi<T>) {
    super(_entityApi);
  }
}

export interface OverrideHistoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesOrderId: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  chargeCode: DeserializedType<T, 'Edm.String'>;
  overrideTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  originalValue?: DeserializedType<T, 'Edm.String'> | null;
  terminal?: DeserializedType<T, 'Edm.String'> | null;
  overrideAmount: DeserializedType<T, 'Edm.Decimal'>;
  store?: DeserializedType<T, 'Edm.String'> | null;
  overriddenValue?: DeserializedType<T, 'Edm.String'> | null;
  overrideReason?: DeserializedType<T, 'Edm.String'> | null;
  originalAmount: DeserializedType<T, 'Edm.Decimal'>;
  userId?: DeserializedType<T, 'Edm.String'> | null;
  axUserId?: DeserializedType<T, 'Edm.String'> | null;
  markupTransRecId: DeserializedType<T, 'Edm.Int64'>;
  channel: DeserializedType<T, 'Edm.Int64'>;
  overriddenFieldNumber: DeserializedType<T, 'Edm.Int32'>;
}
