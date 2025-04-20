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
import type { VatReportDateCodesApi } from './VatReportDateCodesApi';
import { PlTaxDueDate } from './PlTaxDueDate';
import { NoYes } from './NoYes';
import { PlTaxDueCalcFrom } from './PlTaxDueCalcFrom';

/**
 * This class represents the entity "VATReportDateCodes" of service "d365_metadata".
 */
export class VatReportDateCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VatReportDateCodesType<T>
{
  /**
   * Technical entity name for VatReportDateCodes.
   */
  static override _entityName = 'VATReportDateCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VatReportDateCodes entity.
   */
  static _keys = ['dataAreaId', 'VATReportDateCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vat Report Date Code.
   */
  declare vatReportDateCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Include In Vat Report.
   * @nullable
   */
  declare includeInVatReport?: PlTaxDueDate | null;
  /**
   * Vat Date Is Payment Date.
   * @nullable
   */
  declare vatDateIsPaymentDate?: NoYes | null;
  /**
   * Partial Settlement.
   * @nullable
   */
  declare partialSettlement?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Counted From.
   * @nullable
   */
  declare countedFrom?: PlTaxDueCalcFrom | null;
  /**
   * Number Of Days.
   */
  declare numberOfDays: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: VatReportDateCodesApi<T>) {
    super(_entityApi);
  }
}

export interface VatReportDateCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vatReportDateCode: DeserializedType<T, 'Edm.String'>;
  includeInVatReport?: PlTaxDueDate | null;
  vatDateIsPaymentDate?: NoYes | null;
  partialSettlement?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  countedFrom?: PlTaxDueCalcFrom | null;
  numberOfDays: DeserializedType<T, 'Edm.Int32'>;
}
