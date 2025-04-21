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
import type { DimAttributeWrkCtrResourceGroupsApi } from './DimAttributeWrkCtrResourceGroupsApi';

/**
 * This class represents the entity "DimAttributeWrkCtrResourceGroups" of service "d365_metadata".
 */
export class DimAttributeWrkCtrResourceGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimAttributeWrkCtrResourceGroupsType<T>
{
  /**
   * Technical entity name for DimAttributeWrkCtrResourceGroups.
   */
  static override _entityName = 'DimAttributeWrkCtrResourceGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeWrkCtrResourceGroups entity.
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

  constructor(_entityApi: DimAttributeWrkCtrResourceGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeWrkCtrResourceGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
