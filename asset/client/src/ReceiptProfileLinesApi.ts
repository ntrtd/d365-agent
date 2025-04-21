/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReceiptProfileLines } from './ReceiptProfileLines';
import { ReceiptProfileLinesRequestBuilder } from './ReceiptProfileLinesRequestBuilder';
import { RetailReceipt } from './RetailReceipt';
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
export class ReceiptProfileLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ReceiptProfileLines<DeSerializersT>, DeSerializersT>
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
  ): ReceiptProfileLinesApi<DeSerializersT> {
    return new ReceiptProfileLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ReceiptProfileLines;

  requestBuilder(): ReceiptProfileLinesRequestBuilder<DeSerializersT> {
    return new ReceiptProfileLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ReceiptProfileLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ReceiptProfileLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ReceiptProfileLines<DeSerializersT>,
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
    typeof ReceiptProfileLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReceiptProfileLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROFILE_ID: OrderableEdmTypeField<
      ReceiptProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECEIPT_TYPE: EnumField<
      ReceiptProfileLines<DeSerializers>,
      DeSerializersT,
      RetailReceipt,
      true,
      true
    >;
    FORM_LAYOUT_ID: OrderableEdmTypeField<
      ReceiptProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL_TEMPLATE_ID: OrderableEdmTypeField<
      ReceiptProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_RECEIPT_PROFILE_1_PROFILE_ID: OrderableEdmTypeField<
      ReceiptProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_FORM_LAYOUT_1_FORM_LAYOUT_ID: OrderableEdmTypeField<
      ReceiptProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_FORM_LAYOUT_1_LAYOUT_TYPE: EnumField<
      ReceiptProfileLines<DeSerializers>,
      DeSerializersT,
      RetailReceipt,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ReceiptProfileLines<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link profileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'ProfileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link receiptType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_TYPE: fieldBuilder.buildEnumField(
          'ReceiptType',
          RetailReceipt,
          true
        ),
        /**
         * Static representation of the {@link formLayoutId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORM_LAYOUT_ID: fieldBuilder.buildEdmTypeField(
          'FormLayoutId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link emailTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'EmailTemplateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailReceiptProfile1ProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_RECEIPT_PROFILE_1_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'RetailReceiptProfile1_ProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailFormLayout1FormLayoutId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_FORM_LAYOUT_1_FORM_LAYOUT_ID: fieldBuilder.buildEdmTypeField(
          'RetailFormLayout1_FormLayoutId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailFormLayout1LayoutType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_FORM_LAYOUT_1_LAYOUT_TYPE: fieldBuilder.buildEnumField(
          'RetailFormLayout1_LayoutType',
          RetailReceipt,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ReceiptProfileLines)
      };
    }

    return this._schema;
  }
}
