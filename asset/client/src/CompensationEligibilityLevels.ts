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
import type { CompensationEligibilityLevelsApi } from './CompensationEligibilityLevelsApi';

/**
 * This class represents the entity "CompensationEligibilityLevels" of service "d365_metadata".
 */
export class CompensationEligibilityLevels<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CompensationEligibilityLevelsType<T>
{
  /**
   * Technical entity name for CompensationEligibilityLevels.
   */
  static override _entityName = 'CompensationEligibilityLevels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CompensationEligibilityLevels entity.
   */
  static _keys = ['dataAreaId', 'EligibilityId', 'CompensationLevelId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Eligibility Id.
   */
  declare eligibilityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Compensation Level Id.
   */
  declare compensationLevelId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: CompensationEligibilityLevelsApi<T>) {
    super(_entityApi);
  }
}

export interface CompensationEligibilityLevelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  eligibilityId: DeserializedType<T, 'Edm.String'>;
  compensationLevelId: DeserializedType<T, 'Edm.String'>;
}
