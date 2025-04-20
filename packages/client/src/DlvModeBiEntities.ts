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
import type { DlvModeBiEntitiesApi } from './DlvModeBiEntitiesApi';
import { ShipCarrierDlvType } from './ShipCarrierDlvType';

/**
 * This class represents the entity "DlvModeBiEntities" of service "d365_metadata".
 */
export class DlvModeBiEntities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DlvModeBiEntitiesType<T>
{
  /**
   * Technical entity name for DlvModeBiEntities.
   */
  static override _entityName = 'DlvModeBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DlvModeBiEntities entity.
   */
  static _keys = ['dataAreaId', 'Code'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Markup Group.
   * @nullable
   */
  declare markupGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mcr Expedite.
   * @nullable
   */
  declare mcrExpedite?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Carrier Id.
   * @nullable
   */
  declare shipCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Carrier Dlv Type.
   * @nullable
   */
  declare shipCarrierDlvType?: ShipCarrierDlvType | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Carrier Account Code.
   * @nullable
   */
  declare shipCarrierAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Carrier Name.
   * @nullable
   */
  declare shipCarrierName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Txt.
   * @nullable
   */
  declare txt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transport.
   * @nullable
   */
  declare transport?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DlvModeBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface DlvModeBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  markupGroup?: DeserializedType<T, 'Edm.String'> | null;
  mcrExpedite?: DeserializedType<T, 'Edm.String'> | null;
  shipCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  shipCarrierDlvType?: ShipCarrierDlvType | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  shipCarrierAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  shipCarrierName?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  txt?: DeserializedType<T, 'Edm.String'> | null;
  transport?: DeserializedType<T, 'Edm.String'> | null;
}
