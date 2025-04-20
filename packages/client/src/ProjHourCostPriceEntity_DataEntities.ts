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
import type { ProjHourCostPriceEntity_DataEntitiesApi } from './ProjHourCostPriceEntity_DataEntitiesApi';

/**
 * This class represents the entity "ProjHourCostPriceEntity_DataEntities" of service "d365_metadata".
 */
export class ProjHourCostPriceEntity_DataEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjHourCostPriceEntity_DataEntitiesType<T>
{
  /**
   * Technical entity name for ProjHourCostPriceEntity_DataEntities.
   */
  static override _entityName = 'ProjHourCostPriceEntity_DataEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjHourCostPriceEntity_DataEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'ProjectId',
    'CategoryId',
    'TransDate',
    'ResourceId',
    'ResourceCompanyId',
    'ResourceCategory',
    'ResourceCategoryId',
    'CustomerAccount',
    'PriceGroupId',
    'ProjectContractId',
    'EffectiveLaborRate',
    'IsResourceRate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Id.
   */
  declare projectId: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Id.
   */
  declare categoryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Resource Id.
   */
  declare resourceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Resource Company Id.
   */
  declare resourceCompanyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Resource Category.
   */
  declare resourceCategory: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Resource Category Id.
   */
  declare resourceCategoryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Account.
   */
  declare customerAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Group Id.
   */
  declare priceGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Contract Id.
   */
  declare projectContractId: DeserializedType<T, 'Edm.String'>;
  /**
   * Effective Labor Rate.
   */
  declare effectiveLaborRate: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Is Resource Rate.
   */
  declare isResourceRate: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Cost Price.
   */
  declare costPrice: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ProjHourCostPriceEntity_DataEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjHourCostPriceEntity_DataEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectId: DeserializedType<T, 'Edm.String'>;
  categoryId: DeserializedType<T, 'Edm.String'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  resourceId: DeserializedType<T, 'Edm.String'>;
  resourceCompanyId: DeserializedType<T, 'Edm.String'>;
  resourceCategory: DeserializedType<T, 'Edm.Int64'>;
  resourceCategoryId: DeserializedType<T, 'Edm.String'>;
  customerAccount: DeserializedType<T, 'Edm.String'>;
  priceGroupId: DeserializedType<T, 'Edm.String'>;
  projectContractId: DeserializedType<T, 'Edm.String'>;
  effectiveLaborRate: DeserializedType<T, 'Edm.Boolean'>;
  isResourceRate: DeserializedType<T, 'Edm.Boolean'>;
  costPrice: DeserializedType<T, 'Edm.Decimal'>;
}
