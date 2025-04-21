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
import type { TaxDeclarationLogsApi } from './TaxDeclarationLogsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "TaxDeclarationLogs" of service "d365_metadata".
 */
export class TaxDeclarationLogs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxDeclarationLogsType<T>
{
  /**
   * Technical entity name for TaxDeclarationLogs.
   */
  static override _entityName = 'TaxDeclarationLogs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxDeclarationLogs entity.
   */
  static _keys = ['dataAreaId', 'PeriodValue', 'PeriodYear', 'ExecutionDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Value.
   */
  declare periodValue: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Year.
   */
  declare periodYear: DeserializedType<T, 'Edm.String'>;
  /**
   * Execution Date.
   */
  declare executionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Settlement Period.
   * @nullable
   */
  declare settlementPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sent.
   * @nullable
   */
  declare sent?: NoYes | null;
  /**
   * Electronic Tax Document.
   * @nullable
   */
  declare electronicTaxDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inactive.
   * @nullable
   */
  declare inactive?: NoYes | null;
  /**
   * Documents Submitted Separately.
   * @nullable
   */
  declare documentsSubmittedSeparately?: NoYes | null;
  /**
   * Corrected Declaration.
   * @nullable
   */
  declare correctedDeclaration?: NoYes | null;

  constructor(_entityApi: TaxDeclarationLogsApi<T>) {
    super(_entityApi);
  }
}

export interface TaxDeclarationLogsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  periodValue: DeserializedType<T, 'Edm.String'>;
  periodYear: DeserializedType<T, 'Edm.String'>;
  executionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  settlementPeriod?: DeserializedType<T, 'Edm.String'> | null;
  sent?: NoYes | null;
  electronicTaxDocument?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  inactive?: NoYes | null;
  documentsSubmittedSeparately?: NoYes | null;
  correctedDeclaration?: NoYes | null;
}
