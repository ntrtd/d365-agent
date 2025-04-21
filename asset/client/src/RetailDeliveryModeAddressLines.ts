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
import type { RetailDeliveryModeAddressLinesApi } from './RetailDeliveryModeAddressLinesApi';
import { RetailDlvModeExcludeIncludeType } from './RetailDlvModeExcludeIncludeType';

/**
 * This class represents the entity "RetailDeliveryModeAddressLines" of service "d365_metadata".
 */
export class RetailDeliveryModeAddressLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailDeliveryModeAddressLinesType<T>
{
  /**
   * Technical entity name for RetailDeliveryModeAddressLines.
   */
  static override _entityName = 'RetailDeliveryModeAddressLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailDeliveryModeAddressLines entity.
   */
  static _keys = [
    'dataAreaId',
    'CountryRegion',
    'LineType',
    'State',
    'DeliveryMode'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region.
   */
  declare countryRegion: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Type.
   * @nullable
   */
  declare lineType?: RetailDlvModeExcludeIncludeType | null;
  /**
   * State.
   */
  declare state: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivery Mode.
   */
  declare deliveryMode: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: RetailDeliveryModeAddressLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailDeliveryModeAddressLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  countryRegion: DeserializedType<T, 'Edm.String'>;
  lineType?: RetailDlvModeExcludeIncludeType | null;
  state: DeserializedType<T, 'Edm.String'>;
  deliveryMode: DeserializedType<T, 'Edm.String'>;
}
