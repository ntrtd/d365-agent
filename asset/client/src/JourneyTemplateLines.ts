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
import type { JourneyTemplateLinesApi } from './JourneyTemplateLinesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "JourneyTemplateLines" of service "d365_metadata".
 */
export class JourneyTemplateLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements JourneyTemplateLinesType<T>
{
  /**
   * Technical entity name for JourneyTemplateLines.
   */
  static override _entityName = 'JourneyTemplateLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JourneyTemplateLines entity.
   */
  static _keys = ['dataAreaId', 'JourneyTemplateId', 'JourneyLegId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journey Template Id.
   */
  declare journeyTemplateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journey Leg Id.
   */
  declare journeyLegId: DeserializedType<T, 'Edm.String'>;
  /**
   * From Shipping Port Id.
   * @nullable
   */
  declare fromShippingPortId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Vendor Account Number.
   * @nullable
   */
  declare shippingVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is From Port Journey Origin Port.
   * @nullable
   */
  declare isFromPortJourneyOriginPort?: NoYes | null;
  /**
   * To Shipping Port Id.
   * @nullable
   */
  declare toShippingPortId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is To Port Journey Destination Port.
   * @nullable
   */
  declare isToPortJourneyDestinationPort?: NoYes | null;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: JourneyTemplateLinesApi<T>) {
    super(_entityApi);
  }
}

export interface JourneyTemplateLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journeyTemplateId: DeserializedType<T, 'Edm.String'>;
  journeyLegId: DeserializedType<T, 'Edm.String'>;
  fromShippingPortId?: DeserializedType<T, 'Edm.String'> | null;
  shippingVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  isFromPortJourneyOriginPort?: NoYes | null;
  toShippingPortId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  isToPortJourneyDestinationPort?: NoYes | null;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
}
