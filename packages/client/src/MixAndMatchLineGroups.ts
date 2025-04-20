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
import type { MixAndMatchLineGroupsApi } from './MixAndMatchLineGroupsApi';

/**
 * This class represents the entity "MixAndMatchLineGroups" of service "d365_metadata".
 */
export class MixAndMatchLineGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MixAndMatchLineGroupsType<T>
{
  /**
   * Technical entity name for MixAndMatchLineGroups.
   */
  static override _entityName = 'MixAndMatchLineGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MixAndMatchLineGroups entity.
   */
  static _keys = ['dataAreaId', 'MixAndMatchOfferId', 'MixAndMatchLineGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Mix And Match Offer Id.
   */
  declare mixAndMatchOfferId: DeserializedType<T, 'Edm.String'>;
  /**
   * Mix And Match Line Group.
   */
  declare mixAndMatchLineGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Discount Line Color.
   */
  declare discountLineColor: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Number Of Items Needed.
   */
  declare numberOfItemsNeeded: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: MixAndMatchLineGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface MixAndMatchLineGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  mixAndMatchOfferId: DeserializedType<T, 'Edm.String'>;
  mixAndMatchLineGroup: DeserializedType<T, 'Edm.String'>;
  discountLineColor: DeserializedType<T, 'Edm.Int32'>;
  numberOfItemsNeeded: DeserializedType<T, 'Edm.Int32'>;
}
