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
import type { FbGeneralAdjustmentCodesPiscofinsApi } from './FbGeneralAdjustmentCodesPiscofinsApi';
import { NoYes } from './NoYes';
import { TaxTypeBr } from './TaxTypeBr';
import { FbContribTransferEventBr } from './FbContribTransferEventBr';
import { FbGeneralAdjustmentTypePiscofinsBr } from './FbGeneralAdjustmentTypePiscofinsBr';

/**
 * This class represents the entity "FBGeneralAdjustmentCodesPISCOFINS" of service "d365_metadata".
 */
export class FbGeneralAdjustmentCodesPiscofins<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FbGeneralAdjustmentCodesPiscofinsType<T>
{
  /**
   * Technical entity name for FbGeneralAdjustmentCodesPiscofins.
   */
  static override _entityName = 'FBGeneralAdjustmentCodesPISCOFINS';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FbGeneralAdjustmentCodesPiscofins entity.
   */
  static _keys = ['Identification'];
  /**
   * Identification.
   */
  declare identification: DeserializedType<T, 'Edm.String'>;
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
   * Tax Type.
   * @nullable
   */
  declare taxType?: TaxTypeBr | null;
  /**
   * Sped Adjustment Code.
   * @nullable
   */
  declare spedAdjustmentCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Transfer Event.
   * @nullable
   */
  declare transferEvent?: FbContribTransferEventBr | null;
  /**
   * Adjustment Type.
   * @nullable
   */
  declare adjustmentType?: FbGeneralAdjustmentTypePiscofinsBr | null;

  constructor(_entityApi: FbGeneralAdjustmentCodesPiscofinsApi<T>) {
    super(_entityApi);
  }
}

export interface FbGeneralAdjustmentCodesPiscofinsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  identification: DeserializedType<T, 'Edm.String'>;
  receitaCode?: DeserializedType<T, 'Edm.String'> | null;
  otherDebit?: NoYes | null;
  taxType?: TaxTypeBr | null;
  spedAdjustmentCode?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transferEvent?: FbContribTransferEventBr | null;
  adjustmentType?: FbGeneralAdjustmentTypePiscofinsBr | null;
}
