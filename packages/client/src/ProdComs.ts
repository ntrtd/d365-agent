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
import type { ProdComsApi } from './ProdComsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ProdComs" of service "d365_metadata".
 */
export class ProdComs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProdComsType<T>
{
  /**
   * Technical entity name for ProdComs.
   */
  static override _entityName = 'ProdComs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProdComs entity.
   */
  static _keys = [
    'dataAreaId',
    'Period',
    'ColumnA',
    'BranchNumber',
    'LineNum',
    'ItemId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Period.
   */
  declare period: DeserializedType<T, 'Edm.String'>;
  /**
   * Column A.
   */
  declare columnA: DeserializedType<T, 'Edm.String'>;
  /**
   * Branch Number.
   */
  declare branchNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Section 4.
   */
  declare section4: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Field 13.
   */
  declare field13: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Field 14.
   */
  declare field14: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Unit Id.
   * @nullable
   */
  declare unitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Section 3.
   */
  declare section3: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Commodity Name.
   * @nullable
   */
  declare commodityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Name.
   * @nullable
   */
  declare salesName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column G.
   */
  declare columnG: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Section 1.
   */
  declare section1: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Column F.
   */
  declare columnF: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Column E.
   */
  declare columnE: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Column D.
   */
  declare columnD: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Column C.
   * @nullable
   */
  declare columnC?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Id.
   * @nullable
   */
  declare salesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column O.
   */
  declare columnO: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Column N.
   */
  declare columnN: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Column M.
   */
  declare columnM: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Column L.
   */
  declare columnL: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Column K.
   */
  declare columnK: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Column J.
   */
  declare columnJ: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Column I.
   */
  declare columnI: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Column H.
   */
  declare columnH: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Qty.
   */
  declare salesQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Commodity Hierarchy Name.
   * @nullable
   */
  declare commodityHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Section 2.
   */
  declare section2: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Cust Account.
   * @nullable
   */
  declare custAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Creation Work.
   * @nullable
   */
  declare creationWork?: NoYes | null;
  /**
   * Other Delivery.
   * @nullable
   */
  declare otherDelivery?: NoYes | null;

  constructor(_entityApi: ProdComsApi<T>) {
    super(_entityApi);
  }
}

export interface ProdComsType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  period: DeserializedType<T, 'Edm.String'>;
  columnA: DeserializedType<T, 'Edm.String'>;
  branchNumber: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  section4: DeserializedType<T, 'Edm.Int32'>;
  field13: DeserializedType<T, 'Edm.Int32'>;
  field14: DeserializedType<T, 'Edm.Int32'>;
  unitId?: DeserializedType<T, 'Edm.String'> | null;
  section3: DeserializedType<T, 'Edm.Int32'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  commodityName?: DeserializedType<T, 'Edm.String'> | null;
  salesName?: DeserializedType<T, 'Edm.String'> | null;
  columnG: DeserializedType<T, 'Edm.Decimal'>;
  section1: DeserializedType<T, 'Edm.Int32'>;
  columnF: DeserializedType<T, 'Edm.Decimal'>;
  columnE: DeserializedType<T, 'Edm.Decimal'>;
  columnD: DeserializedType<T, 'Edm.Decimal'>;
  columnC?: DeserializedType<T, 'Edm.String'> | null;
  salesId?: DeserializedType<T, 'Edm.String'> | null;
  columnO: DeserializedType<T, 'Edm.Decimal'>;
  columnN: DeserializedType<T, 'Edm.Decimal'>;
  columnM: DeserializedType<T, 'Edm.Decimal'>;
  columnL: DeserializedType<T, 'Edm.Decimal'>;
  columnK: DeserializedType<T, 'Edm.Decimal'>;
  columnJ: DeserializedType<T, 'Edm.Decimal'>;
  columnI: DeserializedType<T, 'Edm.Decimal'>;
  columnH: DeserializedType<T, 'Edm.Decimal'>;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  salesQty: DeserializedType<T, 'Edm.Decimal'>;
  commodityHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  section2: DeserializedType<T, 'Edm.Int32'>;
  custAccount?: DeserializedType<T, 'Edm.String'> | null;
  creationWork?: NoYes | null;
  otherDelivery?: NoYes | null;
}
