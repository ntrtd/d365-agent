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
import type { CostCalculationGroupsApi } from './CostCalculationGroupsApi';
import { NoYes } from './NoYes';
import { BomCalcCostPrice } from './BomCalcCostPrice';
import { BomCalcSalesPrice } from './BomCalcSalesPrice';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "CostCalculationGroups" of service "d365_metadata".
 */
export class CostCalculationGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostCalculationGroupsType<T>
{
  /**
   * Technical entity name for CostCalculationGroups.
   */
  static override _entityName = 'CostCalculationGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostCalculationGroups entity.
   */
  static _keys = ['dataAreaId', 'GroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Show Warning If Contribution Margin Percentage Lower Than.
   */
  declare showWarningIfContributionMarginPercentageLowerThan: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Will Cost Calculation Issue Zero Consumption Warning.
   * @nullable
   */
  declare willCostCalculationIssueZeroConsumptionWarning?: NoYes | null;
  /**
   * Will Cost Calculation Issue No Active Assigned Route Warning.
   * @nullable
   */
  declare willCostCalculationIssueNoActiveAssignedRouteWarning?: NoYes | null;
  /**
   * Group Name.
   * @nullable
   */
  declare groupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Cost Calculation Method.
   * @nullable
   */
  declare unitCostCalculationMethod?: BomCalcCostPrice | null;
  /**
   * Sales Price Calculation Method.
   * @nullable
   */
  declare salesPriceCalculationMethod?: BomCalcSalesPrice | null;
  /**
   * Will Cost Calculation Issue No Active Assigned Bom Warning.
   * @nullable
   */
  declare willCostCalculationIssueNoActiveAssignedBomWarning?: NoYes | null;
  /**
   * Will Cost Calulation Issue Operations Resource Requirement Not Met Warning.
   * @nullable
   */
  declare willCostCalulationIssueOperationsResourceRequirementNotMetWarning?: NoYes | null;
  /**
   * Will Cost Calulation Issue Zero Cost Price Warning.
   * @nullable
   */
  declare willCostCalulationIssueZeroCostPriceWarning?: NoYes | null;
  /**
   * Show Warning If Cost Price Calculation Older Than Days.
   */
  declare showWarningIfCostPriceCalculationOlderThanDays: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Stop Explosion At Item.
   * @nullable
   */
  declare stopExplosionAtItem?: NoYes | null;
  /**
   * Alternative Unit Cost Calculation Method.
   * @nullable
   */
  declare alternativeUnitCostCalculationMethod?: BomCalcCostPrice | null;
  /**
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2: ReleasedProductsV2<T>[];

  constructor(_entityApi: CostCalculationGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface CostCalculationGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  showWarningIfContributionMarginPercentageLowerThan: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  willCostCalculationIssueZeroConsumptionWarning?: NoYes | null;
  willCostCalculationIssueNoActiveAssignedRouteWarning?: NoYes | null;
  groupName?: DeserializedType<T, 'Edm.String'> | null;
  unitCostCalculationMethod?: BomCalcCostPrice | null;
  salesPriceCalculationMethod?: BomCalcSalesPrice | null;
  willCostCalculationIssueNoActiveAssignedBomWarning?: NoYes | null;
  willCostCalulationIssueOperationsResourceRequirementNotMetWarning?: NoYes | null;
  willCostCalulationIssueZeroCostPriceWarning?: NoYes | null;
  showWarningIfCostPriceCalculationOlderThanDays: DeserializedType<
    T,
    'Edm.Int32'
  >;
  stopExplosionAtItem?: NoYes | null;
  alternativeUnitCostCalculationMethod?: BomCalcCostPrice | null;
  releasedProductsV2: ReleasedProductsV2Type<T>[];
}
