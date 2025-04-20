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
import type { DimAttributeProjInvoicesTableApi } from './DimAttributeProjInvoicesTableApi';

/**
 * This class represents the entity "DimAttributeProjInvoicesTable" of service "d365_metadata".
 */
export class DimAttributeProjInvoicesTable<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimAttributeProjInvoicesTableType<T>
{
  /**
   * Technical entity name for DimAttributeProjInvoicesTable.
   */
  static override _entityName = 'DimAttributeProjInvoicesTable';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeProjInvoicesTable entity.
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

  constructor(_entityApi: DimAttributeProjInvoicesTableApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeProjInvoicesTableType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
