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
import type { FbGeneralAdjustmentCodesIpiApi } from './FbGeneralAdjustmentCodesIpiApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "FBGeneralAdjustmentCodesIPI" of service "d365_metadata".
 */
export class FbGeneralAdjustmentCodesIpi<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FbGeneralAdjustmentCodesIpiType<T>
{
  /**
   * Technical entity name for FbGeneralAdjustmentCodesIpi.
   */
  static override _entityName = 'FBGeneralAdjustmentCodesIPI';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FbGeneralAdjustmentCodesIpi entity.
   */
  static _keys = ['AdjustmentCode'];
  /**
   * Adjustment Code.
   */
  declare adjustmentCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Receita Code.
   * @nullable
   */
  declare receitaCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Other Debit.
   * @nullable
   */
  declare otherDebit?: NoYes | null;
  /**
   * Is Reversal.
   * @nullable
   */
  declare isReversal?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To Date.
   */
  declare validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid From Date.
   */
  declare validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Tax Refund.
   * @nullable
   */
  declare isTaxRefund?: NoYes | null;

  constructor(_entityApi: FbGeneralAdjustmentCodesIpiApi<T>) {
    super(_entityApi);
  }
}

export interface FbGeneralAdjustmentCodesIpiType<
  T extends DeSerializers = DefaultDeSerializers
> {
  adjustmentCode: DeserializedType<T, 'Edm.String'>;
  receitaCode?: DeserializedType<T, 'Edm.String'> | null;
  otherDebit?: NoYes | null;
  isReversal?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isTaxRefund?: NoYes | null;
}
