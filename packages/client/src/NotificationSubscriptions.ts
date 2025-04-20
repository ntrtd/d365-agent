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
import type { NotificationSubscriptionsApi } from './NotificationSubscriptionsApi';

/**
 * This class represents the entity "NotificationSubscriptions" of service "d365_metadata".
 */
export class NotificationSubscriptions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements NotificationSubscriptionsType<T>
{
  /**
   * Technical entity name for NotificationSubscriptions.
   */
  static override _entityName = 'NotificationSubscriptions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the NotificationSubscriptions entity.
   */
  static _keys = [
    'RetailOperation_OperationId',
    'RetailPosPermissionGroup_PosPermissionGroupId'
  ];
  /**
   * Retail Operation Operation Id.
   */
  declare retailOperationOperationId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Retail Pos Permission Group Pos Permission Group Id.
   */
  declare retailPosPermissionGroupPosPermissionGroupId: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Display Order.
   */
  declare displayOrder: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: NotificationSubscriptionsApi<T>) {
    super(_entityApi);
  }
}

export interface NotificationSubscriptionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  retailOperationOperationId: DeserializedType<T, 'Edm.Int32'>;
  retailPosPermissionGroupPosPermissionGroupId: DeserializedType<
    T,
    'Edm.String'
  >;
  displayOrder: DeserializedType<T, 'Edm.Int32'>;
}
