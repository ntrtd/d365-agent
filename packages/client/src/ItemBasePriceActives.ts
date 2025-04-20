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
import type { ItemBasePriceActivesApi } from './ItemBasePriceActivesApi';
import { GupBasePriceType } from './GupBasePriceType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ItemBasePriceActives" of service "d365_metadata".
 */
export class ItemBasePriceActives<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ItemBasePriceActivesType<T>
{
  /**
   * Technical entity name for ItemBasePriceActives.
   */
  static override _entityName = 'ItemBasePriceActives';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItemBasePriceActives entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemId',
    'InventDimId',
    'PriceType',
    'ActivationDate',
    'PriceCreatedDateTime'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invent Dim Id.
   */
  declare inventDimId: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Type.
   * @nullable
   */
  declare priceType?: GupBasePriceType | null;
  /**
   * Activation Date.
   */
  declare activationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Price Created Date Time.
   */
  declare priceCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Version Id.
   * @nullable
   */
  declare versionId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Markup.
   */
  declare markup: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Profile Id Ru.
   * @nullable
   */
  declare inventProfileIdRu?: DeserializedType<T, 'Edm.String'> | null;
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
   * Invent Dimension 4.
   * @nullable
   */
  declare inventDimension4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 9.
   */
  declare inventDimension9: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Price.
   */
  declare price: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Color Id.
   * @nullable
   */
  declare inventColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Allocate Markup.
   * @nullable
   */
  declare priceAllocateMarkup?: NoYes | null;
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
   * Markup Qty.
   */
  declare markupQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Dimension 6.
   * @nullable
   */
  declare inventDimension6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Version Id.
   * @nullable
   */
  declare inventVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Owner Id Ru.
   * @nullable
   */
  declare inventOwnerIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension 5.
   * @nullable
   */
  declare inventDimension5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Style Id.
   * @nullable
   */
  declare inventStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Id.
   * @nullable
   */
  declare unitId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Calculated.
   * @nullable
   */
  declare calculated?: NoYes | null;
  /**
   * Sha 1 Hash Hex.
   * @nullable
   */
  declare sha1HashHex?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Qty.
   */
  declare priceQty: DeserializedType<T, 'Edm.Decimal'>;
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
   * Item Display Name.
   * @nullable
   */
  declare itemDisplayName?: DeserializedType<T, 'Edm.String'> | null;
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

  constructor(_entityApi: ItemBasePriceActivesApi<T>) {
    super(_entityApi);
  }
}

export interface ItemBasePriceActivesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  inventDimId: DeserializedType<T, 'Edm.String'>;
  priceType?: GupBasePriceType | null;
  activationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  priceCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventDimension10: DeserializedType<T, 'Edm.Decimal'>;
  inventDimension11?: DeserializedType<T, 'Edm.String'> | null;
  versionId?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension12?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension7?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension8?: DeserializedType<T, 'Edm.String'> | null;
  markup: DeserializedType<T, 'Edm.Decimal'>;
  inventProfileIdRu?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension2?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension1?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension4?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension9: DeserializedType<T, 'Edm.DateTimeOffset'>;
  price: DeserializedType<T, 'Edm.Decimal'>;
  inventColorId?: DeserializedType<T, 'Edm.String'> | null;
  priceAllocateMarkup?: NoYes | null;
  inventSizeId?: DeserializedType<T, 'Edm.String'> | null;
  wMsLocationId?: DeserializedType<T, 'Edm.String'> | null;
  inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension3?: DeserializedType<T, 'Edm.String'> | null;
  markupQty: DeserializedType<T, 'Edm.Decimal'>;
  inventDimension6?: DeserializedType<T, 'Edm.String'> | null;
  inventVersionId?: DeserializedType<T, 'Edm.String'> | null;
  inventOwnerIdRu?: DeserializedType<T, 'Edm.String'> | null;
  inventDimension5?: DeserializedType<T, 'Edm.String'> | null;
  inventStyleId?: DeserializedType<T, 'Edm.String'> | null;
  unitId?: DeserializedType<T, 'Edm.String'> | null;
  licensePlateId?: DeserializedType<T, 'Edm.String'> | null;
  inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  calculated?: NoYes | null;
  sha1HashHex?: DeserializedType<T, 'Edm.String'> | null;
  priceQty: DeserializedType<T, 'Edm.Decimal'>;
  inventStatusId?: DeserializedType<T, 'Edm.String'> | null;
  inventGtdIdRu?: DeserializedType<T, 'Edm.String'> | null;
  itemDisplayName?: DeserializedType<T, 'Edm.String'> | null;
  inventSerialId?: DeserializedType<T, 'Edm.String'> | null;
  configId?: DeserializedType<T, 'Edm.String'> | null;
  inventBatchId?: DeserializedType<T, 'Edm.String'> | null;
}
