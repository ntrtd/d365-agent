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
import type { WithholdReportVouchersApi } from './WithholdReportVouchersApi';
import { NoYes } from './NoYes';
import { TaxRepVersion } from './TaxRepVersion';

/**
 * This class represents the entity "WithholdReportVouchers" of service "d365_metadata".
 */
export class WithholdReportVouchers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WithholdReportVouchersType<T>
{
  /**
   * Technical entity name for WithholdReportVouchers.
   */
  static override _entityName = 'WithholdReportVouchers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdReportVouchers entity.
   */
  static _keys = ['dataAreaId', 'Voucher'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Voucher.
   */
  declare voucher: DeserializedType<T, 'Edm.String'>;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reference To Date.
   */
  declare referenceToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Posted Withholding Tax Corrections.
   * @nullable
   */
  declare postedWithholdingTaxCorrections?: NoYes | null;
  /**
   * Reference From Date.
   */
  declare referenceFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reference Sattlement Period.
   * @nullable
   */
  declare referenceSattlementPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Payment Version.
   * @nullable
   */
  declare withholdingTaxPaymentVersion?: TaxRepVersion | null;

  constructor(_entityApi: WithholdReportVouchersApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdReportVouchersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  voucher: DeserializedType<T, 'Edm.String'>;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  referenceToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  postedWithholdingTaxCorrections?: NoYes | null;
  referenceFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  referenceSattlementPeriod?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxPaymentVersion?: TaxRepVersion | null;
}
