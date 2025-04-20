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
import type { ProjectFeeForecastsApi } from './ProjectFeeForecastsApi';
import { NoYes } from './NoYes';
import { BudgetAllocateMethod } from './BudgetAllocateMethod';
import { ProjForecastBudgetType } from './ProjForecastBudgetType';
import { PeriodUnit } from './PeriodUnit';
import { ProjectResources, ProjectResourcesType } from './ProjectResources';
import {
  ResourceCategories,
  ResourceCategoriesType
} from './ResourceCategories';
import {
  ProjectLineProperties,
  ProjectLinePropertiesType
} from './ProjectLineProperties';
import { Projects, ProjectsType } from './Projects';
import { LegalEntities, LegalEntitiesType } from './LegalEntities';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "ProjectFeeForecasts" of service "d365_metadata".
 */
export class ProjectFeeForecasts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjectFeeForecastsType<T>
{
  /**
   * Technical entity name for ProjectFeeForecasts.
   */
  static override _entityName = 'ProjectFeeForecasts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectFeeForecasts entity.
   */
  static _keys = ['dataAreaId', 'TransactionID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Funding Source Id.
   * @nullable
   */
  declare fundingSourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active.
   * @nullable
   */
  declare active?: NoYes | null;
  /**
   * Resource Id.
   * @nullable
   */
  declare resourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stop.
   * @nullable
   */
  declare stop?: NoYes | null;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Method.
   * @nullable
   */
  declare method?: BudgetAllocateMethod | null;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Currency.
   * @nullable
   */
  declare salesCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource Category Id.
   * @nullable
   */
  declare resourceCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Type.
   * @nullable
   */
  declare budgetType?: ProjForecastBudgetType | null;
  /**
   * End.
   */
  declare end: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Project Date.
   */
  declare projectDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Category.
   * @nullable
   */
  declare category?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Forecast Model.
   * @nullable
   */
  declare forecastModel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Elimination Date.
   */
  declare eliminationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Line Property.
   * @nullable
   */
  declare lineProperty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period Key.
   * @nullable
   */
  declare periodKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource Company Id.
   * @nullable
   */
  declare resourceCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Contract Id.
   * @nullable
   */
  declare projectContractId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Payment Date.
   */
  declare salesPaymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Unit.
   * @nullable
   */
  declare unit?: PeriodUnit | null;
  /**
   * One-to-one navigation property to the {@link ProjectResources} entity.
   */
  declare projectResource?: ProjectResources<T> | null;
  /**
   * One-to-one navigation property to the {@link ResourceCategories} entity.
   */
  declare resourceCategory?: ResourceCategories<T> | null;
  /**
   * One-to-one navigation property to the {@link ProjectLineProperties} entity.
   */
  declare projectLineProperty?: ProjectLineProperties<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  declare project?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link LegalEntities} entity.
   */
  declare legalEntity?: LegalEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: ProjectFeeForecastsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectFeeForecastsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  fundingSourceId?: DeserializedType<T, 'Edm.String'> | null;
  active?: NoYes | null;
  resourceId?: DeserializedType<T, 'Edm.String'> | null;
  stop?: NoYes | null;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  method?: BudgetAllocateMethod | null;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  salesCurrency?: DeserializedType<T, 'Edm.String'> | null;
  resourceCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  budgetType?: ProjForecastBudgetType | null;
  end: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projectDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  category?: DeserializedType<T, 'Edm.String'> | null;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  forecastModel?: DeserializedType<T, 'Edm.String'> | null;
  eliminationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lineProperty?: DeserializedType<T, 'Edm.String'> | null;
  periodKey?: DeserializedType<T, 'Edm.String'> | null;
  resourceCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  projectContractId?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Int32'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  salesPaymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  unit?: PeriodUnit | null;
  projectResource?: ProjectResourcesType<T> | null;
  resourceCategory?: ResourceCategoriesType<T> | null;
  projectLineProperty?: ProjectLinePropertiesType<T> | null;
  project?: ProjectsType<T> | null;
  legalEntity?: LegalEntitiesType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
