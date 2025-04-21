/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EInvoiceErrorCodes } from './EInvoiceErrorCodes';
import { EInvoiceErrorCodesRequestBuilder } from './EInvoiceErrorCodesRequestBuilder';
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
export class EInvoiceErrorCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EInvoiceErrorCodes<DeSerializersT>, DeSerializersT>
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
  ): EInvoiceErrorCodesApi<DeSerializersT> {
    return new EInvoiceErrorCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EInvoiceErrorCodes;

  requestBuilder(): EInvoiceErrorCodesRequestBuilder<DeSerializersT> {
    return new EInvoiceErrorCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EInvoiceErrorCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EInvoiceErrorCodes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EInvoiceErrorCodes<DeSerializersT>,
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
    typeof EInvoiceErrorCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EInvoiceErrorCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EInvoiceErrorCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      EInvoiceErrorCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ERROR_TEXT: OrderableEdmTypeField<
      EInvoiceErrorCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANGE: EnumField<
      EInvoiceErrorCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<EInvoiceErrorCodes<DeSerializers>>;
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
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link errorText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_TEXT: fieldBuilder.buildEdmTypeField(
          'ErrorText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link change} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE: fieldBuilder.buildEnumField('Change', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EInvoiceErrorCodes)
      };
    }

    return this._schema;
  }
}
