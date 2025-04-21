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
import type { TrvExpMobileProjLinePropertiesApi } from './TrvExpMobileProjLinePropertiesApi';

/**
 * This class represents the entity "TrvExpMobileProjLineProperties" of service "d365_metadata".
 */
export class TrvExpMobileProjLineProperties<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TrvExpMobileProjLinePropertiesType<T>
{
  /**
   * Technical entity name for TrvExpMobileProjLineProperties.
   */
  static override _entityName = 'TrvExpMobileProjLineProperties';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TrvExpMobileProjLineProperties entity.
   */
  static _keys = ['dataAreaId', 'LineProperty'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Property.
   */
  declare lineProperty: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TrvExpMobileProjLinePropertiesApi<T>) {
    super(_entityApi);
  }
}

export interface TrvExpMobileProjLinePropertiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineProperty: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
}
