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
import type { ProjectContractHeadersApi } from './ProjectContractHeadersApi';
import { NoYes } from './NoYes';
import { ProjForecastInvoiceFrequency } from './ProjForecastInvoiceFrequency';
import { Listcode } from './Listcode';
import { PaymentStub } from './PaymentStub';
import {
  AssetMaintenanceWorkOrderTablesV2,
  AssetMaintenanceWorkOrderTablesV2Type
} from './AssetMaintenanceWorkOrderTablesV2';

/**
 * This class represents the entity "ProjectContractHeaders" of service "d365_metadata".
 */
export class ProjectContractHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectContractHeadersType<T>
{
  /**
   * Technical entity name for ProjectContractHeaders.
   */
  static override _entityName = 'ProjectContractHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectContractHeaders entity.
   */
  static _keys = ['dataAreaId', 'ProjectContractId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Contract Id.
   */
  declare projectContractId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cash Discount Code.
   * @nullable
   */
  declare cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Central Bank Purpose Text.
   * @nullable
   */
  declare centralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Customer Group Code.
   * @nullable
   */
  declare priceCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Service Delivery Address Based.
   * @nullable
   */
  declare isServiceDeliveryAddressBased?: NoYes | null;
  /**
   * Intrastat Additional Value.
   */
  declare intrastatAdditionalValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Central Bank Purpose Code.
   * @nullable
   */
  declare centralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Individual Buffer Days.
   * @nullable
   */
  declare individualBufferDays?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Schedule Name.
   * @nullable
   */
  declare paymentScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Responsible Personnel Number.
   * @nullable
   */
  declare salesResponsiblePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Net Price.
   * @nullable
   */
  declare netPrice?: NoYes | null;
  /**
   * Invoice Frequency.
   * @nullable
   */
  declare invoiceFrequency?: ProjForecastInvoiceFrequency | null;
  /**
   * Is Contract Sales Currency Code Locked.
   * @nullable
   */
  declare isContractSalesCurrencyCodeLocked?: NoYes | null;
  /**
   * Intrastat Transaction Code.
   * @nullable
   */
  declare intrastatTransactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Invoice Dimension Account Code.
   * @nullable
   */
  declare eInvoiceDimensionAccountCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Tax Group Code.
   * @nullable
   */
  declare salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account Id.
   * @nullable
   */
  declare bankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is E Invoice Dimension Account Code Specified Per Line.
   * @nullable
   */
  declare isEInvoiceDimensionAccountCodeSpecifiedPerLine?: NoYes | null;
  /**
   * Terms Of Payment.
   * @nullable
   */
  declare termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Integration Source Data Id.
   * @nullable
   */
  declare integrationSourceDataId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Posting Profile Id.
   * @nullable
   */
  declare customerPostingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Code.
   * @nullable
   */
  declare listCode?: Listcode | null;
  /**
   * Sales Currency Code.
   * @nullable
   */
  declare salesCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Requisition Number.
   * @nullable
   */
  declare customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Giro Type Proj Invoice.
   * @nullable
   */
  declare giroTypeProjInvoice?: PaymentStub | null;
  /**
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customers Order Reference.
   * @nullable
   */
  declare customersOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderTablesV2} entity.
   */
  declare projectContractMaintenanceWorkOrderHeaders: AssetMaintenanceWorkOrderTablesV2<T>[];

  constructor(_entityApi: ProjectContractHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectContractHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectContractId: DeserializedType<T, 'Edm.String'>;
  cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  centralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  priceCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  isServiceDeliveryAddressBased?: NoYes | null;
  intrastatAdditionalValue: DeserializedType<T, 'Edm.Decimal'>;
  centralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  individualBufferDays?: DeserializedType<T, 'Edm.String'> | null;
  paymentScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  salesResponsiblePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  netPrice?: NoYes | null;
  invoiceFrequency?: ProjForecastInvoiceFrequency | null;
  isContractSalesCurrencyCodeLocked?: NoYes | null;
  intrastatTransactionCode?: DeserializedType<T, 'Edm.String'> | null;
  eInvoiceDimensionAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  isEInvoiceDimensionAccountCodeSpecifiedPerLine?: NoYes | null;
  termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  integrationSourceDataId?: DeserializedType<T, 'Edm.String'> | null;
  customerPostingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  listCode?: Listcode | null;
  salesCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  giroTypeProjInvoice?: PaymentStub | null;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  customersOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  projectContractMaintenanceWorkOrderHeaders: AssetMaintenanceWorkOrderTablesV2Type<T>[];
}
