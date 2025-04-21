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
import type { HcmFeatureManagementsApi } from './HcmFeatureManagementsApi';
import { FeatureModuleV0 } from './FeatureModuleV0';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "HcmFeatureManagements" of service "d365_metadata".
 */
export class HcmFeatureManagements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements HcmFeatureManagementsType<T>
{
  /**
   * Technical entity name for HcmFeatureManagements.
   */
  static override _entityName = 'HcmFeatureManagements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HcmFeatureManagements entity.
   */
  static _keys = ['FeatureState_Name'];
  /**
   * Feature State Name.
   */
  declare featureStateName: DeserializedType<T, 'Edm.String'>;
  /**
   * Module.
   * @nullable
   */
  declare module?: FeatureModuleV0 | null;
  /**
   * Feature Name.
   * @nullable
   */
  declare featureName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Feature State Is Enabled.
   * @nullable
   */
  declare featureStateIsEnabled?: NoYes | null;

  constructor(_entityApi: HcmFeatureManagementsApi<T>) {
    super(_entityApi);
  }
}

export interface HcmFeatureManagementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  featureStateName: DeserializedType<T, 'Edm.String'>;
  module?: FeatureModuleV0 | null;
  featureName?: DeserializedType<T, 'Edm.String'> | null;
  featureStateIsEnabled?: NoYes | null;
}
