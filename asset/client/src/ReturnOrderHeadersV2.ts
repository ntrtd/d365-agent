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
import type { ReturnOrderHeadersV2Api } from './ReturnOrderHeadersV2Api';
import { NoYes } from './NoYes';
import { ReturnStatusHeader } from './ReturnStatusHeader';
import { SalesStatus } from './SalesStatus';
import { Timezone } from './Timezone';
import {
  ReturnOrderLinesV2,
  ReturnOrderLinesV2Type
} from './ReturnOrderLinesV2';

/**
 * This class represents the entity "ReturnOrderHeadersV2" of service "d365_metadata".
 */
export class ReturnOrderHeadersV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReturnOrderHeadersV2Type<T>
{
  /**
   * Technical entity name for ReturnOrderHeadersV2.
   */
  static override _entityName = 'ReturnOrderHeadersV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReturnOrderHeadersV2 entity.
   */
  static _keys = ['dataAreaId', 'ReturnOrderNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Return Order Number.
   */
  declare returnOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Return Address District Name.
   * @nullable
   */
  declare returnAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Duns Number.
   * @nullable
   */
  declare returnAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Location Id.
   * @nullable
   */
  declare returnAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Street Number.
   * @nullable
   */
  declare returnAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Customer Account Number.
   * @nullable
   */
  declare invoiceCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Name.
   * @nullable
   */
  declare returnAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Country Region Iso Code.
   * @nullable
   */
  declare returnAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Return Deadline.
   */
  declare returnDeadline: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Return Address Street.
   * @nullable
   */
  declare returnAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Street In Kana.
   * @nullable
   */
  declare returnAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customers Order Reference.
   * @nullable
   */
  declare customersOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address City.
   * @nullable
   */
  declare returnAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Return Address.
   * @nullable
   */
  declare formattedReturnAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Longitude.
   */
  declare returnAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Order Total Charges Amount.
   */
  declare orderTotalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Requisition Number.
   * @nullable
   */
  declare customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Zip Code.
   * @nullable
   */
  declare returnAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Return Reason Code.
   * @nullable
   */
  declare customerReturnReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Latitude.
   */
  declare returnAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Return Site Id.
   * @nullable
   */
  declare defaultReturnSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replacement Sales Order Number.
   * @nullable
   */
  declare replacementSalesOrderNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rma Number.
   * @nullable
   */
  declare rmaNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Total Amount.
   */
  declare orderTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Return Address Private.
   * @nullable
   */
  declare isReturnAddressPrivate?: NoYes | null;
  /**
   * Return Address Description.
   * @nullable
   */
  declare returnAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Return Processing Stopped.
   * @nullable
   */
  declare isReturnProcessingStopped?: NoYes | null;
  /**
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Building Compliment.
   * @nullable
   */
  declare returnAddressBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Return Address Country Region Id.
   * @nullable
   */
  declare returnAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Return Address City In Kana.
   * @nullable
   */
  declare returnAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Return Warehouse Id.
   * @nullable
   */
  declare defaultReturnWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address County Id.
   * @nullable
   */
  declare returnAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address State Id.
   * @nullable
   */
  declare returnAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Post Box.
   * @nullable
   */
  declare returnAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Status.
   * @nullable
   */
  declare returnStatus?: ReturnStatusHeader | null;
  /**
   * Return Order Status.
   * @nullable
   */
  declare returnOrderStatus?: SalesStatus | null;
  /**
   * Order Total Tax Amount.
   */
  declare orderTotalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Return Address Order Specific.
   * @nullable
   */
  declare isReturnAddressOrderSpecific?: NoYes | null;
  /**
   * Is Replacement Sales Order Created.
   * @nullable
   */
  declare isReplacementSalesOrderCreated?: NoYes | null;
  /**
   * Return Address Time Zone.
   * @nullable
   */
  declare returnAddressTimeZone?: Timezone | null;
  /**
   * Total Discount Amount.
   */
  declare totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link ReturnOrderLinesV2} entity.
   */
  declare returnOrderLines: ReturnOrderLinesV2<T>[];

  constructor(_entityApi: ReturnOrderHeadersV2Api<T>) {
    super(_entityApi);
  }
}

export interface ReturnOrderHeadersV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  returnOrderNumber: DeserializedType<T, 'Edm.String'>;
  returnAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  invoiceCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressName?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  returnDeadline: DeserializedType<T, 'Edm.DateTimeOffset'>;
  returnAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  customersOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  formattedReturnAddress?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  orderTotalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  customerReturnReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  defaultReturnSiteId?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  replacementSalesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  rmaNumber?: DeserializedType<T, 'Edm.String'> | null;
  orderTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  isReturnAddressPrivate?: NoYes | null;
  returnAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  isReturnProcessingStopped?: NoYes | null;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  defaultReturnWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  returnStatus?: ReturnStatusHeader | null;
  returnOrderStatus?: SalesStatus | null;
  orderTotalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  isReturnAddressOrderSpecific?: NoYes | null;
  isReplacementSalesOrderCreated?: NoYes | null;
  returnAddressTimeZone?: Timezone | null;
  totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  returnOrderLines: ReturnOrderLinesV2Type<T>[];
}
