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
import type { PayIntV1CompFixedEmplsApi } from './PayIntV1CompFixedEmplsApi';
import { HcmCompensationType } from './HcmCompensationType';
import { HrmCompProcessType } from './HrmCompProcessType';

/**
 * This class represents the entity "PayIntV1CompFixedEmpls" of service "d365_metadata".
 */
export class PayIntV1CompFixedEmpls<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1CompFixedEmplsType<T>
{
  /**
   * Technical entity name for PayIntV1CompFixedEmpls.
   */
  static override _entityName = 'PayIntV1CompFixedEmpls';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1CompFixedEmpls entity.
   */
  static _keys = [
    'dataAreaId',
    'PositionId',
    'PersonnelNumber',
    'Plan',
    'EffectiveDate',
    'Action',
    'LineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
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
   * Action.
   */
  declare action: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pay Rate.
   */
  declare payRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Position.
   */
  declare position: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reference.
   */
  declare reference: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: HcmCompensationType | null;
  /**
   * Step.
   * @nullable
   */
  declare step?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Frequency.
   * @nullable
   */
  declare payFrequency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Compensation Level.
   */
  declare compensationLevel: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ref Point Setup Id.
   * @nullable
   */
  declare refPointSetupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Process Type.
   * @nullable
   */
  declare processType?: HrmCompProcessType | null;
  /**
   * Worker.
   */
  declare worker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Plan Id.
   * @nullable
   */
  declare planId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Compensation Level Id.
   * @nullable
   */
  declare compensationLevelId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PayIntV1CompFixedEmplsApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1CompFixedEmplsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  positionId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  plan: DeserializedType<T, 'Edm.String'>;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  action: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payRate: DeserializedType<T, 'Edm.Decimal'>;
  position: DeserializedType<T, 'Edm.Int64'>;
  reference: DeserializedType<T, 'Edm.Int64'>;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  type?: HcmCompensationType | null;
  step?: DeserializedType<T, 'Edm.String'> | null;
  payFrequency?: DeserializedType<T, 'Edm.String'> | null;
  compensationLevel: DeserializedType<T, 'Edm.Int64'>;
  refPointSetupId?: DeserializedType<T, 'Edm.String'> | null;
  processType?: HrmCompProcessType | null;
  worker: DeserializedType<T, 'Edm.Int64'>;
  planId?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  compensationLevelId?: DeserializedType<T, 'Edm.String'> | null;
}
