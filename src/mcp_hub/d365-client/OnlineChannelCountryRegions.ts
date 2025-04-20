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
import type { OnlineChannelCountryRegionsApi } from './OnlineChannelCountryRegionsApi';
import { OnlineChannels, OnlineChannelsType } from './OnlineChannels';

/**
 * This class represents the entity "OnlineChannelCountryRegions" of service "d365_metadata".
 */
export class OnlineChannelCountryRegions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OnlineChannelCountryRegionsType<T>
{
  /**
   * Technical entity name for OnlineChannelCountryRegions.
   */
  static override _entityName = 'OnlineChannelCountryRegions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OnlineChannelCountryRegions entity.
   */
  static _keys = ['CountryRegionId', 'OMOperatingUnitNumber'];
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Om Operating Unit Number.
   */
  declare omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link OnlineChannels} entity.
   */
  declare onlineChannel?: OnlineChannels<T> | null;

  constructor(_entityApi: OnlineChannelCountryRegionsApi<T>) {
    super(_entityApi);
  }
}

export interface OnlineChannelCountryRegionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  onlineChannel?: OnlineChannelsType<T> | null;
}
