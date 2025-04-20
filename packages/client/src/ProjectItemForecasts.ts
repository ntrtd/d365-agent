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
import type { ProjectItemForecastsApi } from './ProjectItemForecastsApi';
import { BudgetAllocateMethod } from './BudgetAllocateMethod';
import { PeriodUnit } from './PeriodUnit';
import { ProjForecastBudgetType } from './ProjForecastBudgetType';
import { NoYes } from './NoYes';
import {
  ProjectLineProperties,
  ProjectLinePropertiesType
} from './ProjectLineProperties';
import { Projects, ProjectsType } from './Projects';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "ProjectItemForecasts" of service "d365_metadata".
 */
export class ProjectItemForecasts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectItemForecastsType<T>
{
  /**
   * Technical entity name for ProjectItemForecasts.
   */
  static override _entityName = 'ProjectItemForecasts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectItemForecasts entity.
   */
  static _keys = [
    'dataAreaId',
    'AllocateMethod',
    'EndDate',
    'Periods',
    'Unit',
    'PeriodKeyId',
    'ProjectTransactionId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Allocate Method.
   * @nullable
   */
  declare allocateMethod?: BudgetAllocateMethod | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Periods.
   */
  declare periods: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Unit.
   * @nullable
   */
  declare unit?: PeriodUnit | null;
  /**
   * Period Key Id.
   */
  declare periodKeyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Transaction Id.
   */
  declare projectTransactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Storage Site Id.
   * @nullable
   */
  declare storageSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Quantity.
   */
  declare salesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Bom Id.
   * @nullable
   */
  declare itemBomId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Percent.
   */
  declare discountPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Dimension Id.
   * @nullable
   */
  declare inventDimensionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Markup.
   */
  declare salesMarkup: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Group Id.
   * @nullable
   */
  declare taxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Group Id.
   * @nullable
   */
  declare customerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Forecast Budget Type.
   * @nullable
   */
  declare projectForecastBudgetType?: ProjForecastBudgetType | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cw Quantity.
   */
  declare cwQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Forecast Invoice Date.
   */
  declare projectForecastInvoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Unit.
   */
  declare priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Budget Comment.
   * @nullable
   */
  declare budgetComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Allocate Id.
   * @nullable
   */
  declare itemAllocateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active.
   * @nullable
   */
  declare active?: NoYes | null;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Line Property Id.
   * @nullable
   */
  declare projectLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Category Id.
   * @nullable
   */
  declare projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Route Id.
   * @nullable
   */
  declare itemRouteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Amount.
   */
  declare discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cash Flow Forecast.
   * @nullable
   */
  declare cashFlowForecast?: NoYes | null;
  /**
   * Tax Item Group Id.
   * @nullable
   */
  declare taxItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Storage Location Id.
   * @nullable
   */
  declare storageLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Group Id.
   * @nullable
   */
  declare itemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Forecast Cost Payment Date.
   */
  declare projectForecastCostPaymentDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Funding Source Id.
   * @nullable
   */
  declare fundingSourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Storage Warehouse Id.
   * @nullable
   */
  declare storageWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Price.
   */
  declare costPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cw Unit Id.
   * @nullable
   */
  declare cwUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Model Id.
   * @nullable
   */
  declare modelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Unit Id.
   * @nullable
   */
  declare salesUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Forecast Sales Payment Date.
   */
  declare projectForecastSalesPaymentDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Planning Priority.
   */
  declare planningPriority: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Forecast Elimination Date.
   */
  declare projectForecastEliminationDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Invent Quantity.
   */
  declare inventQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Contract Id.
   * @nullable
   */
  declare projectContractId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account Id.
   * @nullable
   */
  declare customerAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Kitting Line Num.
   */
  declare kittingLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Kitting Invent Trans Id.
   * @nullable
   */
  declare kittingInventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ProjectLineProperties} entity.
   */
  declare projectLineProperty?: ProjectLineProperties<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  declare project?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: ProjectItemForecastsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectItemForecastsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  allocateMethod?: BudgetAllocateMethod | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  periods: DeserializedType<T, 'Edm.Int32'>;
  unit?: PeriodUnit | null;
  periodKeyId: DeserializedType<T, 'Edm.String'>;
  projectTransactionId: DeserializedType<T, 'Edm.String'>;
  storageSiteId?: DeserializedType<T, 'Edm.String'> | null;
  salesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  itemBomId?: DeserializedType<T, 'Edm.String'> | null;
  discountPercent: DeserializedType<T, 'Edm.Decimal'>;
  inventDimensionId?: DeserializedType<T, 'Edm.String'> | null;
  salesMarkup: DeserializedType<T, 'Edm.Decimal'>;
  taxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  customerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  projectForecastBudgetType?: ProjForecastBudgetType | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cwQuantity: DeserializedType<T, 'Edm.Decimal'>;
  projectForecastInvoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  budgetComment?: DeserializedType<T, 'Edm.String'> | null;
  itemAllocateId?: DeserializedType<T, 'Edm.String'> | null;
  active?: NoYes | null;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  projectLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  itemRouteId?: DeserializedType<T, 'Edm.String'> | null;
  discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  cashFlowForecast?: NoYes | null;
  taxItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  storageLocationId?: DeserializedType<T, 'Edm.String'> | null;
  itemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  projectForecastCostPaymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fundingSourceId?: DeserializedType<T, 'Edm.String'> | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  storageWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  costPrice: DeserializedType<T, 'Edm.Decimal'>;
  cwUnitId?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  modelId?: DeserializedType<T, 'Edm.String'> | null;
  salesUnitId?: DeserializedType<T, 'Edm.String'> | null;
  projectForecastSalesPaymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  planningPriority: DeserializedType<T, 'Edm.Decimal'>;
  projectForecastEliminationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventQuantity: DeserializedType<T, 'Edm.Decimal'>;
  projectContractId?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountId?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  kittingLineNum: DeserializedType<T, 'Edm.Decimal'>;
  kittingInventTransId?: DeserializedType<T, 'Edm.String'> | null;
  projectLineProperty?: ProjectLinePropertiesType<T> | null;
  project?: ProjectsType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
