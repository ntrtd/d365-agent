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
import type { LtmTaxPayerDocumentClassLettersApi } from './LtmTaxPayerDocumentClassLettersApi';

/**
 * This class represents the entity "LTMTaxPayerDocumentClassLetters" of service "d365_metadata".
 */
export class LtmTaxPayerDocumentClassLetters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmTaxPayerDocumentClassLettersType<T>
{
  /**
   * Technical entity name for LtmTaxPayerDocumentClassLetters.
   */
  static override _entityName = 'LTMTaxPayerDocumentClassLetters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmTaxPayerDocumentClassLetters entity.
   */
  static _keys = [
    'dataAreaId',
    'DocumentClassificationLetterId',
    'TaxPayerTypeId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Classification Letter Id.
   */
  declare documentClassificationLetterId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Payer Type Id.
   */
  declare taxPayerTypeId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: LtmTaxPayerDocumentClassLettersApi<T>) {
    super(_entityApi);
  }
}

export interface LtmTaxPayerDocumentClassLettersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentClassificationLetterId: DeserializedType<T, 'Edm.String'>;
  taxPayerTypeId: DeserializedType<T, 'Edm.String'>;
}
