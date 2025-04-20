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
import type { RetailOperationsApi } from './RetailOperationsApi';
import { NoYes } from './NoYes';
import { RetailActionPropertyLookupTypeBase } from './RetailActionPropertyLookupTypeBase';

/**
 * This class represents the entity "RetailOperations" of service "d365_metadata".
 */
export class RetailOperations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailOperationsType<T>
{
  /**
   * Technical entity name for RetailOperations.
   */
  static override _entityName = 'RetailOperations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailOperations entity.
   */
  static _keys = ['OperationId'];
  /**
   * Operation Id.
   */
  declare operationId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Enable Notifications.
   * @nullable
   */
  declare enableNotifications?: NoYes | null;
  /**
   * Operation Name.
   * @nullable
   */
  declare operationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check User Access.
   * @nullable
   */
  declare checkUserAccess?: NoYes | null;
  /**
   * User Operation.
   * @nullable
   */
  declare userOperation?: NoYes | null;
  /**
   * Action Property Lookup Type.
   * @nullable
   */
  declare actionPropertyLookupType?: RetailActionPropertyLookupTypeBase | null;
  /**
   * Permission Id.
   */
  declare permissionId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Permission Id 2.
   */
  declare permissionId2: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: RetailOperationsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailOperationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  operationId: DeserializedType<T, 'Edm.Int32'>;
  enableNotifications?: NoYes | null;
  operationName?: DeserializedType<T, 'Edm.String'> | null;
  checkUserAccess?: NoYes | null;
  userOperation?: NoYes | null;
  actionPropertyLookupType?: RetailActionPropertyLookupTypeBase | null;
  permissionId: DeserializedType<T, 'Edm.Int32'>;
  permissionId2: DeserializedType<T, 'Edm.Int32'>;
}
