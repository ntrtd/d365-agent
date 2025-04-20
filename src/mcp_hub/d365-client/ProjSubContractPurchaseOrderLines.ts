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
import type { ProjSubContractPurchaseOrderLinesApi } from './ProjSubContractPurchaseOrderLinesApi';
import { ProjSubConLineStatus } from './ProjSubConLineStatus';
import { PurchStatus } from './PurchStatus';
import { ProjSubConLineType } from './ProjSubConLineType';
import { ProjSubConTransClass } from './ProjSubConTransClass';

/**
 * This class represents the entity "ProjSubContractPurchaseOrderLines" of service "d365_metadata".
 */
export class ProjSubContractPurchaseOrderLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjSubContractPurchaseOrderLinesType<T>
{
  /**
   * Technical entity name for ProjSubContractPurchaseOrderLines.
   */
  static override _entityName = 'ProjSubContractPurchaseOrderLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjSubContractPurchaseOrderLines entity.
   */
  static _keys = ['dataAreaId', 'ProjSubContractLineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Proj Sub Contract Line Number.
   */
  declare projSubContractLineNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Purch Qty.
   */
  declare purchQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Con Line Status.
   * @nullable
   */
  declare subConLineStatus?: ProjSubConLineStatus | null;
  /**
   * Procurement Category.
   */
  declare procurementCategory: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Subcontract Number.
   * @nullable
   */
  declare subcontractNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Con Role Id.
   * @nullable
   */
  declare subConRoleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Unit.
   * @nullable
   */
  declare purchUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Price.
   */
  declare purchPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purch Id.
   * @nullable
   */
  declare purchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Status.
   * @nullable
   */
  declare purchStatus?: PurchStatus | null;
  /**
   * Sub Con Trans Category.
   * @nullable
   */
  declare subConTransCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Con Write In Name.
   * @nullable
   */
  declare subConWriteInName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Con Line Type.
   * @nullable
   */
  declare subConLineType?: ProjSubConLineType | null;
  /**
   * Delivery Date.
   */
  declare deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sub Con Trans Class.
   * @nullable
   */
  declare subConTransClass?: ProjSubConTransClass | null;

  constructor(_entityApi: ProjSubContractPurchaseOrderLinesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjSubContractPurchaseOrderLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projSubContractLineNumber: DeserializedType<T, 'Edm.String'>;
  purchQty: DeserializedType<T, 'Edm.Decimal'>;
  subConLineStatus?: ProjSubConLineStatus | null;
  procurementCategory: DeserializedType<T, 'Edm.Int64'>;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  subcontractNumber?: DeserializedType<T, 'Edm.String'> | null;
  subConRoleId?: DeserializedType<T, 'Edm.String'> | null;
  purchUnit?: DeserializedType<T, 'Edm.String'> | null;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  purchPrice: DeserializedType<T, 'Edm.Decimal'>;
  purchId?: DeserializedType<T, 'Edm.String'> | null;
  purchStatus?: PurchStatus | null;
  subConTransCategory?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  subConWriteInName?: DeserializedType<T, 'Edm.String'> | null;
  subConLineType?: ProjSubConLineType | null;
  deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  subConTransClass?: ProjSubConTransClass | null;
}
