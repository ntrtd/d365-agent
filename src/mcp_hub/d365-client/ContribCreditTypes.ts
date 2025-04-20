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
import type { ContribCreditTypesApi } from './ContribCreditTypesApi';

/**
 * This class represents the entity "ContribCreditTypes" of service "d365_metadata".
 */
export class ContribCreditTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ContribCreditTypesType<T>
{
  /**
   * Technical entity name for ContribCreditTypes.
   */
  static override _entityName = 'ContribCreditTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ContribCreditTypes entity.
   */
  static _keys = ['CreditType'];
  /**
   * Credit Type.
   */
  declare creditType: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To Date.
   */
  declare validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid From Date.
   */
  declare validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: ContribCreditTypesApi<T>) {
    super(_entityApi);
  }
}

export interface ContribCreditTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  creditType: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
