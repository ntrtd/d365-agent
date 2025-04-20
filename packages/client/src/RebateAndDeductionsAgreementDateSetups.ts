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
import type { RebateAndDeductionsAgreementDateSetupsApi } from './RebateAndDeductionsAgreementDateSetupsApi';
import { TamRebateGuaranteePaid } from './TamRebateGuaranteePaid';
import { NoYes } from './NoYes';
import { WeekDays } from './WeekDays';
import { TamRebatePeriodCode } from './TamRebatePeriodCode';
import { ProjectPeriods, ProjectPeriodsType } from './ProjectPeriods';
import {
  RebateAndDeductionAgreementHeaders,
  RebateAndDeductionAgreementHeadersType
} from './RebateAndDeductionAgreementHeaders';
import {
  GupRebateAndDeductionsAgreementDateSetupCriterions,
  GupRebateAndDeductionsAgreementDateSetupCriterionsType
} from './GupRebateAndDeductionsAgreementDateSetupCriterions';

/**
 * This class represents the entity "RebateAndDeductionsAgreementDateSetups" of service "d365_metadata".
 */
export class RebateAndDeductionsAgreementDateSetups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RebateAndDeductionsAgreementDateSetupsType<T>
{
  /**
   * Technical entity name for RebateAndDeductionsAgreementDateSetups.
   */
  static override _entityName = 'RebateAndDeductionsAgreementDateSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RebateAndDeductionsAgreementDateSetups entity.
   */
  static _keys = ['AgreementNumber', 'LineNumber'];
  /**
   * Agreement Number.
   */
  declare agreementNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Provision Period Recurrence.
   */
  declare provisionPeriodRecurrence: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Guarantee Payment Rule.
   * @nullable
   */
  declare guaranteePaymentRule?: TamRebateGuaranteePaid | null;
  /**
   * Guarantee Period Recurrence.
   */
  declare guaranteePeriodRecurrence: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Will Source Document Posting Calculate Provision.
   * @nullable
   */
  declare willSourceDocumentPostingCalculateProvision?: NoYes | null;
  /**
   * Custom Provision Period Id.
   * @nullable
   */
  declare customProvisionPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agreement Valid From Date.
   */
  declare agreementValidFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Provision Week Day Period Start.
   * @nullable
   */
  declare provisionWeekDayPeriodStart?: WeekDays | null;
  /**
   * Claim Period Recurrence.
   */
  declare claimPeriodRecurrence: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Custom Claim Period Id.
   * @nullable
   */
  declare customClaimPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Guarantee Amount.
   */
  declare minimumGuaranteeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Provision Period Frequency.
   * @nullable
   */
  declare provisionPeriodFrequency?: TamRebatePeriodCode | null;
  /**
   * Claim Period Frequency.
   * @nullable
   */
  declare claimPeriodFrequency?: TamRebatePeriodCode | null;
  /**
   * Agreement Valid To Date.
   */
  declare agreementValidToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link ProjectPeriods} entity.
   */
  declare customRebateClaimPeriod?: ProjectPeriods<T> | null;
  /**
   * One-to-one navigation property to the {@link RebateAndDeductionAgreementHeaders} entity.
   */
  declare rebateAndDeductionsAgreementHeader?: RebateAndDeductionAgreementHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link ProjectPeriods} entity.
   */
  declare customRebateProvisionPeriod?: ProjectPeriods<T> | null;
  /**
   * One-to-many navigation property to the {@link GupRebateAndDeductionsAgreementDateSetupCriterions} entity.
   */
  declare rebateAndDeductionsAgreementDateSetupCriteria: GupRebateAndDeductionsAgreementDateSetupCriterions<T>[];

  constructor(_entityApi: RebateAndDeductionsAgreementDateSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface RebateAndDeductionsAgreementDateSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  agreementNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  provisionPeriodRecurrence: DeserializedType<T, 'Edm.Int32'>;
  guaranteePaymentRule?: TamRebateGuaranteePaid | null;
  guaranteePeriodRecurrence: DeserializedType<T, 'Edm.Int32'>;
  willSourceDocumentPostingCalculateProvision?: NoYes | null;
  customProvisionPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  agreementValidFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  provisionWeekDayPeriodStart?: WeekDays | null;
  claimPeriodRecurrence: DeserializedType<T, 'Edm.Int32'>;
  customClaimPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  minimumGuaranteeAmount: DeserializedType<T, 'Edm.Decimal'>;
  provisionPeriodFrequency?: TamRebatePeriodCode | null;
  claimPeriodFrequency?: TamRebatePeriodCode | null;
  agreementValidToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  customRebateClaimPeriod?: ProjectPeriodsType<T> | null;
  rebateAndDeductionsAgreementHeader?: RebateAndDeductionAgreementHeadersType<T> | null;
  customRebateProvisionPeriod?: ProjectPeriodsType<T> | null;
  rebateAndDeductionsAgreementDateSetupCriteria: GupRebateAndDeductionsAgreementDateSetupCriterionsType<T>[];
}
