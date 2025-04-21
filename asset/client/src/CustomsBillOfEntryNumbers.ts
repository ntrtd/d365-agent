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
import type { CustomsBillOfEntryNumbersApi } from './CustomsBillOfEntryNumbersApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CustomsBillOfEntryNumbers" of service "d365_metadata".
 */
export class CustomsBillOfEntryNumbers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomsBillOfEntryNumbersType<T>
{
  /**
   * Technical entity name for CustomsBillOfEntryNumbers.
   */
  static override _entityName = 'CustomsBillOfEntryNumbers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomsBillOfEntryNumbers entity.
   */
  static _keys = ['dataAreaId', 'BillOfEntry'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Bill Of Entry.
   */
  declare billOfEntry: DeserializedType<T, 'Edm.String'>;
  /**
   * Closed.
   * @nullable
   */
  declare closed?: NoYes | null;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CustomsBillOfEntryNumbersApi<T>) {
    super(_entityApi);
  }
}

export interface CustomsBillOfEntryNumbersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  billOfEntry: DeserializedType<T, 'Edm.String'>;
  closed?: NoYes | null;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
