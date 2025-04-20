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
import type { AssetMaintenanceJobTypeSucceedJobTypesApi } from './AssetMaintenanceJobTypeSucceedJobTypesApi';
import {
  AssetMaintenanceJobVariants,
  AssetMaintenanceJobVariantsType
} from './AssetMaintenanceJobVariants';
import {
  AssetMaintenanceJobTrades,
  AssetMaintenanceJobTradesType
} from './AssetMaintenanceJobTrades';
import {
  AssetMaintenanceJobTypes,
  AssetMaintenanceJobTypesType
} from './AssetMaintenanceJobTypes';

/**
 * This class represents the entity "AssetMaintenanceJobTypeSucceedJobTypes" of service "d365_metadata".
 */
export class AssetMaintenanceJobTypeSucceedJobTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceJobTypeSucceedJobTypesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceJobTypeSucceedJobTypes.
   */
  static override _entityName = 'AssetMaintenanceJobTypeSucceedJobTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceJobTypeSucceedJobTypes entity.
   */
  static _keys = ['dataAreaId', 'JobTypeId', 'JobTypeIdSucceed'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Type Id.
   */
  declare jobTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Type Id Succeed.
   */
  declare jobTypeIdSucceed: DeserializedType<T, 'Edm.String'>;
  /**
   * Days To Displacement.
   */
  declare daysToDisplacement: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Job Trade Id Succeed.
   * @nullable
   */
  declare jobTradeIdSucceed?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Variant Id Succeed.
   * @nullable
   */
  declare jobVariantIdSucceed?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceJobVariants} entity.
   */
  declare assetMaintenanceJobVariant?: AssetMaintenanceJobVariants<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceJobTrades} entity.
   */
  declare assetMaintenanceJobTrade?: AssetMaintenanceJobTrades<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceJobTypes} entity.
   */
  declare assetMaintenanceJobType?: AssetMaintenanceJobTypes<T> | null;

  constructor(_entityApi: AssetMaintenanceJobTypeSucceedJobTypesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceJobTypeSucceedJobTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  jobTypeId: DeserializedType<T, 'Edm.String'>;
  jobTypeIdSucceed: DeserializedType<T, 'Edm.String'>;
  daysToDisplacement: DeserializedType<T, 'Edm.Int32'>;
  jobTradeIdSucceed?: DeserializedType<T, 'Edm.String'> | null;
  jobVariantIdSucceed?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceJobVariant?: AssetMaintenanceJobVariantsType<T> | null;
  assetMaintenanceJobTrade?: AssetMaintenanceJobTradesType<T> | null;
  assetMaintenanceJobType?: AssetMaintenanceJobTypesType<T> | null;
}
