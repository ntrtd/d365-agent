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
import type { CustomerRetentionTermSchedulesApi } from './CustomerRetentionTermSchedulesApi';
import { NoYes } from './NoYes';
import {
  CustomerRetentionTerms,
  CustomerRetentionTermsType
} from './CustomerRetentionTerms';

/**
 * This class represents the entity "CustomerRetentionTermSchedules" of service "d365_metadata".
 */
export class CustomerRetentionTermSchedules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerRetentionTermSchedulesType<T>
{
  /**
   * Technical entity name for CustomerRetentionTermSchedules.
   */
  static override _entityName = 'CustomerRetentionTermSchedules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerRetentionTermSchedules entity.
   */
  static _keys = ['dataAreaId', 'RetentionTerm', 'PercentComplete'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Retention Term.
   */
  declare retentionTerm: DeserializedType<T, 'Edm.String'>;
  /**
   * Percent Complete.
   */
  declare percentComplete: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Release.
   * @nullable
   */
  declare release?: NoYes | null;
  /**
   * Percent To Retain.
   */
  declare percentToRetain: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link CustomerRetentionTerms} entity.
   */
  declare customerRetentionTerm?: CustomerRetentionTerms<T> | null;

  constructor(_entityApi: CustomerRetentionTermSchedulesApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerRetentionTermSchedulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  retentionTerm: DeserializedType<T, 'Edm.String'>;
  percentComplete: DeserializedType<T, 'Edm.Decimal'>;
  release?: NoYes | null;
  percentToRetain: DeserializedType<T, 'Edm.Decimal'>;
  customerRetentionTerm?: CustomerRetentionTermsType<T> | null;
}
