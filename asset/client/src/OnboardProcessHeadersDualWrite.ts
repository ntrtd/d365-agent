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
import type { OnboardProcessHeadersDualWriteApi } from './OnboardProcessHeadersDualWriteApi';
import { BaseWorkers, BaseWorkersType } from './BaseWorkers';
import { ProcessHeaders, ProcessHeadersType } from './ProcessHeaders';

/**
 * This class represents the entity "OnboardProcessHeadersDualWrite" of service "d365_metadata".
 */
export class OnboardProcessHeadersDualWrite<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OnboardProcessHeadersDualWriteType<T>
{
  /**
   * Technical entity name for OnboardProcessHeadersDualWrite.
   */
  static override _entityName = 'OnboardProcessHeadersDualWrite';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OnboardProcessHeadersDualWrite entity.
   */
  static _keys = ['ProcessId'];
  /**
   * Process Id.
   */
  declare processId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Onboarded Employee Personnel Number.
   * @nullable
   */
  declare onboardedEmployeePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Legal Entity Id.
   * @nullable
   */
  declare legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employment End Date.
   */
  declare employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Employment Start Date.
   */
  declare employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Employment Personnel Number.
   * @nullable
   */
  declare employmentPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BaseWorkers} entity.
   */
  declare worker?: BaseWorkers<T> | null;
  /**
   * One-to-one navigation property to the {@link ProcessHeaders} entity.
   */
  declare processes?: ProcessHeaders<T> | null;

  constructor(_entityApi: OnboardProcessHeadersDualWriteApi<T>) {
    super(_entityApi);
  }
}

export interface OnboardProcessHeadersDualWriteType<
  T extends DeSerializers = DefaultDeSerializers
> {
  processId: DeserializedType<T, 'Edm.Guid'>;
  onboardedEmployeePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  employmentPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  worker?: BaseWorkersType<T> | null;
  processes?: ProcessHeadersType<T> | null;
}
