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
import type { RouteVersionsV2Api } from './RouteVersionsV2Api';
import { NoYes } from './NoYes';
import { RouteHeaders, RouteHeadersType } from './RouteHeaders';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "RouteVersionsV2" of service "d365_metadata".
 */
export class RouteVersionsV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RouteVersionsV2Type<T>
{
  /**
   * Technical entity name for RouteVersionsV2.
   */
  static override _entityName = 'RouteVersionsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RouteVersionsV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'ValidFromQuantity',
    'ValidFromDate',
    'RouteId',
    'ProductSizeId',
    'ProductColorId',
    'ProductionSiteId',
    'ProductConfigurationId',
    'ProductStyleId',
    'ProductVersionId',
    'ItemNumber',
    'IsActive'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From Quantity.
   */
  declare validFromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Valid From Date.
   */
  declare validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Route Id.
   */
  declare routeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Production Site Id.
   */
  declare productionSiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Version Id.
   */
  declare productVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Active.
   */
  declare isActive: DeserializedType<T, 'Edm.Int32'>;
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
   * One-to-one navigation property to the {@link RouteHeaders} entity.
   */
  declare routeHeader?: RouteHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare approvingWorker?: Workers<T> | null;

  constructor(_entityApi: RouteVersionsV2Api<T>) {
    super(_entityApi);
  }
}

export interface RouteVersionsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  validFromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  routeId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productionSiteId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productVersionId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  isActive: DeserializedType<T, 'Edm.Int32'>;
  approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  isApproved?: NoYes | null;
  versionName?: DeserializedType<T, 'Edm.String'> | null;
  validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  routeHeader?: RouteHeadersType<T> | null;
  approvingWorker?: WorkersType<T> | null;
}
