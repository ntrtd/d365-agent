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
import type { RetailCallCentersApi } from './RetailCallCentersApi';
import { Timezone } from './Timezone';
import { RetailChannelType } from './RetailChannelType';
import { NoYes } from './NoYes';
import {
  RetailChannelPriceGroups,
  RetailChannelPriceGroupsType
} from './RetailChannelPriceGroups';
import {
  RetailStoreTenderTypes,
  RetailStoreTenderTypesType
} from './RetailStoreTenderTypes';
import {
  CustomerPaymentMethods,
  CustomerPaymentMethodsType
} from './CustomerPaymentMethods';
import { Warehouses, WarehousesType } from './Warehouses';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  ProductCategoryHierarchies,
  ProductCategoryHierarchiesType
} from './ProductCategoryHierarchies';
import {
  RetailEventNotificationProfiles,
  RetailEventNotificationProfilesType
} from './RetailEventNotificationProfiles';
import {
  RetailTransactionServiceProfiles,
  RetailTransactionServiceProfilesType
} from './RetailTransactionServiceProfiles';
import { CustomersV3, CustomersV3Type } from './CustomersV3';
import { OperatingUnits, OperatingUnitsType } from './OperatingUnits';

/**
 * This class represents the entity "RetailCallCenters" of service "d365_metadata".
 */
export class RetailCallCenters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailCallCentersType<T>
{
  /**
   * Technical entity name for RetailCallCenters.
   */
  static override _entityName = 'RetailCallCenters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailCallCenters entity.
   */
  static _keys = ['RetailChannelId'];
  /**
   * Retail Channel Id.
   */
  declare retailChannelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Channel Time Zone.
   * @nullable
   */
  declare channelTimeZone?: Timezone | null;
  /**
   * Channel Type.
   * @nullable
   */
  declare channelType?: RetailChannelType | null;
  /**
   * Channel Time Zone Info Id.
   * @nullable
   */
  declare channelTimeZoneInfoId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Store Area.
   */
  declare storeArea: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Event Notification Profile Id.
   * @nullable
   */
  declare eventNotificationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Method Name.
   * @nullable
   */
  declare paymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Can Order Completion.
   * @nullable
   */
  declare canOrderCompletion?: NoYes | null;
  /**
   * Product Category Hierarchy Name.
   * @nullable
   */
  declare productCategoryHierarchyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Can Direct Sell.
   * @nullable
   */
  declare canDirectSell?: NoYes | null;
  /**
   * Reason Info Code.
   * @nullable
   */
  declare reasonInfoCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Credit Info Code.
   * @nullable
   */
  declare customerCreditInfoCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Override Info Code.
   * @nullable
   */
  declare priceOverrideInfoCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Customer Legal Entity.
   * @nullable
   */
  declare defaultCustomerLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment.
   * @nullable
   */
  declare payment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Service Profile.
   * @nullable
   */
  declare transactionServiceProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operating Unit Party Number.
   * @nullable
   */
  declare operatingUnitPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Can Order Price Control.
   * @nullable
   */
  declare canOrderPriceControl?: NoYes | null;
  /**
   * Default Customer Account.
   * @nullable
   */
  declare defaultCustomerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Display Tax Per Tax Component.
   * @nullable
   */
  declare displayTaxPerTaxComponent?: NoYes | null;
  /**
   * Price Includes Sales Tax.
   * @nullable
   */
  declare priceIncludesSalesTax?: NoYes | null;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Warehouse Legal Entity.
   * @nullable
   */
  declare warehouseLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operating Unit Number.
   * @nullable
   */
  declare operatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link RetailChannelPriceGroups} entity.
   */
  declare retailChannelPriceGroup: RetailChannelPriceGroups<T>[];
  /**
   * One-to-many navigation property to the {@link RetailStoreTenderTypes} entity.
   */
  declare retailStoreTenderType: RetailStoreTenderTypes<T>[];
  /**
   * One-to-one navigation property to the {@link CustomerPaymentMethods} entity.
   */
  declare customerPaymentMethod?: CustomerPaymentMethods<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare warehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductCategoryHierarchies} entity.
   */
  declare productCategoryHierarchy?: ProductCategoryHierarchies<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailEventNotificationProfiles} entity.
   */
  declare retailEventNotificationProfile?: RetailEventNotificationProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailTransactionServiceProfiles} entity.
   */
  declare retailTransactionServiceProfile?: RetailTransactionServiceProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare customerV3?: CustomersV3<T> | null;
  /**
   * One-to-one navigation property to the {@link OperatingUnits} entity.
   */
  declare operatingUnit?: OperatingUnits<T> | null;

  constructor(_entityApi: RetailCallCentersApi<T>) {
    super(_entityApi);
  }
}

export interface RetailCallCentersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  retailChannelId: DeserializedType<T, 'Edm.String'>;
  channelTimeZone?: Timezone | null;
  channelType?: RetailChannelType | null;
  channelTimeZoneInfoId?: DeserializedType<T, 'Edm.String'> | null;
  storeArea: DeserializedType<T, 'Edm.Decimal'>;
  eventNotificationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  paymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  canOrderCompletion?: NoYes | null;
  productCategoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  canDirectSell?: NoYes | null;
  reasonInfoCode?: DeserializedType<T, 'Edm.String'> | null;
  customerCreditInfoCode?: DeserializedType<T, 'Edm.String'> | null;
  priceOverrideInfoCode?: DeserializedType<T, 'Edm.String'> | null;
  defaultCustomerLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  payment?: DeserializedType<T, 'Edm.String'> | null;
  transactionServiceProfile?: DeserializedType<T, 'Edm.String'> | null;
  operatingUnitPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  canOrderPriceControl?: NoYes | null;
  defaultCustomerAccount?: DeserializedType<T, 'Edm.String'> | null;
  displayTaxPerTaxComponent?: NoYes | null;
  priceIncludesSalesTax?: NoYes | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  warehouseLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  operatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
  retailChannelPriceGroup: RetailChannelPriceGroupsType<T>[];
  retailStoreTenderType: RetailStoreTenderTypesType<T>[];
  customerPaymentMethod?: CustomerPaymentMethodsType<T> | null;
  warehouse?: WarehousesType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  productCategoryHierarchy?: ProductCategoryHierarchiesType<T> | null;
  retailEventNotificationProfile?: RetailEventNotificationProfilesType<T> | null;
  retailTransactionServiceProfile?: RetailTransactionServiceProfilesType<T> | null;
  customerV3?: CustomersV3Type<T> | null;
  operatingUnit?: OperatingUnitsType<T> | null;
}
