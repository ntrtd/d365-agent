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
import type { CdsReturnOrderHeadersApi } from './CdsReturnOrderHeadersApi';
import { SalesStatus } from './SalesStatus';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';
import { ReturnStatusHeader } from './ReturnStatusHeader';
import {
  CdsReturnOrderLines,
  CdsReturnOrderLinesType
} from './CdsReturnOrderLines';

/**
 * This class represents the entity "CDSReturnOrderHeaders" of service "d365_metadata".
 */
export class CdsReturnOrderHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CdsReturnOrderHeadersType<T>
{
  /**
   * Technical entity name for CdsReturnOrderHeaders.
   */
  static override _entityName = 'CDSReturnOrderHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsReturnOrderHeaders entity.
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
   * Order Total Tax Amount.
   */
  declare orderTotalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return Address Zip Code.
   * @nullable
   */
  declare returnAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Return Site Id.
   * @nullable
   */
  declare defaultReturnSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customers Order Reference.
   * @nullable
   */
  declare customersOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Street.
   * @nullable
   */
  declare returnAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Order Status.
   * @nullable
   */
  declare returnOrderStatus?: SalesStatus | null;
  /**
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Time Zone.
   * @nullable
   */
  declare returnAddressTimeZone?: Timezone | null;
  /**
   * Is Return Processing Stopped.
   * @nullable
   */
  declare isReturnProcessingStopped?: NoYes | null;
  /**
   * Return Address Duns Number.
   * @nullable
   */
  declare returnAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Street Number.
   * @nullable
   */
  declare returnAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Total Charges Amount.
   */
  declare orderTotalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Customer Account Number.
   * @nullable
   */
  declare invoiceCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Return Address Location Id.
   * @nullable
   */
  declare returnAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Return Address Order Specific.
   * @nullable
   */
  declare isReturnAddressOrderSpecific?: NoYes | null;
  /**
   * Return Address County Id.
   * @nullable
   */
  declare returnAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Name.
   * @nullable
   */
  declare returnAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rma Number.
   * @nullable
   */
  declare rmaNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address State Id.
   * @nullable
   */
  declare returnAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address District Name.
   * @nullable
   */
  declare returnAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Status.
   * @nullable
   */
  declare returnStatus?: ReturnStatusHeader | null;
  /**
   * Order Total Amount.
   */
  declare orderTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Return Reason Code.
   * @nullable
   */
  declare customerReturnReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Return Address.
   * @nullable
   */
  declare formattedReturnAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Postal Address Rec Id.
   */
  declare returnPostalAddressRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Total Discount Amount.
   */
  declare totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Return Address Private.
   * @nullable
   */
  declare isReturnAddressPrivate?: NoYes | null;
  /**
   * Customer Requisition Number.
   * @nullable
   */
  declare customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Country Region Id.
   * @nullable
   */
  declare returnAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Return Address City.
   * @nullable
   */
  declare returnAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Latitude.
   */
  declare returnAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return Address Description.
   * @nullable
   */
  declare returnAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Deadline.
   */
  declare returnDeadline: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Return Address Post Box.
   * @nullable
   */
  declare returnAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address Longitude.
   */
  declare returnAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Return Warehouse Id.
   * @nullable
   */
  declare defaultReturnWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CdsReturnOrderLines} entity.
   */
  declare cdsReturnOrderLine: CdsReturnOrderLines<T>[];

  constructor(_entityApi: CdsReturnOrderHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface CdsReturnOrderHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  returnOrderNumber: DeserializedType<T, 'Edm.String'>;
  orderTotalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  returnAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  defaultReturnSiteId?: DeserializedType<T, 'Edm.String'> | null;
  customersOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  returnOrderStatus?: SalesStatus | null;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressTimeZone?: Timezone | null;
  isReturnProcessingStopped?: NoYes | null;
  returnAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  orderTotalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  invoiceCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  isReturnAddressOrderSpecific?: NoYes | null;
  returnAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressName?: DeserializedType<T, 'Edm.String'> | null;
  rmaNumber?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  returnStatus?: ReturnStatusHeader | null;
  orderTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  customerReturnReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  formattedReturnAddress?: DeserializedType<T, 'Edm.String'> | null;
  returnPostalAddressRecId: DeserializedType<T, 'Edm.Int64'>;
  totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  isReturnAddressPrivate?: NoYes | null;
  customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  returnAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  returnDeadline: DeserializedType<T, 'Edm.DateTimeOffset'>;
  returnAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  defaultReturnWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  cdsReturnOrderLine: CdsReturnOrderLinesType<T>[];
}
