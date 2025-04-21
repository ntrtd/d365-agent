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
import type { ProjCfdaNumbersApi } from './ProjCfdaNumbersApi';

/**
 * This class represents the entity "ProjCFDANumbers" of service "d365_metadata".
 */
export class ProjCfdaNumbers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjCfdaNumbersType<T>
{
  /**
   * Technical entity name for ProjCfdaNumbers.
   */
  static override _entityName = 'ProjCFDANumbers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjCfdaNumbers entity.
   */
  static _keys = ['dataAreaId', 'CFDAID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cfdaid.
   */
  declare cfdaid: DeserializedType<T, 'Edm.String'>;
  /**
   * Cfda Cluster Name.
   * @nullable
   */
  declare cfdaClusterName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProjCfdaNumbersApi<T>) {
    super(_entityApi);
  }
}

export interface ProjCfdaNumbersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  cfdaid: DeserializedType<T, 'Edm.String'>;
  cfdaClusterName?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
