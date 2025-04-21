/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SourceSystemProductBarcodeMessages } from './SourceSystemProductBarcodeMessages';
import { SourceSystemProductBarcodeMessagesRequestBuilder } from './SourceSystemProductBarcodeMessagesRequestBuilder';
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
  EnumField,
  EdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class SourceSystemProductBarcodeMessagesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SourceSystemProductBarcodeMessages<DeSerializersT>,
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
  ): SourceSystemProductBarcodeMessagesApi<DeSerializersT> {
    return new SourceSystemProductBarcodeMessagesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SourceSystemProductBarcodeMessages;

  requestBuilder(): SourceSystemProductBarcodeMessagesRequestBuilder<DeSerializersT> {
    return new SourceSystemProductBarcodeMessagesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SourceSystemProductBarcodeMessages<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SourceSystemProductBarcodeMessages<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SourceSystemProductBarcodeMessages<DeSerializersT>,
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
    typeof SourceSystemProductBarcodeMessages,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SourceSystemProductBarcodeMessages,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SourceSystemProductBarcodeMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MESSAGE_ID: OrderableEdmTypeField<
      SourceSystemProductBarcodeMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_SYSTEM_ID: OrderableEdmTypeField<
      SourceSystemProductBarcodeMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_QUANTITY: OrderableEdmTypeField<
      SourceSystemProductBarcodeMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_QUANTITY_UNIT_SYMBOL: OrderableEdmTypeField<
      SourceSystemProductBarcodeMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_ITEM_NUMBER: OrderableEdmTypeField<
      SourceSystemProductBarcodeMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BARCODE_SETUP_ID: OrderableEdmTypeField<
      SourceSystemProductBarcodeMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT_SCANNED_BARCODE: EnumField<
      SourceSystemProductBarcodeMessages<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_MESSAGE: OrderableEdmTypeField<
      SourceSystemProductBarcodeMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FIELDS_WITH_VALUE: EdmTypeField<
      SourceSystemProductBarcodeMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    BARCODE: OrderableEdmTypeField<
      SourceSystemProductBarcodeMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT_PRINTED_BARCODE: EnumField<
      SourceSystemProductBarcodeMessages<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_DESCRIPTION: OrderableEdmTypeField<
      SourceSystemProductBarcodeMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SourceSystemProductBarcodeMessages<DeSerializers>>;
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
         * Static representation of the {@link messageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_ID: fieldBuilder.buildEdmTypeField(
          'MessageId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sourceSystemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ID: fieldBuilder.buildEdmTypeField(
          'SourceSystemId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ProductQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productQuantityUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_QUANTITY_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'ProductQuantityUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceSystemItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourceSystemItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link barcodeSetupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE_SETUP_ID: fieldBuilder.buildEdmTypeField(
          'BarcodeSetupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDefaultScannedBarcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_SCANNED_BARCODE: fieldBuilder.buildEnumField(
          'IsDefaultScannedBarcode',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sysMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MESSAGE: fieldBuilder.buildEdmTypeField(
          'SysMessage',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link fieldsWithValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELDS_WITH_VALUE: fieldBuilder.buildEdmTypeField(
          'FieldsWithValue',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link barcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE: fieldBuilder.buildEdmTypeField('Barcode', 'Edm.String', true),
        /**
         * Static representation of the {@link isDefaultPrintedBarcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_PRINTED_BARCODE: fieldBuilder.buildEnumField(
          'IsDefaultPrintedBarcode',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link productDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ProductDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SourceSystemProductBarcodeMessages)
      };
    }

    return this._schema;
  }
}
