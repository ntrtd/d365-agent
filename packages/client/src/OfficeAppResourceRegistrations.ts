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
import type { OfficeAppResourceRegistrationsApi } from './OfficeAppResourceRegistrationsApi';

/**
 * This class represents the entity "OfficeAppResourceRegistrations" of service "d365_metadata".
 */
export class OfficeAppResourceRegistrations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OfficeAppResourceRegistrationsType<T>
{
  /**
   * Technical entity name for OfficeAppResourceRegistrations.
   */
  static override _entityName = 'OfficeAppResourceRegistrations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OfficeAppResourceRegistrations entity.
   */
  static _keys = ['ResourceID'];
  /**
   * Resource Id.
   */
  declare resourceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Relative Url.
   * @nullable
   */
  declare relativeUrl?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: OfficeAppResourceRegistrationsApi<T>) {
    super(_entityApi);
  }
}

export interface OfficeAppResourceRegistrationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  resourceId: DeserializedType<T, 'Edm.String'>;
  relativeUrl?: DeserializedType<T, 'Edm.String'> | null;
}
