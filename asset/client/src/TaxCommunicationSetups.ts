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
import type { TaxCommunicationSetupsApi } from './TaxCommunicationSetupsApi';
import { TaxYearlyComCalculationIt } from './TaxYearlyComCalculationIt';
import { NoYes } from './NoYes';
import { TaxReportFieldFormatIt } from './TaxReportFieldFormatIt';
import { TaxReportingAmountIt } from './TaxReportingAmountIt';

/**
 * This class represents the entity "TaxCommunicationSetups" of service "d365_metadata".
 */
export class TaxCommunicationSetups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxCommunicationSetupsType<T>
{
  /**
   * Technical entity name for TaxCommunicationSetups.
   */
  static override _entityName = 'TaxCommunicationSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxCommunicationSetups entity.
   */
  static _keys = ['dataAreaId', 'FieldID', 'TotalFieldID', 'SalesTaxCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Field Id.
   */
  declare fieldId: DeserializedType<T, 'Edm.String'>;
  /**
   * Total Field Id.
   */
  declare totalFieldId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Tax Code.
   */
  declare salesTaxCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Total Sign.
   */
  declare totalSign: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Value.
   * @nullable
   */
  declare value?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sign.
   */
  declare sign: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Calculation.
   * @nullable
   */
  declare calculation?: TaxYearlyComCalculationIt | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nondeductible Sales Tax.
   * @nullable
   */
  declare nondeductibleSalesTax?: NoYes | null;
  /**
   * Format.
   * @nullable
   */
  declare format?: TaxReportFieldFormatIt | null;
  /**
   * Tax.
   * @nullable
   */
  declare tax?: TaxReportingAmountIt | null;

  constructor(_entityApi: TaxCommunicationSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface TaxCommunicationSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fieldId: DeserializedType<T, 'Edm.String'>;
  totalFieldId: DeserializedType<T, 'Edm.String'>;
  salesTaxCode: DeserializedType<T, 'Edm.String'>;
  totalSign: DeserializedType<T, 'Edm.Int32'>;
  value?: DeserializedType<T, 'Edm.String'> | null;
  sign: DeserializedType<T, 'Edm.Int32'>;
  calculation?: TaxYearlyComCalculationIt | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  nondeductibleSalesTax?: NoYes | null;
  format?: TaxReportFieldFormatIt | null;
  tax?: TaxReportingAmountIt | null;
}
