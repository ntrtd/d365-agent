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
import type { ItemSpecificBillOfMaterialsHeadersV2Api } from './ItemSpecificBillOfMaterialsHeadersV2Api';
import { NoYes } from './NoYes';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "ItemSpecificBillOfMaterialsHeadersV2" of service "d365_metadata".
 */
export class ItemSpecificBillOfMaterialsHeadersV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ItemSpecificBillOfMaterialsHeadersV2Type<T>
{
  /**
   * Technical entity name for ItemSpecificBillOfMaterialsHeadersV2.
   */
  static override _entityName = 'ItemSpecificBillOfMaterialsHeadersV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItemSpecificBillOfMaterialsHeadersV2 entity.
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
    'ProductVersionId'
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
   * Bom Name.
   * @nullable
   */
  declare bomName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;
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
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare productionSite?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare approvingWorker?: Workers<T> | null;

  constructor(_entityApi: ItemSpecificBillOfMaterialsHeadersV2Api<T>) {
    super(_entityApi);
  }
}

export interface ItemSpecificBillOfMaterialsHeadersV2Type<
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
  bomName?: DeserializedType<T, 'Edm.String'> | null;
  isActive?: NoYes | null;
  approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  isApproved?: NoYes | null;
  productionSite?: OperationalSitesType<T> | null;
  approvingWorker?: WorkersType<T> | null;
}
