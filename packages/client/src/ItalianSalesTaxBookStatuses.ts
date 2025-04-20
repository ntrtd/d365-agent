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
import type { ItalianSalesTaxBookStatusesApi } from './ItalianSalesTaxBookStatusesApi';
import { NoYes } from './NoYes';
import { TaxBookPrintoutStatus } from './TaxBookPrintoutStatus';
import { TaxBookStatusType } from './TaxBookStatusType';

/**
 * This class represents the entity "ItalianSalesTaxBookStatuses" of service "d365_metadata".
 */
export class ItalianSalesTaxBookStatuses<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ItalianSalesTaxBookStatusesType<T>
{
  /**
   * Technical entity name for ItalianSalesTaxBookStatuses.
   */
  static override _entityName = 'ItalianSalesTaxBookStatuses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItalianSalesTaxBookStatuses entity.
   */
  static _keys = [
    'dataAreaId',
    'SettlementPeriod',
    'ValidFrom',
    'ValidTo',
    'SalesTaxBook'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Settlement Period.
   */
  declare settlementPeriod: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Tax Book.
   */
  declare salesTaxBook: DeserializedType<T, 'Edm.String'>;
  /**
   * Last Page Number.
   */
  declare lastPageNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Include Zero Lines It.
   * @nullable
   */
  declare includeZeroLinesIt?: NoYes | null;
  /**
   * First Page Number.
   */
  declare firstPageNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Printout Status.
   * @nullable
   */
  declare printoutStatus?: TaxBookPrintoutStatus | null;
  /**
   * Include Reverse Trans It.
   * @nullable
   */
  declare includeReverseTransIt?: NoYes | null;
  /**
   * Print Blank Page.
   * @nullable
   */
  declare printBlankPage?: NoYes | null;
  /**
   * Page.
   */
  declare page: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Changed To.
   */
  declare changedTo: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Book Type.
   * @nullable
   */
  declare bookType?: TaxBookStatusType | null;

  constructor(_entityApi: ItalianSalesTaxBookStatusesApi<T>) {
    super(_entityApi);
  }
}

export interface ItalianSalesTaxBookStatusesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  settlementPeriod: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesTaxBook: DeserializedType<T, 'Edm.String'>;
  lastPageNumber: DeserializedType<T, 'Edm.Int32'>;
  includeZeroLinesIt?: NoYes | null;
  firstPageNumber: DeserializedType<T, 'Edm.Int32'>;
  printoutStatus?: TaxBookPrintoutStatus | null;
  includeReverseTransIt?: NoYes | null;
  printBlankPage?: NoYes | null;
  page: DeserializedType<T, 'Edm.Int32'>;
  changedTo: DeserializedType<T, 'Edm.Int32'>;
  bookType?: TaxBookStatusType | null;
}
