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
import type { TaxItemGroupsApi } from './TaxItemGroupsApi';
import { EuSalesListType } from './EuSalesListType';
import { NoYes } from './NoYes';
import {
  PurchaseOrderLineChargesV2,
  PurchaseOrderLineChargesV2Type
} from './PurchaseOrderLineChargesV2';
import {
  PurchaseOrderHeaderCharges,
  PurchaseOrderHeaderChargesType
} from './PurchaseOrderHeaderCharges';
import { TaxCodes, TaxCodesType } from './TaxCodes';
import {
  VendorInvoiceHeaderCharges,
  VendorInvoiceHeaderChargesType
} from './VendorInvoiceHeaderCharges';

/**
 * This class represents the entity "TaxItemGroups" of service "d365_metadata".
 */
export class TaxItemGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxItemGroupsType<T>
{
  /**
   * Technical entity name for TaxItemGroups.
   */
  static override _entityName = 'TaxItemGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxItemGroups entity.
   */
  static _keys = ['dataAreaId', 'TaxItemGroupCode', 'TaxCodeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Item Group Code.
   */
  declare taxItemGroupCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Code Id.
   */
  declare taxCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Taxation Code.
   * @nullable
   */
  declare taxationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eu Sales List Type.
   * @nullable
   */
  declare euSalesListType?: EuSalesListType | null;
  /**
   * Tax Exempt Code.
   * @nullable
   */
  declare taxExemptCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Without Tax Credit.
   * @nullable
   */
  declare withoutTaxCredit?: NoYes | null;
  /**
   * Exempt Tax.
   * @nullable
   */
  declare exemptTax?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link PurchaseOrderLineChargesV2} entity.
   */
  declare purchaseOrderLineCharges: PurchaseOrderLineChargesV2<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderHeaderCharges} entity.
   */
  declare purchaseOrderHeaderCharges: PurchaseOrderHeaderCharges<T>[];
  /**
   * One-to-one navigation property to the {@link TaxCodes} entity.
   */
  declare taxCode?: TaxCodes<T> | null;
  /**
   * One-to-many navigation property to the {@link VendorInvoiceHeaderCharges} entity.
   */
  declare invoiceHeaderCharges: VendorInvoiceHeaderCharges<T>[];

  constructor(_entityApi: TaxItemGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface TaxItemGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxItemGroupCode: DeserializedType<T, 'Edm.String'>;
  taxCodeId: DeserializedType<T, 'Edm.String'>;
  taxationCode?: DeserializedType<T, 'Edm.String'> | null;
  euSalesListType?: EuSalesListType | null;
  taxExemptCode?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  withoutTaxCredit?: NoYes | null;
  exemptTax?: NoYes | null;
  purchaseOrderLineCharges: PurchaseOrderLineChargesV2Type<T>[];
  purchaseOrderHeaderCharges: PurchaseOrderHeaderChargesType<T>[];
  taxCode?: TaxCodesType<T> | null;
  invoiceHeaderCharges: VendorInvoiceHeaderChargesType<T>[];
}
