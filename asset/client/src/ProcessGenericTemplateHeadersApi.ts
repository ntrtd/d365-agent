/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProcessGenericTemplateHeaders } from './ProcessGenericTemplateHeaders';
import { ProcessGenericTemplateHeadersRequestBuilder } from './ProcessGenericTemplateHeadersRequestBuilder';
import { BusinessProcessType } from './BusinessProcessType';
import { BusinessProcessGenericSubtype } from './BusinessProcessGenericSubtype';
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
  EnumField,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class ProcessGenericTemplateHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProcessGenericTemplateHeaders<DeSerializersT>, DeSerializersT>
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
  ): ProcessGenericTemplateHeadersApi<DeSerializersT> {
    return new ProcessGenericTemplateHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProcessGenericTemplateHeaders;

  requestBuilder(): ProcessGenericTemplateHeadersRequestBuilder<DeSerializersT> {
    return new ProcessGenericTemplateHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProcessGenericTemplateHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProcessGenericTemplateHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProcessGenericTemplateHeaders<DeSerializersT>,
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
    typeof ProcessGenericTemplateHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProcessGenericTemplateHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TEMPLATE_HEADER_PROCESS_TYPE: EnumField<
      ProcessGenericTemplateHeaders<DeSerializers>,
      DeSerializersT,
      BusinessProcessType,
      true,
      true
    >;
    TEMPLATE_HEADER_GENERIC_SUBTYPE: EnumField<
      ProcessGenericTemplateHeaders<DeSerializers>,
      DeSerializersT,
      BusinessProcessGenericSubtype,
      true,
      true
    >;
    TEMPLATE_HEADER_NAME: OrderableEdmTypeField<
      ProcessGenericTemplateHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GENERIC_SUBTYPE: EnumField<
      ProcessGenericTemplateHeaders<DeSerializers>,
      DeSerializersT,
      BusinessProcessGenericSubtype,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProcessGenericTemplateHeaders<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link templateHeaderProcessType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_HEADER_PROCESS_TYPE: fieldBuilder.buildEnumField(
          'TemplateHeader_ProcessType',
          BusinessProcessType,
          true
        ),
        /**
         * Static representation of the {@link templateHeaderGenericSubtype} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_HEADER_GENERIC_SUBTYPE: fieldBuilder.buildEnumField(
          'TemplateHeader_GenericSubtype',
          BusinessProcessGenericSubtype,
          true
        ),
        /**
         * Static representation of the {@link templateHeaderName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_HEADER_NAME: fieldBuilder.buildEdmTypeField(
          'TemplateHeader_Name',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link genericSubtype} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERIC_SUBTYPE: fieldBuilder.buildEnumField(
          'GenericSubtype',
          BusinessProcessGenericSubtype,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProcessGenericTemplateHeaders)
      };
    }

    return this._schema;
  }
}
