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
import type { DeliveryModeChannelLinesApi } from './DeliveryModeChannelLinesApi';
import { DeliveryModesV2, DeliveryModesV2Type } from './DeliveryModesV2';

/**
 * This class represents the entity "DeliveryModeChannelLines" of service "d365_metadata".
 */
export class DeliveryModeChannelLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DeliveryModeChannelLinesType<T>
{
  /**
   * Technical entity name for DeliveryModeChannelLines.
   */
  static override _entityName = 'DeliveryModeChannelLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DeliveryModeChannelLines entity.
   */
  static _keys = [
    'dataAreaId',
    'ModeOfDeliveryCode',
    'PartyNumber',
    'OrganizationHierarchyType'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Mode Of Delivery Code.
   */
  declare modeOfDeliveryCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Organization Hierarchy Type.
   */
  declare organizationHierarchyType: DeserializedType<T, 'Edm.String'>;
  /**
   * Organization Name.
   * @nullable
   */
  declare organizationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DeliveryModesV2} entity.
   */
  declare deliveryModeV2?: DeliveryModesV2<T> | null;

  constructor(_entityApi: DeliveryModeChannelLinesApi<T>) {
    super(_entityApi);
  }
}

export interface DeliveryModeChannelLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  modeOfDeliveryCode: DeserializedType<T, 'Edm.String'>;
  partyNumber: DeserializedType<T, 'Edm.String'>;
  organizationHierarchyType: DeserializedType<T, 'Edm.String'>;
  organizationName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeV2?: DeliveryModesV2Type<T> | null;
}
