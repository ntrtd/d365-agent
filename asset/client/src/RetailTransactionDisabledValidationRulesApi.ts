/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionDisabledValidationRules } from './RetailTransactionDisabledValidationRules';
import { RetailTransactionDisabledValidationRulesRequestBuilder } from './RetailTransactionDisabledValidationRulesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class RetailTransactionDisabledValidationRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailTransactionDisabledValidationRules<DeSerializersT>,
      DeSerializersT
    >
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
  ): RetailTransactionDisabledValidationRulesApi<DeSerializersT> {
    return new RetailTransactionDisabledValidationRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTransactionDisabledValidationRules;

  requestBuilder(): RetailTransactionDisabledValidationRulesRequestBuilder<DeSerializersT> {
    return new RetailTransactionDisabledValidationRulesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionDisabledValidationRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionDisabledValidationRules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionDisabledValidationRules<DeSerializersT>,
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
    typeof RetailTransactionDisabledValidationRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionDisabledValidationRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionDisabledValidationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    METHOD_NAME: OrderableEdmTypeField<
      RetailTransactionDisabledValidationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CLASS_NAME: OrderableEdmTypeField<
      RetailTransactionDisabledValidationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      RetailTransactionDisabledValidationRules<DeSerializers>
    >;
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
         * Static representation of the {@link methodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        METHOD_NAME: fieldBuilder.buildEdmTypeField(
          'MethodName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link className} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASS_NAME: fieldBuilder.buildEdmTypeField(
          'ClassName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransactionDisabledValidationRules)
      };
    }

    return this._schema;
  }
}
