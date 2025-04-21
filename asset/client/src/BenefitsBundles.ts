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
import type { BenefitsBundlesApi } from './BenefitsBundlesApi';
import { NoYes } from './NoYes';
import { BenefitsPlans, BenefitsPlansType } from './BenefitsPlans';

/**
 * This class represents the entity "BenefitsBundles" of service "d365_metadata".
 */
export class BenefitsBundles<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BenefitsBundlesType<T>
{
  /**
   * Technical entity name for BenefitsBundles.
   */
  static override _entityName = 'BenefitsBundles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsBundles entity.
   */
  static _keys = ['BundleId'];
  /**
   * Bundle Id.
   */
  declare bundleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Master.
   * @nullable
   */
  declare master?: NoYes | null;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link BenefitsPlans} entity.
   */
  declare benefitsPlan: BenefitsPlans<T>[];

  constructor(_entityApi: BenefitsBundlesApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsBundlesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  bundleId: DeserializedType<T, 'Edm.String'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  master?: NoYes | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  benefitsPlan: BenefitsPlansType<T>[];
}
