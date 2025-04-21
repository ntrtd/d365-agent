/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomsImportInvoiceNumbers } from './CustomsImportInvoiceNumbers';
import { CustomsImportInvoiceNumbersRequestBuilder } from './CustomsImportInvoiceNumbersRequestBuilder';
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
export class CustomsImportInvoiceNumbersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CustomsImportInvoiceNumbers<DeSerializersT>, DeSerializersT>
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
  ): CustomsImportInvoiceNumbersApi<DeSerializersT> {
    return new CustomsImportInvoiceNumbersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustomsImportInvoiceNumbers;

  requestBuilder(): CustomsImportInvoiceNumbersRequestBuilder<DeSerializersT> {
    return new CustomsImportInvoiceNumbersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomsImportInvoiceNumbers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustomsImportInvoiceNumbers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomsImportInvoiceNumbers<DeSerializersT>,
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
    typeof CustomsImportInvoiceNumbers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomsImportInvoiceNumbers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustomsImportInvoiceNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IMPORTER_INVOICE_NUMBER: OrderableEdmTypeField<
      CustomsImportInvoiceNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CLOSED: EnumField<
      CustomsImportInvoiceNumbers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DATE: OrderableEdmTypeField<
      CustomsImportInvoiceNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CustomsImportInvoiceNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CustomsImportInvoiceNumbers<DeSerializers>>;
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
         * Static representation of the {@link importerInvoiceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORTER_INVOICE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ImporterInvoiceNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link closed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED: fieldBuilder.buildEnumField('Closed', NoYes, true),
        /**
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'Date',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomsImportInvoiceNumbers)
      };
    }

    return this._schema;
  }
}
