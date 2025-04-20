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
import type { DimAttributeRAssetsTable_RuApi } from './DimAttributeRAssetsTable_RuApi';

/**
 * This class represents the entity "DimAttributeRAssetsTable_RU" of service "d365_metadata".
 */
export class DimAttributeRAssetsTable_Ru<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimAttributeRAssetsTable_RuType<T>
{
  /**
   * Technical entity name for DimAttributeRAssetsTable_Ru.
   */
  static override _entityName = 'DimAttributeRAssetsTable_RU';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeRAssetsTable_Ru entity.
   */
  static _keys = ['dataAreaId', 'Value'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DimAttributeRAssetsTable_RuApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeRAssetsTable_RuType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
