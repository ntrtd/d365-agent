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
import type { ItalianSalesTaxBookSectionsApi } from './ItalianSalesTaxBookSectionsApi';

/**
 * This class represents the entity "ItalianSalesTaxBookSections" of service "d365_metadata".
 */
export class ItalianSalesTaxBookSections<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ItalianSalesTaxBookSectionsType<T>
{
  /**
   * Technical entity name for ItalianSalesTaxBookSections.
   */
  static override _entityName = 'ItalianSalesTaxBookSections';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItalianSalesTaxBookSections entity.
   */
  static _keys = ['dataAreaId', 'SalesTaxBookSection'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Tax Book Section.
   */
  declare salesTaxBookSection: DeserializedType<T, 'Edm.String'>;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Close Italian Sales Tax Book Section.
   */
  declare closeItalianSalesTaxBookSection: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Sequence Code.
   * @nullable
   */
  declare numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Book.
   * @nullable
   */
  declare salesTaxBook?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Closed To.
   */
  declare closedTo: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: ItalianSalesTaxBookSectionsApi<T>) {
    super(_entityApi);
  }
}

export interface ItalianSalesTaxBookSectionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesTaxBookSection: DeserializedType<T, 'Edm.String'>;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  closeItalianSalesTaxBookSection: DeserializedType<T, 'Edm.DateTimeOffset'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxBook?: DeserializedType<T, 'Edm.String'> | null;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  closedTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
