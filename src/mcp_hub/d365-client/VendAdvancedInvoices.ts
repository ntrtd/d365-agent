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
import type { VendAdvancedInvoicesApi } from './VendAdvancedInvoicesApi';
import { NoYes } from './NoYes';
import { CzAdvanceInvoiceStatus } from './CzAdvanceInvoiceStatus';
import { Listcode } from './Listcode';
import { Timezone } from './Timezone';

/**
 * This class represents the entity "VendAdvancedInvoices" of service "d365_metadata".
 */
export class VendAdvancedInvoices<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendAdvancedInvoicesType<T>
{
  /**
   * Technical entity name for VendAdvancedInvoices.
   */
  static override _entityName = 'VendAdvancedInvoices';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendAdvancedInvoices entity.
   */
  static _keys = ['dataAreaId', 'HeadId', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Head Id.
   */
  declare headId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Number Sequence Group.
   * @nullable
   */
  declare numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Delivery Private.
   * @nullable
   */
  declare isDeliveryPrivate?: NoYes | null;
  /**
   * Vend Group.
   * @nullable
   */
  declare vendGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Constant Symbol.
   * @nullable
   */
  declare constantSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Sales Tax Group.
   * @nullable
   */
  declare itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery State.
   * @nullable
   */
  declare deliveryState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Valid From.
   */
  declare deliveryValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Amount.
   */
  declare invoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Status.
   * @nullable
   */
  declare status?: CzAdvanceInvoiceStatus | null;
  /**
   * Contact.
   * @nullable
   */
  declare contact?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Variable Symbol.
   * @nullable
   */
  declare variableSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Account.
   * @nullable
   */
  declare vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account.
   * @nullable
   */
  declare invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Advance Invoice.
   * @nullable
   */
  declare advanceInvoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Country Region Iso Code.
   * @nullable
   */
  declare deliveryCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * List Code.
   * @nullable
   */
  declare listCode?: Listcode | null;
  /**
   * Delivery Building Compliment.
   * @nullable
   */
  declare deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Recipient.
   * @nullable
   */
  declare recipient?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Zip Code.
   * @nullable
   */
  declare deliveryZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Postal Address.
   */
  declare vendPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Delivery Address.
   * @nullable
   */
  declare deliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Location Id.
   * @nullable
   */
  declare deliveryLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Country Region.
   * @nullable
   */
  declare deliveryCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order.
   * @nullable
   */
  declare purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language.
   * @nullable
   */
  declare language?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Duns Number.
   * @nullable
   */
  declare dunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Valid To.
   */
  declare deliveryValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Time Zone.
   * @nullable
   */
  declare deliveryTimeZone?: Timezone | null;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery County.
   * @nullable
   */
  declare deliveryCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One Time Supplier.
   * @nullable
   */
  declare oneTimeSupplier?: NoYes | null;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Text.
   * @nullable
   */
  declare invoiceText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery District Name.
   * @nullable
   */
  declare deliveryDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Street.
   * @nullable
   */
  declare deliveryStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posted.
   * @nullable
   */
  declare posted?: NoYes | null;
  /**
   * Delivery Post Box.
   * @nullable
   */
  declare deliveryPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Description.
   * @nullable
   */
  declare deliveryDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Street Number.
   * @nullable
   */
  declare deliveryStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Latitude.
   */
  declare deliveryLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery City.
   * @nullable
   */
  declare deliveryCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Longitude.
   */
  declare deliveryLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Terms Of Payment.
   * @nullable
   */
  declare termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Specification.
   * @nullable
   */
  declare paymentSpecification?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: VendAdvancedInvoicesApi<T>) {
    super(_entityApi);
  }
}

export interface VendAdvancedInvoicesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  headId: DeserializedType<T, 'Edm.Guid'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryPrivate?: NoYes | null;
  vendGroup?: DeserializedType<T, 'Edm.String'> | null;
  constantSymbol?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  deliveryState?: DeserializedType<T, 'Edm.String'> | null;
  deliveryValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  methodOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  status?: CzAdvanceInvoiceStatus | null;
  contact?: DeserializedType<T, 'Edm.String'> | null;
  variableSymbol?: DeserializedType<T, 'Edm.String'> | null;
  vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  advanceInvoice?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  deliveryCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  listCode?: Listcode | null;
  deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  recipient?: DeserializedType<T, 'Edm.String'> | null;
  deliveryZipCode?: DeserializedType<T, 'Edm.String'> | null;
  vendPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  deliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  deliveryLocationId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  language?: DeserializedType<T, 'Edm.String'> | null;
  dunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryTimeZone?: Timezone | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  deliveryCounty?: DeserializedType<T, 'Edm.String'> | null;
  oneTimeSupplier?: NoYes | null;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceText?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryStreet?: DeserializedType<T, 'Edm.String'> | null;
  posted?: NoYes | null;
  deliveryPostBox?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDescription?: DeserializedType<T, 'Edm.String'> | null;
  deliveryStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryLatitude: DeserializedType<T, 'Edm.Decimal'>;
  deliveryCity?: DeserializedType<T, 'Edm.String'> | null;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  deliveryLongitude: DeserializedType<T, 'Edm.Decimal'>;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  paymentSpecification?: DeserializedType<T, 'Edm.String'> | null;
}
