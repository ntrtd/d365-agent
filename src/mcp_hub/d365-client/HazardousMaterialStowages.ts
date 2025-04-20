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
import type { HazardousMaterialStowagesApi } from './HazardousMaterialStowagesApi';

/**
 * This class represents the entity "HazardousMaterialStowages" of service "d365_metadata".
 */
export class HazardousMaterialStowages<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements HazardousMaterialStowagesType<T>
{
  /**
   * Technical entity name for HazardousMaterialStowages.
   */
  static override _entityName = 'HazardousMaterialStowages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HazardousMaterialStowages entity.
   */
  static _keys = ['StowageCode'];
  /**
   * Stowage Code.
   */
  declare stowageCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: HazardousMaterialStowagesApi<T>) {
    super(_entityApi);
  }
}

export interface HazardousMaterialStowagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  stowageCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
