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
import type { BenefitsParametersV2Api } from './BenefitsParametersV2Api';
import { NoYes } from './NoYes';
import {
  BenefitsPayFrequencies,
  BenefitsPayFrequenciesType
} from './BenefitsPayFrequencies';
import { ReasonCodes, ReasonCodesType } from './ReasonCodes';

/**
 * This class represents the entity "BenefitsParametersV2" of service "d365_metadata".
 */
export class BenefitsParametersV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsParametersV2Type<T>
{
  /**
   * Technical entity name for BenefitsParametersV2.
   */
  static override _entityName = 'BenefitsParametersV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsParametersV2 entity.
   */
  static _keys = ['Key'];
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Default Rate Change Reason Code Id.
   * @nullable
   */
  declare defaultRateChangeReasonCodeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * New Hire Enrollment Period.
   */
  declare newHireEnrollmentPeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Default Pay Frequency Id.
   * @nullable
   */
  declare defaultPayFrequencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Reopen Reason Code Id.
   * @nullable
   */
  declare defaultReopenReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * New Hire Eligible.
   * @nullable
   */
  declare newHireEligible?: NoYes | null;
  /**
   * Default Life Event Reason Code Id.
   * @nullable
   */
  declare defaultLifeEventReasonCodeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Cancel Reason Code Id.
   * @nullable
   */
  declare defaultCancelReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Enrollment Reason Code Id.
   * @nullable
   */
  declare defaultEnrollmentReasonCodeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Life Events Enabled.
   * @nullable
   */
  declare lifeEventsEnabled?: NoYes | null;
  /**
   * Hide Legacy Benefit Forms.
   * @nullable
   */
  declare hideLegacyBenefitForms?: NoYes | null;
  /**
   * Benefits Verification For Ess.
   * @nullable
   */
  declare benefitsVerificationForEss?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BenefitsPayFrequencies} entity.
   */
  declare benefitsPayFrequency?: BenefitsPayFrequencies<T> | null;
  /**
   * One-to-one navigation property to the {@link ReasonCodes} entity.
   */
  declare reasonCode?: ReasonCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link ReasonCodes} entity.
   */
  declare defaultEnrollmentReasonCode?: ReasonCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link ReasonCodes} entity.
   */
  declare defaultCancelReasonCode?: ReasonCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link ReasonCodes} entity.
   */
  declare defaultLifeEventReasonCode?: ReasonCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link ReasonCodes} entity.
   */
  declare defaultReopenReasonCode?: ReasonCodes<T> | null;

  constructor(_entityApi: BenefitsParametersV2Api<T>) {
    super(_entityApi);
  }
}

export interface BenefitsParametersV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  key: DeserializedType<T, 'Edm.Int32'>;
  defaultRateChangeReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  newHireEnrollmentPeriod: DeserializedType<T, 'Edm.Int32'>;
  defaultPayFrequencyId?: DeserializedType<T, 'Edm.String'> | null;
  defaultReopenReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  newHireEligible?: NoYes | null;
  defaultLifeEventReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  defaultCancelReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  defaultEnrollmentReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  lifeEventsEnabled?: NoYes | null;
  hideLegacyBenefitForms?: NoYes | null;
  benefitsVerificationForEss?: DeserializedType<T, 'Edm.String'> | null;
  benefitsPayFrequency?: BenefitsPayFrequenciesType<T> | null;
  reasonCode?: ReasonCodesType<T> | null;
  defaultEnrollmentReasonCode?: ReasonCodesType<T> | null;
  defaultCancelReasonCode?: ReasonCodesType<T> | null;
  defaultLifeEventReasonCode?: ReasonCodesType<T> | null;
  defaultReopenReasonCode?: ReasonCodesType<T> | null;
}
