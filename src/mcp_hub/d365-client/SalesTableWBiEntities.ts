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
import type { SalesTableWBiEntitiesApi } from './SalesTableWBiEntitiesApi';
import { NoYes } from './NoYes';
import { InvoiceTypeMy } from './InvoiceTypeMy';
import { PlFiscalDocType } from './PlFiscalDocType';
import { NatureOfAssesseeIn } from './NatureOfAssesseeIn';

/**
 * This class represents the entity "SalesTableWBiEntities" of service "d365_metadata".
 */
export class SalesTableWBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesTableWBiEntitiesType<T>
{
  /**
   * Technical entity name for SalesTableWBiEntities.
   */
  static override _entityName = 'SalesTableWBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesTableWBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Customs Export Order In.
   * @nullable
   */
  declare customsExportOrderIn?: NoYes | null;
  /**
   * Entry Certificate Required W.
   * @nullable
   */
  declare entryCertificateRequiredW?: NoYes | null;
  /**
   * Customs Shipping Bill In.
   * @nullable
   */
  declare customsShippingBillIn?: NoYes | null;
  /**
   * Intrastat Add Value Lv.
   */
  declare intrastatAddValueLv: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cur Bank Account Lv.
   * @nullable
   */
  declare curBankAccountLv?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * With Igst Payment In.
   * @nullable
   */
  declare withIgstPaymentIn?: NoYes | null;
  /**
   * United Vat Invoice Lt.
   * @nullable
   */
  declare unitedVatInvoiceLt?: NoYes | null;
  /**
   * Invoice Type My.
   * @nullable
   */
  declare invoiceTypeMy?: InvoiceTypeMy | null;
  /**
   * Fiscal Doc Type Pl.
   * @nullable
   */
  declare fiscalDocTypePl?: PlFiscalDocType | null;
  /**
   * Provisional Assessment In.
   * @nullable
   */
  declare provisionalAssessmentIn?: NoYes | null;
  /**
   * Cust Bank Account Lv.
   * @nullable
   */
  declare custBankAccountLv?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account Lv.
   * @nullable
   */
  declare bankAccountLv?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cons Target Jp.
   * @nullable
   */
  declare consTargetJp?: NoYes | null;
  /**
   * Tcs Group In.
   * @nullable
   */
  declare tcsGroupIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Commerce Operator In.
   * @nullable
   */
  declare eCommerceOperatorIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nature Of Assessee In.
   * @nullable
   */
  declare natureOfAssesseeIn?: NatureOfAssesseeIn | null;
  /**
   * Tax Period Payment Code Pl.
   * @nullable
   */
  declare taxPeriodPaymentCodePl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Commerce Sale In.
   * @nullable
   */
  declare eCommerceSaleIn?: NoYes | null;
  /**
   * Merchant Id In.
   * @nullable
   */
  declare merchantIdIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issue Own Entry Certificate W.
   * @nullable
   */
  declare issueOwnEntryCertificateW?: NoYes | null;
  /**
   * Tds Group In.
   * @nullable
   */
  declare tdsGroupIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Would You Claim Refund In.
   * @nullable
   */
  declare wouldYouClaimRefundIn?: NoYes | null;

  constructor(_entityApi: SalesTableWBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesTableWBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  customsExportOrderIn?: NoYes | null;
  entryCertificateRequiredW?: NoYes | null;
  customsShippingBillIn?: NoYes | null;
  intrastatAddValueLv: DeserializedType<T, 'Edm.Decimal'>;
  curBankAccountLv?: DeserializedType<T, 'Edm.String'> | null;
  withIgstPaymentIn?: NoYes | null;
  unitedVatInvoiceLt?: NoYes | null;
  invoiceTypeMy?: InvoiceTypeMy | null;
  fiscalDocTypePl?: PlFiscalDocType | null;
  provisionalAssessmentIn?: NoYes | null;
  custBankAccountLv?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountLv?: DeserializedType<T, 'Edm.String'> | null;
  consTargetJp?: NoYes | null;
  tcsGroupIn?: DeserializedType<T, 'Edm.String'> | null;
  eCommerceOperatorIn?: DeserializedType<T, 'Edm.String'> | null;
  natureOfAssesseeIn?: NatureOfAssesseeIn | null;
  taxPeriodPaymentCodePl?: DeserializedType<T, 'Edm.String'> | null;
  eCommerceSaleIn?: NoYes | null;
  merchantIdIn?: DeserializedType<T, 'Edm.String'> | null;
  issueOwnEntryCertificateW?: NoYes | null;
  tdsGroupIn?: DeserializedType<T, 'Edm.String'> | null;
  wouldYouClaimRefundIn?: NoYes | null;
}
