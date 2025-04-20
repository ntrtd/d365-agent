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
import type { BenefitEarningBasisApi } from './BenefitEarningBasisApi';
import { Benefits, BenefitsType } from './Benefits';

/**
 * This class represents the entity "BenefitEarningBasis" of service "d365_metadata".
 */
export class BenefitEarningBasis<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BenefitEarningBasisType<T>
{
  /**
   * Technical entity name for BenefitEarningBasis.
   */
  static override _entityName = 'BenefitEarningBasis';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitEarningBasis entity.
   */
  static _keys = [
    'EarningCodeId',
    'BenefitPlanId',
    'BenefitOptionId',
    'Effective',
    'Expiration'
  ];
  /**
   * Earning Code Id.
   */
  declare earningCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Benefit Plan Id.
   */
  declare benefitPlanId: DeserializedType<T, 'Edm.String'>;
  /**
   * Benefit Option Id.
   */
  declare benefitOptionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Effective.
   */
  declare effective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Expiration.
   */
  declare expiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Benefit Id.
   * @nullable
   */
  declare benefitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Benefits} entity.
   */
  declare benefit?: Benefits<T> | null;

  constructor(_entityApi: BenefitEarningBasisApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitEarningBasisType<
  T extends DeSerializers = DefaultDeSerializers
> {
  earningCodeId: DeserializedType<T, 'Edm.String'>;
  benefitPlanId: DeserializedType<T, 'Edm.String'>;
  benefitOptionId: DeserializedType<T, 'Edm.String'>;
  effective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  expiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  benefitId?: DeserializedType<T, 'Edm.String'> | null;
  benefit?: BenefitsType<T> | null;
}
