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
import type { InventDimBiEntitiesApi } from './InventDimBiEntitiesApi';

/**
 * This class represents the entity "InventDimBiEntities" of service "d365_metadata".
 */
export class InventDimBiEntities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InventDimBiEntitiesType<T>
{
  /**
   * Technical entity name for InventDimBiEntities.
   */
  static override _entityName = 'InventDimBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventDimBiEntities entity.
   */
  static _keys = ['dataAreaId', 'inventDimId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invent Dim Id.
   */
  declare inventDimId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invent Gtd Id Ru.
   * @nullable
   */
  declare inventGtdIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Config Id.
   * @nullable
   */
  declare configId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Profile Id Ru.
   * @nullable
   */
  declare inventProfileIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Site Id.
   * @nullable
   */
  declare inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 6.
   * @nullable
   */
  declare inventDimension6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Status Id.
   * @nullable
   */
  declare inventStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 9.
   */
  declare inventDimension9: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Created Date Time.
   */
  declare sysCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invent Color Id.
   * @nullable
   */
  declare inventColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 4.
   * @nullable
   */
  declare inventDimension4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Version Id.
   * @nullable
   */
  declare inventVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Batch Id.
   * @nullable
   */
  declare inventBatchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Owner Id Ru.
   * @nullable
   */
  declare inventOwnerIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Size Id.
   * @nullable
   */
  declare inventSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 3.
   * @nullable
   */
  declare inventDimension3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * W Ms Location Id.
   * @nullable
   */
  declare wMsLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Invent Dimension 8.
   * @nullable
   */
  declare inventDimension8?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Serial Id.
   * @nullable
   */
  declare inventSerialId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 1.
   * @nullable
   */
  declare inventDimension1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Location Id.
   * @nullable
   */
  declare inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 7.
   * @nullable
   */
  declare inventDimension7?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invent Dimension 10.
   */
  declare inventDimension10: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Dimension 11.
   * @nullable
   */
  declare inventDimension11?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 12.
   * @nullable
   */
  declare inventDimension12?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 5.
   * @nullable
   */
  declare inventDimension5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * License Plate Id.
   * @nullable
   */
  declare licensePlateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sha 1 Hash Hex.
   * @nullable
   */
  declare sha1HashHex?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invent Dimension 2.
   * @nullable
   */
  declare inventDimension2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sha 3 Hash Hex.
   * @nullable
   */
  declare sha3HashHex?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Style Id.
   * @nullable
   */
  declare inventStyleId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: InventDimBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface InventDimBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventDimId: DeserializedType<T, 'Edm.String'>;
  inventGtdIdRu?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  configId?: DeserializedType<T, 'Edm.String'> | null;
  inventProfileIdRu?: DeserializedType<T, 'Edm.String'> | null;
  inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension6?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  inventStatusId?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension9: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventColorId?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension4?: DeserializedType<T, 'Edm.String'> | null;
  inventVersionId?: DeserializedType<T, 'Edm.String'> | null;
  inventBatchId?: DeserializedType<T, 'Edm.String'> | null;
  inventOwnerIdRu?: DeserializedType<T, 'Edm.String'> | null;
  inventSizeId?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension3?: DeserializedType<T, 'Edm.String'> | null;
  wMsLocationId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  inventDimension8?: DeserializedType<T, 'Edm.String'> | null;
  inventSerialId?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension1?: DeserializedType<T, 'Edm.String'> | null;
  inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension7?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  inventDimension10: DeserializedType<T, 'Edm.Decimal'>;
  inventDimension11?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension12?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension5?: DeserializedType<T, 'Edm.String'> | null;
  licensePlateId?: DeserializedType<T, 'Edm.String'> | null;
  sha1HashHex?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventDimension2?: DeserializedType<T, 'Edm.String'> | null;
  sha3HashHex?: DeserializedType<T, 'Edm.String'> | null;
  inventStyleId?: DeserializedType<T, 'Edm.String'> | null;
}
