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
import type { ProjectOnAccForecastsApi } from './ProjectOnAccForecastsApi';
import { ProjForecastBudgetType } from './ProjForecastBudgetType';
import { Projects, ProjectsType } from './Projects';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "ProjectOnAccForecasts" of service "d365_metadata".
 */
export class ProjectOnAccForecasts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectOnAccForecastsType<T>
{
  /**
   * Technical entity name for ProjectOnAccForecasts.
   */
  static override _entityName = 'ProjectOnAccForecasts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectOnAccForecasts entity.
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
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Budget Type.
   * @nullable
   */
  declare budgetType?: ProjForecastBudgetType | null;
  /**
   * Project Date.
   */
  declare projectDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Project Contract Id.
   * @nullable
   */
  declare projectContractId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
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
   * One-to-one navigation property to the {@link Projects} entity.
   */
  declare project?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: ProjectOnAccForecastsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectOnAccForecastsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  fundingSourceId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  salesCurrency?: DeserializedType<T, 'Edm.String'> | null;
  budgetType?: ProjForecastBudgetType | null;
  projectDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  forecastModel?: DeserializedType<T, 'Edm.String'> | null;
  eliminationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projectContractId?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  salesPaymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  project?: ProjectsType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
