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
import type { RetailOfflineProfilesApi } from './RetailOfflineProfilesApi';
import { RetailOfflineLimitCustomerEnum } from './RetailOfflineLimitCustomerEnum';
import { NoYes } from './NoYes';
import { RetailOfflineLimitProductEnum } from './RetailOfflineLimitProductEnum';

/**
 * This class represents the entity "RetailOfflineProfiles" of service "d365_metadata".
 */
export class RetailOfflineProfiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailOfflineProfilesType<T>
{
  /**
   * Technical entity name for RetailOfflineProfiles.
   */
  static override _entityName = 'RetailOfflineProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailOfflineProfiles entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Check New Db Interval.
   */
  declare checkNewDbInterval: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Limit Available Customers.
   * @nullable
   */
  declare limitAvailableCustomers?: RetailOfflineLimitCustomerEnum | null;
  /**
   * Products By Specific Category.
   * @nullable
   */
  declare productsBySpecificCategory?: NoYes | null;
  /**
   * Customer By Sales Amount Day Limit.
   */
  declare customerBySalesAmountDayLimit: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Customer By Address.
   * @nullable
   */
  declare customerByAddress?: NoYes | null;
  /**
   * Customer By Sales Amount Num Limit.
   */
  declare customerBySalesAmountNumLimit: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Upload Transaction Size.
   */
  declare uploadTransactionSize: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Retry Count To Offline.
   */
  declare retryCountToOffline: DeserializedType<T, 'Edm.Int32'>;
  /**
   * System Health Check Interval.
   */
  declare systemHealthCheckInterval: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Dir Address Book Name.
   * @nullable
   */
  declare dirAddressBookName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reconnect Interval.
   */
  declare reconnectInterval: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Sales Quantity Limit.
   */
  declare productSalesQuantityLimit: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Enable Advanced Offline Switching.
   * @nullable
   */
  declare enableAdvancedOfflineSwitching?: NoYes | null;
  /**
   * Customer By Sales Amount.
   * @nullable
   */
  declare customerBySalesAmount?: NoYes | null;
  /**
   * Timeout.
   */
  declare timeout: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Retail Assortment Table Assortment Id.
   * @nullable
   */
  declare retailAssortmentTableAssortmentId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Products Arrival Limit Days.
   */
  declare productsArrivalLimitDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Customer By Visits Day Limit.
   */
  declare customerByVisitsDayLimit: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Customer By Visits Num Limit.
   */
  declare customerByVisitsNumLimit: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pause Offline Sync.
   * @nullable
   */
  declare pauseOfflineSync?: NoYes | null;
  /**
   * Customer By Visits.
   * @nullable
   */
  declare customerByVisits?: NoYes | null;
  /**
   * Limit Assorted Products.
   * @nullable
   */
  declare limitAssortedProducts?: RetailOfflineLimitProductEnum | null;
  /**
   * Db Export Path.
   * @nullable
   */
  declare dbExportPath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Image Path.
   * @nullable
   */
  declare imagePath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Sales Amount Limit.
   */
  declare productSalesAmountLimit: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Products By Sales Quantity.
   * @nullable
   */
  declare productsBySalesQuantity?: NoYes | null;
  /**
   * Products By Sales Amount.
   * @nullable
   */
  declare productsBySalesAmount?: NoYes | null;
  /**
   * Products Arrival Limit.
   */
  declare productsArrivalLimit: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Sales Quantity Limit Days.
   */
  declare productSalesQuantityLimitDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Allow Manual Offline Before Sign In.
   * @nullable
   */
  declare allowManualOfflineBeforeSignIn?: NoYes | null;
  /**
   * Offline Switch Api Performance Threshold.
   */
  declare offlineSwitchApiPerformanceThreshold: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Products By Recent Arrival.
   * @nullable
   */
  declare productsByRecentArrival?: NoYes | null;
  /**
   * Prompt On Seamless Offline.
   * @nullable
   */
  declare promptOnSeamlessOffline?: NoYes | null;
  /**
   * Product Sales Amount Limit Days.
   */
  declare productSalesAmountLimitDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Trx Upload Interval.
   */
  declare trxUploadInterval: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reconnect From Performance Induced Offline Interval.
   */
  declare reconnectFromPerformanceInducedOfflineInterval: DeserializedType<
    T,
    'Edm.Int32'
  >;

  constructor(_entityApi: RetailOfflineProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailOfflineProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  checkNewDbInterval: DeserializedType<T, 'Edm.Int32'>;
  limitAvailableCustomers?: RetailOfflineLimitCustomerEnum | null;
  productsBySpecificCategory?: NoYes | null;
  customerBySalesAmountDayLimit: DeserializedType<T, 'Edm.Int32'>;
  customerByAddress?: NoYes | null;
  customerBySalesAmountNumLimit: DeserializedType<T, 'Edm.Int32'>;
  uploadTransactionSize: DeserializedType<T, 'Edm.Int64'>;
  retryCountToOffline: DeserializedType<T, 'Edm.Int32'>;
  systemHealthCheckInterval: DeserializedType<T, 'Edm.Int32'>;
  dirAddressBookName?: DeserializedType<T, 'Edm.String'> | null;
  reconnectInterval: DeserializedType<T, 'Edm.Int32'>;
  productSalesQuantityLimit: DeserializedType<T, 'Edm.Int32'>;
  enableAdvancedOfflineSwitching?: NoYes | null;
  customerBySalesAmount?: NoYes | null;
  timeout: DeserializedType<T, 'Edm.Int32'>;
  retailAssortmentTableAssortmentId?: DeserializedType<T, 'Edm.String'> | null;
  productsArrivalLimitDays: DeserializedType<T, 'Edm.Int32'>;
  customerByVisitsDayLimit: DeserializedType<T, 'Edm.Int32'>;
  customerByVisitsNumLimit: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  pauseOfflineSync?: NoYes | null;
  customerByVisits?: NoYes | null;
  limitAssortedProducts?: RetailOfflineLimitProductEnum | null;
  dbExportPath?: DeserializedType<T, 'Edm.String'> | null;
  imagePath?: DeserializedType<T, 'Edm.String'> | null;
  productSalesAmountLimit: DeserializedType<T, 'Edm.Int32'>;
  productsBySalesQuantity?: NoYes | null;
  productsBySalesAmount?: NoYes | null;
  productsArrivalLimit: DeserializedType<T, 'Edm.Int32'>;
  productSalesQuantityLimitDays: DeserializedType<T, 'Edm.Int32'>;
  allowManualOfflineBeforeSignIn?: NoYes | null;
  offlineSwitchApiPerformanceThreshold: DeserializedType<T, 'Edm.Int32'>;
  productsByRecentArrival?: NoYes | null;
  promptOnSeamlessOffline?: NoYes | null;
  productSalesAmountLimitDays: DeserializedType<T, 'Edm.Int32'>;
  trxUploadInterval: DeserializedType<T, 'Edm.Int32'>;
  reconnectFromPerformanceInducedOfflineInterval: DeserializedType<
    T,
    'Edm.Int32'
  >;
}
