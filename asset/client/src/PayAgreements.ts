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
import type { PayAgreementsApi } from './PayAgreementsApi';
import { JmgRoundTypeEnum } from './JmgRoundTypeEnum';
import { PayAgreementLines, PayAgreementLinesType } from './PayAgreementLines';
import {
  TimeAndAttendanceTimeProfiles,
  TimeAndAttendanceTimeProfilesType
} from './TimeAndAttendanceTimeProfiles';

/**
 * This class represents the entity "PayAgreements" of service "d365_metadata".
 */
export class PayAgreements<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PayAgreementsType<T>
{
  /**
   * Technical entity name for PayAgreements.
   */
  static override _entityName = 'PayAgreements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayAgreements entity.
   */
  static _keys = ['dataAreaId', 'PayAgreementCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Pay Agreement Code.
   */
  declare payAgreementCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Overtime Rounding Type.
   * @nullable
   */
  declare overtimeRoundingType?: JmgRoundTypeEnum | null;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Overtime Rounding Value.
   * @nullable
   */
  declare overtimeRoundingValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minutes To Deduct When Late.
   * @nullable
   */
  declare minutesToDeductWhenLate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link PayAgreementLines} entity.
   */
  declare payAgreementLines: PayAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link TimeAndAttendanceTimeProfiles} entity.
   */
  declare timeAndAttendanceTimeProfiles: TimeAndAttendanceTimeProfiles<T>[];

  constructor(_entityApi: PayAgreementsApi<T>) {
    super(_entityApi);
  }
}

export interface PayAgreementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  payAgreementCode: DeserializedType<T, 'Edm.String'>;
  overtimeRoundingType?: JmgRoundTypeEnum | null;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  overtimeRoundingValue?: DeserializedType<T, 'Edm.String'> | null;
  minutesToDeductWhenLate?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payAgreementLines: PayAgreementLinesType<T>[];
  timeAndAttendanceTimeProfiles: TimeAndAttendanceTimeProfilesType<T>[];
}
