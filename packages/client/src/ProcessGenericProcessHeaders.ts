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
import type { ProcessGenericProcessHeadersApi } from './ProcessGenericProcessHeadersApi';
import { BusinessProcessGenericSubtype } from './BusinessProcessGenericSubtype';

/**
 * This class represents the entity "ProcessGenericProcessHeaders" of service "d365_metadata".
 */
export class ProcessGenericProcessHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProcessGenericProcessHeadersType<T>
{
  /**
   * Technical entity name for ProcessGenericProcessHeaders.
   */
  static override _entityName = 'ProcessGenericProcessHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProcessGenericProcessHeaders entity.
   */
  static _keys = ['ProcessHeader_ProcessId'];
  /**
   * Process Header Process Id.
   */
  declare processHeaderProcessId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Generic Subtype.
   * @nullable
   */
  declare genericSubtype?: BusinessProcessGenericSubtype | null;

  constructor(_entityApi: ProcessGenericProcessHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface ProcessGenericProcessHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  processHeaderProcessId: DeserializedType<T, 'Edm.Guid'>;
  genericSubtype?: BusinessProcessGenericSubtype | null;
}
