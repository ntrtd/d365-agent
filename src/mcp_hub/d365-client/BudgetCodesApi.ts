/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetCodes } from './BudgetCodes';
import { BudgetCodesRequestBuilder } from './BudgetCodesRequestBuilder';
import { LedgerFinancialReasonsApi } from './LedgerFinancialReasonsApi';
import { BudgetRegisterEntriesApi } from './BudgetRegisterEntriesApi';
import { BudgetRegisterEntryHeadersApi } from './BudgetRegisterEntryHeadersApi';
import { BudgetTransactionType } from './BudgetTransactionType';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BudgetCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetCodes<DeSerializersT>, DeSerializersT>
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
  ): BudgetCodesApi<DeSerializersT> {
    return new BudgetCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link ledgerFinancialReason} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_FINANCIAL_REASON: OneToOneLink<
      BudgetCodes<DeSerializersT>,
      DeSerializersT,
      LedgerFinancialReasonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntryBudgetCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY_BUDGET_CODE: OneToOneLink<
      BudgetCodes<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntryHeaderBudgetCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY_HEADER_BUDGET_CODE: OneToOneLink<
      BudgetCodes<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntryHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LedgerFinancialReasonsApi<DeSerializersT>,
      BudgetRegisterEntriesApi<DeSerializersT>,
      BudgetRegisterEntryHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEDGER_FINANCIAL_REASON: new OneToOneLink(
        'LedgerFinancialReason',
        this,
        linkedApis[0]
      ),
      BUDGET_REGISTER_ENTRY_BUDGET_CODE: new OneToOneLink(
        'BudgetRegisterEntryBudgetCode',
        this,
        linkedApis[1]
      ),
      BUDGET_REGISTER_ENTRY_HEADER_BUDGET_CODE: new OneToOneLink(
        'BudgetRegisterEntryHeaderBudgetCode',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = BudgetCodes;

  requestBuilder(): BudgetCodesRequestBuilder<DeSerializersT> {
    return new BudgetCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BudgetCodes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BudgetCodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BudgetCodes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BudgetCodes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUDGET_CODE: OrderableEdmTypeField<
      BudgetCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORKFLOW_ID: OrderableEdmTypeField<
      BudgetCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_TYPE: EnumField<
      BudgetCodes<DeSerializers>,
      DeSerializersT,
      BudgetTransactionType,
      true,
      true
    >;
    IS_DEFAULT_CODE: EnumField<
      BudgetCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BudgetCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_CODE: OrderableEdmTypeField<
      BudgetCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerFinancialReason} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_FINANCIAL_REASON: OneToOneLink<
      BudgetCodes<DeSerializersT>,
      DeSerializersT,
      LedgerFinancialReasonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntryBudgetCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY_BUDGET_CODE: OneToOneLink<
      BudgetCodes<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntryHeaderBudgetCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY_HEADER_BUDGET_CODE: OneToOneLink<
      BudgetCodes<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntryHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetCodes<DeSerializers>>;
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
         * Static representation of the {@link budgetCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CODE: fieldBuilder.buildEdmTypeField(
          'BudgetCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link workflowId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_ID: fieldBuilder.buildEdmTypeField(
          'WorkflowId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_TYPE: fieldBuilder.buildEnumField(
          'BudgetType',
          BudgetTransactionType,
          true
        ),
        /**
         * Static representation of the {@link isDefaultCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_CODE: fieldBuilder.buildEnumField(
          'IsDefaultCode',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE: fieldBuilder.buildEdmTypeField(
          'ReasonCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetCodes)
      };
    }

    return this._schema;
  }
}
