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
import type { ProjectRevenueSalesPricesApi } from './ProjectRevenueSalesPricesApi';
import { ProjectResources, ProjectResourcesType } from './ProjectResources';

/**
 * This class represents the entity "ProjectRevenueSalesPrices" of service "d365_metadata".
 */
export class ProjectRevenueSalesPrices<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectRevenueSalesPricesType<T>
{
  /**
   * Technical entity name for ProjectRevenueSalesPrices.
   */
  static override _entityName = 'ProjectRevenueSalesPrices';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectRevenueSalesPrices entity.
   */
  static _keys = [
    'dataAreaId',
    'ProjectID',
    'PriceGroup',
    'CategoryId',
    'EffectiveDate',
    'SalesCurrency',
    'CustomerAccount',
    'ProjectContractID',
    'ResourceId',
    'Role'
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
   * Price Group.
   */
  declare priceGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Id.
   */
  declare categoryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Currency.
   */
  declare salesCurrency: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Account.
   */
  declare customerAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Contract Id.
   */
  declare projectContractId: DeserializedType<T, 'Edm.String'>;
  /**
   * Resource Id.
   */
  declare resourceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Role.
   */
  declare role: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link ProjectResources} entity.
   */
  declare projectResource?: ProjectResources<T> | null;

  constructor(_entityApi: ProjectRevenueSalesPricesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectRevenueSalesPricesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectId: DeserializedType<T, 'Edm.String'>;
  priceGroup: DeserializedType<T, 'Edm.String'>;
  categoryId: DeserializedType<T, 'Edm.String'>;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesCurrency: DeserializedType<T, 'Edm.String'>;
  customerAccount: DeserializedType<T, 'Edm.String'>;
  projectContractId: DeserializedType<T, 'Edm.String'>;
  resourceId: DeserializedType<T, 'Edm.String'>;
  role: DeserializedType<T, 'Edm.Int64'>;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  projectResource?: ProjectResourcesType<T> | null;
}
