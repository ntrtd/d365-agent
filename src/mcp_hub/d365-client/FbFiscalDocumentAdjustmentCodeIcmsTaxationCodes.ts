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
import type { FbFiscalDocumentAdjustmentCodeIcmsTaxationCodesApi } from './FbFiscalDocumentAdjustmentCodeIcmsTaxationCodesApi';

/**
 * This class represents the entity "FBFiscalDocumentAdjustmentCodeICMSTaxationCodes" of service "d365_metadata".
 */
export class FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FbFiscalDocumentAdjustmentCodeIcmsTaxationCodesType<T>
{
  /**
   * Technical entity name for FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes.
   */
  static override _entityName =
    'FBFiscalDocumentAdjustmentCodeICMSTaxationCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes entity.
   */
  static _keys = ['dataAreaId', 'TaxationCode', 'SpedAdjustmentCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Taxation Code.
   */
  declare taxationCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Sped Adjustment Code.
   */
  declare spedAdjustmentCode: DeserializedType<T, 'Edm.String'>;

  constructor(
    _entityApi: FbFiscalDocumentAdjustmentCodeIcmsTaxationCodesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface FbFiscalDocumentAdjustmentCodeIcmsTaxationCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxationCode: DeserializedType<T, 'Edm.String'>;
  spedAdjustmentCode: DeserializedType<T, 'Edm.String'>;
}
