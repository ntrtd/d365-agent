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
import type { VendTableBiEntitiesApi } from './VendTableBiEntitiesApi';
import { NoYes } from './NoYes';
import { VendorTypeMx } from './VendorTypeMx';
import { VendCisStatus } from './VendCisStatus';
import { VendTableChangeProposalWorkflowState } from './VendTableChangeProposalWorkflowState';
import { InventProfileTypeRu } from './InventProfileTypeRu';
import { EfDocPresenceTypeBr } from './EfDocPresenceTypeBr';
import { TaxWithholdVendorTypeTh } from './TaxWithholdVendorTypeTh';
import { TaxIdType } from './TaxIdType';
import { CfdiWithholdingTaxpayerTypeMx } from './CfdiWithholdingTaxpayerTypeMx';
import { RevenueTypologyIt } from './RevenueTypologyIt';
import { CustVendorBlocked } from './CustVendorBlocked';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { CompanyTypeMx } from './CompanyTypeMx';
import { TaxExemptNumberSourceType } from './TaxExemptNumberSourceType';
import { Tax1099NameChoice } from './Tax1099NameChoice';
import { VatPartnerKindRu } from './VatPartnerKindRu';
import { VendVendorCollaborationType } from './VendVendorCollaborationType';
import { VendorOperationTypeMx } from './VendorOperationTypeMx';
import { UseCashDisc } from './UseCashDisc';
import { PurchMatchingPolicyWithNotSetOption } from './PurchMatchingPolicyWithNotSetOption';

/**
 * This class represents the entity "VendTableBiEntities" of service "d365_metadata".
 */
