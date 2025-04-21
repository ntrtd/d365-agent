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
import type { TaxServiceCodeEntitiesApi } from './TaxServiceCodeEntitiesApi';

/**
 * This class represents the entity "TaxServiceCodeEntities" of service "d365_metadata".
 */
export class TaxServiceCodeEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxServiceCodeEntitiesType<T>
{
  /**
   * Technical entity name for TaxServiceCodeEntities.
   */
  static override _entityName = 'TaxServiceCodeEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxServiceCodeEntities entity.
   */
  static _keys = ['dataAreaId', 'ServiceCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Code.
   */
  declare serviceCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Income Code.
   * @nullable
   */
  declare incomeCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxServiceCodeEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxServiceCodeEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  serviceCode: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  incomeCode?: DeserializedType<T, 'Edm.String'> | null;
}
