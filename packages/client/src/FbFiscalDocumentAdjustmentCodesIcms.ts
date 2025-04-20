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
import type { FbFiscalDocumentAdjustmentCodesIcmsApi } from './FbFiscalDocumentAdjustmentCodesIcmsApi';
import { NoYes } from './NoYes';
import { FbFiscalDocumentClassificationIcmsBr } from './FbFiscalDocumentClassificationIcmsBr';
import { FbAdjustmentCollectionTypeBr } from './FbAdjustmentCollectionTypeBr';
import { TaxTypeBr } from './TaxTypeBr';
import { FbAdjustmentResponsibilityTypeBr } from './FbAdjustmentResponsibilityTypeBr';
import { FbAdjustmentSourceTaxationTypeBr } from './FbAdjustmentSourceTaxationTypeBr';
import { FbAdjustmentAssessmentTypeBr } from './FbAdjustmentAssessmentTypeBr';

/**
 * This class represents the entity "FBFiscalDocumentAdjustmentCodesICMS" of service "d365_metadata".
 */
export class FbFiscalDocumentAdjustmentCodesIcms<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FbFiscalDocumentAdjustmentCodesIcmsType<T>
{
  /**
   * Technical entity name for FbFiscalDocumentAdjustmentCodesIcms.
   */
  static override _entityName = 'FBFiscalDocumentAdjustmentCodesICMS';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FbFiscalDocumentAdjustmentCodesIcms entity.
   */
  static _keys = ['AdjustmentCode'];
  /**
   * Adjustment Code.
   */
  declare adjustmentCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sped Adjustment Code.
   * @nullable
   */
  declare spedAdjustmentCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Table 52.
   * @nullable
   */
  declare table52?: NoYes | null;
  /**
   * Valid From Date.
   */
  declare validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Type Of Benefit Code.
   * @nullable
   */
  declare typeOfBenefitCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Classification.
   * @nullable
   */
  declare classification?: FbFiscalDocumentClassificationIcmsBr | null;
  /**
   * Tax Payment Type.
   * @nullable
   */
  declare taxPaymentType?: FbAdjustmentCollectionTypeBr | null;
  /**
   * Tax Type.
   * @nullable
   */
  declare taxType?: TaxTypeBr | null;
  /**
   * Responsibility.
   * @nullable
   */
  declare responsibility?: FbAdjustmentResponsibilityTypeBr | null;
  /**
   * Other Debit.
   * @nullable
   */
  declare otherDebit?: NoYes | null;
  /**
   * Occurrence Code.
   * @nullable
   */
  declare occurrenceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Poverty Fund.
   * @nullable
   */
  declare isPovertyFund?: NoYes | null;
  /**
   * Receita Code.
   * @nullable
   */
  declare receitaCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Tax.
   * @nullable
   */
  declare sourceTax?: FbAdjustmentSourceTaxationTypeBr | null;
  /**
   * Valid To Date.
   */
  declare validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Gia Adjustment Code.
   * @nullable
   */
  declare giaAdjustmentCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Assessment Type.
   * @nullable
   */
  declare assessmentType?: FbAdjustmentAssessmentTypeBr | null;
  /**
   * State.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: FbFiscalDocumentAdjustmentCodesIcmsApi<T>) {
    super(_entityApi);
  }
}

export interface FbFiscalDocumentAdjustmentCodesIcmsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  adjustmentCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  spedAdjustmentCode?: DeserializedType<T, 'Edm.String'> | null;
  table52?: NoYes | null;
  validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  typeOfBenefitCode?: DeserializedType<T, 'Edm.String'> | null;
  classification?: FbFiscalDocumentClassificationIcmsBr | null;
  taxPaymentType?: FbAdjustmentCollectionTypeBr | null;
  taxType?: TaxTypeBr | null;
  responsibility?: FbAdjustmentResponsibilityTypeBr | null;
  otherDebit?: NoYes | null;
  occurrenceCode?: DeserializedType<T, 'Edm.String'> | null;
  isPovertyFund?: NoYes | null;
  receitaCode?: DeserializedType<T, 'Edm.String'> | null;
  sourceTax?: FbAdjustmentSourceTaxationTypeBr | null;
  validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  giaAdjustmentCode?: DeserializedType<T, 'Edm.String'> | null;
  assessmentType?: FbAdjustmentAssessmentTypeBr | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
}
