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
import type { PayIntV1HcmVariableCompensationAwardsApi } from './PayIntV1HcmVariableCompensationAwardsApi';
import { HrmCompVarAwardEmplType } from './HrmCompVarAwardEmplType';
import { HrmCompProcessType } from './HrmCompProcessType';

/**
 * This class represents the entity "PayIntV1HcmVariableCompensationAwards" of service "d365_metadata".
 */
export class PayIntV1HcmVariableCompensationAwards<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1HcmVariableCompensationAwardsType<T>
{
  /**
   * Technical entity name for PayIntV1HcmVariableCompensationAwards.
   */
  static override _entityName = 'PayIntV1HcmVariableCompensationAwards';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1HcmVariableCompensationAwards entity.
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

  constructor(_entityApi: PayIntV1HcmVariableCompensationAwardsApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1HcmVariableCompensationAwardsType<
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
}
