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
import type { RetailMixAndMatchLineGroupSetupsApi } from './RetailMixAndMatchLineGroupSetupsApi';

/**
 * This class represents the entity "RetailMixAndMatchLineGroupSetups" of service "d365_metadata".
 */
export class RetailMixAndMatchLineGroupSetups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailMixAndMatchLineGroupSetupsType<T>
{
  /**
   * Technical entity name for RetailMixAndMatchLineGroupSetups.
   */
  static override _entityName = 'RetailMixAndMatchLineGroupSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailMixAndMatchLineGroupSetups entity.
   */
  static _keys = ['dataAreaId', 'mixAndMatchLineGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Mix And Match Line Group.
   */
  declare mixAndMatchLineGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Discount Line Color Id.
   */
  declare discountLineColorId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Number Of Items Needed.
   */
  declare numberOfItemsNeeded: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: RetailMixAndMatchLineGroupSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailMixAndMatchLineGroupSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  mixAndMatchLineGroup: DeserializedType<T, 'Edm.String'>;
  discountLineColorId: DeserializedType<T, 'Edm.Int32'>;
  numberOfItemsNeeded: DeserializedType<T, 'Edm.Int32'>;
}
