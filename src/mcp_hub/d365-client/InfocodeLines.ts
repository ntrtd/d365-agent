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
import type { InfocodeLinesApi } from './InfocodeLinesApi';
import { RetailInfocodeTransType } from './RetailInfocodeTransType';
import { RetailInfocodeInputType } from './RetailInfocodeInputType';

/**
 * This class represents the entity "InfocodeLines" of service "d365_metadata".
 */
export class InfocodeLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InfocodeLinesType<T>
{
  /**
   * Technical entity name for InfocodeLines.
   */
  static override _entityName = 'InfocodeLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InfocodeLines entity.
   */
  static _keys = [
    'dataAreaId',
    'SalesOrderNumber',
    'InventoryLotId',
    'JournalBatchNumber',
    'JournalLineNumber',
    'InfocodeLineType',
    'LineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Order Number.
   */
  declare salesOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Lot Id.
   */
  declare inventoryLotId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Batch Number.
   */
  declare journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Line Number.
   */
  declare journalLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Infocode Line Type.
   * @nullable
   */
  declare infocodeLineType?: RetailInfocodeTransType | null;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Information.
   * @nullable
   */
  declare information?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Infocode Id.
   * @nullable
   */
  declare subInfocodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Input Type.
   * @nullable
   */
  declare inputType?: RetailInfocodeInputType | null;
  /**
   * Source Code 3.
   * @nullable
   */
  declare sourceCode3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Code 2.
   * @nullable
   */
  declare sourceCode2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statement Code.
   * @nullable
   */
  declare statementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Information Amount.
   */
  declare informationAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Infocode Id.
   * @nullable
   */
  declare infocodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Code.
   * @nullable
   */
  declare sourceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Tender.
   * @nullable
   */
  declare itemTender?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: InfocodeLinesApi<T>) {
    super(_entityApi);
  }
}

export interface InfocodeLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesOrderNumber: DeserializedType<T, 'Edm.String'>;
  inventoryLotId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  journalLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  infocodeLineType?: RetailInfocodeTransType | null;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  information?: DeserializedType<T, 'Edm.String'> | null;
  subInfocodeId?: DeserializedType<T, 'Edm.String'> | null;
  inputType?: RetailInfocodeInputType | null;
  sourceCode3?: DeserializedType<T, 'Edm.String'> | null;
  sourceCode2?: DeserializedType<T, 'Edm.String'> | null;
  statementCode?: DeserializedType<T, 'Edm.String'> | null;
  informationAmount: DeserializedType<T, 'Edm.Decimal'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  infocodeId?: DeserializedType<T, 'Edm.String'> | null;
  sourceCode?: DeserializedType<T, 'Edm.String'> | null;
  itemTender?: DeserializedType<T, 'Edm.String'> | null;
}
