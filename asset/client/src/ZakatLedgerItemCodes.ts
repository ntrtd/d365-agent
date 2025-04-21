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
import type { ZakatLedgerItemCodesApi } from './ZakatLedgerItemCodesApi';
import { NoYes } from './NoYes';
import { LedgerItemTypeZakatSa } from './LedgerItemTypeZakatSa';

/**
 * This class represents the entity "ZakatLedgerItemCodes" of service "d365_metadata".
 */
export class ZakatLedgerItemCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ZakatLedgerItemCodesType<T>
{
  /**
   * Technical entity name for ZakatLedgerItemCodes.
   */
  static override _entityName = 'ZakatLedgerItemCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ZakatLedgerItemCodes entity.
   */
  static _keys = ['dataAreaId', 'ItemCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Code.
   */
  declare itemCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Cost.
   * @nullable
   */
  declare isCost?: NoYes | null;
  /**
   * Is Asset.
   * @nullable
   */
  declare isAsset?: NoYes | null;
  /**
   * Is Revenue.
   * @nullable
   */
  declare isRevenue?: NoYes | null;
  /**
   * Is Balance.
   * @nullable
   */
  declare isBalance?: NoYes | null;
  /**
   * Is Liability.
   * @nullable
   */
  declare isLiability?: NoYes | null;
  /**
   * Item Type.
   * @nullable
   */
  declare itemType?: LedgerItemTypeZakatSa | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Profit Loss.
   * @nullable
   */
  declare isProfitLoss?: NoYes | null;

  constructor(_entityApi: ZakatLedgerItemCodesApi<T>) {
    super(_entityApi);
  }
}

export interface ZakatLedgerItemCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemCode: DeserializedType<T, 'Edm.String'>;
  isCost?: NoYes | null;
  isAsset?: NoYes | null;
  isRevenue?: NoYes | null;
  isBalance?: NoYes | null;
  isLiability?: NoYes | null;
  itemType?: LedgerItemTypeZakatSa | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isProfitLoss?: NoYes | null;
}
