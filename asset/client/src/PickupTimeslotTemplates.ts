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
import type { PickupTimeslotTemplatesApi } from './PickupTimeslotTemplatesApi';

/**
 * This class represents the entity "PickupTimeslotTemplates" of service "d365_metadata".
 */
export class PickupTimeslotTemplates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PickupTimeslotTemplatesType<T>
{
  /**
   * Technical entity name for PickupTimeslotTemplates.
   */
  static override _entityName = 'PickupTimeslotTemplates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PickupTimeslotTemplates entity.
   */
  static _keys = ['dataAreaId', 'TimeslotId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Timeslot Id.
   */
  declare timeslotId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maximum Limit.
   */
  declare maximumLimit: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Limit.
   */
  declare minimumLimit: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: PickupTimeslotTemplatesApi<T>) {
    super(_entityApi);
  }
}

export interface PickupTimeslotTemplatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  timeslotId: DeserializedType<T, 'Edm.String'>;
  maximumLimit: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  minimumLimit: DeserializedType<T, 'Edm.Int32'>;
}
