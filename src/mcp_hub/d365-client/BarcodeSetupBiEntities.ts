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
import type { BarcodeSetupBiEntitiesApi } from './BarcodeSetupBiEntitiesApi';
import { BarcodeType } from './BarcodeType';

/**
 * This class represents the entity "BarcodeSetupBiEntities" of service "d365_metadata".
 */
export class BarcodeSetupBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BarcodeSetupBiEntitiesType<T>
{
  /**
   * Technical entity name for BarcodeSetupBiEntities.
   */
  static override _entityName = 'BarcodeSetupBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BarcodeSetupBiEntities entity.
   */
  static _keys = ['dataAreaId', 'barcodeSetupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Barcode Setup Id.
   */
  declare barcodeSetupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Minimum Length.
   */
  declare minimumLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Retail Barcode Mask.
   * @nullable
   */
  declare retailBarcodeMask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Barcode Type.
   * @nullable
   */
  declare barcodeType?: BarcodeType | null;
  /**
   * Font Size.
   */
  declare fontSize: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Maximum Length.
   */
  declare maximumLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Font Name.
   * @nullable
   */
  declare fontName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: BarcodeSetupBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface BarcodeSetupBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  barcodeSetupId: DeserializedType<T, 'Edm.String'>;
  minimumLength: DeserializedType<T, 'Edm.Int32'>;
  retailBarcodeMask?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  barcodeType?: BarcodeType | null;
  fontSize: DeserializedType<T, 'Edm.Int32'>;
  maximumLength: DeserializedType<T, 'Edm.Int32'>;
  fontName?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
