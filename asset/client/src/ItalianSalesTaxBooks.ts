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
import type { ItalianSalesTaxBooksApi } from './ItalianSalesTaxBooksApi';
import { NoYes } from './NoYes';
import { TaxBookType } from './TaxBookType';

/**
 * This class represents the entity "ItalianSalesTaxBooks" of service "d365_metadata".
 */
export class ItalianSalesTaxBooks<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ItalianSalesTaxBooksType<T>
{
  /**
   * Technical entity name for ItalianSalesTaxBooks.
   */
  static override _entityName = 'ItalianSalesTaxBooks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItalianSalesTaxBooks entity.
   */
  static _keys = ['dataAreaId', 'SalesTaxBook'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Tax Book.
   */
  declare salesTaxBook: DeserializedType<T, 'Edm.String'>;
  /**
   * Include Reverse Trans It.
   * @nullable
   */
  declare includeReverseTransIt?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eu Sales.
   * @nullable
   */
  declare euSales?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settlement Period.
   * @nullable
   */
  declare settlementPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print Summary And Payment.
   * @nullable
   */
  declare printSummaryAndPayment?: NoYes | null;
  /**
   * Include Zero Lines It.
   * @nullable
   */
  declare includeZeroLinesIt?: NoYes | null;
  /**
   * Atecofin Code.
   * @nullable
   */
  declare atecofinCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Book Type.
   * @nullable
   */
  declare salesTaxBookType?: TaxBookType | null;

  constructor(_entityApi: ItalianSalesTaxBooksApi<T>) {
    super(_entityApi);
  }
}

export interface ItalianSalesTaxBooksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesTaxBook: DeserializedType<T, 'Edm.String'>;
  includeReverseTransIt?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  euSales?: DeserializedType<T, 'Edm.String'> | null;
  settlementPeriod?: DeserializedType<T, 'Edm.String'> | null;
  printSummaryAndPayment?: NoYes | null;
  includeZeroLinesIt?: NoYes | null;
  atecofinCode?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxBookType?: TaxBookType | null;
}
