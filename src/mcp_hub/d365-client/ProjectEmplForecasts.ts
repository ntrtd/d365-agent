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
import type { ProjectEmplForecastsApi } from './ProjectEmplForecastsApi';
import { NoYes } from './NoYes';
import { SchedJobLink } from './SchedJobLink';
import { ProjForecastBudgetType } from './ProjForecastBudgetType';
import { SchedJobLinkType } from './SchedJobLinkType';
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
 * This class represents the entity "ProjectEmplForecasts" of service "d365_metadata".
 */
export class ProjectEmplForecasts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectEmplForecastsType<T>
{
  /**
   * Technical entity name for ProjectEmplForecasts.
   */
  static override _entityName = 'ProjectEmplForecasts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectEmplForecasts entity.
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
   * Capacity.
   * @nullable
   */
  declare capacity?: NoYes | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Category.
   * @nullable
   */
  declare category?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Link.
   * @nullable
   */
  declare link?: SchedJobLink | null;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Payment Date.
   */
  declare salesPaymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Elimination Date.
   */
  declare eliminationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Budget Type.
   * @nullable
   */
  declare budgetType?: ProjForecastBudgetType | null;
  /**
   * Sales Currency.
   * @nullable
   */
  declare salesCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource Company Id.
   * @nullable
   */
  declare resourceCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Model.
   * @nullable
   */
  declare forecastModel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Link Type.
   * @nullable
   */
  declare linkType?: SchedJobLinkType | null;
  /**
   * Line Property.
   * @nullable
   */
  declare lineProperty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Special Report.
   * @nullable
   */
  declare specialReport?: NoYes | null;
  /**
   * Cash Flow Forecast Status.
   */
  declare cashFlowForecastStatus: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Cost Payment Date.
   */
  declare costPaymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Time.
   */
  declare endTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Start Time.
   */
  declare startTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Resource Category Id.
   * @nullable
   */
  declare resourceCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Resource Id.
   * @nullable
   */
  declare resourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Working Time.
   * @nullable
   */
  declare workingTime?: NoYes | null;
  /**
   * Scheduling Resource.
   * @nullable
   */
  declare schedulingResource?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Date.
   */
  declare projectDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Funding Source Id.
   * @nullable
   */
  declare fundingSourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Price.
   */
  declare costPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Job Identification.
   * @nullable
   */
  declare jobIdentification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Contract Id.
   * @nullable
   */
  declare projectContractId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hours.
   */
  declare hours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Hours Scheduled.
   */
  declare hoursScheduled: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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

  constructor(_entityApi: ProjectEmplForecastsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectEmplForecastsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  capacity?: NoYes | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  category?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  link?: SchedJobLink | null;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  salesPaymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  active?: NoYes | null;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  eliminationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  budgetType?: ProjForecastBudgetType | null;
  salesCurrency?: DeserializedType<T, 'Edm.String'> | null;
  resourceCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  forecastModel?: DeserializedType<T, 'Edm.String'> | null;
  linkType?: SchedJobLinkType | null;
  lineProperty?: DeserializedType<T, 'Edm.String'> | null;
  specialReport?: NoYes | null;
  cashFlowForecastStatus: DeserializedType<T, 'Edm.Int32'>;
  costPaymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endTime: DeserializedType<T, 'Edm.Int32'>;
  startTime: DeserializedType<T, 'Edm.Int32'>;
  resourceCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  resourceId?: DeserializedType<T, 'Edm.String'> | null;
  workingTime?: NoYes | null;
  schedulingResource?: DeserializedType<T, 'Edm.String'> | null;
  projectDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fundingSourceId?: DeserializedType<T, 'Edm.String'> | null;
  costPrice: DeserializedType<T, 'Edm.Decimal'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  jobIdentification?: DeserializedType<T, 'Edm.String'> | null;
  projectContractId?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  hours: DeserializedType<T, 'Edm.Decimal'>;
  hoursScheduled: DeserializedType<T, 'Edm.Decimal'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  projectResource?: ProjectResourcesType<T> | null;
  resourceCategory?: ResourceCategoriesType<T> | null;
  projectLineProperty?: ProjectLinePropertiesType<T> | null;
  project?: ProjectsType<T> | null;
  legalEntity?: LegalEntitiesType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
