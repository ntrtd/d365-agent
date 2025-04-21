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
import type { CostingVersionsApi } from './CostingVersionsApi';
import { NoYes } from './NoYes';
import { BomCostPriceModel } from './BomCostPriceModel';
import { CostingVersionCostingType } from './CostingVersionCostingType';
import { BomCalcFallBack } from './BomCalcFallBack';
import { CostProfitSet } from './CostProfitSet';
import { NoYesCombo } from './NoYesCombo';
import { PurchPriceModel } from './PurchPriceModel';
import { BomCalcExplosionMode } from './BomCalcExplosionMode';
import {
  CostConfigurationPriceListCostingVersions,
  CostConfigurationPriceListCostingVersionsType
} from './CostConfigurationPriceListCostingVersions';
import {
  RoutePendingRouteCostCategoryUnitCosts,
  RoutePendingRouteCostCategoryUnitCostsType
} from './RoutePendingRouteCostCategoryUnitCosts';

/**
 * This class represents the entity "CostingVersions" of service "d365_metadata".
 */
export class CostingVersions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CostingVersionsType<T>
{
  /**
   * Technical entity name for CostingVersions.
   */
  static override _entityName = 'CostingVersions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostingVersions entity.
   */
  static _keys = ['dataAreaId', 'VersionId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Version Id.
   */
  declare versionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Unit Price Including Charge.
   * @nullable
   */
  declare isUnitPriceIncludingCharge?: NoYes | null;
  /**
   * Default From Date.
   */
  declare defaultFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Recording Restriction.
   * @nullable
   */
  declare recordingRestriction?: NoYes | null;
  /**
   * Cost Price Model.
   * @nullable
   */
  declare costPriceModel?: BomCostPriceModel | null;
  /**
   * Costing Type.
   * @nullable
   */
  declare costingType?: CostingVersionCostingType | null;
  /**
   * Is Production Procurement Mode Price Calculation Allowed.
   * @nullable
   */
  declare isProductionProcurementModePriceCalculationAllowed?: NoYes | null;
  /**
   * Are Sales Prices Allowed.
   * @nullable
   */
  declare areSalesPricesAllowed?: NoYes | null;
  /**
   * Round Off Calculation.
   * @nullable
   */
  declare roundOffCalculation?: NoYes | null;
  /**
   * Fallback Principle.
   * @nullable
   */
  declare fallbackPrinciple?: BomCalcFallBack | null;
  /**
   * Profit Setting.
   * @nullable
   */
  declare profitSetting?: CostProfitSet | null;
  /**
   * Last Update Date.
   */
  declare lastUpdateDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Version Blocked.
   * @nullable
   */
  declare isVersionBlocked?: NoYesCombo | null;
  /**
   * Are Purchase Prices Allowed.
   * @nullable
   */
  declare arePurchasePricesAllowed?: NoYes | null;
  /**
   * Restricting Price Site Id.
   * @nullable
   */
  declare restrictingPriceSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fallback Costing Version Id.
   * @nullable
   */
  declare fallbackCostingVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Activation Blocked.
   * @nullable
   */
  declare isActivationBlocked?: NoYesCombo | null;
  /**
   * Restrict Calculation.
   * @nullable
   */
  declare restrictCalculation?: NoYes | null;
  /**
   * Last Activation Date.
   */
  declare lastActivationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Purchase Price Model.
   * @nullable
   */
  declare purchasePriceModel?: PurchPriceModel | null;
  /**
   * Are Price Calculations Using Purchase Procurement Mode Allowed.
   * @nullable
   */
  declare arePriceCalculationsUsingPurchaseProcurementModeAllowed?: NoYes | null;
  /**
   * Are Cost Prices Allowed.
   * @nullable
   */
  declare areCostPricesAllowed?: NoYes | null;
  /**
   * Explosion Mode.
   * @nullable
   */
  declare explosionMode?: BomCalcExplosionMode | null;
  /**
   * Version Name.
   * @nullable
   */
  declare versionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CostConfigurationPriceListCostingVersions} entity.
   */
  declare costingVersion: CostConfigurationPriceListCostingVersions<T>[];
  /**
   * One-to-many navigation property to the {@link RoutePendingRouteCostCategoryUnitCosts} entity.
   */
  declare pendingRouteCostCategoryUnitCosts: RoutePendingRouteCostCategoryUnitCosts<T>[];

  constructor(_entityApi: CostingVersionsApi<T>) {
    super(_entityApi);
  }
}

export interface CostingVersionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  versionId: DeserializedType<T, 'Edm.String'>;
  isUnitPriceIncludingCharge?: NoYes | null;
  defaultFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  recordingRestriction?: NoYes | null;
  costPriceModel?: BomCostPriceModel | null;
  costingType?: CostingVersionCostingType | null;
  isProductionProcurementModePriceCalculationAllowed?: NoYes | null;
  areSalesPricesAllowed?: NoYes | null;
  roundOffCalculation?: NoYes | null;
  fallbackPrinciple?: BomCalcFallBack | null;
  profitSetting?: CostProfitSet | null;
  lastUpdateDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isVersionBlocked?: NoYesCombo | null;
  arePurchasePricesAllowed?: NoYes | null;
  restrictingPriceSiteId?: DeserializedType<T, 'Edm.String'> | null;
  fallbackCostingVersionId?: DeserializedType<T, 'Edm.String'> | null;
  isActivationBlocked?: NoYesCombo | null;
  restrictCalculation?: NoYes | null;
  lastActivationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  purchasePriceModel?: PurchPriceModel | null;
  arePriceCalculationsUsingPurchaseProcurementModeAllowed?: NoYes | null;
  areCostPricesAllowed?: NoYes | null;
  explosionMode?: BomCalcExplosionMode | null;
  versionName?: DeserializedType<T, 'Edm.String'> | null;
  costingVersion: CostConfigurationPriceListCostingVersionsType<T>[];
  pendingRouteCostCategoryUnitCosts: RoutePendingRouteCostCategoryUnitCostsType<T>[];
}
