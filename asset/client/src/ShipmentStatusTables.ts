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
import type { ShipmentStatusTablesApi } from './ShipmentStatusTablesApi';
import { ItmCostArea } from './ItmCostArea';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ShipmentStatusTables" of service "d365_metadata".
 */
export class ShipmentStatusTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShipmentStatusTablesType<T>
{
  /**
   * Technical entity name for ShipmentStatusTables.
   */
  static override _entityName = 'ShipmentStatusTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShipmentStatusTables entity.
   */
  static _keys = ['dataAreaId', 'CostArea', 'StatusId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Area.
   * @nullable
   */
  declare costArea?: ItmCostArea | null;
  /**
   * Status Id.
   */
  declare statusId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Status Mandatory.
   * @nullable
   */
  declare isStatusMandatory?: NoYes | null;
  /**
   * Status Description.
   * @nullable
   */
  declare statusDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Status Id.
   * @nullable
   */
  declare parentStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Status Allowing Modification.
   * @nullable
   */
  declare isStatusAllowingModification?: NoYes | null;
  /**
   * Is Status Allowing Delete.
   * @nullable
   */
  declare isStatusAllowingDelete?: NoYes | null;

  constructor(_entityApi: ShipmentStatusTablesApi<T>) {
    super(_entityApi);
  }
}

export interface ShipmentStatusTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  costArea?: ItmCostArea | null;
  statusId: DeserializedType<T, 'Edm.String'>;
  isStatusMandatory?: NoYes | null;
  statusDescription?: DeserializedType<T, 'Edm.String'> | null;
  parentStatusId?: DeserializedType<T, 'Edm.String'> | null;
  isStatusAllowingModification?: NoYes | null;
  isStatusAllowingDelete?: NoYes | null;
}
