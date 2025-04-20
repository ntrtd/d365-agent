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
import type { CustTableBiEntitiesApi } from './CustTableBiEntitiesApi';
import { NoYes } from './NoYes';
import { EcPsalesOrdersViewType } from './EcPsalesOrdersViewType';
import { CreditCardAddressVerification } from './CreditCardAddressVerification';
import { PaymentStub } from './PaymentStub';
import { CustWhtContributionTypeBr } from './CustWhtContributionTypeBr';
import { InvoiceTypeW } from './InvoiceTypeW';
import { CreditCardAddressVerificationLevel } from './CreditCardAddressVerificationLevel';
import { CustTableChangeProposalWorkflowState } from './CustTableChangeProposalWorkflowState';
import { InventProfileTypeRu } from './InventProfileTypeRu';
import { EfDocPresenceTypeBr } from './EfDocPresenceTypeBr';
import { FederalNonFederalIndicatorCode } from './FederalNonFederalIndicatorCode';
import { CustVendorBlocked } from './CustVendorBlocked';
import { CompanyTypeMx } from './CompanyTypeMx';
import { TaxExemptNumberSourceType } from './TaxExemptNumberSourceType';
import { CreditCardCvc } from './CreditCardCvc';
import { InvoiceOrderAccount } from './InvoiceOrderAccount';
import { PlFiscalDocType } from './PlFiscalDocType';
import { UseCashDisc } from './UseCashDisc';
import { CustCollectionLetterCode } from './CustCollectionLetterCode';
import { SalesInvoicePostingTypeRu } from './SalesInvoicePostingTypeRu';
import { CustAccountStatement } from './CustAccountStatement';

/**
 * This class represents the entity "CustTableBiEntities" of service "d365_metadata".
 */
