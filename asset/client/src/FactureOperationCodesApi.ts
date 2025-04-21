/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FactureOperationCodes } from './FactureOperationCodes';
import { FactureOperationCodesRequestBuilder } from './FactureOperationCodesRequestBuilder';
import { FactureOperationTypeDefaultRu } from './FactureOperationTypeDefaultRu';
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
export class FactureOperationCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FactureOperationCodes<DeSerializersT>, DeSerializersT>
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
  ): FactureOperationCodesApi<DeSerializersT> {
    return new FactureOperationCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FactureOperationCodes;

  requestBuilder(): FactureOperationCodesRequestBuilder<DeSerializersT> {
    return new FactureOperationCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FactureOperationCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FactureOperationCodes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FactureOperationCodes<DeSerializersT>,
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
    typeof FactureOperationCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FactureOperationCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FactureOperationCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      FactureOperationCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      FactureOperationCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATION_TYPE_DEFAULT: EnumField<
      FactureOperationCodes<DeSerializers>,
      DeSerializersT,
      FactureOperationTypeDefaultRu,
      true,
      true
    >;
    DERIVE: EnumField<
      FactureOperationCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<FactureOperationCodes<DeSerializers>>;
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
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link operationTypeDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_TYPE_DEFAULT: fieldBuilder.buildEnumField(
          'OperationTypeDefault',
          FactureOperationTypeDefaultRu,
          true
        ),
        /**
         * Static representation of the {@link derive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DERIVE: fieldBuilder.buildEnumField('Derive', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FactureOperationCodes)
      };
    }

    return this._schema;
  }
}
