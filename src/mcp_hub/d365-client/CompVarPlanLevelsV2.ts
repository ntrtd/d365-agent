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
import type { CompVarPlanLevelsV2Api } from './CompVarPlanLevelsV2Api';
import {
  CompVarPlanTablesV2,
  CompVarPlanTablesV2Type
} from './CompVarPlanTablesV2';
import {
  CompensationLevels,
  CompensationLevelsType
} from './CompensationLevels';

/**
 * This class represents the entity "CompVarPlanLevelsV2" of service "d365_metadata".
 */
export class CompVarPlanLevelsV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CompVarPlanLevelsV2Type<T>
{
  /**
   * Technical entity name for CompVarPlanLevelsV2.
   */
  static override _entityName = 'CompVarPlanLevelsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CompVarPlanLevelsV2 entity.
   */
  static _keys = ['dataAreaId', 'CompensationLevelId', 'PlanId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Compensation Level Id.
   */
  declare compensationLevelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan Id.
   */
  declare planId: DeserializedType<T, 'Edm.String'>;
  /**
   * Award Percent.
   */
  declare awardPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Award Units Real.
   */
  declare awardUnitsReal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Award Amount.
   */
  declare awardAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link CompVarPlanTablesV2} entity.
   */
  declare compVarPlanTableV2?: CompVarPlanTablesV2<T> | null;
  /**
   * One-to-one navigation property to the {@link CompensationLevels} entity.
   */
  declare compensationLevel?: CompensationLevels<T> | null;

  constructor(_entityApi: CompVarPlanLevelsV2Api<T>) {
    super(_entityApi);
  }
}

export interface CompVarPlanLevelsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  compensationLevelId: DeserializedType<T, 'Edm.String'>;
  planId: DeserializedType<T, 'Edm.String'>;
  awardPercent: DeserializedType<T, 'Edm.Decimal'>;
  awardUnitsReal: DeserializedType<T, 'Edm.Decimal'>;
  awardAmount: DeserializedType<T, 'Edm.Decimal'>;
  compVarPlanTableV2?: CompVarPlanTablesV2Type<T> | null;
  compensationLevel?: CompensationLevelsType<T> | null;
}
