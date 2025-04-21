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
import type { UnrealizedDocuSetTablesApi } from './UnrealizedDocuSetTablesApi';
import { TaxUnrealizedDocuPrintLocation } from './TaxUnrealizedDocuPrintLocation';
import { TaxUnrealizedDocuProdType } from './TaxUnrealizedDocuProdType';

/**
 * This class represents the entity "UnrealizedDocuSetTables" of service "d365_metadata".
 */
export class UnrealizedDocuSetTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements UnrealizedDocuSetTablesType<T>
{
  /**
   * Technical entity name for UnrealizedDocuSetTables.
   */
  static override _entityName = 'UnrealizedDocuSetTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the UnrealizedDocuSetTables entity.
   */
  static _keys = ['dataAreaId', 'Code', 'LineId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Id.
   */
  declare lineId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location.
   * @nullable
   */
  declare location?: TaxUnrealizedDocuPrintLocation | null;
  /**
   * Print Header.
   * @nullable
   */
  declare printHeader?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prod Type.
   * @nullable
   */
  declare prodType?: TaxUnrealizedDocuProdType | null;

  constructor(_entityApi: UnrealizedDocuSetTablesApi<T>) {
    super(_entityApi);
  }
}

export interface UnrealizedDocuSetTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  lineId: DeserializedType<T, 'Edm.Guid'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  location?: TaxUnrealizedDocuPrintLocation | null;
  printHeader?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  prodType?: TaxUnrealizedDocuProdType | null;
}
