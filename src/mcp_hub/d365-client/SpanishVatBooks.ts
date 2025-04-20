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
import type { SpanishVatBooksApi } from './SpanishVatBooksApi';
import { NoYes } from './NoYes';
import { TaxBookTypeEs } from './TaxBookTypeEs';

/**
 * This class represents the entity "SpanishVATBooks" of service "d365_metadata".
 */
export class SpanishVatBooks<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SpanishVatBooksType<T>
{
  /**
   * Technical entity name for SpanishVatBooks.
   */
  static override _entityName = 'SpanishVATBooks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SpanishVatBooks entity.
   */
  static _keys = [
    'dataAreaId',
    'VATBook',
    'SalesTaxCode',
    'EquivalenceChargeSalesTaxCode'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vat Book.
   */
  declare vatBook: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Tax Code.
   */
  declare salesTaxCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Equivalence Charge Sales Tax Code.
   */
  declare equivalenceChargeSalesTaxCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Reverse Charge.
   * @nullable
   */
  declare isReverseCharge?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Book Type.
   * @nullable
   */
  declare vatBookType?: TaxBookTypeEs | null;
  /**
   * Is Non Deductible Vat.
   * @nullable
   */
  declare isNonDeductibleVat?: NoYes | null;
  /**
   * Number Sequence Code.
   * @nullable
   */
  declare numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SpanishVatBooksApi<T>) {
    super(_entityApi);
  }
}

export interface SpanishVatBooksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vatBook: DeserializedType<T, 'Edm.String'>;
  salesTaxCode: DeserializedType<T, 'Edm.String'>;
  equivalenceChargeSalesTaxCode: DeserializedType<T, 'Edm.String'>;
  isReverseCharge?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  vatBookType?: TaxBookTypeEs | null;
  isNonDeductibleVat?: NoYes | null;
  numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
}
