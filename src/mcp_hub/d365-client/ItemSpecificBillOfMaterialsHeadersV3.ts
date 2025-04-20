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
import type { ItemSpecificBillOfMaterialsHeadersV3Api } from './ItemSpecificBillOfMaterialsHeadersV3Api';
import { NoYes } from './NoYes';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "ItemSpecificBillOfMaterialsHeadersV3" of service "d365_metadata".
 */
export class ItemSpecificBillOfMaterialsHeadersV3<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ItemSpecificBillOfMaterialsHeadersV3Type<T>
{
  /**
   * Technical entity name for ItemSpecificBillOfMaterialsHeadersV3.
   */
  static override _entityName = 'ItemSpecificBillOfMaterialsHeadersV3';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItemSpecificBillOfMaterialsHeadersV3 entity.
   */
  static _keys = [
    'dataAreaId',
    'BOMId',
    'ManufacturedItemNumber',
    'ProductionSiteId',
    'ProductColorId',
    'ProductConfigurationId',
    'ProductSizeId',
    'ProductStyleId',
    'ProductVersionId',
    'IsActive',
    'FromQuantity',
    'ValidFromDate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Bom Id.
   */
  declare bomId: DeserializedType<T, 'Edm.String'>;
  /**
   * Manufactured Item Number.
   */
  declare manufacturedItemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Production Site Id.
   */
  declare productionSiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
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
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;
  /**
   * From Quantity.
   */
  declare fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Valid From Date.
   */
  declare validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Bom Name.
   * @nullable
   */
  declare bomName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Display Product Number.
   * @nullable
   */
  declare displayProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eng Chg Engineering Bom Reference.
   * @nullable
   */
  declare engChgEngineeringBomReference?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Engineering Version Id.
   * @nullable
   */
  declare engineeringVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare productionSite?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare approvingWorker?: Workers<T> | null;

  constructor(_entityApi: ItemSpecificBillOfMaterialsHeadersV3Api<T>) {
    super(_entityApi);
  }
}

export interface ItemSpecificBillOfMaterialsHeadersV3Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  bomId: DeserializedType<T, 'Edm.String'>;
  manufacturedItemNumber: DeserializedType<T, 'Edm.String'>;
  productionSiteId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productVersionId: DeserializedType<T, 'Edm.String'>;
  isActive?: NoYes | null;
  fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  bomName?: DeserializedType<T, 'Edm.String'> | null;
  approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  isApproved?: NoYes | null;
  displayProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  engChgEngineeringBomReference?: DeserializedType<T, 'Edm.String'> | null;
  engineeringVersionId?: DeserializedType<T, 'Edm.String'> | null;
  productionSite?: OperationalSitesType<T> | null;
  approvingWorker?: WorkersType<T> | null;
}
