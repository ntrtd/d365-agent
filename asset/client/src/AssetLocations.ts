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
import type { AssetLocationsApi } from './AssetLocationsApi';
import { FixedAssets, FixedAssetsType } from './FixedAssets';
import { AddressCities, AddressCitiesType } from './AddressCities';
import { AddressStates, AddressStatesType } from './AddressStates';
import {
  AddressPostalCodesV3,
  AddressPostalCodesV3Type
} from './AddressPostalCodesV3';
import {
  AddressCountryRegions,
  AddressCountryRegionsType
} from './AddressCountryRegions';
import { AddressCounties, AddressCountiesType } from './AddressCounties';
import { FixedAssetsV2, FixedAssetsV2Type } from './FixedAssetsV2';
import { FixedAssetGroups, FixedAssetGroupsType } from './FixedAssetGroups';

/**
 * This class represents the entity "AssetLocations" of service "d365_metadata".
 */
export class AssetLocations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AssetLocationsType<T>
{
  /**
   * Technical entity name for AssetLocations.
   */
  static override _entityName = 'AssetLocations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetLocations entity.
   */
  static _keys = ['dataAreaId', 'LocationId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Location Id.
   */
  declare locationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Street In Kana.
   * @nullable
   */
  declare addressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Iso Code.
   * @nullable
   */
  declare addressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Address City.
   * @nullable
   */
  declare addressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Valid To.
   */
  declare addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Address County.
   * @nullable
   */
  declare addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Zip Code.
   * @nullable
   */
  declare addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street.
   * @nullable
   */
  declare addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Id.
   * @nullable
   */
  declare addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address City In Kana.
   * @nullable
   */
  declare addressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address State.
   * @nullable
   */
  declare addressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Valid From.
   */
  declare addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link FixedAssets} entity.
   */
  declare locationFixedAsset: FixedAssets<T>[];
  /**
   * One-to-one navigation property to the {@link AddressCities} entity.
   */
  declare cities?: AddressCities<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressStates} entity.
   */
  declare states?: AddressStates<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressPostalCodesV3} entity.
   */
  declare addressPostalCodeV3?: AddressPostalCodesV3<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressCountryRegions} entity.
   */
  declare addressCountryRegion?: AddressCountryRegions<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressCounties} entity.
   */
  declare counties?: AddressCounties<T> | null;
  /**
   * One-to-many navigation property to the {@link FixedAssetsV2} entity.
   */
  declare assetFixedAssetV2LocationAsset: FixedAssetsV2<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetGroups} entity.
   */
  declare assetLocationAssetGroup: FixedAssetGroups<T>[];

  constructor(_entityApi: AssetLocationsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetLocationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  locationId: DeserializedType<T, 'Edm.String'>;
  addressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  addressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  addressState?: DeserializedType<T, 'Edm.String'> | null;
  addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  locationFixedAsset: FixedAssetsType<T>[];
  cities?: AddressCitiesType<T> | null;
  states?: AddressStatesType<T> | null;
  addressPostalCodeV3?: AddressPostalCodesV3Type<T> | null;
  addressCountryRegion?: AddressCountryRegionsType<T> | null;
  counties?: AddressCountiesType<T> | null;
  assetFixedAssetV2LocationAsset: FixedAssetsV2Type<T>[];
  assetLocationAssetGroup: FixedAssetGroupsType<T>[];
}
