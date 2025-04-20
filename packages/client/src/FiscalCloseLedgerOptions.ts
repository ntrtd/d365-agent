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
import type { FiscalCloseLedgerOptionsApi } from './FiscalCloseLedgerOptionsApi';
import { NoYes } from './NoYes';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "FiscalCloseLedgerOptions" of service "d365_metadata".
 */
export class FiscalCloseLedgerOptions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalCloseLedgerOptionsType<T>
{
  /**
   * Technical entity name for FiscalCloseLedgerOptions.
   */
  static override _entityName = 'FiscalCloseLedgerOptions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalCloseLedgerOptions entity.
   */
  static _keys = ['LedgerFiscalCloseGroupName', 'LegalEntity'];
  /**
   * Ledger Fiscal Close Group Name.
   */
  declare ledgerFiscalCloseGroupName: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Transfer Balance Sheet Dimensions.
   * @nullable
   */
  declare transferBalanceSheetDimensions?: NoYes | null;
  /**
   * Profit Loss Default Dimension Display Value.
   * @nullable
   */
  declare profitLossDefaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Profit Loss Close Dimension Display Value.
   * @nullable
   */
  declare profitLossCloseDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Retained Earnings Main Account.
   * @nullable
   */
  declare retainedEarningsMainAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: FiscalCloseLedgerOptionsApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalCloseLedgerOptionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  ledgerFiscalCloseGroupName: DeserializedType<T, 'Edm.String'>;
  legalEntity: DeserializedType<T, 'Edm.String'>;
  transferBalanceSheetDimensions?: NoYes | null;
  profitLossDefaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  profitLossCloseDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  retainedEarningsMainAccount?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
