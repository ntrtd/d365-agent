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
import type { RevenueSources_BrApi } from './RevenueSources_BrApi';
import { FbRevenueSourceTableTypeBr } from './FbRevenueSourceTableTypeBr';

/**
 * This class represents the entity "RevenueSources_BR" of service "d365_metadata".
 */
export class RevenueSources_Br<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RevenueSources_BrType<T>
{
  /**
   * Technical entity name for RevenueSources_Br.
   */
  static override _entityName = 'RevenueSources_BR';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RevenueSources_Br entity.
   */
  static _keys = ['dataAreaId', 'Code', 'TableType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Table Type.
   * @nullable
   */
  declare tableType?: FbRevenueSourceTableTypeBr | null;
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
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: RevenueSources_BrApi<T>) {
    super(_entityApi);
  }
}

export interface RevenueSources_BrType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  tableType?: FbRevenueSourceTableTypeBr | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
