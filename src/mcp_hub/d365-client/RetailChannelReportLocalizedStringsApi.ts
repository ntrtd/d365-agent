/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailChannelReportLocalizedStrings } from './RetailChannelReportLocalizedStrings';
import { RetailChannelReportLocalizedStringsRequestBuilder } from './RetailChannelReportLocalizedStringsRequestBuilder';
import { RetailChannelReportVersion } from './RetailChannelReportVersion';
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
export class RetailChannelReportLocalizedStringsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailChannelReportLocalizedStrings<DeSerializersT>,
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
  ): RetailChannelReportLocalizedStringsApi<DeSerializersT> {
    return new RetailChannelReportLocalizedStringsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailChannelReportLocalizedStrings;

  requestBuilder(): RetailChannelReportLocalizedStringsRequestBuilder<DeSerializersT> {
    return new RetailChannelReportLocalizedStringsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailChannelReportLocalizedStrings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailChannelReportLocalizedStrings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailChannelReportLocalizedStrings<DeSerializersT>,
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
    typeof RetailChannelReportLocalizedStrings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailChannelReportLocalizedStrings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LOCALE_CODE: OrderableEdmTypeField<
      RetailChannelReportLocalizedStrings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STRING_ID: OrderableEdmTypeField<
      RetailChannelReportLocalizedStrings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VERSION: EnumField<
      RetailChannelReportLocalizedStrings<DeSerializers>,
      DeSerializersT,
      RetailChannelReportVersion,
      true,
      true
    >;
    STRING_VALUE: OrderableEdmTypeField<
      RetailChannelReportLocalizedStrings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailChannelReportLocalizedStrings<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link localeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCALE_CODE: fieldBuilder.buildEdmTypeField(
          'LocaleCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link stringId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STRING_ID: fieldBuilder.buildEdmTypeField(
          'StringId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link version} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION: fieldBuilder.buildEnumField(
          'Version',
          RetailChannelReportVersion,
          true
        ),
        /**
         * Static representation of the {@link stringValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STRING_VALUE: fieldBuilder.buildEdmTypeField(
          'StringValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailChannelReportLocalizedStrings)
      };
    }

    return this._schema;
  }
}
