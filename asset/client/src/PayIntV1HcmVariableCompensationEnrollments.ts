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
import type { PayIntV1HcmVariableCompensationEnrollmentsApi } from './PayIntV1HcmVariableCompensationEnrollmentsApi';
import { HrmCompVarEnrollEmpllStatus } from './HrmCompVarEnrollEmpllStatus';

/**
 * This class represents the entity "PayIntV1HcmVariableCompensationEnrollments" of service "d365_metadata".
 */
export class PayIntV1HcmVariableCompensationEnrollments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1HcmVariableCompensationEnrollmentsType<T>
{
  /**
   * Technical entity name for PayIntV1HcmVariableCompensationEnrollments.
   */
  static override _entityName = 'PayIntV1HcmVariableCompensationEnrollments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1HcmVariableCompensationEnrollments entity.
   */
  static _keys = ['dataAreaId', 'PersonnelNumber', 'Plan', 'EffectiveDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan.
   */
  declare plan: DeserializedType<T, 'Edm.String'>;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Award Percent.
   */
  declare awardPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Number Of Units Real.
   */
  declare numberOfUnitsReal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: HrmCompVarEnrollEmpllStatus | null;
  /**
   * Hire Rule Date.
   */
  declare hireRuleDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Award Amount.
   */
  declare awardAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: PayIntV1HcmVariableCompensationEnrollmentsApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1HcmVariableCompensationEnrollmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  plan: DeserializedType<T, 'Edm.String'>;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  awardPercent: DeserializedType<T, 'Edm.Decimal'>;
  numberOfUnitsReal: DeserializedType<T, 'Edm.Decimal'>;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  status?: HrmCompVarEnrollEmpllStatus | null;
  hireRuleDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  awardAmount: DeserializedType<T, 'Edm.Decimal'>;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
