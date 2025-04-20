/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RTax25RegisterTables } from './RTax25RegisterTables';
import { RTax25RegisterTablesRequestBuilder } from './RTax25RegisterTablesRequestBuilder';
import { RTax25PeriodType } from './RTax25PeriodType';
import { NoYes } from './NoYes';
import { RTax25RegisterType } from './RTax25RegisterType';
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
export class RTax25RegisterTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RTax25RegisterTables<DeSerializersT>, DeSerializersT>
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
  ): RTax25RegisterTablesApi<DeSerializersT> {
    return new RTax25RegisterTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RTax25RegisterTables;

  requestBuilder(): RTax25RegisterTablesRequestBuilder<DeSerializersT> {
    return new RTax25RegisterTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RTax25RegisterTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RTax25RegisterTables<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RTax25RegisterTables<DeSerializersT>,
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
    typeof RTax25RegisterTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RTax25RegisterTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RTax25RegisterTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGISTER_CODE: OrderableEdmTypeField<
      RTax25RegisterTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_TYPES: EnumField<
      RTax25RegisterTables<DeSerializers>,
      DeSerializersT,
      RTax25PeriodType,
      true,
      true
    >;
    EXPAND: EnumField<
      RTax25RegisterTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REGISTER_TYPE: EnumField<
      RTax25RegisterTables<DeSerializers>,
      DeSerializersT,
      RTax25RegisterType,
      true,
      true
    >;
    EXCLUDE: EnumField<
      RTax25RegisterTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REGISTER_NAME: OrderableEdmTypeField<
      RTax25RegisterTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RTax25RegisterTables<DeSerializers>>;
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
         * Static representation of the {@link registerCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTER_CODE: fieldBuilder.buildEdmTypeField(
          'RegisterCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link periodTypes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_TYPES: fieldBuilder.buildEnumField(
          'PeriodTypes',
          RTax25PeriodType,
          true
        ),
        /**
         * Static representation of the {@link expand} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPAND: fieldBuilder.buildEnumField('Expand', NoYes, true),
        /**
         * Static representation of the {@link registerType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTER_TYPE: fieldBuilder.buildEnumField(
          'RegisterType',
          RTax25RegisterType,
          true
        ),
        /**
         * Static representation of the {@link exclude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE: fieldBuilder.buildEnumField('Exclude', NoYes, true),
        /**
         * Static representation of the {@link registerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTER_NAME: fieldBuilder.buildEdmTypeField(
          'RegisterName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RTax25RegisterTables)
      };
    }

    return this._schema;
  }
}
