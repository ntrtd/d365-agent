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
import type { StoreHoursTemplatesApi } from './StoreHoursTemplatesApi';

/**
 * This class represents the entity "StoreHoursTemplates" of service "d365_metadata".
 */
export class StoreHoursTemplates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements StoreHoursTemplatesType<T>
{
  /**
   * Technical entity name for StoreHoursTemplates.
   */
  static override _entityName = 'StoreHoursTemplates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the StoreHoursTemplates entity.
   */
  static _keys = ['dataAreaId', 'Id'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: StoreHoursTemplatesApi<T>) {
    super(_entityApi);
  }
}

export interface StoreHoursTemplatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  id: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
