/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectExpensePolicies } from './ProjectExpensePolicies';
import { ProjectExpensePoliciesRequestBuilder } from './ProjectExpensePoliciesRequestBuilder';
import { ProjExpPolicyPerUnit } from './ProjExpPolicyPerUnit';
import { ProjExpPolicyType } from './ProjExpPolicyType';
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
export class ProjectExpensePoliciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjectExpensePolicies<DeSerializersT>, DeSerializersT>
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
  ): ProjectExpensePoliciesApi<DeSerializersT> {
    return new ProjectExpensePoliciesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjectExpensePolicies;

  requestBuilder(): ProjectExpensePoliciesRequestBuilder<DeSerializersT> {
    return new ProjectExpensePoliciesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectExpensePolicies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjectExpensePolicies<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectExpensePolicies<DeSerializersT>,
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
    typeof ProjectExpensePolicies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectExpensePolicies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectExpensePolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CITY: OrderableEdmTypeField<
      ProjectExpensePolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPENSE_CATEGORY: OrderableEdmTypeField<
      ProjectExpensePolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      ProjectExpensePolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      ProjectExpensePolicies<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      ProjectExpensePolicies<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      ProjectExpensePolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PER_UNIT: EnumField<
      ProjectExpensePolicies<DeSerializers>,
      DeSerializersT,
      ProjExpPolicyPerUnit,
      true,
      true
    >;
    POLICY_TYPE: EnumField<
      ProjectExpensePolicies<DeSerializers>,
      DeSerializersT,
      ProjExpPolicyType,
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      ProjectExpensePolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_CONTRACT_ID: OrderableEdmTypeField<
      ProjectExpensePolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      ProjectExpensePolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_EXPENSE_POLICY_WORKER_GROUP: OrderableEdmTypeField<
      ProjectExpensePolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAXIMUM_AMOUNT: OrderableEdmTypeField<
      ProjectExpensePolicies<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOWABLE_AMOUNT: OrderableEdmTypeField<
      ProjectExpensePolicies<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIPT_MINIMUM: OrderableEdmTypeField<
      ProjectExpensePolicies<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIPT_REQUIRED: EnumField<
      ProjectExpensePolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAXIMUM_PERCENT: OrderableEdmTypeField<
      ProjectExpensePolicies<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ProjectExpensePolicies<DeSerializers>>;
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
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', false),
        /**
         * Static representation of the {@link expenseCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ExpenseCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link customerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerAccount',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link perUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PER_UNIT: fieldBuilder.buildEnumField(
          'PerUnit',
          ProjExpPolicyPerUnit,
          true
        ),
        /**
         * Static representation of the {@link policyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_TYPE: fieldBuilder.buildEnumField(
          'PolicyType',
          ProjExpPolicyType,
          true
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link projectContractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectContractID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link projectExpensePolicyWorkerGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_EXPENSE_POLICY_WORKER_GROUP: fieldBuilder.buildEdmTypeField(
          'ProjectExpensePolicyWorkerGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maximumAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaximumAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link allowableAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWABLE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AllowableAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link receiptMinimum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_MINIMUM: fieldBuilder.buildEdmTypeField(
          'ReceiptMinimum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link receiptRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_REQUIRED: fieldBuilder.buildEnumField(
          'ReceiptRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maximumPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_PERCENT: fieldBuilder.buildEdmTypeField(
          'MaximumPercent',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectExpensePolicies)
      };
    }

    return this._schema;
  }
}
