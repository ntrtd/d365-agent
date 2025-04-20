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
import type { RetailTerminalCustomFieldsApi } from './RetailTerminalCustomFieldsApi';
import { RetailTerminalCustomFieldTypeBase } from './RetailTerminalCustomFieldTypeBase';

/**
 * This class represents the entity "RetailTerminalCustomFields" of service "d365_metadata".
 */
export class RetailTerminalCustomFields<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTerminalCustomFieldsType<T>
{
  /**
   * Technical entity name for RetailTerminalCustomFields.
   */
  static override _entityName = 'RetailTerminalCustomFields';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTerminalCustomFields entity.
   */
  static _keys = ['Name', 'Type'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: RetailTerminalCustomFieldTypeBase | null;
  /**
   * Caption Text Id.
   */
  declare captionTextId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Type As Int.
   */
  declare typeAsInt: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: RetailTerminalCustomFieldsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTerminalCustomFieldsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  type?: RetailTerminalCustomFieldTypeBase | null;
  captionTextId: DeserializedType<T, 'Edm.Int32'>;
  typeAsInt: DeserializedType<T, 'Edm.Int32'>;
}
