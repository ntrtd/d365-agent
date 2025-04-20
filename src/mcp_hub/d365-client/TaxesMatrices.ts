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
import type { TaxesMatricesApi } from './TaxesMatricesApi';
import { CustVendTypeBr } from './CustVendTypeBr';
import { NoYes } from './NoYes';
import { TableGroupAll } from './TableGroupAll';

/**
 * This class represents the entity "TaxesMatrices" of service "d365_metadata".
 */
export class TaxesMatrices<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxesMatricesType<T>
{
  /**
   * Technical entity name for TaxesMatrices.
   */
  static override _entityName = 'TaxesMatrices';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxesMatrices entity.
   */
  static _keys = [
    'dataAreaId',
    'FiscalEstablishmentGroupId',
    'CFOPGroupId',
    'Type',
    'AccountRelation',
    'ItemRelation'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Establishment Group Id.
   */
  declare fiscalEstablishmentGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cfop Group Id.
   */
  declare cfopGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: CustVendTypeBr | null;
  /**
   * Account Relation.
   */
  declare accountRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Relation.
   */
  declare itemRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Used For Free Text Invoice.
   * @nullable
   */
  declare isUsedForFreeTextInvoice?: NoYes | null;
  /**
   * Account Code.
   * @nullable
   */
  declare accountCode?: TableGroupAll | null;
  /**
   * Item Sales Tax Group.
   * @nullable
   */
  declare itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Used For Service Items.
   * @nullable
   */
  declare isUsedForServiceItems?: NoYes | null;
  /**
   * Item Code.
   * @nullable
   */
  declare itemCode?: TableGroupAll | null;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxesMatricesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxesMatricesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fiscalEstablishmentGroupId: DeserializedType<T, 'Edm.String'>;
  cfopGroupId: DeserializedType<T, 'Edm.String'>;
  type?: CustVendTypeBr | null;
  accountRelation: DeserializedType<T, 'Edm.String'>;
  itemRelation: DeserializedType<T, 'Edm.String'>;
  isUsedForFreeTextInvoice?: NoYes | null;
  accountCode?: TableGroupAll | null;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  isUsedForServiceItems?: NoYes | null;
  itemCode?: TableGroupAll | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
}
