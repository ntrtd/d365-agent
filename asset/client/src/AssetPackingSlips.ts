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
import type { AssetPackingSlipsApi } from './AssetPackingSlipsApi';
import { CarrierTypeW } from './CarrierTypeW';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "AssetPackingSlips" of service "d365_metadata".
 */
export class AssetPackingSlips<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AssetPackingSlipsType<T>
{
  /**
   * Technical entity name for AssetPackingSlips.
   */
  static override _entityName = 'AssetPackingSlips';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetPackingSlips entity.
   */
  static _keys = [
    'dataAreaId',
    'PackingSlip',
    'CreateDate',
    'CreateTime',
    'FixedAssetNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Packing Slip.
   */
  declare packingSlip: DeserializedType<T, 'Edm.String'>;
  /**
   * Create Date.
   */
  declare createDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Create Time.
   */
  declare createTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Fixed Asset Number.
   */
  declare fixedAssetNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Loading Date And Time.
   */
  declare loadingDateAndTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Goods Issued By.
   * @nullable
   */
  declare goodsIssuedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unload Address.
   * @nullable
   */
  declare unloadAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unloading Date And Time.
   */
  declare unloadingDateAndTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Registration Number.
   * @nullable
   */
  declare registrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Carrier.
   * @nullable
   */
  declare carrier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Department.
   * @nullable
   */
  declare originalDepartment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trailer Registration Number.
   * @nullable
   */
  declare trailerRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * New Department.
   * @nullable
   */
  declare newDepartment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loading Name.
   * @nullable
   */
  declare loadingName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loading Address.
   * @nullable
   */
  declare loadingAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unloading Address.
   * @nullable
   */
  declare unloadingAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Model.
   * @nullable
   */
  declare model?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Date And Time.
   */
  declare documentDateAndTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Risk Level Of The Load.
   * @nullable
   */
  declare riskLevelOfTheLoad?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Driver.
   * @nullable
   */
  declare driver?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Package.
   * @nullable
   */
  declare package?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Carrier Type.
   * @nullable
   */
  declare carrierType?: CarrierTypeW | null;
  /**
   * Load Address.
   * @nullable
   */
  declare loadAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print Transportation Details.
   * @nullable
   */
  declare printTransportationDetails?: NoYes | null;
  /**
   * Driver Name.
   * @nullable
   */
  declare driverName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unloading Name.
   * @nullable
   */
  declare unloadingName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AssetPackingSlipsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetPackingSlipsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  packingSlip: DeserializedType<T, 'Edm.String'>;
  createDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createTime: DeserializedType<T, 'Edm.Int32'>;
  fixedAssetNumber: DeserializedType<T, 'Edm.String'>;
  loadingDateAndTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  goodsIssuedBy?: DeserializedType<T, 'Edm.String'> | null;
  unloadAddress?: DeserializedType<T, 'Edm.String'> | null;
  unloadingDateAndTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  registrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  carrier?: DeserializedType<T, 'Edm.String'> | null;
  originalDepartment?: DeserializedType<T, 'Edm.String'> | null;
  trailerRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  newDepartment?: DeserializedType<T, 'Edm.String'> | null;
  loadingName?: DeserializedType<T, 'Edm.String'> | null;
  loadingAddress?: DeserializedType<T, 'Edm.String'> | null;
  unloadingAddress?: DeserializedType<T, 'Edm.String'> | null;
  model?: DeserializedType<T, 'Edm.String'> | null;
  documentDateAndTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  riskLevelOfTheLoad?: DeserializedType<T, 'Edm.String'> | null;
  driver?: DeserializedType<T, 'Edm.String'> | null;
  package?: DeserializedType<T, 'Edm.String'> | null;
  carrierType?: CarrierTypeW | null;
  loadAddress?: DeserializedType<T, 'Edm.String'> | null;
  printTransportationDetails?: NoYes | null;
  driverName?: DeserializedType<T, 'Edm.String'> | null;
  unloadingName?: DeserializedType<T, 'Edm.String'> | null;
}
