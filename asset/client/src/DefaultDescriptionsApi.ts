/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDescriptions } from './DefaultDescriptions';
import { DefaultDescriptionsRequestBuilder } from './DefaultDescriptionsRequestBuilder';
import { DefaultDescriptionParametersApi } from './DefaultDescriptionParametersApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class DefaultDescriptionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DefaultDescriptions<DeSerializersT>, DeSerializersT>
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
  ): DefaultDescriptionsApi<DeSerializersT> {
    return new DefaultDescriptionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link defaultDescriptionParameters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_DESCRIPTION_PARAMETERS: OneToManyLink<
      DefaultDescriptions<DeSerializersT>,
      DeSerializersT,
      DefaultDescriptionParametersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DefaultDescriptionParametersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DEFAULT_DESCRIPTION_PARAMETERS: new OneToManyLink(
        'DefaultDescriptionParameters',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = DefaultDescriptions;

  requestBuilder(): DefaultDescriptionsRequestBuilder<DeSerializersT> {
    return new DefaultDescriptionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DefaultDescriptions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DefaultDescriptions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DefaultDescriptions<DeSerializersT>,
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
    typeof DefaultDescriptions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DefaultDescriptions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DefaultDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: EnumField<
      DefaultDescriptions<DeSerializers>,
      DeSerializersT,
      LedgerTransTxt,
      true,
      true
    >;
    LANGUAGE: OrderableEdmTypeField<
      DefaultDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEXT: OrderableEdmTypeField<
      DefaultDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link defaultDescriptionParameters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_DESCRIPTION_PARAMETERS: OneToManyLink<
      DefaultDescriptions<DeSerializersT>,
      DeSerializersT,
      DefaultDescriptionParametersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DefaultDescriptions<DeSerializers>>;
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
         * Static representation of the {@link text} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT: fieldBuilder.buildEdmTypeField('Text', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DefaultDescriptions)
      };
    }

    return this._schema;
  }
}
