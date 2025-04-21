/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SmbAccountExportResultLines } from './SmbAccountExportResultLines';
import { SmbAccountExportResultLinesRequestBuilder } from './SmbAccountExportResultLinesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class SmbAccountExportResultLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SmbAccountExportResultLines<DeSerializersT>, DeSerializersT>
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
  ): SmbAccountExportResultLinesApi<DeSerializersT> {
    return new SmbAccountExportResultLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SmbAccountExportResultLines;

  requestBuilder(): SmbAccountExportResultLinesRequestBuilder<DeSerializersT> {
    return new SmbAccountExportResultLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SmbAccountExportResultLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SmbAccountExportResultLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SmbAccountExportResultLines<DeSerializersT>,
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
    typeof SmbAccountExportResultLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SmbAccountExportResultLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SmbAccountExportResultLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_ID: OrderableEdmTypeField<
      SmbAccountExportResultLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AMOUNT_CREDIT: OrderableEdmTypeField<
      SmbAccountExportResultLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXTERNAL_ACCOUNT_ID: OrderableEdmTypeField<
      SmbAccountExportResultLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_DEBIT: OrderableEdmTypeField<
      SmbAccountExportResultLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SmbAccountExportResultLines<DeSerializers>>;
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
         * Static representation of the {@link accountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'AccountId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link amountCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_CREDIT: fieldBuilder.buildEdmTypeField(
          'AmountCredit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link externalAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'ExternalAccountId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_DEBIT: fieldBuilder.buildEdmTypeField(
          'AmountDebit',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SmbAccountExportResultLines)
      };
    }

    return this._schema;
  }
}
