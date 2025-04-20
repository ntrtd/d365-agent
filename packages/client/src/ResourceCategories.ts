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
import type { ResourceCategoriesApi } from './ResourceCategoriesApi';
import { FalseTrue } from './FalseTrue';
import { JournalTrans, JournalTransType } from './JournalTrans';
import {
  ProjectEmplForecasts,
  ProjectEmplForecastsType
} from './ProjectEmplForecasts';
import {
  ProjectExpenseForecasts,
  ProjectExpenseForecastsType
} from './ProjectExpenseForecasts';
import {
  ProjectQuotationWbsTasks,
  ProjectQuotationWbsTasksType
} from './ProjectQuotationWbsTasks';
import { TransferPrices, TransferPricesType } from './TransferPrices';
import { ProjectWbsDrafts, ProjectWbsDraftsType } from './ProjectWbsDrafts';
import {
  ProjWbsTemplateTasks,
  ProjWbsTemplateTasksType
} from './ProjWbsTemplateTasks';
import {
  ProjectFeeForecasts,
  ProjectFeeForecastsType
} from './ProjectFeeForecasts';

/**
 * This class represents the entity "ResourceCategories" of service "d365_metadata".
 */
export class ResourceCategories<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ResourceCategoriesType<T>
{
  /**
   * Technical entity name for ResourceCategories.
   */
  static override _entityName = 'ResourceCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ResourceCategories entity.
   */
  static _keys = ['dataAreaId', 'RoleId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Role Id.
   */
  declare roleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Category Disabled.
   * @nullable
   */
  declare isCategoryDisabled?: FalseTrue | null;
  /**
   * Default Resource Category.
   * @nullable
   */
  declare defaultResourceCategory?: FalseTrue | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link JournalTrans} entity.
   */
  declare journalTrans?: JournalTrans<T> | null;
  /**
   * One-to-one navigation property to the {@link ProjectEmplForecasts} entity.
   */
  declare projectEmplForecast?: ProjectEmplForecasts<T> | null;
  /**
   * One-to-one navigation property to the {@link ProjectExpenseForecasts} entity.
   */
  declare projectExpenseForecast?: ProjectExpenseForecasts<T> | null;
  /**
   * One-to-many navigation property to the {@link ProjectQuotationWbsTasks} entity.
   */
  declare projectQuotationWbsTask: ProjectQuotationWbsTasks<T>[];
  /**
   * One-to-many navigation property to the {@link TransferPrices} entity.
   */
  declare transferPrice: TransferPrices<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectWbsDrafts} entity.
   */
  declare wbs: ProjectWbsDrafts<T>[];
  /**
   * One-to-many navigation property to the {@link ProjWbsTemplateTasks} entity.
   */
  declare projWbsTemplateTask: ProjWbsTemplateTasks<T>[];
  /**
   * One-to-one navigation property to the {@link ProjectFeeForecasts} entity.
   */
  declare projectFeeForecast?: ProjectFeeForecasts<T> | null;

  constructor(_entityApi: ResourceCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface ResourceCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  roleId: DeserializedType<T, 'Edm.String'>;
  isCategoryDisabled?: FalseTrue | null;
  defaultResourceCategory?: FalseTrue | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  journalTrans?: JournalTransType<T> | null;
  projectEmplForecast?: ProjectEmplForecastsType<T> | null;
  projectExpenseForecast?: ProjectExpenseForecastsType<T> | null;
  projectQuotationWbsTask: ProjectQuotationWbsTasksType<T>[];
  transferPrice: TransferPricesType<T>[];
  wbs: ProjectWbsDraftsType<T>[];
  projWbsTemplateTask: ProjWbsTemplateTasksType<T>[];
  projectFeeForecast?: ProjectFeeForecastsType<T> | null;
}
