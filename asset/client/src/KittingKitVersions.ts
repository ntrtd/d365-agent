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
import type { KittingKitVersionsApi } from './KittingKitVersionsApi';
import { NoYes } from './NoYes';
import { KittingKitType } from './KittingKitType';
import {
  Kitting_KitHeaders,
  Kitting_KitHeadersType
} from './Kitting_KitHeaders';

/**
 * This class represents the entity "KittingKitVersions" of service "d365_metadata".
 */
export class KittingKitVersions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements KittingKitVersionsType<T>
{
  /**
   * Technical entity name for KittingKitVersions.
   */
  static override _entityName = 'KittingKitVersions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the KittingKitVersions entity.
   */
  static _keys = [
    'dataAreaId',
    'KitItemNumber',
    'KitId',
    'ProductionSiteId',
    'ProductConfigurationId',
    'ProductColorId',
    'ProductSizeId',
    'ProductStyleId',
    'IsActive',
    'ValidFromDate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Kit Item Number.
   */
  declare kitItemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Kit Id.
   */
  declare kitId: DeserializedType<T, 'Edm.String'>;
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
   * @nullable
   */
  declare isActive?: NoYes | null;
  /**
   * Valid From Date.
   */
  declare validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Version Name.
   * @nullable
   */
  declare versionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To Date.
   */
  declare validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Kit Type.
   * @nullable
   */
  declare kitType?: KittingKitType | null;
  /**
   * Kit Group.
   * @nullable
   */
  declare kitGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Kitting_KitHeaders} entity.
   */
  declare kittingKitHeader?: Kitting_KitHeaders<T> | null;

  constructor(_entityApi: KittingKitVersionsApi<T>) {
    super(_entityApi);
  }
}

export interface KittingKitVersionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  kitItemNumber: DeserializedType<T, 'Edm.String'>;
  kitId: DeserializedType<T, 'Edm.String'>;
  productionSiteId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  isActive?: NoYes | null;
  validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  isApproved?: NoYes | null;
  versionName?: DeserializedType<T, 'Edm.String'> | null;
  validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  kitType?: KittingKitType | null;
  kitGroup?: DeserializedType<T, 'Edm.String'> | null;
  kittingKitHeader?: Kitting_KitHeadersType<T> | null;
}
