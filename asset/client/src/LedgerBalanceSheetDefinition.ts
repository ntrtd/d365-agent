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
import type { LedgerBalanceSheetDefinitionApi } from './LedgerBalanceSheetDefinitionApi';
import { NoYes } from './NoYes';
import { RoundOffType } from './RoundOffType';
import { LedgerReportBalanceType } from './LedgerReportBalanceType';

/**
 * This class represents the entity "LedgerBalanceSheetDefinition" of service "d365_metadata".
 */
export class LedgerBalanceSheetDefinition<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerBalanceSheetDefinitionType<T>
{
  /**
   * Technical entity name for LedgerBalanceSheetDefinition.
   */
  static override _entityName = 'LedgerBalanceSheetDefinition';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerBalanceSheetDefinition entity.
   */
  static _keys = ['dataAreaId', 'Line', 'GrossLineId', 'AdjustmentLineId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line.
   */
  declare line: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Gross Line Id.
   */
  declare grossLineId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Adjustment Line Id.
   */
  declare adjustmentLineId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Adjustment Total.
   */
  declare adjustmentTotal: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Adjustment Main Account.
   * @nullable
   */
  declare adjustmentMainAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gross Group Of Accounts.
   * @nullable
   */
  declare grossGroupOfAccounts?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Adjustment Invert Sign.
   * @nullable
   */
  declare adjustmentInvertSign?: NoYes | null;
  /**
   * Gross Main Account.
   * @nullable
   */
  declare grossMainAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rounding Form.
   * @nullable
   */
  declare roundingForm?: RoundOffType | null;
  /**
   * Adjustment Group Of Accounts.
   * @nullable
   */
  declare adjustmentGroupOfAccounts?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gross Total.
   */
  declare grossTotal: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Line Type.
   * @nullable
   */
  declare lineType?: LedgerReportBalanceType | null;
  /**
   * Mark.
   * @nullable
   */
  declare mark?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gross Invert Sign.
   * @nullable
   */
  declare grossInvertSign?: NoYes | null;

  constructor(_entityApi: LedgerBalanceSheetDefinitionApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerBalanceSheetDefinitionType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  line: DeserializedType<T, 'Edm.Int32'>;
  grossLineId: DeserializedType<T, 'Edm.Guid'>;
  adjustmentLineId: DeserializedType<T, 'Edm.Guid'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  adjustmentTotal: DeserializedType<T, 'Edm.Int32'>;
  adjustmentMainAccount?: DeserializedType<T, 'Edm.String'> | null;
  grossGroupOfAccounts?: DeserializedType<T, 'Edm.String'> | null;
  adjustmentInvertSign?: NoYes | null;
  grossMainAccount?: DeserializedType<T, 'Edm.String'> | null;
  roundingForm?: RoundOffType | null;
  adjustmentGroupOfAccounts?: DeserializedType<T, 'Edm.String'> | null;
  grossTotal: DeserializedType<T, 'Edm.Int32'>;
  lineType?: LedgerReportBalanceType | null;
  mark?: DeserializedType<T, 'Edm.String'> | null;
  grossInvertSign?: NoYes | null;
}
