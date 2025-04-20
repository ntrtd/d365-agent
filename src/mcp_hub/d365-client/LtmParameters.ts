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
import type { LtmParametersApi } from './LtmParametersApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LTMParameters" of service "d365_metadata".
 */
export class LtmParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LtmParametersType<T>
{
  /**
   * Technical entity name for LtmParameters.
   */
  static override _entityName = 'LTMParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmParameters entity.
   */
  static _keys = ['dataAreaId', 'ConfigInitialized'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Config Initialized.
   * @nullable
   */
  declare configInitialized?: NoYes | null;
  /**
   * Project Credit Mandatory.
   * @nullable
   */
  declare projectCreditMandatory?: NoYes | null;
  /**
   * Sales Return Option.
   * @nullable
   */
  declare salesReturnOption?: NoYes | null;
  /**
   * Document Type Prefix Length.
   */
  declare documentTypePrefixLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Employee Note Label A.
   * @nullable
   */
  declare employeeNoteLabelA?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Taxes.
   * @nullable
   */
  declare taxes?: NoYes | null;
  /**
   * Customer Concept Label C.
   * @nullable
   */
  declare customerConceptLabelC?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Concept Label B.
   * @nullable
   */
  declare customerConceptLabelB?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Concept Label A.
   * @nullable
   */
  declare customerConceptLabelA?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Code Upd For Reconc Stat.
   * @nullable
   */
  declare reasonCodeUpdForReconcStat?: NoYes | null;
  /**
   * Reconcile Reason Code.
   * @nullable
   */
  declare reconcileReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Iban Remove Validate.
   * @nullable
   */
  declare ibanRemoveValidate?: NoYes | null;
  /**
   * Vendor Credit Mandatory.
   * @nullable
   */
  declare vendorCreditMandatory?: NoYes | null;
  /**
   * Bank Group Concept Label C.
   * @nullable
   */
  declare bankGroupConceptLabelC?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee Note Label B.
   * @nullable
   */
  declare employeeNoteLabelB?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ca Additional Enabled.
   * @nullable
   */
  declare caAdditionalEnabled?: NoYes | null;
  /**
   * Employee Note Label C.
   * @nullable
   */
  declare employeeNoteLabelC?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Group Note Label C.
   * @nullable
   */
  declare bankGroupNoteLabelC?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Group Note Label B.
   * @nullable
   */
  declare bankGroupNoteLabelB?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Group Note Label A.
   * @nullable
   */
  declare bankGroupNoteLabelA?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Reclass Journal Name.
   * @nullable
   */
  declare vendReclassJournalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Concept Inherit Dim Name.
   * @nullable
   */
  declare conceptInheritDimName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholdings Charged History Rec.
   * @nullable
   */
  declare withholdingsChargedHistoryRec?: NoYes | null;
  /**
   * Project Debit Mandatory.
   * @nullable
   */
  declare projectDebitMandatory?: NoYes | null;
  /**
   * Bank History Rec.
   * @nullable
   */
  declare bankHistoryRec?: NoYes | null;
  /**
   * Customer Note Label A.
   * @nullable
   */
  declare customerNoteLabelA?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Concept Inherits Pos Value.
   * @nullable
   */
  declare conceptInheritsPosValue?: NoYes | null;
  /**
   * Bank Group Concept Label A.
   * @nullable
   */
  declare bankGroupConceptLabelA?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Others History Rec.
   * @nullable
   */
  declare othersHistoryRec?: NoYes | null;
  /**
   * Reconcile Stat Updt In Values.
   * @nullable
   */
  declare reconcileStatUpdtInValues?: NoYes | null;
  /**
   * Vendor Debit Mandatory.
   * @nullable
   */
  declare vendorDebitMandatory?: NoYes | null;
  /**
   * Legal Company Concept Label C.
   * @nullable
   */
  declare legalCompanyConceptLabelC?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Company Concept Label B.
   * @nullable
   */
  declare legalCompanyConceptLabelB?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Company Concept Label A.
   * @nullable
   */
  declare legalCompanyConceptLabelA?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Choose Dim Third Party.
   * @nullable
   */
  declare chooseDimThirdParty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Company Note Label B.
   * @nullable
   */
  declare legalCompanyNoteLabelB?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inherit Dimension.
   * @nullable
   */
  declare inheritDimension?: NoYes | null;
  /**
   * Bank Credit Mandatory.
   * @nullable
   */
  declare bankCreditMandatory?: NoYes | null;
  /**
   * Fixed Assets Credit Mandatory.
   * @nullable
   */
  declare fixedAssetsCreditMandatory?: NoYes | null;
  /**
   * Bank Group Concept Label B.
   * @nullable
   */
  declare bankGroupConceptLabelB?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Reclass Journal Name.
   * @nullable
   */
  declare custReclassJournalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Note Label C.
   * @nullable
   */
  declare customerNoteLabelC?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Concept Label A.
   * @nullable
   */
  declare contactPersonConceptLabelA?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Set Dim Third Party.
   */
  declare setDimThirdParty: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Cash History Rec.
   * @nullable
   */
  declare cashHistoryRec?: NoYes | null;
  /**
   * Customer Note Label B.
   * @nullable
   */
  declare customerNoteLabelB?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Concept Label B.
   * @nullable
   */
  declare contactPersonConceptLabelB?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Concept Label B.
   * @nullable
   */
  declare vendorConceptLabelB?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Concept Label C.
   * @nullable
   */
  declare vendorConceptLabelC?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Addr Tax Group Tax Code Add.
   * @nullable
   */
  declare custAddrTaxGroupTaxCodeAdd?: NoYes | null;
  /**
   * Vendor Concept Label A.
   * @nullable
   */
  declare vendorConceptLabelA?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Company Note Label A.
   * @nullable
   */
  declare legalCompanyNoteLabelA?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Credit Mandatory.
   * @nullable
   */
  declare customerCreditMandatory?: NoYes | null;
  /**
   * Vendor Note Label A.
   * @nullable
   */
  declare vendorNoteLabelA?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Credit Mandatory.
   * @nullable
   */
  declare ledgerCreditMandatory?: NoYes | null;
  /**
   * Contact Person Concept Label C.
   * @nullable
   */
  declare contactPersonConceptLabelC?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholdings Paym History Rec.
   * @nullable
   */
  declare withholdingsPaymHistoryRec?: NoYes | null;
  /**
   * Fixed Assets Debit Mandatory.
   * @nullable
   */
  declare fixedAssetsDebitMandatory?: NoYes | null;
  /**
   * Employee Concept Label B.
   * @nullable
   */
  declare employeeConceptLabelB?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee Concept Label C.
   * @nullable
   */
  declare employeeConceptLabelC?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee Concept Label A.
   * @nullable
   */
  declare employeeConceptLabelA?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Note Label B.
   * @nullable
   */
  declare vendorNoteLabelB?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Debit Mandatory.
   * @nullable
   */
  declare ledgerDebitMandatory?: NoYes | null;
  /**
   * Bank Debit Mandatory.
   * @nullable
   */
  declare bankDebitMandatory?: NoYes | null;
  /**
   * Customer Debit Mandatory.
   * @nullable
   */
  declare customerDebitMandatory?: NoYes | null;
  /**
   * Legal Company Note Label C.
   * @nullable
   */
  declare legalCompanyNoteLabelC?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dim Third Party.
   */
  declare dimThirdParty: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Document Letter Prefix Length.
   */
  declare documentLetterPrefixLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Vendor Note Label C.
   * @nullable
   */
  declare vendorNoteLabelC?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Note Label C.
   * @nullable
   */
  declare contactPersonNoteLabelC?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Note Label B.
   * @nullable
   */
  declare contactPersonNoteLabelB?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Note Label A.
   * @nullable
   */
  declare contactPersonNoteLabelA?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LtmParametersApi<T>) {
    super(_entityApi);
  }
}

