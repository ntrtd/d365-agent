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
import type { StoreHoursChannelsApi } from './StoreHoursChannelsApi';

/**
 * This class represents the entity "StoreHoursChannels" of service "d365_metadata".
 */
export class StoreHoursChannels<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements StoreHoursChannelsType<T>
{
  /**
   * Technical entity name for StoreHoursChannels.
   */
  static override _entityName = 'StoreHoursChannels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the StoreHoursChannels entity.
   */
  static _keys = [
    'dataAreaId',
    'StoreHoursTemplateId',
    'OMOperatingUnitPartyNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Hours Template Id.
   */
  declare storeHoursTemplateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Om Operating Unit Party Number.
   */
  declare omOperatingUnitPartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Om Internal Organization Party Number.
   * @nullable
   */
  declare omInternalOrganizationPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: StoreHoursChannelsApi<T>) {
    super(_entityApi);
  }
}

export interface StoreHoursChannelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  storeHoursTemplateId: DeserializedType<T, 'Edm.String'>;
  omOperatingUnitPartyNumber: DeserializedType<T, 'Edm.String'>;
  omInternalOrganizationPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
}