export class CustTableBiEntities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustTableBiEntitiesType<T>
{
  /**
   * Technical entity name for CustTableBiEntities.
   */
  static override _entityName = 'CustTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'AccountNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Num.
   */
  declare accountNum: DeserializedType<T, 'Edm.String'>;
  /**
   * United Vat Invoice Lt.
   * @nullable
   */
  declare unitedVatInvoiceLt?: NoYes | null;
  /**
   * Ie Num Br.
   * @nullable
   */
  declare ieNumBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Account.
   * @nullable
   */
  declare vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Day Id.
   * @nullable
   */
  declare paymDayId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Sequence Group.
   * @nullable
   */
  declare numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account.
   * @nullable
   */
  declare invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Clearing Period.
   * @nullable
   */
  declare clearingPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Final User Br.
   * @nullable
   */
  declare custFinalUserBr?: NoYes | null;
  /**
   * Print Dynamic Qr Code In.
   * @nullable
   */
  declare printDynamicQrCodeIn?: NoYes | null;
  /**
   * Commission Group.
   * @nullable
   */
  declare commissionGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Einvoice Ean Num.
   * @nullable
   */
  declare einvoiceEanNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Icms Contributor Br.
   * @nullable
   */
  declare icmsContributorBr?: NoYes | null;
  /**
   * Curp Mx.
   * @nullable
   */
  declare curpMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Carrier Account.
   * @nullable
   */
  declare shipCarrierAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account.
   * @nullable
   */
  declare bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Web Sales Order Display.
   * @nullable
   */
  declare webSalesOrderDisplay?: EcPsalesOrdersViewType | null;
  /**
   * Party State.
   * @nullable
   */
  declare partyState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination Code Id.
   * @nullable
   */
  declare destinationCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Group.
   * @nullable
   */
  declare custGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Cfdi Temporary Export Mx.
   * @nullable
   */
  declare cfdiTemporaryExportMx?: NoYes | null;
  /**
   * Irs 1099 C Indicator.
   * @nullable
   */
  declare irs1099CIndicator?: NoYes | null;
  /**
   * Memo.
   * @nullable
   */
  declare memo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Card Address Verification.
   * @nullable
   */
  declare creditCardAddressVerification?: CreditCardAddressVerification | null;
  /**
   * Package Deposit Excempt Pl.
   * @nullable
   */
  declare packageDepositExcemptPl?: NoYes | null;
  /**
   * Dlv Reason.
   * @nullable
   */
  declare dlvReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Num.
   * @nullable
   */
  declare vatNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sat Paym Method Mx.
   * @nullable
   */
  declare satPaymMethodMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Giro Type.
   * @nullable
   */
  declare giroType?: PaymentStub | null;
  /**
   * Tax License Num.
   * @nullable
   */
  declare taxLicenseNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Exclude Collection Fee.
   * @nullable
   */
  declare custExcludeCollectionFee?: NoYes | null;
  /**
   * Express Bill Of Lading.
   * @nullable
   */
  declare expressBillOfLading?: NoYes | null;
  /**
   * Federal Comments.
   * @nullable
   */
  declare federalComments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Wht Contribution Type Br.
   * @nullable
   */
  declare custWhtContributionTypeBr?: CustWhtContributionTypeBr | null;
  /**
   * Invoice Type W.
   * @nullable
   */
  declare invoiceTypeW?: InvoiceTypeW | null;
  /**
   * Issuer Country Hu.
   * @nullable
   */
  declare issuerCountryHu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Insscei Br.
   * @nullable
   */
  declare inssceiBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sat Registration Name Mx.
   * @nullable
   */
  declare satRegistrationNameMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Item Group Id.
   * @nullable
   */
  declare custItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Card Address Verification Level.
   * @nullable
   */
  declare creditCardAddressVerificationLevel?: CreditCardAddressVerificationLevel | null;
  /**
   * Line Of Business Id.
   * @nullable
   */
  declare lineOfBusinessId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Workflow State.
   * @nullable
   */
  declare workflowState?: CustTableChangeProposalWorkflowState | null;
  /**
   * Default Direct Debit Mandate.
   */
  declare defaultDirectDebitMandate: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Suframa Piscofins Br.
   * @nullable
   */
  declare suframaPiscofinsBr?: NoYes | null;
  /**
   * Invent Profile Type Ru.
   * @nullable
   */
  declare inventProfileTypeRu?: InventProfileTypeRu | null;
  /**
   * Party.
   */
  declare party: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Foreigner Id Br.
   * @nullable
   */
  declare foreignerIdBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Presence Type Br.
   * @nullable
   */
  declare presenceTypeBr?: EfDocPresenceTypeBr | null;
  /**
   * Use Original Document As Facture Ru.
   * @nullable
   */
  declare useOriginalDocumentAsFactureRu?: NoYes | null;
  /**
   * Is Resident Lv.
   * @nullable
   */
  declare isResidentLv?: NoYes | null;
  /**
   * Cust Write Off Ref Rec Id.
   */
  declare custWriteOffRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Affiliated Ru.
   * @nullable
   */
  declare affiliatedRu?: NoYes | null;
  /**
   * Dlv Term.
   * @nullable
   */
  declare dlvTerm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Spec.
   * @nullable
   */
  declare paymSpec?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mandatory Credit Limit.
   * @nullable
   */
  declare mandatoryCreditLimit?: NoYes | null;
  /**
   * Invent Location.
   * @nullable
   */
  declare inventLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Pool Id.
   * @nullable
   */
  declare salesPoolId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Authority Office It.
   * @nullable
   */
  declare authorityOfficeIt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Block Floor Limit Use In Channel.
   * @nullable
   */
  declare blockFloorLimitUseInChannel?: NoYes | null;
  /**
   * Foreign Resident Ru.
   * @nullable
   */
  declare foreignResidentRu?: NoYes | null;
  /**
   * Pds Freight Accrued.
   * @nullable
   */
  declare pdsFreightAccrued?: NoYes | null;
  /**
   * Inter Company Auto Create Orders.
   * @nullable
   */
  declare interCompanyAutoCreateOrders?: NoYes | null;
  /**
   * Multi Line Disc.
   * @nullable
   */
  declare multiLineDisc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cfdi Skip Ieps Taxes Mx.
   * @nullable
   */
  declare cfdiSkipIepsTaxesMx?: NoYes | null;
  /**
   * Giro Type Free Text Invoice.
   * @nullable
   */
  declare giroTypeFreeTextInvoice?: PaymentStub | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Site Id.
   * @nullable
   */
  declare inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Birth Place It.
   * @nullable
   */
  declare birthPlaceIt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Term Id.
   * @nullable
   */
  declare paymTermId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Sched.
   * @nullable
   */
  declare paymSched?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Id Type.
   * @nullable
   */
  declare paymIdType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Invent Status Id.
   * @nullable
   */
  declare defaultInventStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Identification Number.
   * @nullable
   */
  declare identificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Reference Ee.
   * @nullable
   */
  declare paymentReferenceEe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Code On Dlv Address Br.
   * @nullable
   */
  declare serviceCodeOnDlvAddressBr?: NoYes | null;
  /**
   * Fed Non Fed Indicator.
   * @nullable
   */
  declare fedNonFedIndicator?: FederalNonFederalIndicatorCode | null;
  /**
   * One Time Customer.
   * @nullable
   */
  declare oneTimeCustomer?: NoYes | null;
  /**
   * Credit Card Address Verification Void.
   * @nullable
   */
  declare creditCardAddressVerificationVoid?: NoYes | null;
  /**
   * Giro Type Collectionletter.
   * @nullable
   */
  declare giroTypeCollectionletter?: PaymentStub | null;
  /**
   * Main Contact Worker.
   */
  declare mainContactWorker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Subsegment Id.
   * @nullable
   */
  declare subsegmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Id Siret.
   * @nullable
   */
  declare companyIdSiret?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Code.
   * @nullable
   */
  declare fiscalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Simplify Tax Intgr Export Doc Validation Cn.
   * @nullable
   */
  declare simplifyTaxIntgrExportDocValidationCn?: NoYes | null;
  /**
   * Giro Type Account Statement.
   * @nullable
   */
  declare giroTypeAccountStatement?: PaymentStub | null;
  /**
   * Cash Disc Base Days.
   */
  declare cashDiscBaseDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Fine Code Br.
   * @nullable
   */
  declare fineCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Withhold Calculate In.
   * @nullable
   */
  declare taxWithholdCalculateIn?: NoYes | null;
  /**
   * Agency Location Code.
   * @nullable
   */
  declare agencyLocationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Num Rec Id.
   */
  declare vatNumRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Inter Company Direct Delivery.
   * @nullable
   */
  declare interCompanyDirectDelivery?: NoYes | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Blocked.
   * @nullable
   */
  declare blocked?: CustVendorBlocked | null;
  /**
   * Suframa Number Br.
   * @nullable
   */
  declare suframaNumberBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lv Paym Trans Codes.
   */
  declare lvPaymTransCodes: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Externally Maintained.
   * @nullable
   */
  declare isExternallyMaintained?: NoYes | null;
  /**
   * Foreign Tax Registration Mx.
   * @nullable
   */
  declare foreignTaxRegistrationMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rfc Mx.
   * @nullable
   */
  declare rfcMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incl Tax.
   * @nullable
   */
  declare inclTax?: NoYes | null;
  /**
   * Credit Max.
   */
  declare creditMax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Simple National Br.
   * @nullable
   */
  declare simpleNationalBr?: NoYes | null;
  /**
   * Suframa Br.
   * @nullable
   */
  declare suframaBr?: NoYes | null;
  /**
   * Line Disc.
   * @nullable
   */
  declare lineDisc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Allow Indirect Creation.
   * @nullable
   */
  declare interCompanyAllowIndirectCreation?: NoYes | null;
  /**
   * Export Sales Pl.
   * @nullable
   */
  declare exportSalesPl?: NoYes | null;
  /**
   * Passport No Hu.
   * @nullable
   */
  declare passportNoHu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Trading Partner Code.
   */
  declare custTradingPartnerCode: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Issue Own Entry Certificate W.
   * @nullable
   */
  declare issueOwnEntryCertificateW?: NoYes | null;
  /**
   * Statistics Group.
   * @nullable
   */
  declare statisticsGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Dmp Include.
   * @nullable
   */
  declare forecastDmpInclude?: NoYes | null;
  /**
   * Ccm Num Br.
   * @nullable
   */
  declare ccmNumBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Type Mx.
   * @nullable
   */
  declare companyTypeMx?: CompanyTypeMx | null;
  /**
   * Vat Num Table Type.
   * @nullable
   */
  declare vatNumTableType?: TaxExemptNumberSourceType | null;
  /**
   * Cust Classification Id.
   * @nullable
   */
  declare custClassificationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Birth County Code It.
   * @nullable
   */
  declare birthCountyCodeIt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entry Certificate Required W.
   * @nullable
   */
  declare entryCertificateRequiredW?: NoYes | null;
  /**
   * Ship Carrier Account Code.
   * @nullable
   */
  declare shipCarrierAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Factoring Account.
   * @nullable
   */
  declare factoringAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Cust Paym Id Table.
   */
  declare bankCustPaymIdTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Mandatory Vat Date Pl.
   * @nullable
   */
  declare mandatoryVatDatePl?: NoYes | null;
  /**
   * Use Purch Request.
   * @nullable
   */
  declare usePurchRequest?: NoYes | null;
  /**
   * Cash Disc.
   * @nullable
   */
  declare cashDisc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Exclude Interest Charges.
   * @nullable
   */
  declare custExcludeInterestCharges?: NoYes | null;
  /**
   * Cnpjcpf Num Br.
   * @nullable
   */
  declare cnpjcpfNumBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Withhold Calculate Th.
   * @nullable
   */
  declare taxWithholdCalculateTh?: NoYes | null;
  /**
   * Int Bank Lv.
   * @nullable
   */
  declare intBankLv?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Central Bank Purpose Text.
   * @nullable
   */
  declare bankCentralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Card Cvc.
   * @nullable
   */
  declare creditCardCvc?: CreditCardCvc | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Bank Central Bank Purpose Code.
   * @nullable
   */
  declare bankCentralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Simplify Tax Intgr Export Tax Reg Validation Cn.
   * @nullable
   */
  declare simplifyTaxIntgrExportTaxRegValidationCn?: NoYes | null;
  /**
   * Markup Group.
   * @nullable
   */
  declare markupGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Calendar Id.
   * @nullable
   */
  declare salesCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales District Id.
   * @nullable
   */
  declare salesDistrictId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Our Account Num.
   * @nullable
   */
  declare ourAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dlv Mode.
   * @nullable
   */
  declare dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mcr Merged Parent.
   * @nullable
   */
  declare mcrMergedParent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cnae Br.
   * @nullable
   */
  declare cnaeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address.
   * @nullable
   */
  declare invoiceAddress?: InvoiceOrderAccount | null;
  /**
   * Pack Material Fee License Num.
   * @nullable
   */
  declare packMaterialFeeLicenseNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mcr Merged Root.
   * @nullable
   */
  declare mcrMergedRoot?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Doc Type Pl.
   * @nullable
   */
  declare fiscalDocTypePl?: PlFiscalDocType | null;
  /**
   * Company Naf Code.
   */
  declare companyNafCode: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sat Purpose Mx.
   * @nullable
   */
  declare satPurposeMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Invoice Attachment.
   * @nullable
   */
  declare eInvoiceAttachment?: NoYes | null;
  /**
   * Foreign Trade Mx.
   * @nullable
   */
  declare foreignTradeMx?: NoYes | null;
  /**
   * Sales Group.
   * @nullable
   */
  declare salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Supp Item Group Id.
   * @nullable
   */
  declare suppItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Rating.
   * @nullable
   */
  declare creditRating?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Giro Type Proj Invoice.
   * @nullable
   */
  declare giroTypeProjInvoice?: PaymentStub | null;
  /**
   * Order Entry Deadline Group Id.
   * @nullable
   */
  declare orderEntryDeadlineGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created Date Time 1.
   */
  declare createdDateTime1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cfdi Enabled Mx.
   * @nullable
   */
  declare cfdiEnabledMx?: NoYes | null;
  /**
   * Nit Br.
   * @nullable
   */
  declare nitBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Public Sector It.
   * @nullable
   */
  declare isPublicSectorIt?: NoYes | null;
  /**
   * Pds Rebate Tma Group.
   * @nullable
   */
  declare pdsRebateTmaGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pds Cust Rebate Group Id.
   * @nullable
   */
  declare pdsCustRebateGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State Inscription Mx.
   * @nullable
   */
  declare stateInscriptionMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Interest Code Br.
   * @nullable
   */
  declare interestCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Cash Disc.
   * @nullable
   */
  declare useCashDisc?: UseCashDisc | null;
  /**
   * Paym Mode.
   * @nullable
   */
  declare paymMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Usual Exporter It.
   * @nullable
   */
  declare usualExporterIt?: NoYes | null;
  /**
   * E Invoice.
   * @nullable
   */
  declare eInvoice?: NoYes | null;
  /**
   * Residence Foreign Country Region Id It.
   * @nullable
   */
  declare residenceForeignCountryRegionIdIt?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Segment Id.
   * @nullable
   */
  declare segmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Freight Zone.
   * @nullable
   */
  declare freightZone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Org Id.
   * @nullable
   */
  declare orgId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Carrier Id.
   * @nullable
   */
  declare shipCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Invoice Register It.
   * @nullable
   */
  declare eInvoiceRegisterIt?: NoYes | null;
  /**
   * Collection Letter Code.
   * @nullable
   */
  declare collectionLetterCode?: CustCollectionLetterCode | null;
  /**
   * Company Chain Id.
   * @nullable
   */
  declare companyChainId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Profile Id Ru.
   * @nullable
   */
  declare inventProfileIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Carrier Blind Shipment.
   * @nullable
   */
  declare shipCarrierBlindShipment?: NoYes | null;
  /**
   * Free Notes Group It.
   * @nullable
   */
  declare freeNotesGroupIt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Posting Type Ru.
   * @nullable
   */
  declare invoicePostingTypeRu?: SalesInvoicePostingTypeRu | null;
  /**
   * Price Group.
   * @nullable
   */
  declare priceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cons Day Jp.
   */
  declare consDayJp: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Generate Incoming Fiscal Document Br.
   * @nullable
   */
  declare generateIncomingFiscalDocumentBr?: NoYes | null;
  /**
   * Party Country.
   * @nullable
   */
  declare partyCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Giro Type Interest Note.
   * @nullable
   */
  declare giroTypeInterestNote?: PaymentStub | null;
  /**
   * Tax Withhold Group Th.
   * @nullable
   */
  declare taxWithholdGroupTh?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Period Payment Code Pl.
   * @nullable
   */
  declare taxPeriodPaymentCodePl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Gst Relief Group Heading My.
   */
  declare taxGstReliefGroupHeadingMy: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Regime Code Mx.
   * @nullable
   */
  declare taxRegimeCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Statement.
   * @nullable
   */
  declare accountStatement?: CustAccountStatement | null;
  /**
   * End Disc.
   * @nullable
   */
  declare endDisc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Carrier Fuel Surcharge.
   * @nullable
   */
  declare shipCarrierFuelSurcharge?: NoYes | null;

