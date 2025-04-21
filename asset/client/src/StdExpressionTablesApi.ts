/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { StdExpressionTables } from './StdExpressionTables';
import { StdExpressionTablesRequestBuilder } from './StdExpressionTablesRequestBuilder';
import { RTax25StdModuleType } from './RTax25StdModuleType';
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
export class StdExpressionTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<StdExpressionTables<DeSerializersT>, DeSerializersT>
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
  ): StdExpressionTablesApi<DeSerializersT> {
    return new StdExpressionTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = StdExpressionTables;

  requestBuilder(): StdExpressionTablesRequestBuilder<DeSerializersT> {
    return new StdExpressionTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    StdExpressionTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<StdExpressionTables<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    StdExpressionTables<DeSerializersT>,
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
    typeof StdExpressionTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        StdExpressionTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      StdExpressionTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEQUENCE: OrderableEdmTypeField<
      StdExpressionTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXPENSE_CODE: OrderableEdmTypeField<
      StdExpressionTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODULE_TYPE: EnumField<
      StdExpressionTables<DeSerializers>,
      DeSerializersT,
      RTax25StdModuleType,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      StdExpressionTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<StdExpressionTables<DeSerializers>>;
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
         * Static representation of the {@link sequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE: fieldBuilder.buildEdmTypeField(
          'Sequence',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link expenseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_CODE: fieldBuilder.buildEdmTypeField(
          'ExpenseCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link moduleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODULE_TYPE: fieldBuilder.buildEnumField(
          'ModuleType',
          RTax25StdModuleType,
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', StdExpressionTables)
      };
    }

    return this._schema;
  }
}
