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
import type { SalesOrderHoldCodesApi } from './SalesOrderHoldCodesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "SalesOrderHoldCodes" of service "d365_metadata".
 */
export class SalesOrderHoldCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesOrderHoldCodesType<T>
{
  /**
   * Technical entity name for SalesOrderHoldCodes.
   */
  static override _entityName = 'SalesOrderHoldCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesOrderHoldCodes entity.
   */
  static _keys = ['dataAreaId', 'SalesOrderHoldCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Order Hold Code.
   */
  declare salesOrderHoldCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Associated Security Role Name.
   * @nullable
   */
  declare associatedSecurityRoleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Default Sales Order Hold Code.
   * @nullable
   */
  declare isDefaultSalesOrderHoldCode?: NoYes | null;
  /**
   * Is Hold Code Removing Inventory Reservations.
   * @nullable
   */
  declare isHoldCodeRemovingInventoryReservations?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SalesOrderHoldCodesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderHoldCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesOrderHoldCode: DeserializedType<T, 'Edm.String'>;
  associatedSecurityRoleName?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultSalesOrderHoldCode?: NoYes | null;
  isHoldCodeRemovingInventoryReservations?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
