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
import type { BenefitsCreditsApi } from './BenefitsCreditsApi';

/**
 * This class represents the entity "BenefitsCredits" of service "d365_metadata".
 */
export class BenefitsCredits<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BenefitsCreditsType<T>
{
  /**
   * Technical entity name for BenefitsCredits.
   */
  static override _entityName = 'BenefitsCredits';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsCredits entity.
   */
  static _keys = ['dataAreaId', 'BenefitCreditId', 'ValidTo', 'ValidFrom'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Benefit Credit Id.
   */
  declare benefitCreditId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BenefitsCreditsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsCreditsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  benefitCreditId: DeserializedType<T, 'Edm.String'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
