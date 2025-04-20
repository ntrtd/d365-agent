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
import type { DocumentsApi } from './DocumentsApi';
import { EconomicActivityType } from './EconomicActivityType';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';
import { CarrierTypeW } from './CarrierTypeW';

/**
 * This class represents the entity "Documents" of service "d365_metadata".
 */
export class Documents<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DocumentsType<T>
{
  /**
   * Technical entity name for Documents.
   */
  static override _entityName = 'Documents';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Documents entity.
   */
  static _keys = ['dataAreaId', 'LineId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Id.
   */
  declare lineId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Loading Date And Time.
   */
  declare loadingDateAndTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Loading Latitude.
   */
  declare loadingLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unloading Country Region Iso Code.
   * @nullable
   */
  declare unloadingCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Unloading Date And Time.
   */
  declare unloadingDateAndTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vehicle Model.
   * @nullable
   */
  declare vehicleModel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loading Building Compliment.
   * @nullable
   */
  declare loadingBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unloading Post Box.
   * @nullable
   */
  declare unloadingPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unloading Latitude.
   */
  declare unloadingLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Loading City.
   * @nullable
   */
  declare loadingCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loading Longitude.
   */
  declare loadingLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Registration Number.
   * @nullable
   */
  declare registrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loading District Name.
   * @nullable
   */
  declare loadingDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unloading Valid From.
   */
  declare unloadingValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Issued By Personnel Number.
   * @nullable
   */
  declare issuedByPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unloading Zip Code.
   * @nullable
   */
  declare unloadingZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unloading Description.
   * @nullable
   */
  declare unloadingDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unloading District Name.
   * @nullable
   */
  declare unloadingDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loading Country Region Id.
   * @nullable
   */
  declare loadingCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unloading Longitude.
   */
  declare unloadingLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Carrier.
   * @nullable
   */
  declare carrier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Economic Activity.
   * @nullable
   */
  declare economicActivity?: EconomicActivityType | null;
  /**
   * Unloading Time Zone.
   * @nullable
   */
  declare unloadingTimeZone?: Timezone | null;
  /**
   * Loading County.
   * @nullable
   */
  declare loadingCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loading Zip Code.
   * @nullable
   */
  declare loadingZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unloading Street Number.
   * @nullable
   */
  declare unloadingStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trailer Registration Number.
   * @nullable
   */
  declare trailerRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unloading City.
   * @nullable
   */
  declare unloadingCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unloading Street.
   * @nullable
   */
  declare unloadingStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Driver Personnel Number.
   * @nullable
   */
  declare driverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loading Street Number.
   * @nullable
   */
  declare loadingStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unloading Duns Number.
   * @nullable
   */
  declare unloadingDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loading Time Zone.
   * @nullable
   */
  declare loadingTimeZone?: Timezone | null;
  /**
   * Loading Duns Number.
   * @nullable
   */
  declare loadingDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loading Description.
   * @nullable
   */
  declare loadingDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unloading Is Private.
   * @nullable
   */
  declare unloadingIsPrivate?: NoYes | null;
  /**
   * Loading Country Region Iso Code.
   * @nullable
   */
  declare loadingCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Loading Address.
   * @nullable
   */
  declare loadingAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loading Post Box.
   * @nullable
   */
  declare loadingPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unloading Address.
   * @nullable
   */
  declare unloadingAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Risk Level Of The Load.
   * @nullable
   */
  declare riskLevelOfTheLoad?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unloading Building Compliment.
   * @nullable
   */
  declare unloadingBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Package.
   * @nullable
   */
  declare package?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Carrier Type.
   * @nullable
   */
  declare carrierType?: CarrierTypeW | null;
  /**
   * Unloading Location Id.
   * @nullable
   */
  declare unloadingLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loading State.
   * @nullable
   */
  declare loadingState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loading Is Private.
   * @nullable
   */
  declare loadingIsPrivate?: NoYes | null;
  /**
   * Loading Location Id.
   * @nullable
   */
  declare loadingLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unloading County.
   * @nullable
   */
  declare unloadingCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Date Time.
   */
  declare documentDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Unloading Country Region Id.
   * @nullable
   */
  declare unloadingCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print Transportation Details.
   * @nullable
   */
  declare printTransportationDetails?: NoYes | null;
  /**
   * Unloading Valid To.
   */
  declare unloadingValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Driver Name.
   * @nullable
   */
  declare driverName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loading Street.
   * @nullable
   */
  declare loadingStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unloading State.
   * @nullable
   */
  declare unloadingState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loading Valid From.
   */
  declare loadingValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Loading Valid To.
   */
  declare loadingValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: DocumentsApi<T>) {
    super(_entityApi);
  }
}

export interface DocumentsType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineId: DeserializedType<T, 'Edm.Guid'>;
  loadingDateAndTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  loadingLatitude: DeserializedType<T, 'Edm.Decimal'>;
  unloadingCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  unloadingDateAndTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vehicleModel?: DeserializedType<T, 'Edm.String'> | null;
  loadingBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  unloadingPostBox?: DeserializedType<T, 'Edm.String'> | null;
  unloadingLatitude: DeserializedType<T, 'Edm.Decimal'>;
  loadingCity?: DeserializedType<T, 'Edm.String'> | null;
  loadingLongitude: DeserializedType<T, 'Edm.Decimal'>;
  registrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  loadingDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  unloadingValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  issuedByPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  unloadingZipCode?: DeserializedType<T, 'Edm.String'> | null;
  unloadingDescription?: DeserializedType<T, 'Edm.String'> | null;
  unloadingDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  loadingCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  unloadingLongitude: DeserializedType<T, 'Edm.Decimal'>;
  carrier?: DeserializedType<T, 'Edm.String'> | null;
  economicActivity?: EconomicActivityType | null;
  unloadingTimeZone?: Timezone | null;
  loadingCounty?: DeserializedType<T, 'Edm.String'> | null;
  loadingZipCode?: DeserializedType<T, 'Edm.String'> | null;
  unloadingStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  trailerRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  unloadingCity?: DeserializedType<T, 'Edm.String'> | null;
  unloadingStreet?: DeserializedType<T, 'Edm.String'> | null;
  driverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  loadingStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  unloadingDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  loadingTimeZone?: Timezone | null;
  loadingDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  loadingDescription?: DeserializedType<T, 'Edm.String'> | null;
  unloadingIsPrivate?: NoYes | null;
  loadingCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  loadingAddress?: DeserializedType<T, 'Edm.String'> | null;
  loadingPostBox?: DeserializedType<T, 'Edm.String'> | null;
  unloadingAddress?: DeserializedType<T, 'Edm.String'> | null;
  riskLevelOfTheLoad?: DeserializedType<T, 'Edm.String'> | null;
  unloadingBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  package?: DeserializedType<T, 'Edm.String'> | null;
  carrierType?: CarrierTypeW | null;
  unloadingLocationId?: DeserializedType<T, 'Edm.String'> | null;
  loadingState?: DeserializedType<T, 'Edm.String'> | null;
  loadingIsPrivate?: NoYes | null;
  loadingLocationId?: DeserializedType<T, 'Edm.String'> | null;
  unloadingCounty?: DeserializedType<T, 'Edm.String'> | null;
  documentDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  unloadingCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  printTransportationDetails?: NoYes | null;
  unloadingValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  driverName?: DeserializedType<T, 'Edm.String'> | null;
  loadingStreet?: DeserializedType<T, 'Edm.String'> | null;
  unloadingState?: DeserializedType<T, 'Edm.String'> | null;
  loadingValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  loadingValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
