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
import type { BarcodeInstructionsLanguageTxtsApi } from './BarcodeInstructionsLanguageTxtsApi';

/**
 * This class represents the entity "BarcodeInstructionsLanguageTxts" of service "d365_metadata".
 */
export class BarcodeInstructionsLanguageTxts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BarcodeInstructionsLanguageTxtsType<T>
{
  /**
   * Technical entity name for BarcodeInstructionsLanguageTxts.
   */
  static override _entityName = 'BarcodeInstructionsLanguageTxts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BarcodeInstructionsLanguageTxts entity.
   */
  static _keys = ['dataAreaId', 'Language'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Language.
   */
  declare language: DeserializedType<T, 'Edm.String'>;
  /**
   * Text.
   * @nullable
   */
  declare text?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BarcodeInstructionsLanguageTxtsApi<T>) {
    super(_entityApi);
  }
}

export interface BarcodeInstructionsLanguageTxtsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  language: DeserializedType<T, 'Edm.String'>;
  text?: DeserializedType<T, 'Edm.String'> | null;
}
