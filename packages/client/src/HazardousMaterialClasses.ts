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
import type { HazardousMaterialClassesApi } from './HazardousMaterialClassesApi';

/**
 * This class represents the entity "HazardousMaterialClasses" of service "d365_metadata".
 */
export class HazardousMaterialClasses<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements HazardousMaterialClassesType<T>
{
  /**
   * Technical entity name for HazardousMaterialClasses.
   */
  static override _entityName = 'HazardousMaterialClasses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HazardousMaterialClasses entity.
   */
  static _keys = ['ClassCode'];
  /**
   * Class Code.
   */
  declare classCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: HazardousMaterialClassesApi<T>) {
    super(_entityApi);
  }
}

export interface HazardousMaterialClassesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  classCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
