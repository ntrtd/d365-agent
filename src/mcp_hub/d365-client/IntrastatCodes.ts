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
import type { IntrastatCodesApi } from './IntrastatCodesApi';

/**
 * This class represents the entity "IntrastatCodes" of service "d365_metadata".
 */
export class IntrastatCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements IntrastatCodesType<T>
{
  /**
   * Technical entity name for IntrastatCodes.
   */
  static override _entityName = 'IntrastatCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IntrastatCodes entity.
   */
  static _keys = ['dataAreaId', 'CountryRegionId', 'StateId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * State Id.
   */
  declare stateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Intrastat Code.
   * @nullable
   */
  declare intrastatCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: IntrastatCodesApi<T>) {
    super(_entityApi);
  }
}

export interface IntrastatCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  stateId: DeserializedType<T, 'Edm.String'>;
  intrastatCode?: DeserializedType<T, 'Edm.String'> | null;
}
