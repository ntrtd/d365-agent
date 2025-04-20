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
import type { FundTypesApi } from './FundTypesApi';

/**
 * This class represents the entity "FundTypes" of service "d365_metadata".
 */
export class FundTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FundTypesType<T>
{
  /**
   * Technical entity name for FundTypes.
   */
  static override _entityName = 'FundTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FundTypes entity.
   */
  static _keys = ['dataAreaId', 'FundType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fund Type.
   */
  declare fundType: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: FundTypesApi<T>) {
    super(_entityApi);
  }
}

export interface FundTypesType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fundType: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
