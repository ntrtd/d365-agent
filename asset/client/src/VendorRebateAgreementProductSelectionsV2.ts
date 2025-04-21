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
import type { VendorRebateAgreementProductSelectionsV2Api } from './VendorRebateAgreementProductSelectionsV2Api';

/**
 * This class represents the entity "VendorRebateAgreementProductSelectionsV2" of service "d365_metadata".
 */
export class VendorRebateAgreementProductSelectionsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorRebateAgreementProductSelectionsV2Type<T>
{
  /**
   * Technical entity name for VendorRebateAgreementProductSelectionsV2.
   */
  static override _entityName = 'VendorRebateAgreementProductSelectionsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorRebateAgreementProductSelectionsV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'RebateAgreementId',
    'ItemNumber',
    'ProductConfigurationId',
    'ProductColorId',
    'QualifyingWarehouseId',
    'QualifyingSiteId',
    'ProductSizeId',
    'ProductStyleId',
    'ProductVersionId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rebate Agreement Id.
   */
  declare rebateAgreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Qualifying Warehouse Id.
   */
  declare qualifyingWarehouseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Qualifying Site Id.
   */
  declare qualifyingSiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Version Id.
   */
  declare productVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Unit Symbol.
   * @nullable
   */
  declare productUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: VendorRebateAgreementProductSelectionsV2Api<T>) {
    super(_entityApi);
  }
}

export interface VendorRebateAgreementProductSelectionsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rebateAgreementId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  qualifyingWarehouseId: DeserializedType<T, 'Edm.String'>;
  qualifyingSiteId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productVersionId: DeserializedType<T, 'Edm.String'>;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  productUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
}
