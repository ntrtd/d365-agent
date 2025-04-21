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
import type { TrvExpMobileTaxGroupsApi } from './TrvExpMobileTaxGroupsApi';
import { FillVatDueDatePeriod } from './FillVatDueDatePeriod';
import { TaxGroupRounding } from './TaxGroupRounding';
import { NoYes } from './NoYes';
import { FillVatDueDateW } from './FillVatDueDateW';
import { FillVatDueDateBasedOn } from './FillVatDueDateBasedOn';
import { TaxPrintDetail } from './TaxPrintDetail';
import { TaxMasterDataSource } from './TaxMasterDataSource';
import { FillSalesDateW } from './FillSalesDateW';
import { TaxGroupSetup } from './TaxGroupSetup';

/**
 * This class represents the entity "TrvExpMobileTaxGroups" of service "d365_metadata".
 */
export class TrvExpMobileTaxGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TrvExpMobileTaxGroupsType<T>
{
  /**
   * Technical entity name for TrvExpMobileTaxGroups.
   */
  static override _entityName = 'TrvExpMobileTaxGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TrvExpMobileTaxGroups entity.
   */
  static _keys = ['dataAreaId', 'SalesTaxGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Tax Group.
   */
  declare salesTaxGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Number Of Periods.
   */
  declare numberOfPeriods: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Period Interval Unit.
   * @nullable
   */
  declare periodIntervalUnit?: FillVatDueDatePeriod | null;
  /**
   * Rounding By.
   * @nullable
   */
  declare roundingBy?: TaxGroupRounding | null;
  /**
   * Mandatory Service Tariff Number.
   * @nullable
   */
  declare mandatoryServiceTariffNumber?: NoYes | null;
  /**
   * Date Of Vat Register Filling.
   * @nullable
   */
  declare dateOfVatRegisterFilling?: FillVatDueDateW | null;
  /**
   * Based On Date.
   * @nullable
   */
  declare basedOnDate?: FillVatDueDateBasedOn | null;
  /**
   * Mcr Country.
   * @nullable
   */
  declare mcrCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Search Field 2.
   * @nullable
   */
  declare searchField2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eu Trade.
   * @nullable
   */
  declare euTrade?: NoYes | null;
  /**
   * Split Payment.
   * @nullable
   */
  declare splitPayment?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mcr Zip Code.
   * @nullable
   */
  declare mcrZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print.
   * @nullable
   */
  declare print?: TaxPrintDetail | null;
  /**
   * Reverse Sales Tax On Cash Discount.
   * @nullable
   */
  declare reverseSalesTaxOnCashDiscount?: NoYes | null;
  /**
   * Source.
   * @nullable
   */
  declare source?: TaxMasterDataSource | null;
  /**
   * Mandatory Sales Date.
   * @nullable
   */
  declare mandatorySalesDate?: NoYes | null;
  /**
   * Sales Date Filling.
   * @nullable
   */
  declare salesDateFilling?: FillSalesDateW | null;
  /**
   * County.
   * @nullable
   */
  declare county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transit Tax Group.
   * @nullable
   */
  declare transitTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * @nullable
   */
  declare city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Search Field 1.
   * @nullable
   */
  declare searchField1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group Setup.
   * @nullable
   */
  declare salesTaxGroupSetup?: TaxGroupSetup | null;

  constructor(_entityApi: TrvExpMobileTaxGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface TrvExpMobileTaxGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesTaxGroup: DeserializedType<T, 'Edm.String'>;
  numberOfPeriods: DeserializedType<T, 'Edm.Int32'>;
  periodIntervalUnit?: FillVatDueDatePeriod | null;
  roundingBy?: TaxGroupRounding | null;
  mandatoryServiceTariffNumber?: NoYes | null;
  dateOfVatRegisterFilling?: FillVatDueDateW | null;
  basedOnDate?: FillVatDueDateBasedOn | null;
  mcrCountry?: DeserializedType<T, 'Edm.String'> | null;
  searchField2?: DeserializedType<T, 'Edm.String'> | null;
  euTrade?: NoYes | null;
  splitPayment?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  mcrZipCode?: DeserializedType<T, 'Edm.String'> | null;
  print?: TaxPrintDetail | null;
  reverseSalesTaxOnCashDiscount?: NoYes | null;
  source?: TaxMasterDataSource | null;
  mandatorySalesDate?: NoYes | null;
  salesDateFilling?: FillSalesDateW | null;
  county?: DeserializedType<T, 'Edm.String'> | null;
  transitTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  searchField1?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupSetup?: TaxGroupSetup | null;
}
