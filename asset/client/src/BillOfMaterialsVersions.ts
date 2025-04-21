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
import type { BillOfMaterialsVersionsApi } from './BillOfMaterialsVersionsApi';
import { NoYes } from './NoYes';
import { Workers, WorkersType } from './Workers';
import {
  BillOfMaterialsHeaders,
  BillOfMaterialsHeadersType
} from './BillOfMaterialsHeaders';

/**
 * This class represents the entity "BillOfMaterialsVersions" of service "d365_metadata".
 */
export class BillOfMaterialsVersions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BillOfMaterialsVersionsType<T>
{
  /**
   * Technical entity name for BillOfMaterialsVersions.
   */
  static override _entityName = 'BillOfMaterialsVersions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BillOfMaterialsVersions entity.
   */
  static _keys = [
    'dataAreaId',
    'ManufacturedItemNumber',
    'BOMId',
    'ProductionSiteId',
    'ProductConfigurationId',
    'ProductColorId',
    'ProductSizeId',
    'ProductStyleId',
    'IsActive',
    'ValidFromDate',
    'FromQuantity'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Manufactured Item Number.
   */
  declare manufacturedItemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Bom Id.
   */
  declare bomId: DeserializedType<T, 'Edm.String'>;
  /**
   * Production Site Id.
   */
  declare productionSiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Active.
   */
  declare isActive: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Valid From Date.
   */
  declare validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * From Quantity.
   */
  declare fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Catch Weight Size.
   */
  declare catchWeightSize: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Selected For Designer.
   * @nullable
   */
  declare isSelectedForDesigner?: NoYes | null;
  /**
   * Approver Personnel Number.
   * @nullable
   */
  declare approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Approved.
   * @nullable
   */
  declare isApproved?: NoYes | null;
  /**
   * From Catch Weight Quantity.
   */
  declare fromCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Approver Id.
   */
  declare approverId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Version Name.
   * @nullable
   */
  declare versionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To Date.
   */
  declare validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare approvingWorker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link BillOfMaterialsHeaders} entity.
   */
  declare billOfMaterialsHeader?: BillOfMaterialsHeaders<T> | null;

  constructor(_entityApi: BillOfMaterialsVersionsApi<T>) {
    super(_entityApi);
  }
}

export interface BillOfMaterialsVersionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  manufacturedItemNumber: DeserializedType<T, 'Edm.String'>;
  bomId: DeserializedType<T, 'Edm.String'>;
  productionSiteId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  isActive: DeserializedType<T, 'Edm.Int32'>;
  validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  catchWeightSize: DeserializedType<T, 'Edm.Decimal'>;
  isSelectedForDesigner?: NoYes | null;
  approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  isApproved?: NoYes | null;
  fromCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  approverId: DeserializedType<T, 'Edm.Int64'>;
  versionName?: DeserializedType<T, 'Edm.String'> | null;
  validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  approvingWorker?: WorkersType<T> | null;
  billOfMaterialsHeader?: BillOfMaterialsHeadersType<T> | null;
}
