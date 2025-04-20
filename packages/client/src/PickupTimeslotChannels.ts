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
import type { PickupTimeslotChannelsApi } from './PickupTimeslotChannelsApi';

/**
 * This class represents the entity "PickupTimeslotChannels" of service "d365_metadata".
 */
export class PickupTimeslotChannels<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PickupTimeslotChannelsType<T>
{
  /**
   * Technical entity name for PickupTimeslotChannels.
   */
  static override _entityName = 'PickupTimeslotChannels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PickupTimeslotChannels entity.
   */
  static _keys = ['TimeslotId', 'OMOperatingUnitNumber'];
  /**
   * Timeslot Id.
   */
  declare timeslotId: DeserializedType<T, 'Edm.String'>;
  /**
   * Om Operating Unit Number.
   */
  declare omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: PickupTimeslotChannelsApi<T>) {
    super(_entityApi);
  }
}

export interface PickupTimeslotChannelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  timeslotId: DeserializedType<T, 'Edm.String'>;
  omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;
}
