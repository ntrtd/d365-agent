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
import type { ProjActualsImportsApi } from './ProjActualsImportsApi';
import { ProjCdsTransType } from './ProjCdsTransType';
import { NoYes } from './NoYes';
import { ProjBillingType } from './ProjBillingType';

/**
 * This class represents the entity "ProjActualsImports" of service "d365_metadata".
 */
export class ProjActualsImports<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjActualsImportsType<T>
{
  /**
   * Technical entity name for ProjActualsImports.
   */
  static override _entityName = 'ProjActualsImports';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjActualsImports entity.
   */
  static _keys = ['dataAreaId', 'ActualsImportId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Actuals Import Id.
   */
  declare actualsImportId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Unit Price.
   */
  declare unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Status.
   */
  declare status: DeserializedType<T, 'Edm.Int64'>;
  /**
   * External Description.
   * @nullable
   */
  declare externalDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Reference.
   * @nullable
   */
  declare externalReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resourcing Company.
   * @nullable
   */
  declare resourcingCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status Reason.
   */
  declare statusReason: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Owning User.
   */
  declare owningUser: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Project Data Area Id.
   * @nullable
   */
  declare projectDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: ProjCdsTransType | null;
  /**
   * External Origin Reference.
   * @nullable
   */
  declare externalOriginReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Currency Id.
   * @nullable
   */
  declare transactionCurrencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Subcontract Line.
   * @nullable
   */
  declare subcontractLine?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher Number.
   * @nullable
   */
  declare voucherNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Price Mst.
   */
  declare unitPriceMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Classification.
   */
  declare transactionClassification: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Bookable Resource Name.
   * @nullable
   */
  declare bookableResourceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Actual Id.
   */
  declare actualId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Contracting Unit.
   */
  declare contractingUnit: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Sub Con Invoice Id.
   * @nullable
   */
  declare subConInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Amount.
   */
  declare accountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Journalized.
   * @nullable
   */
  declare isJournalized?: NoYes | null;
  /**
   * Resource Id.
   */
  declare resourceId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Tax Amount.
   */
  declare salesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Resource Operation Unit Id.
   */
  declare resourceOperationUnitId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Number.
   * @nullable
   */
  declare productNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract Line.
   */
  declare contractLine: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Exchange Rate Date.
   */
  declare exchangeRateDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Description.
   * @nullable
   */
  declare productDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Category Id.
   * @nullable
   */
  declare transactionCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Actuals Import Sync.
   * @nullable
   */
  declare projActualsImportSync?: NoYes | null;
  /**
   * Task Number.
   * @nullable
   */
  declare taskNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Status Id.
   */
  declare billingStatusId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Owning Business Id.
   */
  declare owningBusinessId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Unit Of Measure.
   * @nullable
   */
  declare unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Adjustment Status.
   */
  declare adjustmentStatus: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invoice Proposal Id.
   * @nullable
   */
  declare invoiceProposalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract Line Id.
   * @nullable
   */
  declare contractLineId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Type.
   * @nullable
   */
  declare billingType?: ProjBillingType | null;
  /**
   * Matched Vendor Invoice.
   * @nullable
   */
  declare matchedVendorInvoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Funding Source.
   * @nullable
   */
  declare fundingSource?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract Id.
   * @nullable
   */
  declare contractId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Invoice Line Proj Trans Id.
   * @nullable
   */
  declare vendInvoiceLineProjTransId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProjActualsImportsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjActualsImportsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  actualsImportId: DeserializedType<T, 'Edm.Guid'>;
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  status: DeserializedType<T, 'Edm.Int64'>;
  externalDescription?: DeserializedType<T, 'Edm.String'> | null;
  externalReference?: DeserializedType<T, 'Edm.String'> | null;
  resourcingCompany?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  statusReason: DeserializedType<T, 'Edm.Int64'>;
  owningUser: DeserializedType<T, 'Edm.Guid'>;
  projectDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  transactionType?: ProjCdsTransType | null;
  externalOriginReference?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrencyId?: DeserializedType<T, 'Edm.String'> | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  subcontractLine?: DeserializedType<T, 'Edm.String'> | null;
  voucherNumber?: DeserializedType<T, 'Edm.String'> | null;
  unitPriceMst: DeserializedType<T, 'Edm.Decimal'>;
  transactionClassification: DeserializedType<T, 'Edm.Int64'>;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  bookableResourceName?: DeserializedType<T, 'Edm.String'> | null;
  actualId: DeserializedType<T, 'Edm.Guid'>;
  contractingUnit: DeserializedType<T, 'Edm.Guid'>;
  subConInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  accountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  isJournalized?: NoYes | null;
  resourceId: DeserializedType<T, 'Edm.Guid'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  resourceOperationUnitId: DeserializedType<T, 'Edm.Guid'>;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
  contractLine: DeserializedType<T, 'Edm.Int32'>;
  exchangeRateDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  transactionCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  projActualsImportSync?: NoYes | null;
  taskNumber?: DeserializedType<T, 'Edm.String'> | null;
  billingStatusId: DeserializedType<T, 'Edm.Int64'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  owningBusinessId: DeserializedType<T, 'Edm.Guid'>;
  unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  adjustmentStatus: DeserializedType<T, 'Edm.Int64'>;
  invoiceProposalId?: DeserializedType<T, 'Edm.String'> | null;
  contractLineId?: DeserializedType<T, 'Edm.String'> | null;
  billingType?: ProjBillingType | null;
  matchedVendorInvoice?: DeserializedType<T, 'Edm.String'> | null;
  fundingSource?: DeserializedType<T, 'Edm.String'> | null;
  contractId?: DeserializedType<T, 'Edm.String'> | null;
  vendInvoiceLineProjTransId?: DeserializedType<T, 'Edm.String'> | null;
}
