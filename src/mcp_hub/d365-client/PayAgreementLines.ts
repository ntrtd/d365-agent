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
import type { PayAgreementLinesApi } from './PayAgreementLinesApi';
import { JmgRoundTypeEnum } from './JmgRoundTypeEnum';
import { NoYes } from './NoYes';
import { DayMonth } from './DayMonth';
import { JmgProfileStartCode } from './JmgProfileStartCode';
import { JmgDayIdEnum } from './JmgDayIdEnum';
import { JmgPaySpecTypeEnum } from './JmgPaySpecTypeEnum';
import { Operations, OperationsType } from './Operations';
import { PayAgreements, PayAgreementsType } from './PayAgreements';

/**
 * This class represents the entity "PayAgreementLines" of service "d365_metadata".
 */
export class PayAgreementLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PayAgreementLinesType<T>
{
  /**
   * Technical entity name for PayAgreementLines.
   */
  static override _entityName = 'PayAgreementLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayAgreementLines entity.
   */
  static _keys = ['dataAreaId', 'RecordId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Route Operation Id.
   * @nullable
   */
  declare routeOperationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Quantity Rounding Type.
   * @nullable
   */
  declare payQuantityRoundingType?: JmgRoundTypeEnum | null;
  /**
   * On Call Indirect Time And Attendance Activity Id.
   * @nullable
   */
  declare onCallIndirectTimeAndAttendanceActivityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Secondary Pay Type Code.
   * @nullable
   */
  declare secondaryPayTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Inverted Sign.
   * @nullable
   */
  declare isInvertedSign?: NoYes | null;
  /**
   * Will Cancel Payment.
   * @nullable
   */
  declare willCancelPayment?: NoYes | null;
  /**
   * From Agreement Date.
   */
  declare fromAgreementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Absence Code.
   * @nullable
   */
  declare absenceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maximum Seniority Unit.
   * @nullable
   */
  declare maximumSeniorityUnit?: DayMonth | null;
  /**
   * Profile Start Code.
   * @nullable
   */
  declare profileStartCode?: JmgProfileStartCode | null;
  /**
   * To Agreement Date.
   */
  declare toAgreementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Pay Quantity Fixed.
   * @nullable
   */
  declare isPayQuantityFixed?: NoYes | null;
  /**
   * Primary Pay Quantity Factor.
   */
  declare primaryPayQuantityFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Time Profile Id.
   * @nullable
   */
  declare timeProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Pay Type Code.
   * @nullable
   */
  declare primaryPayTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Week Day.
   * @nullable
   */
  declare weekDay?: JmgDayIdEnum | null;
  /**
   * Is Paid Time Required.
   * @nullable
   */
  declare isPaidTimeRequired?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Required Certificate Type.
   * @nullable
   */
  declare requiredCertificateType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Required Skill Id.
   * @nullable
   */
  declare requiredSkillId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Agreement Code.
   * @nullable
   */
  declare payAgreementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Agreement Exception Id.
   * @nullable
   */
  declare payAgreementExceptionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Seniority.
   */
  declare minimumSeniority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Round Off Seconds.
   */
  declare roundOffSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Maximum Seniority.
   */
  declare maximumSeniority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Absence Indirect Time And Attendance Activity Id.
   * @nullable
   */
  declare absenceIndirectTimeAndAttendanceActivityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Constant Pay Quantity.
   */
  declare constantPayQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Activity Number.
   * @nullable
   */
  declare projectActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Seniority Unit.
   * @nullable
   */
  declare minimumSeniorityUnit?: DayMonth | null;
  /**
   * Will Round Off Quantity Before Multiplying Factor.
   * @nullable
   */
  declare willRoundOffQuantityBeforeMultiplyingFactor?: NoYes | null;
  /**
   * To Agreement Time.
   */
  declare toAgreementTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * From Agreement Time.
   */
  declare fromAgreementTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Switch Code Indirect Time And Attendance Activity Id.
   * @nullable
   */
  declare switchCodeIndirectTimeAndAttendanceActivityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Secondary Pay Quantity Factor.
   */
  declare secondaryPayQuantityFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wage Type.
   * @nullable
   */
  declare wageType?: JmgPaySpecTypeEnum | null;
  /**
   * Pay Agreement Count Unit Id.
   * @nullable
   */
  declare payAgreementCountUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Operations} entity.
   */
  declare routeOperation?: Operations<T> | null;
  /**
   * One-to-one navigation property to the {@link PayAgreements} entity.
   */
  declare payAgreement?: PayAgreements<T> | null;

  constructor(_entityApi: PayAgreementLinesApi<T>) {
    super(_entityApi);
  }
}

export interface PayAgreementLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  recordId: DeserializedType<T, 'Edm.Int64'>;
  routeOperationId?: DeserializedType<T, 'Edm.String'> | null;
  payQuantityRoundingType?: JmgRoundTypeEnum | null;
  onCallIndirectTimeAndAttendanceActivityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  secondaryPayTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  isInvertedSign?: NoYes | null;
  willCancelPayment?: NoYes | null;
  fromAgreementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  absenceCode?: DeserializedType<T, 'Edm.String'> | null;
  maximumSeniorityUnit?: DayMonth | null;
  profileStartCode?: JmgProfileStartCode | null;
  toAgreementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isPayQuantityFixed?: NoYes | null;
  primaryPayQuantityFactor: DeserializedType<T, 'Edm.Decimal'>;
  timeProfileId?: DeserializedType<T, 'Edm.String'> | null;
  primaryPayTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  weekDay?: JmgDayIdEnum | null;
  isPaidTimeRequired?: DeserializedType<T, 'Edm.String'> | null;
  requiredCertificateType?: DeserializedType<T, 'Edm.String'> | null;
  requiredSkillId?: DeserializedType<T, 'Edm.String'> | null;
  payAgreementCode?: DeserializedType<T, 'Edm.String'> | null;
  payAgreementExceptionId?: DeserializedType<T, 'Edm.String'> | null;
  minimumSeniority: DeserializedType<T, 'Edm.Int32'>;
  roundOffSeconds: DeserializedType<T, 'Edm.Int32'>;
  maximumSeniority: DeserializedType<T, 'Edm.Int32'>;
  absenceIndirectTimeAndAttendanceActivityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  constantPayQuantity: DeserializedType<T, 'Edm.Decimal'>;
  projectActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  minimumSeniorityUnit?: DayMonth | null;
  willRoundOffQuantityBeforeMultiplyingFactor?: NoYes | null;
  toAgreementTime: DeserializedType<T, 'Edm.Int32'>;
  fromAgreementTime: DeserializedType<T, 'Edm.Int32'>;
  switchCodeIndirectTimeAndAttendanceActivityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  secondaryPayQuantityFactor: DeserializedType<T, 'Edm.Decimal'>;
  wageType?: JmgPaySpecTypeEnum | null;
  payAgreementCountUnitId?: DeserializedType<T, 'Edm.String'> | null;
  routeOperation?: OperationsType<T> | null;
  payAgreement?: PayAgreementsType<T> | null;
}
