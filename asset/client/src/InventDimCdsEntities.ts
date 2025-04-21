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
import type { InventDimCdsEntitiesApi } from './InventDimCdsEntitiesApi';

/**
 * This class represents the entity "InventDimCDSEntities" of service "d365_metadata".
 */
export class InventDimCdsEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventDimCdsEntitiesType<T>
{
  /**
   * Technical entity name for InventDimCdsEntities.
   */
  static override _entityName = 'InventDimCDSEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventDimCdsEntities entity.
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
   * W Ms Pallet Id.
   * @nullable
   */
  declare wMsPalletId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 10.
   */
  declare inventDimension10: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sha 3 Hash Hex.
   * @nullable
   */
  declare sha3HashHex?: DeserializedType<T, 'Edm.String'> | null;
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
   * Invent Dimension 7.
   * @nullable
   */
  declare inventDimension7?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 8.
   * @nullable
   */
  declare inventDimension8?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Profile Id Ru.
   * @nullable
   */
  declare inventProfileIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Code.
   * @nullable
   */
  declare companyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 2.
   * @nullable
   */
  declare inventDimension2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 1.
   * @nullable
   */
  declare inventDimension1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 9.
   */
  declare inventDimension9: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invent Dimension 4.
   * @nullable
   */
  declare inventDimension4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invent Color Id.
   * @nullable
   */
  declare inventColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Size Id.
   * @nullable
   */
  declare inventSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * W Ms Location Id.
   * @nullable
   */
  declare wMsLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Location Id.
   * @nullable
   */
  declare inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 3.
   * @nullable
   */
  declare inventDimension3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 6.
   * @nullable
   */
  declare inventDimension6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Owner Id Ru.
   * @nullable
   */
  declare inventOwnerIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Version Id.
   * @nullable
   */
  declare inventVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Style Id.
   * @nullable
   */
  declare inventStyleId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Invent Site Id.
   * @nullable
   */
  declare inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sha 1 Hash Hex.
   * @nullable
   */
  declare sha1HashHex?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Status Id.
   * @nullable
   */
  declare inventStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Gtd Id Ru.
   * @nullable
   */
  declare inventGtdIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Serial Id.
   * @nullable
   */
  declare inventSerialId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Config Id.
   * @nullable
   */
  declare configId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Batch Id.
   * @nullable
   */
  declare inventBatchId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: InventDimCdsEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface InventDimCdsEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventDimId: DeserializedType<T, 'Edm.String'>;
  wMsPalletId?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension10: DeserializedType<T, 'Edm.Decimal'>;
  sha3HashHex?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension11?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension12?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension7?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension8?: DeserializedType<T, 'Edm.String'> | null;
  inventProfileIdRu?: DeserializedType<T, 'Edm.String'> | null;
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension2?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension1?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension9: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventDimension4?: DeserializedType<T, 'Edm.String'> | null;
  recordId: DeserializedType<T, 'Edm.Int64'>;
  inventColorId?: DeserializedType<T, 'Edm.String'> | null;
  inventSizeId?: DeserializedType<T, 'Edm.String'> | null;
  wMsLocationId?: DeserializedType<T, 'Edm.String'> | null;
  inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension3?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension6?: DeserializedType<T, 'Edm.String'> | null;
  inventOwnerIdRu?: DeserializedType<T, 'Edm.String'> | null;
  inventVersionId?: DeserializedType<T, 'Edm.String'> | null;
  inventStyleId?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension5?: DeserializedType<T, 'Edm.String'> | null;
  licensePlateId?: DeserializedType<T, 'Edm.String'> | null;
  inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  sha1HashHex?: DeserializedType<T, 'Edm.String'> | null;
  inventStatusId?: DeserializedType<T, 'Edm.String'> | null;
  inventGtdIdRu?: DeserializedType<T, 'Edm.String'> | null;
  inventSerialId?: DeserializedType<T, 'Edm.String'> | null;
  configId?: DeserializedType<T, 'Edm.String'> | null;
  inventBatchId?: DeserializedType<T, 'Edm.String'> | null;
}