export class VendTableBiEntities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VendTableBiEntitiesType<T>
{
  /**
   * Technical entity name for VendTableBiEntities.
   */
  static override _entityName = 'VendTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendTableBiEntities entity.
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
   * Locally Owned.
   * @nullable
   */
  declare locallyOwned?: NoYes | null;
  /**
   * Is Cprb Br.
   * @nullable
   */
  declare isCprbBr?: NoYes | null;
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
   * Nationality Mx.
   * @nullable
   */
  declare nationalityMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account.
   * @nullable
   */
  declare bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Small Business.
   * @nullable
   */
  declare smallBusiness?: NoYes | null;
  /**
   * Destination Code Id.
   * @nullable
   */
  declare destinationCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Second Tin.
   * @nullable
   */
  declare secondTin?: NoYes | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax 1099 Reg Num.
   * @nullable
   */
  declare tax1099RegNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Group.
   * @nullable
   */
  declare vendGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Type Mx.
   * @nullable
   */
  declare vendorTypeMx?: VendorTypeMx | null;
  /**
   * W 9.
   * @nullable
   */
  declare w9?: NoYes | null;
  /**
   * Vend Income Code Br.
   * @nullable
   */
  declare vendIncomeCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Id.
   * @nullable
   */
  declare paymId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Memo.
   * @nullable
   */
  declare memo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Buyer Group Id.
   * @nullable
   */
  declare itemBuyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Num.
   * @nullable
   */
  declare vatNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Amount Purchase Order.
   * @nullable
   */
  declare purchAmountPurchaseOrder?: NoYes | null;
  /**
   * Original Vendor In Reporting It.
   * @nullable
   */
  declare originalVendorInReportingIt?: NoYes | null;
  /**
   * Tax 1099 Fields.
   */
  declare tax1099Fields: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Insscei Br.
   * @nullable
   */
  declare inssceiBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Withhold Group.
   * @nullable
   */
  declare taxWithholdGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cis Status.
   * @nullable
   */
  declare cisStatus?: VendCisStatus | null;
  /**
   * Legal Representative Rfc Mx.
   * @nullable
   */
  declare legalRepresentativeRfcMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Of Business Id.
   * @nullable
   */
  declare lineOfBusinessId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hub Zone.
   * @nullable
   */
  declare hubZone?: NoYes | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bid Only.
   * @nullable
   */
  declare bidOnly?: NoYes | null;
  /**
   * Workflow State.
   * @nullable
   */
  declare workflowState?: VendTableChangeProposalWorkflowState | null;
  /**
   * Vend Consumption Br.
   * @nullable
   */
  declare vendConsumptionBr?: NoYes | null;
  /**
   * Fatca Filing Requirement.
   * @nullable
   */
  declare fatcaFilingRequirement?: NoYes | null;
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
   * Tax Withhold Calculate.
   * @nullable
   */
  declare taxWithholdCalculate?: NoYes | null;
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
   * Residence Foreign Country Region Id.
   * @nullable
   */
  declare residenceForeignCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Presence Type Br.
   * @nullable
   */
  declare presenceTypeBr?: EfDocPresenceTypeBr | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Resident Lv.
   * @nullable
   */
  declare isResidentLv?: NoYes | null;
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
   * Invent Location.
   * @nullable
   */
  declare inventLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cis Unique Tax Payer Ref.
   * @nullable
   */
  declare cisUniqueTaxPayerRef?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Foreign Resident Ru.
   * @nullable
   */
  declare foreignResidentRu?: NoYes | null;
  /**
   * Struct Department Ru.
   * @nullable
   */
  declare structDepartmentRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multi Line Disc.
   * @nullable
   */
  declare multiLineDisc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Tax Agent Ru.
   * @nullable
   */
  declare vatTaxAgentRu?: NoYes | null;
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
   * Default Invent Status Id.
   * @nullable
   */
  declare defaultInventStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Code On Dlv Address Br.
   * @nullable
   */
  declare serviceCodeOnDlvAddressBr?: NoYes | null;
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
   * Vend Invoice Declaration Is.
   */
  declare vendInvoiceDeclarationIs: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Company Id Siret.
   * @nullable
   */
  declare companyIdSiret?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Representative Curp Mx.
   * @nullable
   */
  declare legalRepresentativeCurpMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Non Taxable Br.
   * @nullable
   */
  declare nonTaxableBr?: NoYes | null;
  /**
   * Vend Exception Group.
   */
  declare vendExceptionGroup: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Fiscal Code.
   * @nullable
   */
  declare fiscalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One Time Vendor.
   * @nullable
   */
  declare oneTimeVendor?: NoYes | null;
  /**
   * Tax Withhold Vendor Type Th.
   * @nullable
   */
  declare taxWithholdVendorTypeTh?: TaxWithholdVendorTypeTh | null;
  /**
   * Tax Id Type.
   * @nullable
   */
  declare taxIdType?: TaxIdType | null;
  /**
   * Withholding Taxpayer Type Mx.
   * @nullable
   */
  declare withholdingTaxpayerTypeMx?: CfdiWithholdingTaxpayerTypeMx | null;
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
   * Revenue Typology It.
   * @nullable
   */
  declare revenueTypologyIt?: RevenueTypologyIt | null;
  /**
   * Cis Verification Date.
   */
  declare cisVerificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vat Num Rec Id.
   */
  declare vatNumRecId: DeserializedType<T, 'Edm.Int64'>;
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
   * Offset Account Type.
   * @nullable
   */
  declare offsetAccountType?: LedgerJournalAcType | null;
  /**
   * Minority Owned.
   * @nullable
   */
  declare minorityOwned?: NoYes | null;
  /**
   * Dba.
   * @nullable
   */
  declare dba?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Central Bank Trans Type Cur Ru.
   * @nullable
   */
  declare bankCentralBankTransTypeCurRu?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Lv Paym Trans Codes.
   */
  declare lvPaymTransCodes: DeserializedType<T, 'Edm.Int64'>;
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
   * Purch Pool Id.
   * @nullable
   */
  declare purchPoolId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Line Disc.
   * @nullable
   */
  declare lineDisc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Foreign Entity Indicator.
   * @nullable
   */
  declare foreignEntityIndicator?: NoYes | null;
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
   * Cis Company Reg Num.
   * @nullable
   */
  declare cisCompanyRegNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Birth County Code It.
   * @nullable
   */
  declare birthCountyCodeIt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Calendar Id.
   * @nullable
   */
  declare purchCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Factoring Account.
   * @nullable
   */
  declare factoringAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mandatory Vat Date Pl.
   * @nullable
   */
  declare mandatoryVatDatePl?: NoYes | null;
  /**
   * Cash Disc.
   * @nullable
   */
  declare cashDisc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Code Revenue Typology It.
   * @nullable
   */
  declare codeRevenueTypologyIt?: DeserializedType<T, 'Edm.String'> | null;
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
   * Int Bank Lv.
   * @nullable
   */
  declare intBankLv?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Paym Fee Covered Jp.
   * @nullable
   */
  declare isPaymFeeCoveredJp?: NoYes | null;
  /**
   * W 9 Included.
   * @nullable
   */
  declare w9Included?: NoYes | null;
  /**
   * Bank Central Bank Purpose Text.
   * @nullable
   */
  declare bankCentralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
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
   * Markup Group.
   * @nullable
   */
  declare markupGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 Reports.
   * @nullable
   */
  declare tax1099Reports?: NoYes | null;
  /**
   * Your Account Num.
   * @nullable
   */
  declare yourAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cxml Order Enable.
   * @nullable
   */
  declare cxmlOrderEnable?: NoYes | null;
  /**
   * Name Control.
   * @nullable
   */
  declare nameControl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dlv Mode.
   * @nullable
   */
  declare dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 Name Choice.
   * @nullable
   */
  declare tax1099NameChoice?: Tax1099NameChoice | null;
  /**
   * Cnae Br.
   * @nullable
   */
  declare cnaeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Female Owned.
   * @nullable
   */
  declare femaleOwned?: NoYes | null;
  /**
   * Company Naf Code.
   */
  declare companyNafCode: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Vat Partner Kind Ru.
   * @nullable
   */
  declare vatPartnerKindRu?: VatPartnerKindRu | null;
  /**
   * Vend Vendor Collaboration Type.
   * @nullable
   */
  declare vendVendorCollaborationType?: VendVendorCollaborationType | null;
  /**
   * Supp Item Group Id.
   * @nullable
   */
  declare suppItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Self Invoice Vendor It.
   * @nullable
   */
  declare isSelfInvoiceVendorIt?: NoYes | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Disabled Owned.
   * @nullable
   */
  declare disabledOwned?: NoYes | null;
  /**
   * Credit Rating.
   * @nullable
   */
  declare creditRating?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Price Tolerance Group Id.
   * @nullable
   */
  declare vendPriceToleranceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Ledger Dimension Values Json.
   * @nullable
   */
  declare offsetLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Operation Type Mx.
   * @nullable
   */
  declare operationTypeMx?: VendorOperationTypeMx | null;
  /**
   * Nit Br.
   * @nullable
   */
  declare nitBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Birth Place.
   * @nullable
   */
  declare birthPlace?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Public Sector It.
   * @nullable
   */
  declare isPublicSectorIt?: NoYes | null;
  /**
   * Change Request Enabled.
   * @nullable
   */
  declare changeRequestEnabled?: NoYes | null;
  /**
   * Change Request Allow Override.
   * @nullable
   */
  declare changeRequestAllowOverride?: NoYes | null;
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
   * Heir It.
   * @nullable
   */
  declare heirIt?: NoYes | null;
  /**
   * Is Taxation Over Payroll Br.
   * @nullable
   */
  declare isTaxationOverPayrollBr?: NoYes | null;
  /**
   * Segment Id.
   * @nullable
   */
  declare segmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cis Verification Num.
   * @nullable
   */
  declare cisVerificationNum?: DeserializedType<T, 'Edm.String'> | null;
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
   * Organization Number.
   * @nullable
   */
  declare organizationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Invoice Register It.
   * @nullable
   */
  declare eInvoiceRegisterIt?: NoYes | null;
  /**
   * Veteran Owned.
   * @nullable
   */
  declare veteranOwned?: NoYes | null;
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
   * Vend Item Group Id.
   * @nullable
   */
  declare vendItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Change Request Override.
   * @nullable
   */
  declare changeRequestOverride?: NoYes | null;
  /**
   * Vat Operation Code Ru.
   * @nullable
   */
  declare vatOperationCodeRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Free Notes Group It.
   * @nullable
   */
  declare freeNotesGroupIt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Representative Name Mx.
   * @nullable
   */
  declare legalRepresentativeNameMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Order Of Payment Ru.
   * @nullable
   */
  declare bankOrderOfPaymentRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Paym Fee Group Jp.
   * @nullable
   */
  declare vendPaymFeeGroupJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Group.
   * @nullable
   */
  declare priceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Diot Country Code Mx.
   * @nullable
   */
  declare diotCountryCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cons Day Jp.
   */
  declare consDayJp: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Blocked Release Date.
   */
  declare blockedReleaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Matching Policy.
   * @nullable
   */
  declare matchingPolicy?: PurchMatchingPolicyWithNotSetOption | null;
  /**
   * Withholding Type Code Mx.
   * @nullable
   */
  declare withholdingTypeCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tam Rebate Group Id.
   * @nullable
   */
  declare tamRebateGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ethnic Origin Id.
   * @nullable
   */
  declare ethnicOriginId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Period Payment Code Pl.
   * @nullable
   */
  declare taxPeriodPaymentCodePl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Disc.
   * @nullable
   */
  declare endDisc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cis National Insurance Num.
   * @nullable
   */
  declare cisNationalInsuranceNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Separate Division Id Ru.
   * @nullable
   */
  declare separateDivisionIdRu?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: VendTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface VendTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accountNum: DeserializedType<T, 'Edm.String'>;
  unitedVatInvoiceLt?: NoYes | null;
  ieNumBr?: DeserializedType<T, 'Edm.String'> | null;
  locallyOwned?: NoYes | null;
  isCprbBr?: NoYes | null;
  paymDayId?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  clearingPeriod?: DeserializedType<T, 'Edm.String'> | null;
  icmsContributorBr?: NoYes | null;
  curpMx?: DeserializedType<T, 'Edm.String'> | null;
  nationalityMx?: DeserializedType<T, 'Edm.String'> | null;
  bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  smallBusiness?: NoYes | null;
  destinationCodeId?: DeserializedType<T, 'Edm.String'> | null;
  secondTin?: NoYes | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  tax1099RegNum?: DeserializedType<T, 'Edm.String'> | null;
  vendGroup?: DeserializedType<T, 'Edm.String'> | null;
  vendorTypeMx?: VendorTypeMx | null;
  w9?: NoYes | null;
  vendIncomeCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  paymId?: DeserializedType<T, 'Edm.String'> | null;
  memo?: DeserializedType<T, 'Edm.String'> | null;
  itemBuyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  vatNum?: DeserializedType<T, 'Edm.String'> | null;
  purchAmountPurchaseOrder?: NoYes | null;
  originalVendorInReportingIt?: NoYes | null;
  tax1099Fields: DeserializedType<T, 'Edm.Int64'>;
  inssceiBr?: DeserializedType<T, 'Edm.String'> | null;
  taxWithholdGroup?: DeserializedType<T, 'Edm.String'> | null;
  cisStatus?: VendCisStatus | null;
  legalRepresentativeRfcMx?: DeserializedType<T, 'Edm.String'> | null;
  lineOfBusinessId?: DeserializedType<T, 'Edm.String'> | null;
  hubZone?: NoYes | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  bidOnly?: NoYes | null;
  workflowState?: VendTableChangeProposalWorkflowState | null;
  vendConsumptionBr?: NoYes | null;
  fatcaFilingRequirement?: NoYes | null;
  inventProfileTypeRu?: InventProfileTypeRu | null;
  party: DeserializedType<T, 'Edm.Int64'>;
  taxWithholdCalculate?: NoYes | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  foreignerIdBr?: DeserializedType<T, 'Edm.String'> | null;
  residenceForeignCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  presenceTypeBr?: EfDocPresenceTypeBr | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isResidentLv?: NoYes | null;
  dlvTerm?: DeserializedType<T, 'Edm.String'> | null;
  paymSpec?: DeserializedType<T, 'Edm.String'> | null;
  inventLocation?: DeserializedType<T, 'Edm.String'> | null;
  cisUniqueTaxPayerRef?: DeserializedType<T, 'Edm.String'> | null;
  foreignResidentRu?: NoYes | null;
  structDepartmentRu?: DeserializedType<T, 'Edm.String'> | null;
  multiLineDisc?: DeserializedType<T, 'Edm.String'> | null;
  vatTaxAgentRu?: NoYes | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  paymTermId?: DeserializedType<T, 'Edm.String'> | null;
  paymSched?: DeserializedType<T, 'Edm.String'> | null;
  defaultInventStatusId?: DeserializedType<T, 'Edm.String'> | null;
  serviceCodeOnDlvAddressBr?: NoYes | null;
  mainContactWorker: DeserializedType<T, 'Edm.Int64'>;
  subsegmentId?: DeserializedType<T, 'Edm.String'> | null;
  vendInvoiceDeclarationIs: DeserializedType<T, 'Edm.Int64'>;
  companyIdSiret?: DeserializedType<T, 'Edm.String'> | null;
  legalRepresentativeCurpMx?: DeserializedType<T, 'Edm.String'> | null;
  nonTaxableBr?: NoYes | null;
  vendExceptionGroup: DeserializedType<T, 'Edm.Int64'>;
  fiscalCode?: DeserializedType<T, 'Edm.String'> | null;
  oneTimeVendor?: NoYes | null;
  taxWithholdVendorTypeTh?: TaxWithholdVendorTypeTh | null;
  taxIdType?: TaxIdType | null;
  withholdingTaxpayerTypeMx?: CfdiWithholdingTaxpayerTypeMx | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  fineCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  revenueTypologyIt?: RevenueTypologyIt | null;
  cisVerificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vatNumRecId: DeserializedType<T, 'Edm.Int64'>;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  blocked?: CustVendorBlocked | null;
  offsetAccountType?: LedgerJournalAcType | null;
  minorityOwned?: NoYes | null;
  dba?: DeserializedType<T, 'Edm.String'> | null;
  bankCentralBankTransTypeCurRu?: DeserializedType<T, 'Edm.String'> | null;
  lvPaymTransCodes: DeserializedType<T, 'Edm.Int64'>;
  foreignTaxRegistrationMx?: DeserializedType<T, 'Edm.String'> | null;
  rfcMx?: DeserializedType<T, 'Edm.String'> | null;
  purchPoolId?: DeserializedType<T, 'Edm.String'> | null;
  inclTax?: NoYes | null;
  creditMax: DeserializedType<T, 'Edm.Decimal'>;
  lineDisc?: DeserializedType<T, 'Edm.String'> | null;
  foreignEntityIndicator?: NoYes | null;
  ccmNumBr?: DeserializedType<T, 'Edm.String'> | null;
  companyTypeMx?: CompanyTypeMx | null;
  vatNumTableType?: TaxExemptNumberSourceType | null;
  cisCompanyRegNum?: DeserializedType<T, 'Edm.String'> | null;
  birthCountyCodeIt?: DeserializedType<T, 'Edm.String'> | null;
  purchCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  factoringAccount?: DeserializedType<T, 'Edm.String'> | null;
  mandatoryVatDatePl?: NoYes | null;
  cashDisc?: DeserializedType<T, 'Edm.String'> | null;
  codeRevenueTypologyIt?: DeserializedType<T, 'Edm.String'> | null;
  cnpjcpfNumBr?: DeserializedType<T, 'Edm.String'> | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  intBankLv?: DeserializedType<T, 'Edm.String'> | null;
  isPaymFeeCoveredJp?: NoYes | null;
  w9Included?: NoYes | null;
  bankCentralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTax?: NoYes | null;
  bankCentralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  markupGroup?: DeserializedType<T, 'Edm.String'> | null;
  tax1099Reports?: NoYes | null;
  yourAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  cxmlOrderEnable?: NoYes | null;
  nameControl?: DeserializedType<T, 'Edm.String'> | null;
  dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  tax1099NameChoice?: Tax1099NameChoice | null;
  cnaeBr?: DeserializedType<T, 'Edm.String'> | null;
  femaleOwned?: NoYes | null;
  companyNafCode: DeserializedType<T, 'Edm.Int64'>;
  vatPartnerKindRu?: VatPartnerKindRu | null;
  vendVendorCollaborationType?: VendVendorCollaborationType | null;
  suppItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isSelfInvoiceVendorIt?: NoYes | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  disabledOwned?: NoYes | null;
  creditRating?: DeserializedType<T, 'Edm.String'> | null;
  vendPriceToleranceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  offsetLedgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  operationTypeMx?: VendorOperationTypeMx | null;
  nitBr?: DeserializedType<T, 'Edm.String'> | null;
  birthPlace?: DeserializedType<T, 'Edm.String'> | null;
  isPublicSectorIt?: NoYes | null;
  changeRequestEnabled?: NoYes | null;
  changeRequestAllowOverride?: NoYes | null;
  stateInscriptionMx?: DeserializedType<T, 'Edm.String'> | null;
  interestCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  useCashDisc?: UseCashDisc | null;
  paymMode?: DeserializedType<T, 'Edm.String'> | null;
  heirIt?: NoYes | null;
  isTaxationOverPayrollBr?: NoYes | null;
  segmentId?: DeserializedType<T, 'Edm.String'> | null;
  cisVerificationNum?: DeserializedType<T, 'Edm.String'> | null;
  freightZone?: DeserializedType<T, 'Edm.String'> | null;
  orgId?: DeserializedType<T, 'Edm.String'> | null;
  organizationNumber?: DeserializedType<T, 'Edm.String'> | null;
  eInvoiceRegisterIt?: NoYes | null;
  veteranOwned?: NoYes | null;
  companyChainId?: DeserializedType<T, 'Edm.String'> | null;
  inventProfileIdRu?: DeserializedType<T, 'Edm.String'> | null;
  vendItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  changeRequestOverride?: NoYes | null;
  vatOperationCodeRu?: DeserializedType<T, 'Edm.String'> | null;
  freeNotesGroupIt?: DeserializedType<T, 'Edm.String'> | null;
  legalRepresentativeNameMx?: DeserializedType<T, 'Edm.String'> | null;
  bankOrderOfPaymentRu?: DeserializedType<T, 'Edm.String'> | null;
  vendPaymFeeGroupJp?: DeserializedType<T, 'Edm.String'> | null;
  priceGroup?: DeserializedType<T, 'Edm.String'> | null;
  diotCountryCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  consDayJp: DeserializedType<T, 'Edm.Int32'>;
  blockedReleaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  matchingPolicy?: PurchMatchingPolicyWithNotSetOption | null;
  withholdingTypeCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  tamRebateGroupId?: DeserializedType<T, 'Edm.String'> | null;
  ethnicOriginId?: DeserializedType<T, 'Edm.String'> | null;
  taxPeriodPaymentCodePl?: DeserializedType<T, 'Edm.String'> | null;
  endDisc?: DeserializedType<T, 'Edm.String'> | null;
  cisNationalInsuranceNum?: DeserializedType<T, 'Edm.String'> | null;
  separateDivisionIdRu?: DeserializedType<T, 'Edm.String'> | null;
}
