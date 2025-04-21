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
import type { AddressFormatLinesApi } from './AddressFormatLinesApi';
import { NoYes } from './NoYes';
import { LogisticsAddressElement } from './LogisticsAddressElement';

/**
 * This class represents the entity "AddressFormatLines" of service "d365_metadata".
 */
export class AddressFormatLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AddressFormatLinesType<T>
{
  /**
   * Technical entity name for AddressFormatLines.
   */
  static override _entityName = 'AddressFormatLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AddressFormatLines entity.
   */
  static _keys = ['AddressFormat', 'LineNumber'];
  /**
   * Address Format.
   */
  declare addressFormat: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Separator.
   * @nullable
   */
  declare separator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Not Active.
   * @nullable
   */
  declare notActive?: NoYes | null;
  /**
   * Address Application Object.
   * @nullable
   */
  declare addressApplicationObject?: LogisticsAddressElement | null;
  /**
   * Data Entry Only.
   * @nullable
   */
  declare dataEntryOnly?: NoYes | null;
  /**
   * New Line.
   * @nullable
   */
  declare newLine?: NoYes | null;
  /**
   * Expand.
   * @nullable
   */
  declare expand?: NoYes | null;
  /**
   * Special.
   * @nullable
   */
  declare special?: NoYes | null;

  constructor(_entityApi: AddressFormatLinesApi<T>) {
    super(_entityApi);
  }
}

export interface AddressFormatLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  addressFormat: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  separator?: DeserializedType<T, 'Edm.String'> | null;
  notActive?: NoYes | null;
  addressApplicationObject?: LogisticsAddressElement | null;
  dataEntryOnly?: NoYes | null;
  newLine?: NoYes | null;
  expand?: NoYes | null;
  special?: NoYes | null;
}
