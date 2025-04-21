/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaseExecutoryCostsAccounts } from './LeaseExecutoryCostsAccounts';
import { LeaseExecutoryCostsAccountsRequestBuilder } from './LeaseExecutoryCostsAccountsRequestBuilder';
import { AssetLeasePostingAccountCode } from './AssetLeasePostingAccountCode';
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
export class LeaseExecutoryCostsAccountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LeaseExecutoryCostsAccounts<DeSerializersT>, DeSerializersT>
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
  ): LeaseExecutoryCostsAccountsApi<DeSerializersT> {
    return new LeaseExecutoryCostsAccountsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LeaseExecutoryCostsAccounts;

  requestBuilder(): LeaseExecutoryCostsAccountsRequestBuilder<DeSerializersT> {
    return new LeaseExecutoryCostsAccountsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaseExecutoryCostsAccounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LeaseExecutoryCostsAccounts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeaseExecutoryCostsAccounts<DeSerializersT>,
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
    typeof LeaseExecutoryCostsAccounts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaseExecutoryCostsAccounts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeaseExecutoryCostsAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECORD_COUNTER: OrderableEdmTypeField<
      LeaseExecutoryCostsAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACCOUNT_CODE: EnumField<
      LeaseExecutoryCostsAccounts<DeSerializers>,
      DeSerializersT,
      AssetLeasePostingAccountCode,
      true,
      true
    >;
    EXPENSE_TYPE: OrderableEdmTypeField<
      LeaseExecutoryCostsAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      LeaseExecutoryCostsAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOOK_TABLE_BOOK_TYPE: OrderableEdmTypeField<
      LeaseExecutoryCostsAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELATION: OrderableEdmTypeField<
      LeaseExecutoryCostsAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINANCE_LEASE_MAIN_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      LeaseExecutoryCostsAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATING_LEASE_MAIN_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      LeaseExecutoryCostsAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LeaseExecutoryCostsAccounts<DeSerializers>>;
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
         * Static representation of the {@link recordCounter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_COUNTER: fieldBuilder.buildEdmTypeField(
          'RecordCounter',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link accountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CODE: fieldBuilder.buildEnumField(
          'AccountCode',
          AssetLeasePostingAccountCode,
          true
        ),
        /**
         * Static representation of the {@link expenseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_TYPE: fieldBuilder.buildEdmTypeField(
          'ExpenseType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link bookTableBookType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOK_TABLE_BOOK_TYPE: fieldBuilder.buildEdmTypeField(
          'BookTableBookType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link relation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATION: fieldBuilder.buildEdmTypeField(
          'Relation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link financeLeaseMainAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCE_LEASE_MAIN_ACCOUNT_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'FinanceLeaseMainAccountDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link operatingLeaseMainAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_LEASE_MAIN_ACCOUNT_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'OperatingLeaseMainAccountDisplayValue',
            'Edm.String',
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaseExecutoryCostsAccounts)
      };
    }

    return this._schema;
  }
}
