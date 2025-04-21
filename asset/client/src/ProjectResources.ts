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
import type { ProjectResourcesApi } from './ProjectResourcesApi';
import { WrkCtrType } from './WrkCtrType';
import { JournalTrans, JournalTransType } from './JournalTrans';
import {
  ProjectRevenueSalesPrices,
  ProjectRevenueSalesPricesType
} from './ProjectRevenueSalesPrices';
import {
  ProjectEmplForecasts,
  ProjectEmplForecastsType
} from './ProjectEmplForecasts';
import {
  ProjectExpenseForecasts,
  ProjectExpenseForecastsType
} from './ProjectExpenseForecasts';
import { TransferPrices, TransferPricesType } from './TransferPrices';
import {
  ProjectFeeForecasts,
  ProjectFeeForecastsType
} from './ProjectFeeForecasts';

/**
 * This class represents the entity "ProjectResources" of service "d365_metadata".
 */
export class ProjectResources<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjectResourcesType<T>
{
  /**
   * Technical entity name for ProjectResources.
   */
  static override _entityName = 'ProjectResources';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectResources entity.
   */
  static _keys = ['ResourceId', 'ResourceCompanyId'];
  /**
   * Resource Id.
   */
  declare resourceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Resource Company Id.
   */
  declare resourceCompanyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Id.
   * @nullable
   */
  declare vendId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: WrkCtrType | null;
  /**
   * One-to-one navigation property to the {@link JournalTrans} entity.
   */
  declare journalTrans?: JournalTrans<T> | null;
  /**
   * One-to-many navigation property to the {@link ProjectRevenueSalesPrices} entity.
   */
  declare projectRevenueSalesPrice: ProjectRevenueSalesPrices<T>[];
  /**
   * One-to-one navigation property to the {@link ProjectEmplForecasts} entity.
   */
  declare projectEmplForecast?: ProjectEmplForecasts<T> | null;
  /**
   * One-to-one navigation property to the {@link ProjectExpenseForecasts} entity.
   */
  declare projectExpenseForecast?: ProjectExpenseForecasts<T> | null;
  /**
   * One-to-many navigation property to the {@link TransferPrices} entity.
   */
  declare transferPriceForResource: TransferPrices<T>[];
  /**
   * One-to-one navigation property to the {@link ProjectFeeForecasts} entity.
   */
  declare projectFeeForecast?: ProjectFeeForecasts<T> | null;

  constructor(_entityApi: ProjectResourcesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectResourcesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  resourceId: DeserializedType<T, 'Edm.String'>;
  resourceCompanyId: DeserializedType<T, 'Edm.String'>;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  vendId?: DeserializedType<T, 'Edm.String'> | null;
  type?: WrkCtrType | null;
  journalTrans?: JournalTransType<T> | null;
  projectRevenueSalesPrice: ProjectRevenueSalesPricesType<T>[];
  projectEmplForecast?: ProjectEmplForecastsType<T> | null;
  projectExpenseForecast?: ProjectExpenseForecastsType<T> | null;
  transferPriceForResource: TransferPricesType<T>[];
  projectFeeForecast?: ProjectFeeForecastsType<T> | null;
}