  constructor(_entityApi: CustTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface CustTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accountNum: DeserializedType<T, 'Edm.String'>;
  unitedVatInvoiceLt?: NoYes | null;
  ieNumBr?: DeserializedType<T, 'Edm.String'> | null;
  vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  paymDayId?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  clearingPeriod?: DeserializedType<T, 'Edm.String'> | null;
  custFinalUserBr?: NoYes | null;
  printDynamicQrCodeIn?: NoYes | null;
  commissionGroup?: DeserializedType<T, 'Edm.String'> | null;
  einvoiceEanNum?: DeserializedType<T, 'Edm.String'> | null;
  icmsContributorBr?: NoYes | null;
  curpMx?: DeserializedType<T, 'Edm.String'> | null;
  shipCarrierAccount?: DeserializedType<T, 'Edm.String'> | null;
  bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  webSalesOrderDisplay?: EcPsalesOrdersViewType | null;
  partyState?: DeserializedType<T, 'Edm.String'> | null;
  destinationCodeId?: DeserializedType<T, 'Edm.String'> | null;
  custGroup?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  cfdiTemporaryExportMx?: NoYes | null;
  irs1099CIndicator?: NoYes | null;
  memo?: DeserializedType<T, 'Edm.String'> | null;
  creditCardAddressVerification?: CreditCardAddressVerification | null;
  packageDepositExcemptPl?: NoYes | null;
  dlvReason?: DeserializedType<T, 'Edm.String'> | null;
  vatNum?: DeserializedType<T, 'Edm.String'> | null;
  satPaymMethodMx?: DeserializedType<T, 'Edm.String'> | null;
  giroType?: PaymentStub | null;
  taxLicenseNum?: DeserializedType<T, 'Edm.String'> | null;
  custExcludeCollectionFee?: NoYes | null;
  expressBillOfLading?: NoYes | null;
  federalComments?: DeserializedType<T, 'Edm.String'> | null;
  custWhtContributionTypeBr?: CustWhtContributionTypeBr | null;
  invoiceTypeW?: InvoiceTypeW | null;
  issuerCountryHu?: DeserializedType<T, 'Edm.String'> | null;
  inssceiBr?: DeserializedType<T, 'Edm.String'> | null;
  satRegistrationNameMx?: DeserializedType<T, 'Edm.String'> | null;
  custItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  creditCardAddressVerificationLevel?: CreditCardAddressVerificationLevel | null;
  lineOfBusinessId?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  workflowState?: CustTableChangeProposalWorkflowState | null;
  defaultDirectDebitMandate: DeserializedType<T, 'Edm.Int64'>;
  suframaPiscofinsBr?: NoYes | null;
  inventProfileTypeRu?: InventProfileTypeRu | null;
  party: DeserializedType<T, 'Edm.Int64'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  foreignerIdBr?: DeserializedType<T, 'Edm.String'> | null;
  presenceTypeBr?: EfDocPresenceTypeBr | null;
  useOriginalDocumentAsFactureRu?: NoYes | null;
  isResidentLv?: NoYes | null;
  custWriteOffRefRecId: DeserializedType<T, 'Edm.Int64'>;
  affiliatedRu?: NoYes | null;
  dlvTerm?: DeserializedType<T, 'Edm.String'> | null;
  paymSpec?: DeserializedType<T, 'Edm.String'> | null;
  mandatoryCreditLimit?: NoYes | null;
  inventLocation?: DeserializedType<T, 'Edm.String'> | null;
  salesPoolId?: DeserializedType<T, 'Edm.String'> | null;
  authorityOfficeIt?: DeserializedType<T, 'Edm.String'> | null;
  blockFloorLimitUseInChannel?: NoYes | null;
  foreignResidentRu?: NoYes | null;
  pdsFreightAccrued?: NoYes | null;
  interCompanyAutoCreateOrders?: NoYes | null;
  multiLineDisc?: DeserializedType<T, 'Edm.String'> | null;
  cfdiSkipIepsTaxesMx?: NoYes | null;
  giroTypeFreeTextInvoice?: PaymentStub | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  birthPlaceIt?: DeserializedType<T, 'Edm.String'> | null;
  paymTermId?: DeserializedType<T, 'Edm.String'> | null;
  paymSched?: DeserializedType<T, 'Edm.String'> | null;
  paymIdType?: DeserializedType<T, 'Edm.String'> | null;
  defaultInventStatusId?: DeserializedType<T, 'Edm.String'> | null;
  identificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  paymentReferenceEe?: DeserializedType<T, 'Edm.String'> | null;
  serviceCodeOnDlvAddressBr?: NoYes | null;
  fedNonFedIndicator?: FederalNonFederalIndicatorCode | null;
  oneTimeCustomer?: NoYes | null;
  creditCardAddressVerificationVoid?: NoYes | null;
  giroTypeCollectionletter?: PaymentStub | null;
  mainContactWorker: DeserializedType<T, 'Edm.Int64'>;
  subsegmentId?: DeserializedType<T, 'Edm.String'> | null;
  companyIdSiret?: DeserializedType<T, 'Edm.String'> | null;
  fiscalCode?: DeserializedType<T, 'Edm.String'> | null;
  simplifyTaxIntgrExportDocValidationCn?: NoYes | null;
  giroTypeAccountStatement?: PaymentStub | null;
  cashDiscBaseDays: DeserializedType<T, 'Edm.Int32'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  fineCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  taxWithholdCalculateIn?: NoYes | null;
  agencyLocationCode?: DeserializedType<T, 'Edm.String'> | null;
  vatNumRecId: DeserializedType<T, 'Edm.Int64'>;
  interCompanyDirectDelivery?: NoYes | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  blocked?: CustVendorBlocked | null;
  suframaNumberBr?: DeserializedType<T, 'Edm.String'> | null;
  lvPaymTransCodes: DeserializedType<T, 'Edm.Int64'>;
  isExternallyMaintained?: NoYes | null;
  foreignTaxRegistrationMx?: DeserializedType<T, 'Edm.String'> | null;
  rfcMx?: DeserializedType<T, 'Edm.String'> | null;
  inclTax?: NoYes | null;
  creditMax: DeserializedType<T, 'Edm.Decimal'>;
  simpleNationalBr?: NoYes | null;
  suframaBr?: NoYes | null;
  lineDisc?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyAllowIndirectCreation?: NoYes | null;
  exportSalesPl?: NoYes | null;
  passportNoHu?: DeserializedType<T, 'Edm.String'> | null;
  custTradingPartnerCode: DeserializedType<T, 'Edm.Int64'>;
  issueOwnEntryCertificateW?: NoYes | null;
  statisticsGroup?: DeserializedType<T, 'Edm.String'> | null;
  forecastDmpInclude?: NoYes | null;
  ccmNumBr?: DeserializedType<T, 'Edm.String'> | null;
  companyTypeMx?: CompanyTypeMx | null;
  vatNumTableType?: TaxExemptNumberSourceType | null;
  custClassificationId?: DeserializedType<T, 'Edm.String'> | null;
  birthCountyCodeIt?: DeserializedType<T, 'Edm.String'> | null;
  entryCertificateRequiredW?: NoYes | null;
  shipCarrierAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  factoringAccount?: DeserializedType<T, 'Edm.String'> | null;
  bankCustPaymIdTable: DeserializedType<T, 'Edm.Int64'>;
  mandatoryVatDatePl?: NoYes | null;
  usePurchRequest?: NoYes | null;
  cashDisc?: DeserializedType<T, 'Edm.String'> | null;
  custExcludeInterestCharges?: NoYes | null;
  cnpjcpfNumBr?: DeserializedType<T, 'Edm.String'> | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  taxWithholdCalculateTh?: NoYes | null;
  intBankLv?: DeserializedType<T, 'Edm.String'> | null;
  bankCentralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  creditCardCvc?: CreditCardCvc | null;
  overrideSalesTax?: NoYes | null;
  bankCentralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  simplifyTaxIntgrExportTaxRegValidationCn?: NoYes | null;
  markupGroup?: DeserializedType<T, 'Edm.String'> | null;
  salesCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  salesDistrictId?: DeserializedType<T, 'Edm.String'> | null;
  ourAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  mcrMergedParent?: DeserializedType<T, 'Edm.String'> | null;
  cnaeBr?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddress?: InvoiceOrderAccount | null;
  packMaterialFeeLicenseNum?: DeserializedType<T, 'Edm.String'> | null;
  mcrMergedRoot?: DeserializedType<T, 'Edm.String'> | null;
  fiscalDocTypePl?: PlFiscalDocType | null;
  companyNafCode: DeserializedType<T, 'Edm.Int64'>;
  satPurposeMx?: DeserializedType<T, 'Edm.String'> | null;
  eInvoiceAttachment?: NoYes | null;
  foreignTradeMx?: NoYes | null;
  salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  suppItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  creditRating?: DeserializedType<T, 'Edm.String'> | null;
  giroTypeProjInvoice?: PaymentStub | null;
  orderEntryDeadlineGroupId?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cfdiEnabledMx?: NoYes | null;
  nitBr?: DeserializedType<T, 'Edm.String'> | null;
  isPublicSectorIt?: NoYes | null;
  pdsRebateTmaGroup?: DeserializedType<T, 'Edm.String'> | null;
  pdsCustRebateGroupId?: DeserializedType<T, 'Edm.String'> | null;
  stateInscriptionMx?: DeserializedType<T, 'Edm.String'> | null;
  interestCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  useCashDisc?: UseCashDisc | null;
  paymMode?: DeserializedType<T, 'Edm.String'> | null;
  usualExporterIt?: NoYes | null;
  eInvoice?: NoYes | null;
  residenceForeignCountryRegionIdIt?: DeserializedType<T, 'Edm.String'> | null;
  segmentId?: DeserializedType<T, 'Edm.String'> | null;
  freightZone?: DeserializedType<T, 'Edm.String'> | null;
  orgId?: DeserializedType<T, 'Edm.String'> | null;
  shipCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  eInvoiceRegisterIt?: NoYes | null;
  collectionLetterCode?: CustCollectionLetterCode | null;
  companyChainId?: DeserializedType<T, 'Edm.String'> | null;
  inventProfileIdRu?: DeserializedType<T, 'Edm.String'> | null;
  shipCarrierBlindShipment?: NoYes | null;
  freeNotesGroupIt?: DeserializedType<T, 'Edm.String'> | null;
  invoicePostingTypeRu?: SalesInvoicePostingTypeRu | null;
  priceGroup?: DeserializedType<T, 'Edm.String'> | null;
  consDayJp: DeserializedType<T, 'Edm.Int32'>;
  generateIncomingFiscalDocumentBr?: NoYes | null;
  partyCountry?: DeserializedType<T, 'Edm.String'> | null;
  giroTypeInterestNote?: PaymentStub | null;
  taxWithholdGroupTh?: DeserializedType<T, 'Edm.String'> | null;
  taxPeriodPaymentCodePl?: DeserializedType<T, 'Edm.String'> | null;
  taxGstReliefGroupHeadingMy: DeserializedType<T, 'Edm.Int64'>;
  taxRegimeCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  accountStatement?: CustAccountStatement | null;
  endDisc?: DeserializedType<T, 'Edm.String'> | null;
  shipCarrierFuelSurcharge?: NoYes | null;
}
