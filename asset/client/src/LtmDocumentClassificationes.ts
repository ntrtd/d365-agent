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
import type { LtmDocumentClassificationesApi } from './LtmDocumentClassificationesApi';
import { LtmCopyDocumentNum } from './LtmCopyDocumentNum';
import { NoYes } from './NoYes';
import { LtmTaxpayerDetail } from './LtmTaxpayerDetail';
import { LtmControlCodeType } from './LtmControlCodeType';

/**
 * This class represents the entity "LTMDocumentClassificationes" of service "d365_metadata".
 */
export class LtmDocumentClassificationes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmDocumentClassificationesType<T>
{
  /**
   * Technical entity name for LtmDocumentClassificationes.
   */
  static override _entityName = 'LTMDocumentClassificationes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmDocumentClassificationes entity.
   */
  static _keys = ['dataAreaId', 'DocumentClassificationId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Classification Id.
   */
  declare documentClassificationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Concept Label 1.
   * @nullable
   */
  declare conceptLabel1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Concept Label 3.
   * @nullable
   */
  declare conceptLabel3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Concept Label 2.
   * @nullable
   */
  declare conceptLabel2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Copy Document Num.
   * @nullable
   */
  declare copyDocumentNum?: LtmCopyDocumentNum | null;
  /**
   * Document Classification Prefix.
   * @nullable
   */
  declare documentClassificationPrefix?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Document Classification Type Id.
   * @nullable
   */
  declare documentClassificationTypeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Use In All.
   * @nullable
   */
  declare useInAll?: NoYes | null;
  /**
   * Document Classification Name.
   * @nullable
   */
  declare documentClassificationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Include Taxes.
   * @nullable
   */
  declare includeTaxes?: NoYes | null;
  /**
   * Separator.
   * @nullable
   */
  declare separator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pos Length.
   */
  declare posLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Note 3.
   * @nullable
   */
  declare note3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note 2.
   * @nullable
   */
  declare note2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note 1.
   * @nullable
   */
  declare note1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Taxpayer Detail.
   * @nullable
   */
  declare taxpayerDetail?: LtmTaxpayerDetail | null;
  /**
   * Document Classification Legal Description.
   * @nullable
   */
  declare documentClassificationLegalDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Inactive.
   * @nullable
   */
  declare inactive?: NoYes | null;
  /**
   * Bank Transaction Type.
   * @nullable
   */
  declare bankTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Control Code Type.
   * @nullable
   */
  declare controlCodeType?: LtmControlCodeType | null;
  /**
   * Withholding Calculation.
   * @nullable
   */
  declare withholdingCalculation?: NoYes | null;
  /**
   * Num Length.
   */
  declare numLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Req Cae.
   * @nullable
   */
  declare reqCae?: NoYes | null;
  /**
   * Report Id.
   * @nullable
   */
  declare reportId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Control Code Required.
   * @nullable
   */
  declare controlCodeRequired?: NoYes | null;
  /**
   * Force Cross Exchange Rate.
   * @nullable
   */
  declare forceCrossExchangeRate?: NoYes | null;
  /**
   * Pos Enabled.
   * @nullable
   */
  declare posEnabled?: NoYes | null;
  /**
   * Document Classification Letter Id.
   * @nullable
   */
  declare documentClassificationLetterId?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: LtmDocumentClassificationesApi<T>) {
    super(_entityApi);
  }
}

export interface LtmDocumentClassificationesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentClassificationId: DeserializedType<T, 'Edm.String'>;
  conceptLabel1?: DeserializedType<T, 'Edm.String'> | null;
  conceptLabel3?: DeserializedType<T, 'Edm.String'> | null;
  conceptLabel2?: DeserializedType<T, 'Edm.String'> | null;
  copyDocumentNum?: LtmCopyDocumentNum | null;
  documentClassificationPrefix?: DeserializedType<T, 'Edm.String'> | null;
  documentClassificationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  useInAll?: NoYes | null;
  documentClassificationName?: DeserializedType<T, 'Edm.String'> | null;
  includeTaxes?: NoYes | null;
  separator?: DeserializedType<T, 'Edm.String'> | null;
  posLength: DeserializedType<T, 'Edm.Int32'>;
  note3?: DeserializedType<T, 'Edm.String'> | null;
  note2?: DeserializedType<T, 'Edm.String'> | null;
  note1?: DeserializedType<T, 'Edm.String'> | null;
  taxpayerDetail?: LtmTaxpayerDetail | null;
  documentClassificationLegalDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  inactive?: NoYes | null;
  bankTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  controlCodeType?: LtmControlCodeType | null;
  withholdingCalculation?: NoYes | null;
  numLength: DeserializedType<T, 'Edm.Int32'>;
  reqCae?: NoYes | null;
  reportId?: DeserializedType<T, 'Edm.String'> | null;
  controlCodeRequired?: NoYes | null;
  forceCrossExchangeRate?: NoYes | null;
  posEnabled?: NoYes | null;
  documentClassificationLetterId?: DeserializedType<T, 'Edm.String'> | null;
}
