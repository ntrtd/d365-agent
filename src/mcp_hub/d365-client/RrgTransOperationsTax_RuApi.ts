/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RrgTransOperationsTax_Ru } from './RrgTransOperationsTax_Ru';
import { RrgTransOperationsTax_RuRequestBuilder } from './RrgTransOperationsTax_RuRequestBuilder';
import { OperationsTax } from './OperationsTax';
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
export class RrgTransOperationsTax_RuApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RrgTransOperationsTax_Ru<DeSerializersT>, DeSerializersT>
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
  ): RrgTransOperationsTax_RuApi<DeSerializersT> {
    return new RrgTransOperationsTax_RuApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RrgTransOperationsTax_Ru;

  requestBuilder(): RrgTransOperationsTax_RuRequestBuilder<DeSerializersT> {
    return new RrgTransOperationsTax_RuRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RrgTransOperationsTax_Ru<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RrgTransOperationsTax_Ru<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RrgTransOperationsTax_Ru<DeSerializersT>,
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
    typeof RrgTransOperationsTax_Ru,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RrgTransOperationsTax_Ru,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RrgTransOperationsTax_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATIONS_TAX: EnumField<
      RrgTransOperationsTax_Ru<DeSerializers>,
      DeSerializersT,
      OperationsTax,
      true,
      true
    >;
    REF_TABLE_NAME: OrderableEdmTypeField<
      RrgTransOperationsTax_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REF_LINE_ID: OrderableEdmTypeField<
      RrgTransOperationsTax_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RrgTransOperationsTax_Ru<DeSerializers>>;
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
         * Static representation of the {@link operationsTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATIONS_TAX: fieldBuilder.buildEnumField(
          'OperationsTax',
          OperationsTax,
          true
        ),
        /**
         * Static representation of the {@link refTableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'RefTableName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link refLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_LINE_ID: fieldBuilder.buildEdmTypeField(
          'RefLineId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RrgTransOperationsTax_Ru)
      };
    }

    return this._schema;
  }
}
