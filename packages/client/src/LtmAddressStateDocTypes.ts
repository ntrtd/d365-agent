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
import type { LtmAddressStateDocTypesApi } from './LtmAddressStateDocTypesApi';

/**
 * This class represents the entity "LTMAddressStateDocTypes" of service "d365_metadata".
 */
export class LtmAddressStateDocTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmAddressStateDocTypesType<T>
{
  /**
   * Technical entity name for LtmAddressStateDocTypes.
   */
  static override _entityName = 'LTMAddressStateDocTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmAddressStateDocTypes entity.
   */
  static _keys = ['dataAreaId', 'StateDocTypeId', 'StateId', 'CountryRegionId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * State Doc Type Id.
   */
  declare stateDocTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * State Id.
   */
  declare stateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: LtmAddressStateDocTypesApi<T>) {
    super(_entityApi);
  }
}

export interface LtmAddressStateDocTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  stateDocTypeId: DeserializedType<T, 'Edm.String'>;
  stateId: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
}
