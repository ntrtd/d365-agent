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
import type { ProjectExpenseForecastsApi } from './ProjectExpenseForecastsApi';
import { PeriodUnit } from './PeriodUnit';
import { NoYes } from './NoYes';
import { BudgetAllocateMethod } from './BudgetAllocateMethod';
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
 * This class represents the entity "ProjectExpenseForecasts" of service "d365_metadata".
 */
export class ProjectExpenseForecasts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectExpenseForecastsType<T>
{
  /**
   * Technical entity name for ProjectExpenseForecasts.
   */
  static override _entityName = 'ProjectExpenseForecasts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectExpenseForecasts entity.
   */
  static _keys = ['dataAreaId', 'TransId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Trans Id.
   */
  declare transId: DeserializedType<T, 'Edm.String'>;
  /**
   * Elimination Date.
   */
  declare eliminationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Resource Company Id.
   * @nullable
   */
  declare resourceCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period Key.
   * @nullable
   */
  declare periodKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Payment Date.
   */
  declare salesPaymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Payment Date.
   */
  declare costPaymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Allocation Quantity.
   */
  declare allocationQuantity: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Line Property.
   * @nullable
   */
  declare lineProperty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allocation Key.
   * @nullable
   */
  declare allocationKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit.
   * @nullable
   */
  declare unit?: PeriodUnit | null;
  /**
   * Resource Id.
   * @nullable
   */
  declare resourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Currency.
   * @nullable
   */
  declare salesCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stop.
   * @nullable
   */
  declare stop?: NoYes | null;
  /**
   * Project Date.
   */
  declare projectDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Method.
   * @nullable
   */
  declare method?: BudgetAllocateMethod | null;
  /**
   * Forecast Model.
   * @nullable
   */
  declare forecastModel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active.
   * @nullable
   */
  declare active?: NoYes | null;
  /**
   * Cost Price.
   */
  declare costPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Category.
   * @nullable
   */
  declare category?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Funding Source Id.
   * @nullable
   */
  declare fundingSourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource Category Id.
   * @nullable
   */
  declare resourceCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Contract Id.
   * @nullable
   */
  declare projectContractId?: DeserializedType<T, 'Edm.String'> | null;
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

  constructor(_entityApi: ProjectExpenseForecastsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectExpenseForecastsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transId: DeserializedType<T, 'Edm.String'>;
  eliminationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  resourceCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  periodKey?: DeserializedType<T, 'Edm.String'> | null;
  salesPaymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  costPaymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  allocationQuantity: DeserializedType<T, 'Edm.Int32'>;
  lineProperty?: DeserializedType<T, 'Edm.String'> | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  allocationKey?: DeserializedType<T, 'Edm.String'> | null;
  unit?: PeriodUnit | null;
  resourceId?: DeserializedType<T, 'Edm.String'> | null;
  salesCurrency?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  stop?: NoYes | null;
  projectDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  method?: BudgetAllocateMethod | null;
  forecastModel?: DeserializedType<T, 'Edm.String'> | null;
  active?: NoYes | null;
  costPrice: DeserializedType<T, 'Edm.Decimal'>;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  category?: DeserializedType<T, 'Edm.String'> | null;
  fundingSourceId?: DeserializedType<T, 'Edm.String'> | null;
  resourceCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  projectContractId?: DeserializedType<T, 'Edm.String'> | null;
  projectResource?: ProjectResourcesType<T> | null;
  resourceCategory?: ResourceCategoriesType<T> | null;
  projectLineProperty?: ProjectLinePropertiesType<T> | null;
  project?: ProjectsType<T> | null;
  legalEntity?: LegalEntitiesType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
