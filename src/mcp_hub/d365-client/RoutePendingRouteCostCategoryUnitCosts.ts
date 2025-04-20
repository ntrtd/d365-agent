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
import type { RoutePendingRouteCostCategoryUnitCostsApi } from './RoutePendingRouteCostCategoryUnitCostsApi';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import { CostingVersions, CostingVersionsType } from './CostingVersions';

/**
 * This class represents the entity "RoutePendingRouteCostCategoryUnitCosts" of service "d365_metadata".
 */
export class RoutePendingRouteCostCategoryUnitCosts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RoutePendingRouteCostCategoryUnitCostsType<T>
{
  /**
   * Technical entity name for RoutePendingRouteCostCategoryUnitCosts.
   */
  static override _entityName = 'RoutePendingRouteCostCategoryUnitCosts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RoutePendingRouteCostCategoryUnitCosts entity.
   */
  static _keys = [
    'dataAreaId',
    'RouteCostCategoryId',
    'CostingVersionId',
    'ProductionSiteId',
    'EffectiveDate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Route Cost Category Id.
   */
  declare routeCostCategoryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Costing Version Id.
   */
  declare costingVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Production Site Id.
   */
  declare productionSiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Unit Cost.
   */
  declare unitCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare productionSite?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link CostingVersions} entity.
   */
  declare costingVersion?: CostingVersions<T> | null;

  constructor(_entityApi: RoutePendingRouteCostCategoryUnitCostsApi<T>) {
    super(_entityApi);
  }
}

export interface RoutePendingRouteCostCategoryUnitCostsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  routeCostCategoryId: DeserializedType<T, 'Edm.String'>;
  costingVersionId: DeserializedType<T, 'Edm.String'>;
  productionSiteId: DeserializedType<T, 'Edm.String'>;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  unitCost: DeserializedType<T, 'Edm.Decimal'>;
  productionSite?: OperationalSitesType<T> | null;
  costingVersion?: CostingVersionsType<T> | null;
}
