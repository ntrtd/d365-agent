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
import type { ProjHourCostPricesV2Api } from './ProjHourCostPricesV2Api';

/**
 * This class represents the entity "ProjHourCostPricesV2" of service "d365_metadata".
 */
export class ProjHourCostPricesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjHourCostPricesV2Type<T>
{
  /**
   * Technical entity name for ProjHourCostPricesV2.
   */
  static override _entityName = 'ProjHourCostPricesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjHourCostPricesV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'ProjectId',
    'CategoryId',
    'TransDate',
    'ResourceId',
    'ResourceCompanyId',
    'ResourceCategoryId',
    'CustomerAccount',
    'PriceGroupId',
    'ProjectContractId'
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
   * Is Resource Rate.
   */
  declare isResourceRate: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Effective Labor Rate.
   */
  declare effectiveLaborRate: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Resource Category.
   */
  declare resourceCategory: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cost Price.
   */
  declare costPrice: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ProjHourCostPricesV2Api<T>) {
    super(_entityApi);
  }
}

export interface ProjHourCostPricesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectId: DeserializedType<T, 'Edm.String'>;
  categoryId: DeserializedType<T, 'Edm.String'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  resourceId: DeserializedType<T, 'Edm.String'>;
  resourceCompanyId: DeserializedType<T, 'Edm.String'>;
  resourceCategoryId: DeserializedType<T, 'Edm.String'>;
  customerAccount: DeserializedType<T, 'Edm.String'>;
  priceGroupId: DeserializedType<T, 'Edm.String'>;
  projectContractId: DeserializedType<T, 'Edm.String'>;
  isResourceRate: DeserializedType<T, 'Edm.Boolean'>;
  effectiveLaborRate: DeserializedType<T, 'Edm.Boolean'>;
  resourceCategory: DeserializedType<T, 'Edm.Int64'>;
  costPrice: DeserializedType<T, 'Edm.Decimal'>;
}
