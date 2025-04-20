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
import type { FbGeneralAdjustmentCodesIcmsApi } from './FbGeneralAdjustmentCodesIcmsApi';
import { NoYes } from './NoYes';
import { FbGeneralClassificationIcmsBr } from './FbGeneralClassificationIcmsBr';
import { FbicmsTypeBr } from './FbicmsTypeBr';

/**
 * This class represents the entity "FBGeneralAdjustmentCodesICMS" of service "d365_metadata".
 */
export class FbGeneralAdjustmentCodesIcms<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FbGeneralAdjustmentCodesIcmsType<T>
{
  /**
   * Technical entity name for FbGeneralAdjustmentCodesIcms.
   */
  static override _entityName = 'FBGeneralAdjustmentCodesICMS';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FbGeneralAdjustmentCodesIcms entity.
   */
  static _keys = ['Identification'];
  /**
   * Identification.
   */
  declare identification: DeserializedType<T, 'Edm.String'>;
  /**
   * State.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;
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
   * Gia Adjustment Code.
   * @nullable
   */
  declare giaAdjustmentCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Occurrence Code.
   * @nullable
   */
  declare occurrenceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Classification.
   * @nullable
   */
  declare classification?: FbGeneralClassificationIcmsBr | null;
  /**
   * Icms Type.
   * @nullable
   */
  declare icmsType?: FbicmsTypeBr | null;
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

  constructor(_entityApi: FbGeneralAdjustmentCodesIcmsApi<T>) {
    super(_entityApi);
  }
}

export interface FbGeneralAdjustmentCodesIcmsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  identification: DeserializedType<T, 'Edm.String'>;
  state?: DeserializedType<T, 'Edm.String'> | null;
  receitaCode?: DeserializedType<T, 'Edm.String'> | null;
  otherDebit?: NoYes | null;
  giaAdjustmentCode?: DeserializedType<T, 'Edm.String'> | null;
  occurrenceCode?: DeserializedType<T, 'Edm.String'> | null;
  classification?: FbGeneralClassificationIcmsBr | null;
  icmsType?: FbicmsTypeBr | null;
  spedAdjustmentCode?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
