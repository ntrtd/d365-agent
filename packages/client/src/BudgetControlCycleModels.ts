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
import type { BudgetControlCycleModelsApi } from './BudgetControlCycleModelsApi';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';
import {
  BudgetControlConfigurations,
  BudgetControlConfigurationsType
} from './BudgetControlConfigurations';
import { BudgetCycles, BudgetCyclesType } from './BudgetCycles';

/**
 * This class represents the entity "BudgetControlCycleModels" of service "d365_metadata".
 */
export class BudgetControlCycleModels<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetControlCycleModelsType<T>
{
  /**
   * Technical entity name for BudgetControlCycleModels.
   */
  static override _entityName = 'BudgetControlCycleModels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetControlCycleModels entity.
   */
  static _keys = [
    'dataAreaId',
    'LegalEntityId',
    'Status',
    'BudgetCycleName',
    'BudgetCycleTimeSpanName',
    'BudgetCycleTimeSpanFiscalCalendarId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: BudgetControlConfigurationStatus | null;
  /**
   * Budget Cycle Name.
   */
  declare budgetCycleName: DeserializedType<T, 'Edm.String'>;
  /**
   * Budget Cycle Time Span Name.
   */
  declare budgetCycleTimeSpanName: DeserializedType<T, 'Edm.String'>;
  /**
   * Budget Cycle Time Span Fiscal Calendar Id.
   */
  declare budgetCycleTimeSpanFiscalCalendarId: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Budget Model Id.
   * @nullable
   */
  declare budgetModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Use By.
   * @nullable
   */
  declare inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BudgetControlConfigurations} entity.
   */
  declare budgetControlConfigurations?: BudgetControlConfigurations<T> | null;
  /**
   * One-to-one navigation property to the {@link BudgetCycles} entity.
   */
  declare budgetCycles?: BudgetCycles<T> | null;

  constructor(_entityApi: BudgetControlCycleModelsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetControlCycleModelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  status?: BudgetControlConfigurationStatus | null;
  budgetCycleName: DeserializedType<T, 'Edm.String'>;
  budgetCycleTimeSpanName: DeserializedType<T, 'Edm.String'>;
  budgetCycleTimeSpanFiscalCalendarId: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  budgetModelId?: DeserializedType<T, 'Edm.String'> | null;
  inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  budgetControlConfigurations?: BudgetControlConfigurationsType<T> | null;
  budgetCycles?: BudgetCyclesType<T> | null;
}
