/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerFiscalDocTextReferencedProcesses } from './CustomerFiscalDocTextReferencedProcesses';
import { CustomerFiscalDocTextReferencedProcessesRequestBuilder } from './CustomerFiscalDocTextReferencedProcessesRequestBuilder';
import { AgencyBr } from './AgencyBr';
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
export class CustomerFiscalDocTextReferencedProcessesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CustomerFiscalDocTextReferencedProcesses<DeSerializersT>,
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
  ): CustomerFiscalDocTextReferencedProcessesApi<DeSerializersT> {
    return new CustomerFiscalDocTextReferencedProcessesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustomerFiscalDocTextReferencedProcesses;

  requestBuilder(): CustomerFiscalDocTextReferencedProcessesRequestBuilder<DeSerializersT> {
    return new CustomerFiscalDocTextReferencedProcessesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CustomerFiscalDocTextReferencedProcesses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustomerFiscalDocTextReferencedProcesses<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerFiscalDocTextReferencedProcesses<DeSerializersT>,
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
    typeof CustomerFiscalDocTextReferencedProcesses,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerFiscalDocTextReferencedProcesses,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustomerFiscalDocTextReferencedProcesses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER: OrderableEdmTypeField<
      CustomerFiscalDocTextReferencedProcesses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_DOCUMENT_TEXT: OrderableEdmTypeField<
      CustomerFiscalDocTextReferencedProcesses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AGENCY: EnumField<
      CustomerFiscalDocTextReferencedProcesses<DeSerializers>,
      DeSerializersT,
      AgencyBr,
      true,
      true
    >;
    PROCESS_NUMBER: OrderableEdmTypeField<
      CustomerFiscalDocTextReferencedProcesses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      CustomerFiscalDocTextReferencedProcesses<DeSerializers>
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
         * Static representation of the {@link customer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER: fieldBuilder.buildEdmTypeField(
          'Customer',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiscalDocumentText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_TEXT: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentText',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link agency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGENCY: fieldBuilder.buildEnumField('Agency', AgencyBr, true),
        /**
         * Static representation of the {@link processNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProcessNumber',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerFiscalDocTextReferencedProcesses)
      };
    }

    return this._schema;
  }
}
