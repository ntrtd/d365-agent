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
import type { OnlineChannelsApi } from './OnlineChannelsApi';
import { RetailOnlineChannelPublishStatusType } from './RetailOnlineChannelPublishStatusType';
import { Timezone } from './Timezone';
import { RetailChannelType } from './RetailChannelType';
import { NoYes } from './NoYes';
import {
  RetailChannelPaymentConnectorLines,
  RetailChannelPaymentConnectorLinesType
} from './RetailChannelPaymentConnectorLines';
import {
  RetailChannelPriceGroups,
  RetailChannelPriceGroupsType
} from './RetailChannelPriceGroups';
import {
  RetailStoreLocatorGroupOwners,
  RetailStoreLocatorGroupOwnersType
} from './RetailStoreLocatorGroupOwners';
import {
  OnlineChannelCountryRegions,
  OnlineChannelCountryRegionsType
} from './OnlineChannelCountryRegions';
import {
  RetailStoreTenderTypes,
  RetailStoreTenderTypesType
} from './RetailStoreTenderTypes';
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
import {
  RetailChannelAttributeGroups,
  RetailChannelAttributeGroupsType
} from './RetailChannelAttributeGroups';
import {
  RetailOnlineChannelLanguages,
  RetailOnlineChannelLanguagesType
} from './RetailOnlineChannelLanguages';

/**
 * This class represents the entity "OnlineChannels" of service "d365_metadata".
 */
export class OnlineChannels<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements OnlineChannelsType<T>
{
  /**
   * Technical entity name for OnlineChannels.
   */
  static override _entityName = 'OnlineChannels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OnlineChannels entity.
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
   * One-to-many navigation property to the {@link RetailChannelPaymentConnectorLines} entity.
   */
  declare retailChannelPaymentConnectorLine: RetailChannelPaymentConnectorLines<T>[];
  /**
   * One-to-many navigation property to the {@link RetailChannelPriceGroups} entity.
   */
  declare retailChannelPriceGroup: RetailChannelPriceGroups<T>[];
  /**
   * One-to-many navigation property to the {@link RetailStoreLocatorGroupOwners} entity.
   */
  declare retailStoreLocatorGroupOwner: RetailStoreLocatorGroupOwners<T>[];
  /**
   * One-to-many navigation property to the {@link OnlineChannelCountryRegions} entity.
   */
  declare onlineChannelCountryRegion: OnlineChannelCountryRegions<T>[];
  /**
   * One-to-many navigation property to the {@link RetailStoreTenderTypes} entity.
   */
  declare retailStoreTenderType: RetailStoreTenderTypes<T>[];
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
  /**
   * One-to-many navigation property to the {@link RetailChannelAttributeGroups} entity.
   */
  declare retailChannelAttributeGroup: RetailChannelAttributeGroups<T>[];
  /**
   * One-to-many navigation property to the {@link RetailOnlineChannelLanguages} entity.
   */
  declare retailOnlineChannelLanguage: RetailOnlineChannelLanguages<T>[];

  constructor(_entityApi: OnlineChannelsApi<T>) {
    super(_entityApi);
  }
}

export interface OnlineChannelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  retailChannelId: DeserializedType<T, 'Edm.String'>;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  publishStatus?: RetailOnlineChannelPublishStatusType | null;
  channelTimeZone?: Timezone | null;
  channelType?: RetailChannelType | null;
  storeArea: DeserializedType<T, 'Edm.Decimal'>;
  emailNotificationProfile?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  methodOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  publishStatusMessage?: DeserializedType<T, 'Edm.String'> | null;
  defaultCustomerLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  pricesIncludeSalesTax?: NoYes | null;
  transactionServiceProfile?: DeserializedType<T, 'Edm.String'> | null;
  operatingUnitPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultCustomerAccount?: DeserializedType<T, 'Edm.String'> | null;
  timeZoneIdentifier?: DeserializedType<T, 'Edm.String'> | null;
  onlineCatalogName?: DeserializedType<T, 'Edm.String'> | null;
  displayTaxAmountPerTaxComponent?: NoYes | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  warehouseLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  operatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
  retailChannelPaymentConnectorLine: RetailChannelPaymentConnectorLinesType<T>[];
  retailChannelPriceGroup: RetailChannelPriceGroupsType<T>[];
  retailStoreLocatorGroupOwner: RetailStoreLocatorGroupOwnersType<T>[];
  onlineChannelCountryRegion: OnlineChannelCountryRegionsType<T>[];
  retailStoreTenderType: RetailStoreTenderTypesType<T>[];
  customerPaymentMethod?: CustomerPaymentMethodsType<T> | null;
  retailTransactionServiceProfile?: RetailTransactionServiceProfilesType<T> | null;
  customerV3?: CustomersV3Type<T> | null;
  retailEventNotificationProfile?: RetailEventNotificationProfilesType<T> | null;
  paymentTerm?: PaymentTermsType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  retailChannelAttributeGroup: RetailChannelAttributeGroupsType<T>[];
  retailOnlineChannelLanguage: RetailOnlineChannelLanguagesType<T>[];
}
