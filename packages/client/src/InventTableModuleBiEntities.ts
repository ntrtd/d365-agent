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
import type { InventTableModuleBiEntitiesApi } from './InventTableModuleBiEntitiesApi';
import { ModuleInventPurchSales } from './ModuleInventPurchSales';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "InventTableModuleBiEntities" of service "d365_metadata".
 */
export class InventTableModuleBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventTableModuleBiEntitiesType<T>
{
  /**
   * Technical entity name for InventTableModuleBiEntities.
   */
  static override _entityName = 'InventTableModuleBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventTableModuleBiEntities entity.
   */
  static _keys = ['dataAreaId', 'ItemId', 'ModuleType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Module Type.
   * @nullable
   */
  declare moduleType?: ModuleInventPurchSales | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Supp Item Group Id.
   * @nullable
   */
  declare suppItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maximum Retail Price In.
   */
  declare maximumRetailPriceIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * End Disc.
   * @nullable
   */
  declare endDisc?: NoYes | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Date.
   */
  declare priceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Markup.
   */
  declare markup: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Under Delivery Pct.
   */
  declare underDeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Disc.
   * @nullable
   */
  declare lineDisc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Over Delivery Pct.
   */
  declare overDeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Multi Line Disc.
   * @nullable
   */
  declare multiLineDisc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Item Group Id.
   * @nullable
   */
  declare taxItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Inventory Availability Buffer.
   */
  declare retailInventoryAvailabilityBuffer: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price.
   */
  declare price: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Created Date Time.
   */
  declare sysCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Withhold Item Group Heading Th.
   */
  declare taxWithholdItemGroupHeadingTh: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Allocate Markup.
   * @nullable
   */
  declare allocateMarkup?: NoYes | null;
  /**
   * Inter Company Blocked.
   * @nullable
   */
  declare interCompanyBlocked?: NoYes | null;
  /**
   * Price Unit.
   */
  declare priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Inventory Availability Level Profile.
   * @nullable
   */
  declare retailInventoryAvailabilityLevelProfile?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Price Sec Cur Ru.
   */
  declare priceSecCurRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Gst Relief Category My.
   */
  declare taxGstReliefCategoryMy: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Pds Pricing Precision.
   */
  declare pdsPricingPrecision: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Markup Group Id.
   * @nullable
   */
  declare markupGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Markup Sec Cur Ru.
   */
  declare markupSecCurRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Id.
   * @nullable
   */
  declare unitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Qty.
   */
  declare priceQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Withhold Calculate Th.
   * @nullable
   */
  declare taxWithholdCalculateTh?: NoYes | null;

  constructor(_entityApi: InventTableModuleBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface InventTableModuleBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  moduleType?: ModuleInventPurchSales | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  suppItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  maximumRetailPriceIn: DeserializedType<T, 'Edm.Decimal'>;
  endDisc?: NoYes | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  priceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  markup: DeserializedType<T, 'Edm.Decimal'>;
  underDeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  lineDisc?: DeserializedType<T, 'Edm.String'> | null;
  overDeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  multiLineDisc?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  taxItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  retailInventoryAvailabilityBuffer: DeserializedType<T, 'Edm.Decimal'>;
  price: DeserializedType<T, 'Edm.Decimal'>;
  sysCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxWithholdItemGroupHeadingTh: DeserializedType<T, 'Edm.Int64'>;
  allocateMarkup?: NoYes | null;
  interCompanyBlocked?: NoYes | null;
  priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  retailInventoryAvailabilityLevelProfile?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  priceSecCurRu: DeserializedType<T, 'Edm.Decimal'>;
  taxGstReliefCategoryMy: DeserializedType<T, 'Edm.Int64'>;
  pdsPricingPrecision: DeserializedType<T, 'Edm.Int32'>;
  markupGroupId?: DeserializedType<T, 'Edm.String'> | null;
  markupSecCurRu: DeserializedType<T, 'Edm.Decimal'>;
  unitId?: DeserializedType<T, 'Edm.String'> | null;
  priceQty: DeserializedType<T, 'Edm.Decimal'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxWithholdCalculateTh?: NoYes | null;
}
