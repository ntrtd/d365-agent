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
import type { DimAttributeRCashTables_RuApi } from './DimAttributeRCashTables_RuApi';

/**
 * This class represents the entity "DimAttributeRCashTables_RU" of service "d365_metadata".
 */
export class DimAttributeRCashTables_Ru<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimAttributeRCashTables_RuType<T>
{
  /**
   * Technical entity name for DimAttributeRCashTables_Ru.
   */
  static override _entityName = 'DimAttributeRCashTables_RU';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeRCashTables_Ru entity.
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

  constructor(_entityApi: DimAttributeRCashTables_RuApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeRCashTables_RuType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
