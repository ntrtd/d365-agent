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
import type { RetailChannelPaymentConnectorLinesApi } from './RetailChannelPaymentConnectorLinesApi';
import { OnlineChannels, OnlineChannelsType } from './OnlineChannels';

/**
 * This class represents the entity "RetailChannelPaymentConnectorLines" of service "d365_metadata".
 */
export class RetailChannelPaymentConnectorLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailChannelPaymentConnectorLinesType<T>
{
  /**
   * Technical entity name for RetailChannelPaymentConnectorLines.
   */
  static override _entityName = 'RetailChannelPaymentConnectorLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailChannelPaymentConnectorLines entity.
   */
  static _keys = ['OperatingUnitNumber', 'PaymentConnectorName'];
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Connector Name.
   */
  declare paymentConnectorName: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Connector Properties.
   * @nullable
   */
  declare paymentConnectorProperties?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link OnlineChannels} entity.
   */
  declare onlineChannel?: OnlineChannels<T> | null;

  constructor(_entityApi: RetailChannelPaymentConnectorLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailChannelPaymentConnectorLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  paymentConnectorName: DeserializedType<T, 'Edm.String'>;
  paymentConnectorProperties?: DeserializedType<T, 'Edm.String'> | null;
  onlineChannel?: OnlineChannelsType<T> | null;
}
