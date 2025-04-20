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
import type { VirtualEntityListsApi } from './VirtualEntityListsApi';

/**
 * This class represents the entity "VirtualEntityLists" of service "d365_metadata".
 */
export class VirtualEntityLists<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VirtualEntityListsType<T>
{
  /**
   * Technical entity name for VirtualEntityLists.
   */
  static override _entityName = 'VirtualEntityLists';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VirtualEntityLists entity.
   */
  static _keys = ['PhysicalName'];
  /**
   * Physical Name.
   */
  declare physicalName: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: VirtualEntityListsApi<T>) {
    super(_entityApi);
  }
}

export interface VirtualEntityListsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  physicalName: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
