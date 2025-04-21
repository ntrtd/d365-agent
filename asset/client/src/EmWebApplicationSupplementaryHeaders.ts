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
import type { EmWebApplicationSupplementaryHeadersApi } from './EmWebApplicationSupplementaryHeadersApi';

/**
 * This class represents the entity "EMWebApplicationSupplementaryHeaders" of service "d365_metadata".
 */
export class EmWebApplicationSupplementaryHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EmWebApplicationSupplementaryHeadersType<T>
{
  /**
   * Technical entity name for EmWebApplicationSupplementaryHeaders.
   */
  static override _entityName = 'EMWebApplicationSupplementaryHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EmWebApplicationSupplementaryHeaders entity.
   */
  static _keys = ['dataAreaId', 'HeaderDefinition', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Header Definition.
   */
  declare headerDefinition: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Header Value.
   * @nullable
   */
  declare headerValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EmWebApplicationSupplementaryHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface EmWebApplicationSupplementaryHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  headerDefinition: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  headerValue?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
