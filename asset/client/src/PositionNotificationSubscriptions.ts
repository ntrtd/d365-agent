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
import type { PositionNotificationSubscriptionsApi } from './PositionNotificationSubscriptionsApi';

/**
 * This class represents the entity "PositionNotificationSubscriptions" of service "d365_metadata".
 */
export class PositionNotificationSubscriptions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PositionNotificationSubscriptionsType<T>
{
  /**
   * Technical entity name for PositionNotificationSubscriptions.
   */
  static override _entityName = 'PositionNotificationSubscriptions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PositionNotificationSubscriptions entity.
   */
  static _keys = ['RetailOperation_OperationId', 'HcmPosition_PositionId'];
  /**
   * Retail Operation Operation Id.
   */
  declare retailOperationOperationId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Hcm Position Position Id.
   */
  declare hcmPositionPositionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Order.
   */
  declare displayOrder: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: PositionNotificationSubscriptionsApi<T>) {
    super(_entityApi);
  }
}

export interface PositionNotificationSubscriptionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  retailOperationOperationId: DeserializedType<T, 'Edm.Int32'>;
  hcmPositionPositionId: DeserializedType<T, 'Edm.String'>;
  displayOrder: DeserializedType<T, 'Edm.Int32'>;
}
