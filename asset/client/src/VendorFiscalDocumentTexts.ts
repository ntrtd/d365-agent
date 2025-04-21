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
import type { VendorFiscalDocumentTextsApi } from './VendorFiscalDocumentTextsApi';
import { NoYes } from './NoYes';
import { DocuRestriction } from './DocuRestriction';
import { FiscalDocumentTextTypeBr } from './FiscalDocumentTextTypeBr';

/**
 * This class represents the entity "VendorFiscalDocumentTexts" of service "d365_metadata".
 */
export class VendorFiscalDocumentTexts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorFiscalDocumentTextsType<T>
{
  /**
   * Technical entity name for VendorFiscalDocumentTexts.
   */
  static override _entityName = 'VendorFiscalDocumentTexts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorFiscalDocumentTexts entity.
   */
  static _keys = ['dataAreaId', 'Vendor', 'FiscalDocumentText'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor.
   */
  declare vendor: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: VendorFiscalDocumentTextsApi<T>) {
    super(_entityApi);
  }
}

export interface VendorFiscalDocumentTextsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vendor: DeserializedType<T, 'Edm.String'>;
  fiscalDocumentText: DeserializedType<T, 'Edm.String'>;
  fiscalInformation?: NoYes | null;
  restriction?: DocuRestriction | null;
  type?: FiscalDocumentTextTypeBr | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
}
