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
import type { LeaseLocationsDetailsApi } from './LeaseLocationsDetailsApi';

/**
 * This class represents the entity "LeaseLocationsDetails" of service "d365_metadata".
 */
export class LeaseLocationsDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaseLocationsDetailsType<T>
{
  /**
   * Technical entity name for LeaseLocationsDetails.
   */
  static override _entityName = 'LeaseLocationsDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaseLocationsDetails entity.
   */
  static _keys = ['dataAreaId', 'LocationNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Location Number.
   */
  declare locationNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Location Name.
   * @nullable
   */
  declare locationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LeaseLocationsDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface LeaseLocationsDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  locationNumber: DeserializedType<T, 'Edm.String'>;
  locationName?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
}
