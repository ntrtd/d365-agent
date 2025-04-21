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
import type { ActionStatusToesApi } from './ActionStatusToesApi';

/**
 * This class represents the entity "ActionStatusToes" of service "d365_metadata".
 */
export class ActionStatusToes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ActionStatusToesType<T>
{
  /**
   * Technical entity name for ActionStatusToes.
   */
  static override _entityName = 'ActionStatusToes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ActionStatusToes entity.
   */
  static _keys = ['dataAreaId', 'Action', 'MessageStatus', 'ItemStatus'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Action.
   */
  declare action: DeserializedType<T, 'Edm.String'>;
  /**
   * Message Status.
   */
  declare messageStatus: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Status.
   */
  declare itemStatus: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ActionStatusToesApi<T>) {
    super(_entityApi);
  }
}

export interface ActionStatusToesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  action: DeserializedType<T, 'Edm.String'>;
  messageStatus: DeserializedType<T, 'Edm.String'>;
  itemStatus: DeserializedType<T, 'Edm.String'>;
}