export interface LtmParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  configInitialized?: NoYes | null;
  projectCreditMandatory?: NoYes | null;
  salesReturnOption?: NoYes | null;
  documentTypePrefixLength: DeserializedType<T, 'Edm.Int32'>;
  employeeNoteLabelA?: DeserializedType<T, 'Edm.String'> | null;
  taxes?: NoYes | null;
  customerConceptLabelC?: DeserializedType<T, 'Edm.String'> | null;
  customerConceptLabelB?: DeserializedType<T, 'Edm.String'> | null;
  customerConceptLabelA?: DeserializedType<T, 'Edm.String'> | null;
  reasonCodeUpdForReconcStat?: NoYes | null;
  reconcileReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  ibanRemoveValidate?: NoYes | null;
  vendorCreditMandatory?: NoYes | null;
  bankGroupConceptLabelC?: DeserializedType<T, 'Edm.String'> | null;
  employeeNoteLabelB?: DeserializedType<T, 'Edm.String'> | null;
  caAdditionalEnabled?: NoYes | null;
  employeeNoteLabelC?: DeserializedType<T, 'Edm.String'> | null;
  bankGroupNoteLabelC?: DeserializedType<T, 'Edm.String'> | null;
  bankGroupNoteLabelB?: DeserializedType<T, 'Edm.String'> | null;
  bankGroupNoteLabelA?: DeserializedType<T, 'Edm.String'> | null;
  vendReclassJournalName?: DeserializedType<T, 'Edm.String'> | null;
  conceptInheritDimName?: DeserializedType<T, 'Edm.String'> | null;
  withholdingsChargedHistoryRec?: NoYes | null;
  projectDebitMandatory?: NoYes | null;
  bankHistoryRec?: NoYes | null;
  customerNoteLabelA?: DeserializedType<T, 'Edm.String'> | null;
  conceptInheritsPosValue?: NoYes | null;
  bankGroupConceptLabelA?: DeserializedType<T, 'Edm.String'> | null;
  othersHistoryRec?: NoYes | null;
  reconcileStatUpdtInValues?: NoYes | null;
  vendorDebitMandatory?: NoYes | null;
  legalCompanyConceptLabelC?: DeserializedType<T, 'Edm.String'> | null;
  legalCompanyConceptLabelB?: DeserializedType<T, 'Edm.String'> | null;
  legalCompanyConceptLabelA?: DeserializedType<T, 'Edm.String'> | null;
  chooseDimThirdParty?: DeserializedType<T, 'Edm.String'> | null;
  legalCompanyNoteLabelB?: DeserializedType<T, 'Edm.String'> | null;
  inheritDimension?: NoYes | null;
  bankCreditMandatory?: NoYes | null;
  fixedAssetsCreditMandatory?: NoYes | null;
  bankGroupConceptLabelB?: DeserializedType<T, 'Edm.String'> | null;
  custReclassJournalName?: DeserializedType<T, 'Edm.String'> | null;
  customerNoteLabelC?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonConceptLabelA?: DeserializedType<T, 'Edm.String'> | null;
  setDimThirdParty: DeserializedType<T, 'Edm.Boolean'>;
  cashHistoryRec?: NoYes | null;
  customerNoteLabelB?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonConceptLabelB?: DeserializedType<T, 'Edm.String'> | null;
  vendorConceptLabelB?: DeserializedType<T, 'Edm.String'> | null;
  vendorConceptLabelC?: DeserializedType<T, 'Edm.String'> | null;
  custAddrTaxGroupTaxCodeAdd?: NoYes | null;
  vendorConceptLabelA?: DeserializedType<T, 'Edm.String'> | null;
  legalCompanyNoteLabelA?: DeserializedType<T, 'Edm.String'> | null;
  customerCreditMandatory?: NoYes | null;
  vendorNoteLabelA?: DeserializedType<T, 'Edm.String'> | null;
  ledgerCreditMandatory?: NoYes | null;
  contactPersonConceptLabelC?: DeserializedType<T, 'Edm.String'> | null;
  withholdingsPaymHistoryRec?: NoYes | null;
  fixedAssetsDebitMandatory?: NoYes | null;
  employeeConceptLabelB?: DeserializedType<T, 'Edm.String'> | null;
  employeeConceptLabelC?: DeserializedType<T, 'Edm.String'> | null;
  employeeConceptLabelA?: DeserializedType<T, 'Edm.String'> | null;
  vendorNoteLabelB?: DeserializedType<T, 'Edm.String'> | null;
  ledgerDebitMandatory?: NoYes | null;
  bankDebitMandatory?: NoYes | null;
  customerDebitMandatory?: NoYes | null;
  legalCompanyNoteLabelC?: DeserializedType<T, 'Edm.String'> | null;
  dimThirdParty: DeserializedType<T, 'Edm.Boolean'>;
  documentLetterPrefixLength: DeserializedType<T, 'Edm.Int32'>;
  vendorNoteLabelC?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonNoteLabelC?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonNoteLabelB?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonNoteLabelA?: DeserializedType<T, 'Edm.String'> | null;
}
