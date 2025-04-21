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
import type { CustomOfficesApi } from './CustomOfficesApi';

/**
 * This class represents the entity "CustomOffices" of service "d365_metadata".
 */
export class CustomOffices<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomOfficesType<T>
{
  /**
   * Technical entity name for CustomOffices.
   */
  static override _entityName = 'CustomOffices';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomOffices entity.
   */
  static _keys = ['dataAreaId', 'AgentAccountNumber', 'OfficeCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Agent Account Number.
   */
  declare agentAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Office Code.
   */
  declare officeCode: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: CustomOfficesApi<T>) {
    super(_entityApi);
  }
}

export interface CustomOfficesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  agentAccountNumber: DeserializedType<T, 'Edm.String'>;
  officeCode: DeserializedType<T, 'Edm.String'>;
}
