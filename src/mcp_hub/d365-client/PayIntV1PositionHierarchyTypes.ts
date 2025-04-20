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
import type { PayIntV1PositionHierarchyTypesApi } from './PayIntV1PositionHierarchyTypesApi';

/**
 * This class represents the entity "PayIntV1PositionHierarchyTypes" of service "d365_metadata".
 */
export class PayIntV1PositionHierarchyTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1PositionHierarchyTypesType<T>
{
  /**
   * Technical entity name for PayIntV1PositionHierarchyTypes.
   */
  static override _entityName = 'PayIntV1PositionHierarchyTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1PositionHierarchyTypes entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: PayIntV1PositionHierarchyTypesApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1PositionHierarchyTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
}
