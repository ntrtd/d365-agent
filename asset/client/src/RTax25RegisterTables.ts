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
import type { RTax25RegisterTablesApi } from './RTax25RegisterTablesApi';
import { RTax25PeriodType } from './RTax25PeriodType';
import { NoYes } from './NoYes';
import { RTax25RegisterType } from './RTax25RegisterType';

/**
 * This class represents the entity "RTax25RegisterTables" of service "d365_metadata".
 */
export class RTax25RegisterTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RTax25RegisterTablesType<T>
{
  /**
   * Technical entity name for RTax25RegisterTables.
   */
  static override _entityName = 'RTax25RegisterTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RTax25RegisterTables entity.
   */
  static _keys = ['dataAreaId', 'RegisterCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Register Code.
   */
  declare registerCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Types.
   * @nullable
   */
  declare periodTypes?: RTax25PeriodType | null;
  /**
   * Expand.
   * @nullable
   */
  declare expand?: NoYes | null;
  /**
   * Register Type.
   * @nullable
   */
  declare registerType?: RTax25RegisterType | null;
  /**
   * Exclude.
   * @nullable
   */
  declare exclude?: NoYes | null;
  /**
   * Register Name.
   * @nullable
   */
  declare registerName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RTax25RegisterTablesApi<T>) {
    super(_entityApi);
  }
}

export interface RTax25RegisterTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  registerCode: DeserializedType<T, 'Edm.String'>;
  periodTypes?: RTax25PeriodType | null;
  expand?: NoYes | null;
  registerType?: RTax25RegisterType | null;
  exclude?: NoYes | null;
  registerName?: DeserializedType<T, 'Edm.String'> | null;
}
