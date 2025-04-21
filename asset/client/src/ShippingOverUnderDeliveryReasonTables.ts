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
import type { ShippingOverUnderDeliveryReasonTablesApi } from './ShippingOverUnderDeliveryReasonTablesApi';

/**
 * This class represents the entity "ShippingOverUnderDeliveryReasonTables" of service "d365_metadata".
 */
export class ShippingOverUnderDeliveryReasonTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShippingOverUnderDeliveryReasonTablesType<T>
{
  /**
   * Technical entity name for ShippingOverUnderDeliveryReasonTables.
   */
  static override _entityName = 'ShippingOverUnderDeliveryReasonTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShippingOverUnderDeliveryReasonTables entity.
   */
  static _keys = ['dataAreaId', 'ReasonId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Reason Id.
   */
  declare reasonId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Movement Journal Name Id.
   * @nullable
   */
  declare inventoryMovementJournalNameId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Reason Description.
   * @nullable
   */
  declare reasonDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ShippingOverUnderDeliveryReasonTablesApi<T>) {
    super(_entityApi);
  }
}

export interface ShippingOverUnderDeliveryReasonTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reasonId: DeserializedType<T, 'Edm.String'>;
  inventoryMovementJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  reasonDescription?: DeserializedType<T, 'Edm.String'> | null;
}
