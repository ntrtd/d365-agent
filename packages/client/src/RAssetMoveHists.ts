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
import type { RAssetMoveHistsApi } from './RAssetMoveHistsApi';
import { RAssetMoveType } from './RAssetMoveType';

/**
 * This class represents the entity "RAssetMoveHists" of service "d365_metadata".
 */
export class RAssetMoveHists<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RAssetMoveHistsType<T>
{
  /**
   * Technical entity name for RAssetMoveHists.
   */
  static override _entityName = 'RAssetMoveHists';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RAssetMoveHists entity.
   */
  static _keys = ['dataAreaId', 'FAInventoryNumber', 'Date', 'TypeOfTransfer'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fa Inventory Number.
   */
  declare faInventoryNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Type Of Transfer.
   * @nullable
   */
  declare typeOfTransfer?: RAssetMoveType | null;
  /**
   * Fixed Asset.
   * @nullable
   */
  declare fixedAsset?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * New Location.
   * @nullable
   */
  declare newLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Code.
   * @nullable
   */
  declare reasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Comment.
   * @nullable
   */
  declare reasonComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * New Person In Charge.
   * @nullable
   */
  declare newPersonInCharge?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Accounts Id.
   * @nullable
   */
  declare companyAccountsId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RAssetMoveHistsApi<T>) {
    super(_entityApi);
  }
}

export interface RAssetMoveHistsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  faInventoryNumber: DeserializedType<T, 'Edm.String'>;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  typeOfTransfer?: RAssetMoveType | null;
  fixedAsset?: DeserializedType<T, 'Edm.String'> | null;
  newLocation?: DeserializedType<T, 'Edm.String'> | null;
  reasonCode?: DeserializedType<T, 'Edm.String'> | null;
  reasonComment?: DeserializedType<T, 'Edm.String'> | null;
  newPersonInCharge?: DeserializedType<T, 'Edm.String'> | null;
  companyAccountsId?: DeserializedType<T, 'Edm.String'> | null;
}
