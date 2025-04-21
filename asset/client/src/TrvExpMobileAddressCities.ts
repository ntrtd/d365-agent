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
import type { TrvExpMobileAddressCitiesApi } from './TrvExpMobileAddressCitiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "TrvExpMobileAddressCities" of service "d365_metadata".
 */
export class TrvExpMobileAddressCities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TrvExpMobileAddressCitiesType<T>
{
  /**
   * Technical entity name for TrvExpMobileAddressCities.
   */
  static override _entityName = 'TrvExpMobileAddressCities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TrvExpMobileAddressCities entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Ibge Code Br.
   * @nullable
   */
  declare ibgeCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City Code It.
   * @nullable
   */
  declare cityCodeIt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County Id.
   * @nullable
   */
  declare countyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Municipality Code It.
   * @nullable
   */
  declare municipalityCodeIt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Has Manual City Key.
   * @nullable
   */
  declare hasManualCityKey?: NoYes | null;
  /**
   * Address City Rec Id.
   */
  declare addressCityRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * State Id.
   * @nullable
   */
  declare stateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City Key.
   * @nullable
   */
  declare cityKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City Kana Jp.
   * @nullable
   */
  declare cityKanaJp?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TrvExpMobileAddressCitiesApi<T>) {
    super(_entityApi);
  }
}

export interface TrvExpMobileAddressCitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  ibgeCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  cityCodeIt?: DeserializedType<T, 'Edm.String'> | null;
  countyId?: DeserializedType<T, 'Edm.String'> | null;
  municipalityCodeIt?: DeserializedType<T, 'Edm.String'> | null;
  hasManualCityKey?: NoYes | null;
  addressCityRecId: DeserializedType<T, 'Edm.Int64'>;
  stateId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  cityKey?: DeserializedType<T, 'Edm.String'> | null;
  cityKanaJp?: DeserializedType<T, 'Edm.String'> | null;
}
