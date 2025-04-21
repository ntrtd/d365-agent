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
import type { DimAttributeFinancialTagsApi } from './DimAttributeFinancialTagsApi';

/**
 * This class represents the entity "DimAttributeFinancialTags" of service "d365_metadata".
 */
export class DimAttributeFinancialTags<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimAttributeFinancialTagsType<T>
{
  /**
   * Technical entity name for DimAttributeFinancialTags.
   */
  static override _entityName = 'DimAttributeFinancialTags';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeFinancialTags entity.
   */
  static _keys = ['Value'];
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Name.
   * @nullable
   */
  declare dimensionName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DimAttributeFinancialTagsApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeFinancialTagsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  dimensionName?: DeserializedType<T, 'Edm.String'> | null;
}
