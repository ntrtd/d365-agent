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
import type { SourceTypesApi } from './SourceTypesApi';
import { AssetSourceDirectionCn } from './AssetSourceDirectionCn';

/**
 * This class represents the entity "SourceTypes" of service "d365_metadata".
 */
export class SourceTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SourceTypesType<T>
{
  /**
   * Technical entity name for SourceTypes.
   */
  static override _entityName = 'SourceTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SourceTypes entity.
   */
  static _keys = ['dataAreaId', 'SourceTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Type Id.
   */
  declare sourceTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Direction.
   * @nullable
   */
  declare direction?: AssetSourceDirectionCn | null;

  constructor(_entityApi: SourceTypesApi<T>) {
    super(_entityApi);
  }
}

export interface SourceTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceTypeId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  direction?: AssetSourceDirectionCn | null;
}
