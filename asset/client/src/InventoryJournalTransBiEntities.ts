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
import type { InventoryJournalTransBiEntitiesApi } from './InventoryJournalTransBiEntitiesApi';
import { ExciseTypeIn } from './ExciseTypeIn';
import { InventJournalType } from './InventJournalType';
import { ExciseRecordTypeIn } from './ExciseRecordTypeIn';
import { NoYes } from './NoYes';
import { AssetTransTypeJournal } from './AssetTransTypeJournal';
import { CostProfitSet } from './CostProfitSet';
import { InventRefType } from './InventRefType';

/**
 * This class represents the entity "InventoryJournalTransBiEntities" of service "d365_metadata".
 */
export class InventoryJournalTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryJournalTransBiEntitiesType<T>
{
  /**
   * Technical entity name for InventoryJournalTransBiEntities.
   */
  static override _entityName = 'InventoryJournalTransBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryJournalTransBiEntities entity.
   */
  static _keys = ['dataAreaId', 'JournalId', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Id.
   */
  declare journalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent On Hand.
   */
  declare inventOnHand: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price Unit.
   */
  declare priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Excise Tariff Codes In.
   */
  declare exciseTariffCodesIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Proj Tax Item Group Id.
   * @nullable
   */
  declare projTaxItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Tax Group Id.
   * @nullable
   */
  declare projTaxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Excise Type In.
   * @nullable
   */
  declare exciseTypeIn?: ExciseTypeIn | null;
  /**
   * Proj Trans Id.
   * @nullable
   */
  declare projTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Type.
   * @nullable
   */
  declare journalType?: InventJournalType | null;
  /**
   * Pds Cw Invent On Hand.
   */
  declare pdsCwInventOnHand: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cost Amount.
   */
  declare costAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Counting Reason Code.
   * @nullable
   */
  declare countingReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Excise Record Type In.
   * @nullable
   */
  declare exciseRecordTypeIn?: ExciseRecordTypeIn | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Fulfillment Date Hu.
   */
  declare intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invent Ref Id.
   * @nullable
   */
  declare inventRefId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dsa In.
   * @nullable
   */
  declare dsaIn?: NoYes | null;
  /**
   * Warehouse Location In.
   */
  declare warehouseLocationIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bom Line.
   * @nullable
   */
  declare bomLine?: NoYes | null;
  /**
   * To Invent Dim Id.
   * @nullable
   */
  declare toInventDimId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Trans Type.
   * @nullable
   */
  declare assetTransType?: AssetTransTypeJournal | null;
  /**
   * Invent Trans Id Father.
   * @nullable
   */
  declare inventTransIdFather?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Dimension.
   */
  declare ledgerDimension: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Proj Sales Price.
   */
  declare projSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pds Cw Qty.
   */
  declare pdsCwQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Amount.
   */
  declare salesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Trans Id Return.
   * @nullable
   */
  declare inventTransIdReturn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Service Adjustment Offset Datasource.
   * @nullable
   */
  declare inventoryServiceAdjustmentOffsetDatasource?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pds Copy Batch Attrib.
   * @nullable
   */
  declare pdsCopyBatchAttrib?: NoYes | null;
  /**
   * Sub Bill Deferral Rec Id Original.
   */
  declare subBillDeferralRecIdOriginal: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Asset Id.
   * @nullable
   */
  declare assetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit.
   * @nullable
   */
  declare unit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Profit Set.
   * @nullable
   */
  declare profitSet?: CostProfitSet | null;
  /**
   * To Invent Trans Id.
   * @nullable
   */
  declare toInventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Line Property Id.
   * @nullable
   */
  declare projLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Req Po Id.
   * @nullable
   */
  declare reqPoId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Release Date.
   */
  declare releaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Proj Category Id.
   * @nullable
   */
  declare projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Information Subcode Id Ex 2.
   * @nullable
   */
  declare retailInformationSubcodeIdEx2?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Scrap Type Id Ru.
   * @nullable
   */
  declare scrapTypeIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Infocode Id Ex 2.
   * @nullable
   */
  declare retailInfocodeIdEx2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ent Asset Work Order Line.
   */
  declare entAssetWorkOrderLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Inventory Service Adjustment Offset Physical Measure.
   * @nullable
   */
  declare inventoryServiceAdjustmentOffsetPhysicalMeasure?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pds Cw Invent Qty Counted.
   */
  declare pdsCwInventQtyCounted: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Ref Type.
   * @nullable
   */
  declare inventRefType?: InventRefType | null;
  /**
   * Proj Sales Currency Id.
   * @nullable
   */
  declare projSalesCurrencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Markup.
   */
  declare costMarkup: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postal Address In.
   */
  declare postalAddressIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Counted.
   */
  declare counted: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Storno Ru.
   * @nullable
   */
  declare stornoRu?: NoYes | null;
  /**
   * Cost Price.
   */
  declare costPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Ref Trans Id.
   * @nullable
   */
  declare inventRefTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Service Transaction Id.
   * @nullable
   */
  declare inventoryServiceTransactionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Packed Extensions.
   * @nullable
   */
  declare packedExtensions?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Invent Trans Id.
   * @nullable
   */
  declare inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker.
   */
  declare worker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Itm Over Under Transfer.
   * @nullable
   */
  declare itmOverUnderTransfer?: NoYes | null;
  /**
   * Unit Qty.
   */
  declare unitQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Unit Id.
   * @nullable
   */
  declare projUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dim Id.
   * @nullable
   */
  declare inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Book Id.
   * @nullable
   */
  declare assetBookId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: InventoryJournalTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryJournalTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  inventOnHand: DeserializedType<T, 'Edm.Decimal'>;
  priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  exciseTariffCodesIn: DeserializedType<T, 'Edm.Int64'>;
  projTaxItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  projTaxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  exciseTypeIn?: ExciseTypeIn | null;
  projTransId?: DeserializedType<T, 'Edm.String'> | null;
  journalType?: InventJournalType | null;
  pdsCwInventOnHand: DeserializedType<T, 'Edm.Decimal'>;
  costAmount: DeserializedType<T, 'Edm.Decimal'>;
  countingReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  exciseRecordTypeIn?: ExciseRecordTypeIn | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventRefId?: DeserializedType<T, 'Edm.String'> | null;
  dsaIn?: NoYes | null;
  warehouseLocationIn: DeserializedType<T, 'Edm.Int64'>;
  bomLine?: NoYes | null;
  toInventDimId?: DeserializedType<T, 'Edm.String'> | null;
  assetTransType?: AssetTransTypeJournal | null;
  inventTransIdFather?: DeserializedType<T, 'Edm.String'> | null;
  ledgerDimension: DeserializedType<T, 'Edm.Int64'>;
  projSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  pdsCwQty: DeserializedType<T, 'Edm.Decimal'>;
  salesAmount: DeserializedType<T, 'Edm.Decimal'>;
  inventTransIdReturn?: DeserializedType<T, 'Edm.String'> | null;
  inventoryServiceAdjustmentOffsetDatasource?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  pdsCopyBatchAttrib?: NoYes | null;
  subBillDeferralRecIdOriginal: DeserializedType<T, 'Edm.Int64'>;
  assetId?: DeserializedType<T, 'Edm.String'> | null;
  unit?: DeserializedType<T, 'Edm.String'> | null;
  profitSet?: CostProfitSet | null;
  toInventTransId?: DeserializedType<T, 'Edm.String'> | null;
  projLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  reqPoId?: DeserializedType<T, 'Edm.String'> | null;
  releaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  retailInformationSubcodeIdEx2?: DeserializedType<T, 'Edm.String'> | null;
  scrapTypeIdRu?: DeserializedType<T, 'Edm.String'> | null;
  retailInfocodeIdEx2?: DeserializedType<T, 'Edm.String'> | null;
  entAssetWorkOrderLine: DeserializedType<T, 'Edm.Int64'>;
  inventoryServiceAdjustmentOffsetPhysicalMeasure?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  pdsCwInventQtyCounted: DeserializedType<T, 'Edm.Decimal'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  inventRefType?: InventRefType | null;
  projSalesCurrencyId?: DeserializedType<T, 'Edm.String'> | null;
  costMarkup: DeserializedType<T, 'Edm.Decimal'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  postalAddressIn: DeserializedType<T, 'Edm.Int64'>;
  counted: DeserializedType<T, 'Edm.Decimal'>;
  stornoRu?: NoYes | null;
  costPrice: DeserializedType<T, 'Edm.Decimal'>;
  inventRefTransId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryServiceTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  packedExtensions?: DeserializedType<T, 'Edm.Binary'> | null;
  inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  worker: DeserializedType<T, 'Edm.Int64'>;
  itmOverUnderTransfer?: NoYes | null;
  unitQty: DeserializedType<T, 'Edm.Decimal'>;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  projUnitId?: DeserializedType<T, 'Edm.String'> | null;
  inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  assetBookId?: DeserializedType<T, 'Edm.String'> | null;
}
