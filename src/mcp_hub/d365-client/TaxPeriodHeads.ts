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
import type { TaxPeriodHeadsApi } from './TaxPeriodHeadsApi';
import { PeriodUnit } from './PeriodUnit';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "TaxPeriodHeads" of service "d365_metadata".
 */
export class TaxPeriodHeads<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxPeriodHeadsType<T>
{
  /**
   * Technical entity name for TaxPeriodHeads.
   */
  static override _entityName = 'TaxPeriodHeads';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxPeriodHeads entity.
   */
  static _keys = ['dataAreaId', 'TaxPeriodId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Period Id.
   */
  declare taxPeriodId: DeserializedType<T, 'Edm.String'>;
  /**
   * Duration.
   */
  declare duration: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Authority.
   * @nullable
   */
  declare taxAuthority?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Duration Unit.
   * @nullable
   */
  declare durationUnit?: PeriodUnit | null;
  /**
   * Payment Terms.
   * @nullable
   */
  declare paymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Include Zero Lines It.
   * @nullable
   */
  declare includeZeroLinesIt?: NoYes | null;
  /**
   * Report In Tax Currency It.
   * @nullable
   */
  declare reportInTaxCurrencyIt?: NoYes | null;
  /**
   * Attach Report To Sales Tax Book Status It.
   * @nullable
   */
  declare attachReportToSalesTaxBookStatusIt?: NoYes | null;
  /**
   * Include Reverse Trans It.
   * @nullable
   */
  declare includeReverseTransIt?: NoYes | null;

  constructor(_entityApi: TaxPeriodHeadsApi<T>) {
    super(_entityApi);
  }
}

export interface TaxPeriodHeadsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxPeriodId: DeserializedType<T, 'Edm.String'>;
  duration: DeserializedType<T, 'Edm.Int32'>;
  taxAuthority?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  durationUnit?: PeriodUnit | null;
  paymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  includeZeroLinesIt?: NoYes | null;
  reportInTaxCurrencyIt?: NoYes | null;
  attachReportToSalesTaxBookStatusIt?: NoYes | null;
  includeReverseTransIt?: NoYes | null;
}
