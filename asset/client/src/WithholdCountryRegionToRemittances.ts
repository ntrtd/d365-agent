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
import type { WithholdCountryRegionToRemittancesApi } from './WithholdCountryRegionToRemittancesApi';

/**
 * This class represents the entity "WithholdCountryRegionToRemittances" of service "d365_metadata".
 */
export class WithholdCountryRegionToRemittances<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WithholdCountryRegionToRemittancesType<T>
{
  /**
   * Technical entity name for WithholdCountryRegionToRemittances.
   */
  static override _entityName = 'WithholdCountryRegionToRemittances';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdCountryRegionToRemittances entity.
   */
  static _keys = ['dataAreaId', 'CountryCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Code.
   */
  declare countryCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Code.
   * @nullable
   */
  declare countryRegionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Name.
   * @nullable
   */
  declare countryRegionName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WithholdCountryRegionToRemittancesApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdCountryRegionToRemittancesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  countryCode: DeserializedType<T, 'Edm.String'>;
  countryRegionCode?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionName?: DeserializedType<T, 'Edm.String'> | null;
}
