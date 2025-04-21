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
import type { PriceComponentCodePostingProfilesApi } from './PriceComponentCodePostingProfilesApi';
import { GupPriceComponent } from './GupPriceComponent';

/**
 * This class represents the entity "PriceComponentCodePostingProfiles" of service "d365_metadata".
 */
export class PriceComponentCodePostingProfiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PriceComponentCodePostingProfilesType<T>
{
  /**
   * Technical entity name for PriceComponentCodePostingProfiles.
   */
  static override _entityName = 'PriceComponentCodePostingProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PriceComponentCodePostingProfiles entity.
   */
  static _keys = ['dataAreaId', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Component.
   * @nullable
   */
  declare priceComponent?: GupPriceComponent | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PriceComponentCodePostingProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface PriceComponentCodePostingProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  priceComponent?: GupPriceComponent | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
