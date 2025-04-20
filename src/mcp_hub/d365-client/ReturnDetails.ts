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
import type { ReturnDetailsApi } from './ReturnDetailsApi';
import { WhsReturnDetailOrderType } from './WhsReturnDetailOrderType';

/**
 * This class represents the entity "ReturnDetails" of service "d365_metadata".
 */
export class ReturnDetails<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ReturnDetailsType<T>
{
  /**
   * Technical entity name for ReturnDetails.
   */
  static override _entityName = 'ReturnDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReturnDetails entity.
   */
  static _keys = ['dataAreaId', 'ReturnID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Return Id.
   */
  declare returnId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipment Date.
   */
  declare shipmentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Account Name.
   * @nullable
   */
  declare accountName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Num.
   * @nullable
   */
  declare accountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Carrier Service Code.
   * @nullable
   */
  declare carrierServiceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Carrier Return Tracking Number.
   * @nullable
   */
  declare carrierReturnTrackingNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Return Address Name.
   * @nullable
   */
  declare returnAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipment Id.
   * @nullable
   */
  declare shipmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Type.
   * @nullable
   */
  declare orderType?: WhsReturnDetailOrderType | null;
  /**
   * Container Id.
   * @nullable
   */
  declare containerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Printed Date And Time.
   */
  declare printedDateAndTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Carrier Code.
   * @nullable
   */
  declare carrierCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Address.
   * @nullable
   */
  declare returnAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Number.
   * @nullable
   */
  declare orderNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ReturnDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface ReturnDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  returnId: DeserializedType<T, 'Edm.String'>;
  shipmentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  accountName?: DeserializedType<T, 'Edm.String'> | null;
  accountNum?: DeserializedType<T, 'Edm.String'> | null;
  carrierServiceCode?: DeserializedType<T, 'Edm.String'> | null;
  carrierReturnTrackingNumber?: DeserializedType<T, 'Edm.String'> | null;
  returnAddressName?: DeserializedType<T, 'Edm.String'> | null;
  shipmentId?: DeserializedType<T, 'Edm.String'> | null;
  orderType?: WhsReturnDetailOrderType | null;
  containerId?: DeserializedType<T, 'Edm.String'> | null;
  printedDateAndTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  carrierCode?: DeserializedType<T, 'Edm.String'> | null;
  returnAddress?: DeserializedType<T, 'Edm.String'> | null;
  orderNumber?: DeserializedType<T, 'Edm.String'> | null;
}
