/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailInfocodeAssociations } from './RetailInfocodeAssociations';
import { RetailInfocodeAssociationsRequestBuilder } from './RetailInfocodeAssociationsRequestBuilder';
import { RetailInfocodeRefTableIdBase } from './RetailInfocodeRefTableIdBase';
import { NoYes } from './NoYes';
import { RetailNoneAlwaysPositiveNegative } from './RetailNoneAlwaysPositiveNegative';
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
export class RetailInfocodeAssociationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailInfocodeAssociations<DeSerializersT>, DeSerializersT>
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
  ): RetailInfocodeAssociationsApi<DeSerializersT> {
    return new RetailInfocodeAssociationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailInfocodeAssociations;

  requestBuilder(): RetailInfocodeAssociationsRequestBuilder<DeSerializersT> {
    return new RetailInfocodeAssociationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailInfocodeAssociations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailInfocodeAssociations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailInfocodeAssociations<DeSerializersT>,
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
    typeof RetailInfocodeAssociations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailInfocodeAssociations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailInfocodeAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REF_TABLE_ID: EnumField<
      RetailInfocodeAssociations<DeSerializers>,
      DeSerializersT,
      RetailInfocodeRefTableIdBase,
      true,
      true
    >;
    REF_RELATION_1: OrderableEdmTypeField<
      RetailInfocodeAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REF_RELATION_2: OrderableEdmTypeField<
      RetailInfocodeAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REF_RELATION_3: OrderableEdmTypeField<
      RetailInfocodeAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INFOCODE_ID: OrderableEdmTypeField<
      RetailInfocodeAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INPUT_REQUIRED: EnumField<
      RetailInfocodeAssociations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SEQUENCE: OrderableEdmTypeField<
      RetailInfocodeAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WHEN_REQUIRED: EnumField<
      RetailInfocodeAssociations<DeSerializers>,
      DeSerializersT,
      RetailNoneAlwaysPositiveNegative,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailInfocodeAssociations<DeSerializers>>;
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
         * Static representation of the {@link refTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_TABLE_ID: fieldBuilder.buildEnumField(
          'RefTableId',
          RetailInfocodeRefTableIdBase,
          true
        ),
        /**
         * Static representation of the {@link refRelation1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_RELATION_1: fieldBuilder.buildEdmTypeField(
          'RefRelation1',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link refRelation2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_RELATION_2: fieldBuilder.buildEdmTypeField(
          'RefRelation2',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link refRelation3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_RELATION_3: fieldBuilder.buildEdmTypeField(
          'RefRelation3',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link infocodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFOCODE_ID: fieldBuilder.buildEdmTypeField(
          'InfocodeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inputRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INPUT_REQUIRED: fieldBuilder.buildEnumField(
          'InputRequired',
          NoYes,
          true
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
         * Static representation of the {@link whenRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WHEN_REQUIRED: fieldBuilder.buildEnumField(
          'WhenRequired',
          RetailNoneAlwaysPositiveNegative,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailInfocodeAssociations)
      };
    }

    return this._schema;
  }
}
