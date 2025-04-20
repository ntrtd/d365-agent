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
import type { VendorFormSetupsApi } from './VendorFormSetupsApi';
import { NoYes } from './NoYes';
import { TaxSpecPrintLevel } from './TaxSpecPrintLevel';
import { FirstLast } from './FirstLast';

/**
 * This class represents the entity "VendorFormSetups" of service "d365_metadata".
 */
export class VendorFormSetups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VendorFormSetupsType<T>
{
  /**
   * Technical entity name for VendorFormSetups.
   */
  static override _entityName = 'VendorFormSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorFormSetups entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Separate Tax Exempt Balance In Forms.
   * @nullable
   */
  declare isSeparateTaxExemptBalanceInForms?: NoYes | null;
  /**
   * Sales Tax Specification.
   * @nullable
   */
  declare salesTaxSpecification?: TaxSpecPrintLevel | null;
  /**
   * Print Tax Exempt Number On Invoice.
   * @nullable
   */
  declare printTaxExemptNumberOnInvoice?: NoYes | null;
  /**
   * Totals.
   * @nullable
   */
  declare totals?: FirstLast | null;
  /**
   * Inventory Dimensions For Printing Invoice.
   */
  declare inventoryDimensionsForPrintingInvoice: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Print Amount In Euro Currency.
   * @nullable
   */
  declare printAmountInEuroCurrency?: NoYes | null;

  constructor(_entityApi: VendorFormSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface VendorFormSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  isSeparateTaxExemptBalanceInForms?: NoYes | null;
  salesTaxSpecification?: TaxSpecPrintLevel | null;
  printTaxExemptNumberOnInvoice?: NoYes | null;
  totals?: FirstLast | null;
  inventoryDimensionsForPrintingInvoice: DeserializedType<T, 'Edm.Int32'>;
  printAmountInEuroCurrency?: NoYes | null;
}
