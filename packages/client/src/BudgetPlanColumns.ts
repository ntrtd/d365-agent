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
import type { BudgetPlanColumnsApi } from './BudgetPlanColumnsApi';
import { BudgetPlanColumnPeriodLength } from './BudgetPlanColumnPeriodLength';

/**
 * This class represents the entity "BudgetPlanColumns" of service "d365_metadata".
 */
export class BudgetPlanColumns<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BudgetPlanColumnsType<T>
{
  /**
   * Technical entity name for BudgetPlanColumns.
   */
  static override _entityName = 'BudgetPlanColumns';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetPlanColumns entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Year Offset.
   */
  declare yearOffset: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Column Period Length.
   * @nullable
   */
  declare columnPeriodLength?: BudgetPlanColumnPeriodLength | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scenario.
   * @nullable
   */
  declare scenario?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Period Length Value.
   */
  declare columnPeriodLengthValue: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: BudgetPlanColumnsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetPlanColumnsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  yearOffset: DeserializedType<T, 'Edm.Int32'>;
  columnPeriodLength?: BudgetPlanColumnPeriodLength | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  scenario?: DeserializedType<T, 'Edm.String'> | null;
  columnPeriodLengthValue: DeserializedType<T, 'Edm.Int32'>;
}
