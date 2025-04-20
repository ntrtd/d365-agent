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
import type { BenefitExternalReportingsApi } from './BenefitExternalReportingsApi';
import { PayrollW2BoxNumber } from './PayrollW2BoxNumber';
import { BenefitPlans, BenefitPlansType } from './BenefitPlans';
import {
  AddressCountryRegions,
  AddressCountryRegionsType
} from './AddressCountryRegions';

/**
 * This class represents the entity "BenefitExternalReportings" of service "d365_metadata".
 */
export class BenefitExternalReportings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitExternalReportingsType<T>
{
  /**
   * Technical entity name for BenefitExternalReportings.
   */
  static override _entityName = 'BenefitExternalReportings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitExternalReportings entity.
   */
  static _keys = ['BenefitPlanID', 'ValidFrom', 'ValidTo', 'CountryRegionId'];
  /**
   * Benefit Plan Id.
   */
  declare benefitPlanId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * W 2 Box Number Contribution.
   * @nullable
   */
  declare w2BoxNumberContribution?: PayrollW2BoxNumber | null;
  /**
   * W 2 Box Number.
   * @nullable
   */
  declare w2BoxNumber?: PayrollW2BoxNumber | null;
  /**
   * W 2 Box Label Contribution.
   * @nullable
   */
  declare w2BoxLabelContribution?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * W 2 Box Label.
   * @nullable
   */
  declare w2BoxLabel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BenefitPlans} entity.
   */
  declare benefitPlan?: BenefitPlans<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressCountryRegions} entity.
   */
  declare addressCountryRegion?: AddressCountryRegions<T> | null;

  constructor(_entityApi: BenefitExternalReportingsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitExternalReportingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  benefitPlanId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  w2BoxNumberContribution?: PayrollW2BoxNumber | null;
  w2BoxNumber?: PayrollW2BoxNumber | null;
  w2BoxLabelContribution?: DeserializedType<T, 'Edm.String'> | null;
  w2BoxLabel?: DeserializedType<T, 'Edm.String'> | null;
  benefitPlan?: BenefitPlansType<T> | null;
  addressCountryRegion?: AddressCountryRegionsType<T> | null;
}
