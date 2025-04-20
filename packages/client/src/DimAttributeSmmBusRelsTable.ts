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
import type { DimAttributeSmmBusRelsTableApi } from './DimAttributeSmmBusRelsTableApi';

/**
 * This class represents the entity "DimAttributeSmmBusRelsTable" of service "d365_metadata".
 */
export class DimAttributeSmmBusRelsTable<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimAttributeSmmBusRelsTableType<T>
{
  /**
   * Technical entity name for DimAttributeSmmBusRelsTable.
   */
  static override _entityName = 'DimAttributeSmmBusRelsTable';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeSmmBusRelsTable entity.
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

  constructor(_entityApi: DimAttributeSmmBusRelsTableApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeSmmBusRelsTableType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
