/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmParameters } from './LtmParameters';
import { LtmParametersRequestBuilder } from './LtmParametersRequestBuilder';
import { NoYes } from './NoYes';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class LtmParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LtmParameters<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): LtmParametersApi<DeSerializersT> {
    return new LtmParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LtmParameters;

  requestBuilder(): LtmParametersRequestBuilder<DeSerializersT> {
    return new LtmParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LtmParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LtmParameters<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LtmParameters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LtmParameters, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(LtmParameters, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONFIG_INITIALIZED: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_CREDIT_MANDATORY: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_RETURN_OPTION: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DOCUMENT_TYPE_PREFIX_LENGTH: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EMPLOYEE_NOTE_LABEL_A: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAXES: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_CONCEPT_LABEL_C: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_CONCEPT_LABEL_B: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_CONCEPT_LABEL_A: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_CODE_UPD_FOR_RECONC_STAT: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECONCILE_REASON_CODE: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IBAN_REMOVE_VALIDATE: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_CREDIT_MANDATORY: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_GROUP_CONCEPT_LABEL_C: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYEE_NOTE_LABEL_B: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CA_ADDITIONAL_ENABLED: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EMPLOYEE_NOTE_LABEL_C: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_GROUP_NOTE_LABEL_C: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_GROUP_NOTE_LABEL_B: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_GROUP_NOTE_LABEL_A: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_RECLASS_JOURNAL_NAME: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONCEPT_INHERIT_DIM_NAME: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDINGS_CHARGED_HISTORY_REC: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_DEBIT_MANDATORY: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_HISTORY_REC: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_NOTE_LABEL_A: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONCEPT_INHERITS_POS_VALUE: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_GROUP_CONCEPT_LABEL_A: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OTHERS_HISTORY_REC: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECONCILE_STAT_UPDT_IN_VALUES: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_DEBIT_MANDATORY: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEGAL_COMPANY_CONCEPT_LABEL_C: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_COMPANY_CONCEPT_LABEL_B: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_COMPANY_CONCEPT_LABEL_A: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHOOSE_DIM_THIRD_PARTY: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_COMPANY_NOTE_LABEL_B: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INHERIT_DIMENSION: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_CREDIT_MANDATORY: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FIXED_ASSETS_CREDIT_MANDATORY: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_GROUP_CONCEPT_LABEL_B: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_RECLASS_JOURNAL_NAME: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_NOTE_LABEL_C: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_CONCEPT_LABEL_A: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SET_DIM_THIRD_PARTY: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    CASH_HISTORY_REC: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_NOTE_LABEL_B: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_CONCEPT_LABEL_B: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_CONCEPT_LABEL_B: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_CONCEPT_LABEL_C: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_ADDR_TAX_GROUP_TAX_CODE_ADD: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_CONCEPT_LABEL_A: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_COMPANY_NOTE_LABEL_A: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_CREDIT_MANDATORY: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_NOTE_LABEL_A: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_CREDIT_MANDATORY: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTACT_PERSON_CONCEPT_LABEL_C: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDINGS_PAYM_HISTORY_REC: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FIXED_ASSETS_DEBIT_MANDATORY: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EMPLOYEE_CONCEPT_LABEL_B: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYEE_CONCEPT_LABEL_C: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYEE_CONCEPT_LABEL_A: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_NOTE_LABEL_B: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_DEBIT_MANDATORY: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_DEBIT_MANDATORY: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_DEBIT_MANDATORY: EnumField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEGAL_COMPANY_NOTE_LABEL_C: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIM_THIRD_PARTY: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    DOCUMENT_LETTER_PREFIX_LENGTH: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VENDOR_NOTE_LABEL_C: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_NOTE_LABEL_C: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_NOTE_LABEL_B: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_NOTE_LABEL_A: OrderableEdmTypeField<
      LtmParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LtmParameters<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link configInitialized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIG_INITIALIZED: fieldBuilder.buildEnumField(
          'ConfigInitialized',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link projectCreditMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CREDIT_MANDATORY: fieldBuilder.buildEnumField(
          'ProjectCreditMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesReturnOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_RETURN_OPTION: fieldBuilder.buildEnumField(
          'SalesReturnOption',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link documentTypePrefixLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TYPE_PREFIX_LENGTH: fieldBuilder.buildEdmTypeField(
          'DocumentTypePrefixLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link employeeNoteLabelA} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_NOTE_LABEL_A: fieldBuilder.buildEdmTypeField(
          'EmployeeNoteLabelA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAXES: fieldBuilder.buildEnumField('Taxes', NoYes, true),
        /**
         * Static representation of the {@link customerConceptLabelC} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_CONCEPT_LABEL_C: fieldBuilder.buildEdmTypeField(
          'CustomerConceptLabelC',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerConceptLabelB} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_CONCEPT_LABEL_B: fieldBuilder.buildEdmTypeField(
          'CustomerConceptLabelB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerConceptLabelA} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_CONCEPT_LABEL_A: fieldBuilder.buildEdmTypeField(
          'CustomerConceptLabelA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reasonCodeUpdForReconcStat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE_UPD_FOR_RECONC_STAT: fieldBuilder.buildEnumField(
          'ReasonCodeUpdForReconcStat',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reconcileReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECONCILE_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'ReconcileReasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ibanRemoveValidate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IBAN_REMOVE_VALIDATE: fieldBuilder.buildEnumField(
          'IBANRemoveValidate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendorCreditMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_CREDIT_MANDATORY: fieldBuilder.buildEnumField(
          'VendorCreditMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link bankGroupConceptLabelC} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_GROUP_CONCEPT_LABEL_C: fieldBuilder.buildEdmTypeField(
          'BankGroupConceptLabelC',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employeeNoteLabelB} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_NOTE_LABEL_B: fieldBuilder.buildEdmTypeField(
          'EmployeeNoteLabelB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link caAdditionalEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CA_ADDITIONAL_ENABLED: fieldBuilder.buildEnumField(
          'CAAdditionalEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link employeeNoteLabelC} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_NOTE_LABEL_C: fieldBuilder.buildEdmTypeField(
          'EmployeeNoteLabelC',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankGroupNoteLabelC} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_GROUP_NOTE_LABEL_C: fieldBuilder.buildEdmTypeField(
          'BankGroupNoteLabelC',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankGroupNoteLabelB} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_GROUP_NOTE_LABEL_B: fieldBuilder.buildEdmTypeField(
          'BankGroupNoteLabelB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankGroupNoteLabelA} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_GROUP_NOTE_LABEL_A: fieldBuilder.buildEdmTypeField(
          'BankGroupNoteLabelA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendReclassJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_RECLASS_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'VendReclassJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conceptInheritDimName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCEPT_INHERIT_DIM_NAME: fieldBuilder.buildEdmTypeField(
          'ConceptInheritDimName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withholdingsChargedHistoryRec} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDINGS_CHARGED_HISTORY_REC: fieldBuilder.buildEnumField(
          'WithholdingsChargedHistoryRec',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link projectDebitMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_DEBIT_MANDATORY: fieldBuilder.buildEnumField(
          'ProjectDebitMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link bankHistoryRec} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_HISTORY_REC: fieldBuilder.buildEnumField(
          'BankHistoryRec',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link customerNoteLabelA} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_NOTE_LABEL_A: fieldBuilder.buildEdmTypeField(
          'CustomerNoteLabelA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conceptInheritsPosValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCEPT_INHERITS_POS_VALUE: fieldBuilder.buildEnumField(
          'ConceptInheritsPOSValue',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link bankGroupConceptLabelA} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_GROUP_CONCEPT_LABEL_A: fieldBuilder.buildEdmTypeField(
          'BankGroupConceptLabelA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link othersHistoryRec} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OTHERS_HISTORY_REC: fieldBuilder.buildEnumField(
          'OthersHistoryRec',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reconcileStatUpdtInValues} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECONCILE_STAT_UPDT_IN_VALUES: fieldBuilder.buildEnumField(
          'ReconcileStatUpdtInValues',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendorDebitMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_DEBIT_MANDATORY: fieldBuilder.buildEnumField(
          'VendorDebitMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link legalCompanyConceptLabelC} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_COMPANY_CONCEPT_LABEL_C: fieldBuilder.buildEdmTypeField(
          'LegalCompanyConceptLabelC',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalCompanyConceptLabelB} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_COMPANY_CONCEPT_LABEL_B: fieldBuilder.buildEdmTypeField(
          'LegalCompanyConceptLabelB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalCompanyConceptLabelA} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_COMPANY_CONCEPT_LABEL_A: fieldBuilder.buildEdmTypeField(
          'LegalCompanyConceptLabelA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chooseDimThirdParty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHOOSE_DIM_THIRD_PARTY: fieldBuilder.buildEdmTypeField(
          'ChooseDimThirdParty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalCompanyNoteLabelB} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_COMPANY_NOTE_LABEL_B: fieldBuilder.buildEdmTypeField(
          'LegalCompanyNoteLabelB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inheritDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INHERIT_DIMENSION: fieldBuilder.buildEnumField(
          'InheritDimension',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link bankCreditMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CREDIT_MANDATORY: fieldBuilder.buildEnumField(
          'BankCreditMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fixedAssetsCreditMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSETS_CREDIT_MANDATORY: fieldBuilder.buildEnumField(
          'FixedAssetsCreditMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link bankGroupConceptLabelB} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_GROUP_CONCEPT_LABEL_B: fieldBuilder.buildEdmTypeField(
          'BankGroupConceptLabelB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custReclassJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_RECLASS_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'CustReclassJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerNoteLabelC} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_NOTE_LABEL_C: fieldBuilder.buildEdmTypeField(
          'CustomerNoteLabelC',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPersonConceptLabelA} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_CONCEPT_LABEL_A: fieldBuilder.buildEdmTypeField(
          'ContactPersonConceptLabelA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link setDimThirdParty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SET_DIM_THIRD_PARTY: fieldBuilder.buildEdmTypeField(
          'SetDimThirdParty',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link cashHistoryRec} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_HISTORY_REC: fieldBuilder.buildEnumField(
          'CashHistoryRec',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link customerNoteLabelB} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_NOTE_LABEL_B: fieldBuilder.buildEdmTypeField(
          'CustomerNoteLabelB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPersonConceptLabelB} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_CONCEPT_LABEL_B: fieldBuilder.buildEdmTypeField(
          'ContactPersonConceptLabelB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorConceptLabelB} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_CONCEPT_LABEL_B: fieldBuilder.buildEdmTypeField(
          'VendorConceptLabelB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorConceptLabelC} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_CONCEPT_LABEL_C: fieldBuilder.buildEdmTypeField(
          'VendorConceptLabelC',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custAddrTaxGroupTaxCodeAdd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ADDR_TAX_GROUP_TAX_CODE_ADD: fieldBuilder.buildEnumField(
          'CustAddrTaxGroupTaxCodeAdd',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendorConceptLabelA} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_CONCEPT_LABEL_A: fieldBuilder.buildEdmTypeField(
          'VendorConceptLabelA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalCompanyNoteLabelA} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_COMPANY_NOTE_LABEL_A: fieldBuilder.buildEdmTypeField(
          'LegalCompanyNoteLabelA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerCreditMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_CREDIT_MANDATORY: fieldBuilder.buildEnumField(
          'CustomerCreditMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendorNoteLabelA} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_NOTE_LABEL_A: fieldBuilder.buildEdmTypeField(
          'VendorNoteLabelA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerCreditMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_CREDIT_MANDATORY: fieldBuilder.buildEnumField(
          'LedgerCreditMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link contactPersonConceptLabelC} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_CONCEPT_LABEL_C: fieldBuilder.buildEdmTypeField(
          'ContactPersonConceptLabelC',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withholdingsPaymHistoryRec} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDINGS_PAYM_HISTORY_REC: fieldBuilder.buildEnumField(
          'WithholdingsPaymHistoryRec',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fixedAssetsDebitMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSETS_DEBIT_MANDATORY: fieldBuilder.buildEnumField(
          'FixedAssetsDebitMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link employeeConceptLabelB} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_CONCEPT_LABEL_B: fieldBuilder.buildEdmTypeField(
          'EmployeeConceptLabelB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employeeConceptLabelC} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_CONCEPT_LABEL_C: fieldBuilder.buildEdmTypeField(
          'EmployeeConceptLabelC',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employeeConceptLabelA} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_CONCEPT_LABEL_A: fieldBuilder.buildEdmTypeField(
          'EmployeeConceptLabelA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorNoteLabelB} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_NOTE_LABEL_B: fieldBuilder.buildEdmTypeField(
          'VendorNoteLabelB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerDebitMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_DEBIT_MANDATORY: fieldBuilder.buildEnumField(
          'LedgerDebitMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link bankDebitMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_DEBIT_MANDATORY: fieldBuilder.buildEnumField(
          'BankDebitMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link customerDebitMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_DEBIT_MANDATORY: fieldBuilder.buildEnumField(
          'CustomerDebitMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link legalCompanyNoteLabelC} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_COMPANY_NOTE_LABEL_C: fieldBuilder.buildEdmTypeField(
          'LegalCompanyNoteLabelC',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimThirdParty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIM_THIRD_PARTY: fieldBuilder.buildEdmTypeField(
          'DimThirdParty',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link documentLetterPrefixLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_LETTER_PREFIX_LENGTH: fieldBuilder.buildEdmTypeField(
          'DocumentLetterPrefixLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link vendorNoteLabelC} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_NOTE_LABEL_C: fieldBuilder.buildEdmTypeField(
          'VendorNoteLabelC',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPersonNoteLabelC} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_NOTE_LABEL_C: fieldBuilder.buildEdmTypeField(
          'ContactPersonNoteLabelC',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPersonNoteLabelB} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_NOTE_LABEL_B: fieldBuilder.buildEdmTypeField(
          'ContactPersonNoteLabelB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPersonNoteLabelA} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_NOTE_LABEL_A: fieldBuilder.buildEdmTypeField(
          'ContactPersonNoteLabelA',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmParameters)
      };
    }

    return this._schema;
  }
}
