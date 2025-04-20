/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LabelLayoutDataSourceParameters } from './LabelLayoutDataSourceParameters';
import { LabelLayoutDataSourceParametersRequestBuilder } from './LabelLayoutDataSourceParametersRequestBuilder';
import { NoYes } from './NoYes';
import { WhsLabelLayoutDataSourceParameterType } from './WhsLabelLayoutDataSourceParameterType';
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
export class LabelLayoutDataSourceParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LabelLayoutDataSourceParameters<DeSerializersT>, DeSerializersT>
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
  ): LabelLayoutDataSourceParametersApi<DeSerializersT> {
    return new LabelLayoutDataSourceParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LabelLayoutDataSourceParameters;

  requestBuilder(): LabelLayoutDataSourceParametersRequestBuilder<DeSerializersT> {
    return new LabelLayoutDataSourceParametersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LabelLayoutDataSourceParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LabelLayoutDataSourceParameters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LabelLayoutDataSourceParameters<DeSerializersT>,
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
    typeof LabelLayoutDataSourceParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LabelLayoutDataSourceParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LabelLayoutDataSourceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LABEL_LAYOUT_DATA_SOURCE_ID: OrderableEdmTypeField<
      LabelLayoutDataSourceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      LabelLayoutDataSourceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFAULT_VALUE_STRING: OrderableEdmTypeField<
      LabelLayoutDataSourceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_TEXT: OrderableEdmTypeField<
      LabelLayoutDataSourceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANDATORY: EnumField<
      LabelLayoutDataSourceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TYPE: EnumField<
      LabelLayoutDataSourceParameters<DeSerializers>,
      DeSerializersT,
      WhsLabelLayoutDataSourceParameterType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LabelLayoutDataSourceParameters<DeSerializers>>;
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
         * Static representation of the {@link labelLayoutDataSourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_LAYOUT_DATA_SOURCE_ID: fieldBuilder.buildEdmTypeField(
          'LabelLayoutDataSourceId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link defaultValueString} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_VALUE_STRING: fieldBuilder.buildEdmTypeField(
          'DefaultValueString',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link displayText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_TEXT: fieldBuilder.buildEdmTypeField(
          'DisplayText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY: fieldBuilder.buildEnumField('Mandatory', NoYes, true),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          WhsLabelLayoutDataSourceParameterType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LabelLayoutDataSourceParameters)
      };
    }

    return this._schema;
  }
}
