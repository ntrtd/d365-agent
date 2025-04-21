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
import type { LtmAddressCountiesApi } from './LtmAddressCountiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LTMAddressCounties" of service "d365_metadata".
 */
export class LtmAddressCounties<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LtmAddressCountiesType<T>
{
  /**
   * Technical entity name for LtmAddressCounties.
   */
  static override _entityName = 'LTMAddressCounties';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmAddressCounties entity.
   */
  static _keys = ['dataAreaId', 'CountyId', 'StateId', 'CountryRegionId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * County Id.
   */
  declare countyId: DeserializedType<T, 'Edm.String'>;
  /**
   * State Id.
   */
  declare stateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Free Zone.
   * @nullable
   */
  declare taxFreeZone?: NoYes | null;

  constructor(_entityApi: LtmAddressCountiesApi<T>) {
    super(_entityApi);
  }
}

export interface LtmAddressCountiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  countyId: DeserializedType<T, 'Edm.String'>;
  stateId: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  taxFreeZone?: NoYes | null;
}
