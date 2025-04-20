/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CashFlowMgmtJourNames } from './CashFlowMgmtJourNames';
import { CashFlowMgmtJourNamesRequestBuilder } from './CashFlowMgmtJourNamesRequestBuilder';
import { CfmJournalType } from './CfmJournalType';
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
export class CashFlowMgmtJourNamesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CashFlowMgmtJourNames<DeSerializersT>, DeSerializersT>
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
  ): CashFlowMgmtJourNamesApi<DeSerializersT> {
    return new CashFlowMgmtJourNamesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CashFlowMgmtJourNames;

  requestBuilder(): CashFlowMgmtJourNamesRequestBuilder<DeSerializersT> {
    return new CashFlowMgmtJourNamesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CashFlowMgmtJourNames<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CashFlowMgmtJourNames<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CashFlowMgmtJourNames<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof CashFlowMgmtJourNames,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CashFlowMgmtJourNames,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CashFlowMgmtJourNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      CashFlowMgmtJourNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_TYPE: EnumField<
      CashFlowMgmtJourNames<DeSerializers>,
      DeSerializersT,
      CfmJournalType,
      true,
      true
    >;
    PAYMENT_ON_CASH_DISCOUNT_DATE: EnumField<
      CashFlowMgmtJourNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OVERDUE_PAYMENTS: EnumField<
      CashFlowMgmtJourNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORKFLOW_ID: OrderableEdmTypeField<
      CashFlowMgmtJourNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CashFlowMgmtJourNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW_ACTIVE: EnumField<
      CashFlowMgmtJourNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_EMPTY_PAYMENT_ACCOUNT: EnumField<
      CashFlowMgmtJourNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CashFlowMgmtJourNames<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link journalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_TYPE: fieldBuilder.buildEnumField(
          'JournalType',
          CfmJournalType,
          true
        ),
        /**
         * Static representation of the {@link paymentOnCashDiscountDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_ON_CASH_DISCOUNT_DATE: fieldBuilder.buildEnumField(
          'PaymentOnCashDiscountDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link overduePayments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERDUE_PAYMENTS: fieldBuilder.buildEnumField(
          'OverduePayments',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workflowId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_ID: fieldBuilder.buildEdmTypeField(
          'WorkflowID',
          'Edm.String',
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
         * Static representation of the {@link workflowActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_ACTIVE: fieldBuilder.buildEnumField(
          'WorkflowActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link includeEmptyPaymentAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_EMPTY_PAYMENT_ACCOUNT: fieldBuilder.buildEnumField(
          'IncludeEmptyPaymentAccount',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CashFlowMgmtJourNames)
      };
    }

    return this._schema;
  }
}
