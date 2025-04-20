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
import type { BenefitsParametersApi } from './BenefitsParametersApi';
import { NoYes } from './NoYes';
import {
  BenefitsPayFrequencies,
  BenefitsPayFrequenciesType
} from './BenefitsPayFrequencies';

/**
 * This class represents the entity "BenefitsParameters" of service "d365_metadata".
 */
export class BenefitsParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BenefitsParametersType<T>
{
  /**
   * Technical entity name for BenefitsParameters.
   */
  static override _entityName = 'BenefitsParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsParameters entity.
   */
  static _keys = ['Key'];
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Life Event Reason Code Id.
   * @nullable
   */
  declare lifeEventReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hide Legacy Benefit Forms.
   * @nullable
   */
  declare hideLegacyBenefitForms?: NoYes | null;
  /**
   * New Hire Enrollment Period.
   */
  declare newHireEnrollmentPeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Enrollment Reason Code Id.
   * @nullable
   */
  declare enrollmentReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * New Hire Eligible.
   * @nullable
   */
  declare newHireEligible?: NoYes | null;
  /**
   * Life Events Enabled.
   * @nullable
   */
  declare lifeEventsEnabled?: NoYes | null;
  /**
   * Benefits Verification For Ess.
   * @nullable
   */
  declare benefitsVerificationForEss?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rate Change Reason Code Id.
   * @nullable
   */
  declare rateChangeReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cancellation Reason Code Id.
   * @nullable
   */
  declare cancellationReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Auto Select Designees For Ess.
   * @nullable
   */
  declare autoSelectDesigneesForEss?: NoYes | null;
  /**
   * Default Pay Frequency Id.
   * @nullable
   */
  declare defaultPayFrequencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Re Open Reason Code Id.
   * @nullable
   */
  declare reOpenReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BenefitsPayFrequencies} entity.
   */
  declare benefitsPayFrequency?: BenefitsPayFrequencies<T> | null;

  constructor(_entityApi: BenefitsParametersApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  key: DeserializedType<T, 'Edm.Int32'>;
  lifeEventReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  hideLegacyBenefitForms?: NoYes | null;
  newHireEnrollmentPeriod: DeserializedType<T, 'Edm.Int32'>;
  enrollmentReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  newHireEligible?: NoYes | null;
  lifeEventsEnabled?: NoYes | null;
  benefitsVerificationForEss?: DeserializedType<T, 'Edm.String'> | null;
  rateChangeReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  cancellationReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  autoSelectDesigneesForEss?: NoYes | null;
  defaultPayFrequencyId?: DeserializedType<T, 'Edm.String'> | null;
  reOpenReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  benefitsPayFrequency?: BenefitsPayFrequenciesType<T> | null;
}
