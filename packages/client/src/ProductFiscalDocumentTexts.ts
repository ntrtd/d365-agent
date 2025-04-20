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
import type { ProductFiscalDocumentTextsApi } from './ProductFiscalDocumentTextsApi';
import { NoYes } from './NoYes';
import { DocuRestriction } from './DocuRestriction';
import { FiscalDocumentTextTypeBr } from './FiscalDocumentTextTypeBr';

/**
 * This class represents the entity "ProductFiscalDocumentTexts" of service "d365_metadata".
 */
export class ProductFiscalDocumentTexts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductFiscalDocumentTextsType<T>
{
  /**
   * Technical entity name for ProductFiscalDocumentTexts.
   */
  static override _entityName = 'ProductFiscalDocumentTexts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductFiscalDocumentTexts entity.
   */
  static _keys = ['dataAreaId', 'Item', 'FiscalDocumentText'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item.
   */
  declare item: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Document Text.
   */
  declare fiscalDocumentText: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Information.
   * @nullable
   */
  declare fiscalInformation?: NoYes | null;
  /**
   * Restriction.
   * @nullable
   */
  declare restriction?: DocuRestriction | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: FiscalDocumentTextTypeBr | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProductFiscalDocumentTextsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductFiscalDocumentTextsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  item: DeserializedType<T, 'Edm.String'>;
  fiscalDocumentText: DeserializedType<T, 'Edm.String'>;
  fiscalInformation?: NoYes | null;
  restriction?: DocuRestriction | null;
  type?: FiscalDocumentTextTypeBr | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
}
