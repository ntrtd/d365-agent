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
import type { VendorGroupsApi } from './VendorGroupsApi';
import { NoYes } from './NoYes';
import {
  SupplyForecastEntries,
  SupplyForecastEntriesType
} from './SupplyForecastEntries';
import { Prospects, ProspectsType } from './Prospects';
import { PaymentTerms, PaymentTermsType } from './PaymentTerms';
import { TaxGroups, TaxGroupsType } from './TaxGroups';
import { PlannedOrders, PlannedOrdersType } from './PlannedOrders';

/**
 * This class represents the entity "VendorGroups" of service "d365_metadata".
 */
export class VendorGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VendorGroupsType<T>
{
  /**
   * Technical entity name for VendorGroups.
   */
  static override _entityName = 'VendorGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorGroups entity.
   */
  static _keys = ['dataAreaId', 'VendorGroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Group Id.
   */
  declare vendorGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Tax Group Code.
   * @nullable
   */
  declare defaultTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Currency Exchange Rate Type.
   * @nullable
   */
  declare accountingCurrencyExchangeRateType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Payment Term Name.
   * @nullable
   */
  declare defaultPaymentTermName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Account Number Sequence.
   * @nullable
   */
  declare vendorAccountNumberSequence?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Clearing Period Payment Term Name.
   * @nullable
   */
  declare clearingPeriodPaymentTermName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Excluded From Search Results.
   * @nullable
   */
  declare isExcludedFromSearchResults?: NoYes | null;
  /**
   * Reporting Currency Exchange Rate Type.
   * @nullable
   */
  declare reportingCurrencyExchangeRateType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Public Sector It.
   * @nullable
   */
  declare isPublicSectorIt?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link SupplyForecastEntries} entity.
   */
  declare supplyForecastEntries: SupplyForecastEntries<T>[];
  /**
   * One-to-many navigation property to the {@link Prospects} entity.
   */
  declare prospects: Prospects<T>[];
  /**
   * One-to-one navigation property to the {@link PaymentTerms} entity.
   */
  declare clearingPeriodPaymentTerm?: PaymentTerms<T> | null;
  /**
   * One-to-one navigation property to the {@link PaymentTerms} entity.
   */
  declare defaultPaymentTerm?: PaymentTerms<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxGroups} entity.
   */
  declare defaultTaxGroup?: TaxGroups<T> | null;
  /**
   * One-to-many navigation property to the {@link PlannedOrders} entity.
   */
  declare plannedOrders: PlannedOrders<T>[];

  constructor(_entityApi: VendorGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface VendorGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vendorGroupId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  defaultTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  accountingCurrencyExchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  defaultPaymentTermName?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccountNumberSequence?: DeserializedType<T, 'Edm.String'> | null;
  clearingPeriodPaymentTermName?: DeserializedType<T, 'Edm.String'> | null;
  isExcludedFromSearchResults?: NoYes | null;
  reportingCurrencyExchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  isPublicSectorIt?: NoYes | null;
  supplyForecastEntries: SupplyForecastEntriesType<T>[];
  prospects: ProspectsType<T>[];
  clearingPeriodPaymentTerm?: PaymentTermsType<T> | null;
  defaultPaymentTerm?: PaymentTermsType<T> | null;
  defaultTaxGroup?: TaxGroupsType<T> | null;
  plannedOrders: PlannedOrdersType<T>[];
}
