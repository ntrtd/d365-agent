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
import type { AcquisitionMethodsApi } from './AcquisitionMethodsApi';
import { FixedAssetBooksV2, FixedAssetBooksV2Type } from './FixedAssetBooksV2';
import {
  FixedAssetValueModels,
  FixedAssetValueModelsType
} from './FixedAssetValueModels';

/**
 * This class represents the entity "AcquisitionMethods" of service "d365_metadata".
 */
export class AcquisitionMethods<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AcquisitionMethodsType<T>
{
  /**
   * Technical entity name for AcquisitionMethods.
   */
  static override _entityName = 'AcquisitionMethods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AcquisitionMethods entity.
   */
  static _keys = ['dataAreaId', 'AcquisitionMethod'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Acquisition Method.
   */
  declare acquisitionMethod: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link FixedAssetBooksV2} entity.
   */
  declare assetBookV2AcquisitionMethodAsset: FixedAssetBooksV2<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetValueModels} entity.
   */
  declare acquisitionMethodValueModel: FixedAssetValueModels<T>[];

  constructor(_entityApi: AcquisitionMethodsApi<T>) {
    super(_entityApi);
  }
}

export interface AcquisitionMethodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  acquisitionMethod: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  assetBookV2AcquisitionMethodAsset: FixedAssetBooksV2Type<T>[];
  acquisitionMethodValueModel: FixedAssetValueModelsType<T>[];
}
