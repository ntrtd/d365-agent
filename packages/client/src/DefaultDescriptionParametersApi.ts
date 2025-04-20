/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDescriptionParameters } from './DefaultDescriptionParameters';
import { DefaultDescriptionParametersRequestBuilder } from './DefaultDescriptionParametersRequestBuilder';
import { DefaultDescriptionsApi } from './DefaultDescriptionsApi';
import { LedgerTransTxt } from './LedgerTransTxt';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class DefaultDescriptionParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DefaultDescriptionParameters<DeSerializersT>, DeSerializersT>
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
  ): DefaultDescriptionParametersApi<DeSerializersT> {
    return new DefaultDescriptionParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link defaultDescriptions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_DESCRIPTIONS: OneToOneLink<
      DefaultDescriptionParameters<DeSerializersT>,
      DeSerializersT,
      DefaultDescriptionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DefaultDescriptionsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DEFAULT_DESCRIPTIONS: new OneToOneLink(
        'DefaultDescriptions',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = DefaultDescriptionParameters;

  requestBuilder(): DefaultDescriptionParametersRequestBuilder<DeSerializersT> {
    return new DefaultDescriptionParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DefaultDescriptionParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DefaultDescriptionParameters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DefaultDescriptionParameters<DeSerializersT>,
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
    typeof DefaultDescriptionParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DefaultDescriptionParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DefaultDescriptionParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: EnumField<
      DefaultDescriptionParameters<DeSerializers>,
      DeSerializersT,
      LedgerTransTxt,
      true,
      true
    >;
    LANGUAGE: OrderableEdmTypeField<
      DefaultDescriptionParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARAMETER_NUMBER: OrderableEdmTypeField<
      DefaultDescriptionParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REFERENCE_FIELD_NAME: OrderableEdmTypeField<
      DefaultDescriptionParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_TABLE_NAME: OrderableEdmTypeField<
      DefaultDescriptionParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultDescriptions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_DESCRIPTIONS: OneToOneLink<
      DefaultDescriptionParameters<DeSerializersT>,
      DeSerializersT,
      DefaultDescriptionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DefaultDescriptionParameters<DeSerializers>>;
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEnumField(
          'Description',
          LedgerTransTxt,
          true
        ),
        /**
         * Static representation of the {@link language} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE: fieldBuilder.buildEdmTypeField(
          'Language',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link parameterNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ParameterNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link referenceFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'ReferenceFieldName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link referenceTableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'ReferenceTableName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DefaultDescriptionParameters)
      };
    }

    return this._schema;
  }
}
