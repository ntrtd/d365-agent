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
import type { OnlineChannelV2SApi } from './OnlineChannelV2SApi';
import { OnlineStoreCustomerType } from './OnlineStoreCustomerType';
import { RetailOnlineChannelPublishStatusType } from './RetailOnlineChannelPublishStatusType';
import { Timezone } from './Timezone';
import { RetailChannelType } from './RetailChannelType';
import { NoYes } from './NoYes';
import {
  CustomerPaymentMethods,
  CustomerPaymentMethodsType
} from './CustomerPaymentMethods';
import {
  RetailTransactionServiceProfiles,
  RetailTransactionServiceProfilesType
} from './RetailTransactionServiceProfiles';
import { CustomersV3, CustomersV3Type } from './CustomersV3';
import {
  RetailEventNotificationProfiles,
  RetailEventNotificationProfilesType
} from './RetailEventNotificationProfiles';
import { PaymentTerms, PaymentTermsType } from './PaymentTerms';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "OnlineChannelV2s" of service "d365_metadata".
 */
export class OnlineChannelV2S<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements OnlineChannelV2SType<T>
{
  /**
   * Technical entity name for OnlineChannelV2S.
   */
  static override _entityName = 'OnlineChannelV2s';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OnlineChannelV2S entity.
   */
  static _keys = ['RetailChannelId'];
  /**
   * Retail Channel Id.
   */
  declare retailChannelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse.
   * @nullable
   */
  declare warehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Type.
   * @nullable
   */
  declare customerType?: OnlineStoreCustomerType | null;
  /**
   * Publish Status.
   * @nullable
   */
  declare publishStatus?: RetailOnlineChannelPublishStatusType | null;
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
   * Store Area.
   */
  declare storeArea: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Email Notification Profile.
   * @nullable
   */
  declare emailNotificationProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Method Of Payment.
   * @nullable
   */
  declare methodOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Publish Status Message.
   * @nullable
   */
  declare publishStatusMessage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enable Multiple Units Of Measure.
   * @nullable
   */
  declare enableMultipleUnitsOfMeasure?: NoYes | null;
  /**
   * Default Customer Legal Entity.
   * @nullable
   */
  declare defaultCustomerLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prices Include Sales Tax.
   * @nullable
   */
  declare pricesIncludeSalesTax?: NoYes | null;
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
   * Online Store Azure B 2 C Profile.
   * @nullable
   */
  declare onlineStoreAzureB2CProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Customer Account.
   * @nullable
   */
  declare defaultCustomerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Zone Identifier.
   * @nullable
   */
  declare timeZoneIdentifier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Online Catalog Name.
   * @nullable
   */
  declare onlineCatalogName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Display Tax Amount Per Tax Component.
   * @nullable
   */
  declare displayTaxAmountPerTaxComponent?: NoYes | null;
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
   * Terms Of Payment.
   * @nullable
   */
  declare termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operating Unit Number.
   * @nullable
   */
  declare operatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link CustomerPaymentMethods} entity.
   */
  declare customerPaymentMethod?: CustomerPaymentMethods<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailTransactionServiceProfiles} entity.
   */
  declare retailTransactionServiceProfile?: RetailTransactionServiceProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare customerV3?: CustomersV3<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailEventNotificationProfiles} entity.
   */
  declare retailEventNotificationProfile?: RetailEventNotificationProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link PaymentTerms} entity.
   */
  declare paymentTerm?: PaymentTerms<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: OnlineChannelV2SApi<T>) {
    super(_entityApi);
  }
}

export interface OnlineChannelV2SType<
  T extends DeSerializers = DefaultDeSerializers
> {
  retailChannelId: DeserializedType<T, 'Edm.String'>;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  customerType?: OnlineStoreCustomerType | null;
  publishStatus?: RetailOnlineChannelPublishStatusType | null;
  channelTimeZone?: Timezone | null;
  channelType?: RetailChannelType | null;
  storeArea: DeserializedType<T, 'Edm.Decimal'>;
  emailNotificationProfile?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  methodOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  publishStatusMessage?: DeserializedType<T, 'Edm.String'> | null;
  enableMultipleUnitsOfMeasure?: NoYes | null;
  defaultCustomerLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  pricesIncludeSalesTax?: NoYes | null;
  transactionServiceProfile?: DeserializedType<T, 'Edm.String'> | null;
  operatingUnitPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  onlineStoreAzureB2CProfile?: DeserializedType<T, 'Edm.String'> | null;
  defaultCustomerAccount?: DeserializedType<T, 'Edm.String'> | null;
  timeZoneIdentifier?: DeserializedType<T, 'Edm.String'> | null;
  onlineCatalogName?: DeserializedType<T, 'Edm.String'> | null;
  displayTaxAmountPerTaxComponent?: NoYes | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  warehouseLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  operatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
  customerPaymentMethod?: CustomerPaymentMethodsType<T> | null;
  retailTransactionServiceProfile?: RetailTransactionServiceProfilesType<T> | null;
  customerV3?: CustomersV3Type<T> | null;
  retailEventNotificationProfile?: RetailEventNotificationProfilesType<T> | null;
  paymentTerm?: PaymentTermsType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
