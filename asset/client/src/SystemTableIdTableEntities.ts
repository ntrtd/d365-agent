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
import type { SystemTableIdTableEntitiesApi } from './SystemTableIdTableEntitiesApi';

/**
 * This class represents the entity "SystemTableIdTableEntities" of service "d365_metadata".
 */
export class SystemTableIdTableEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SystemTableIdTableEntitiesType<T>
{
  /**
   * Technical entity name for SystemTableIdTableEntities.
   */
  static override _entityName = 'SystemTableIdTableEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SystemTableIdTableEntities entity.
   */
  static _keys = ['Id'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: SystemTableIdTableEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SystemTableIdTableEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
}
