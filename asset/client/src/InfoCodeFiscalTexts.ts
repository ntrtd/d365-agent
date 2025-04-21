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
import type { InfoCodeFiscalTextsApi } from './InfoCodeFiscalTextsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "InfoCodeFiscalTexts" of service "d365_metadata".
 */
export class InfoCodeFiscalTexts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InfoCodeFiscalTextsType<T>
{
  /**
   * Technical entity name for InfoCodeFiscalTexts.
   */
  static override _entityName = 'InfoCodeFiscalTexts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InfoCodeFiscalTexts entity.
   */
  static _keys = [
    'dataAreaId',
    'InfoCodeNumber',
    'SubcodeNumber',
    'ConnectorGroupNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Info Code Number.
   */
  declare infoCodeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Subcode Number.
   */
  declare subcodeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Connector Group Number.
   */
  declare connectorGroupNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Print User Input On Fiscal Receipt.
   * @nullable
   */
  declare printUserInputOnFiscalReceipt?: NoYes | null;
  /**
   * Text For Fiscal Receipt.
   * @nullable
   */
  declare textForFiscalReceipt?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: InfoCodeFiscalTextsApi<T>) {
    super(_entityApi);
  }
}

export interface InfoCodeFiscalTextsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  infoCodeNumber: DeserializedType<T, 'Edm.String'>;
  subcodeNumber: DeserializedType<T, 'Edm.String'>;
  connectorGroupNumber: DeserializedType<T, 'Edm.String'>;
  printUserInputOnFiscalReceipt?: NoYes | null;
  textForFiscalReceipt?: DeserializedType<T, 'Edm.String'> | null;
}
