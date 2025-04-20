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
import type { RAssetSayTablesApi } from './RAssetSayTablesApi';
import { RAssetTypeDepr } from './RAssetTypeDepr';

/**
 * This class represents the entity "RAssetSayTables" of service "d365_metadata".
 */
export class RAssetSayTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RAssetSayTablesType<T>
{
  /**
   * Technical entity name for RAssetSayTables.
   */
  static override _entityName = 'RAssetSayTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RAssetSayTables entity.
   */
  static _keys = ['dataAreaId', 'AnalysisCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Analysis Code.
   */
  declare analysisCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Depreciation Type.
   * @nullable
   */
  declare depreciationType?: RAssetTypeDepr | null;
  /**
   * Depreciation Group.
   * @nullable
   */
  declare depreciationGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RAssetSayTablesApi<T>) {
    super(_entityApi);
  }
}

export interface RAssetSayTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  analysisCode: DeserializedType<T, 'Edm.String'>;
  depreciationType?: RAssetTypeDepr | null;
  depreciationGroup?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
