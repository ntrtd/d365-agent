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
import type { VariableCompensationAwardsApi } from './VariableCompensationAwardsApi';
import { HrmCompVarAwardEmplType } from './HrmCompVarAwardEmplType';
import { HrmCompProcessType } from './HrmCompProcessType';
import { Currencies, CurrenciesType } from './Currencies';
import { Workers, WorkersType } from './Workers';
import {
  CompVarPlanTablesV2,
  CompVarPlanTablesV2Type
} from './CompVarPlanTablesV2';
import {
  CompFixedPlanTables,
  CompFixedPlanTablesType
} from './CompFixedPlanTables';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "VariableCompensationAwards" of service "d365_metadata".
 */
export class VariableCompensationAwards<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VariableCompensationAwardsType<T>
{
  /**
   * Technical entity name for VariableCompensationAwards.
   */
  static override _entityName = 'VariableCompensationAwards';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VariableCompensationAwards entity.
   */
  static _keys = [
    'dataAreaId',
    'PersonnelNumber',
    'PlanId',
    'AwardDate',
    'Sequence'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan Id.
   */
  declare planId: DeserializedType<T, 'Edm.String'>;
  /**
   * Award Date.
   */
  declare awardDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sequence.
   */
  declare sequence: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fixed Plan Id.
   * @nullable
   */
  declare fixedPlanId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Currency Code.
   * @nullable
   */
  declare unitCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Award Type.
   * @nullable
   */
  declare awardType?: HrmCompVarAwardEmplType | null;
  /**
   * Unit Value V 2.
   */
  declare unitValueV2: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Process Type.
   * @nullable
   */
  declare processType?: HrmCompProcessType | null;
  /**
   * Units Real.
   */
  declare unitsReal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link CompVarPlanTablesV2} entity.
   */
  declare compVarPlanTableV2?: CompVarPlanTablesV2<T> | null;
  /**
   * One-to-one navigation property to the {@link CompFixedPlanTables} entity.
   */
  declare compFixedPlanTable?: CompFixedPlanTables<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: VariableCompensationAwardsApi<T>) {
    super(_entityApi);
  }
}

export interface VariableCompensationAwardsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  planId: DeserializedType<T, 'Edm.String'>;
  awardDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sequence: DeserializedType<T, 'Edm.Decimal'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  fixedPlanId?: DeserializedType<T, 'Edm.String'> | null;
  unitCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  awardType?: HrmCompVarAwardEmplType | null;
  unitValueV2: DeserializedType<T, 'Edm.Decimal'>;
  processType?: HrmCompProcessType | null;
  unitsReal: DeserializedType<T, 'Edm.Decimal'>;
  currency?: CurrenciesType<T> | null;
  worker?: WorkersType<T> | null;
  compVarPlanTableV2?: CompVarPlanTablesV2Type<T> | null;
  compFixedPlanTable?: CompFixedPlanTablesType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
