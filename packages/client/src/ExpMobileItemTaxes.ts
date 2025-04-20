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
import type { ExpMobileItemTaxesApi } from './ExpMobileItemTaxesApi';
import { NoYes } from './NoYes';
import { TaxMasterDataSource } from './TaxMasterDataSource';
import { EuSalesListType } from './EuSalesListType';
import { ServiceTaxBasisIn } from './ServiceTaxBasisIn';

/**
 * This class represents the entity "ExpMobileItemTaxes" of service "d365_metadata".
 */
export class ExpMobileItemTaxes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExpMobileItemTaxesType<T>
{
  /**
   * Technical entity name for ExpMobileItemTaxes.
   */
  static override _entityName = 'ExpMobileItemTaxes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpMobileItemTaxes entity.
   */
  static _keys = ['dataAreaId', 'ItemSalesTaxGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Sales Tax Group.
   */
  declare itemSalesTaxGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Deferred Vat.
   * @nullable
   */
  declare deferredVat?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source.
   * @nullable
   */
  declare source?: TaxMasterDataSource | null;
  /**
   * Reporting Type.
   * @nullable
   */
  declare reportingType?: EuSalesListType | null;
  /**
   * Accounting Basis.
   * @nullable
   */
  declare accountingBasis?: ServiceTaxBasisIn | null;
  /**
   * Reverse Charge Percentage.
   */
  declare reverseChargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accrue Payable Service Tax At Invoicing.
   * @nullable
   */
  declare accruePayableServiceTaxAtInvoicing?: NoYes | null;

  constructor(_entityApi: ExpMobileItemTaxesApi<T>) {
    super(_entityApi);
  }
}

export interface ExpMobileItemTaxesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemSalesTaxGroup: DeserializedType<T, 'Edm.String'>;
  deferredVat?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  source?: TaxMasterDataSource | null;
  reportingType?: EuSalesListType | null;
  accountingBasis?: ServiceTaxBasisIn | null;
  reverseChargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  accruePayableServiceTaxAtInvoicing?: NoYes | null;
}
