/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProcessGenericProcessHeaders } from './ProcessGenericProcessHeaders';
import { ProcessGenericProcessHeadersRequestBuilder } from './ProcessGenericProcessHeadersRequestBuilder';
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
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class ProcessGenericProcessHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProcessGenericProcessHeaders<DeSerializersT>, DeSerializersT>
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
  ): ProcessGenericProcessHeadersApi<DeSerializersT> {
    return new ProcessGenericProcessHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProcessGenericProcessHeaders;

  requestBuilder(): ProcessGenericProcessHeadersRequestBuilder<DeSerializersT> {
    return new ProcessGenericProcessHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProcessGenericProcessHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProcessGenericProcessHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProcessGenericProcessHeaders<DeSerializersT>,
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
    typeof ProcessGenericProcessHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProcessGenericProcessHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROCESS_HEADER_PROCESS_ID: OrderableEdmTypeField<
      ProcessGenericProcessHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    GENERIC_SUBTYPE: EnumField<
      ProcessGenericProcessHeaders<DeSerializers>,
      DeSerializersT,
      BusinessProcessGenericSubtype,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProcessGenericProcessHeaders<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link processHeaderProcessId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_HEADER_PROCESS_ID: fieldBuilder.buildEdmTypeField(
          'ProcessHeader_ProcessId',
          'Edm.Guid',
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
        ALL_FIELDS: new AllFields('*', ProcessGenericProcessHeaders)
      };
    }

    return this._schema;
  }
}
