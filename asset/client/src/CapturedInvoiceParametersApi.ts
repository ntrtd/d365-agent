/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CapturedInvoiceParameters } from './CapturedInvoiceParameters';
import { CapturedInvoiceParametersRequestBuilder } from './CapturedInvoiceParametersRequestBuilder';
import { CapturedInvoiceTargetInvoiceType } from './CapturedInvoiceTargetInvoiceType';
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
export class CapturedInvoiceParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CapturedInvoiceParameters<DeSerializersT>, DeSerializersT>
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
  ): CapturedInvoiceParametersApi<DeSerializersT> {
    return new CapturedInvoiceParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CapturedInvoiceParameters;

  requestBuilder(): CapturedInvoiceParametersRequestBuilder<DeSerializersT> {
    return new CapturedInvoiceParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CapturedInvoiceParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CapturedInvoiceParameters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CapturedInvoiceParameters<DeSerializersT>,
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
    typeof CapturedInvoiceParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CapturedInvoiceParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    KEY: OrderableEdmTypeField<
      CapturedInvoiceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COST_INVOICE_TARGET_INVOICE_TYPE: EnumField<
      CapturedInvoiceParameters<DeSerializers>,
      DeSerializersT,
      CapturedInvoiceTargetInvoiceType,
      true,
      true
    >;
    HEADER_ONLY_TARGET_INVOICE_TYPE: EnumField<
      CapturedInvoiceParameters<DeSerializers>,
      DeSerializersT,
      CapturedInvoiceTargetInvoiceType,
      true,
      true
    >;
    TRANSFER_ATTACHMENT: EnumField<
      CapturedInvoiceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PO_INVOICE_TARGET_INVOICE_TYPE: EnumField<
      CapturedInvoiceParameters<DeSerializers>,
      DeSerializersT,
      CapturedInvoiceTargetInvoiceType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CapturedInvoiceParameters<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link key} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY: fieldBuilder.buildEdmTypeField('Key', 'Edm.Int32', false),
        /**
         * Static representation of the {@link costInvoiceTargetInvoiceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_INVOICE_TARGET_INVOICE_TYPE: fieldBuilder.buildEnumField(
          'CostInvoiceTargetInvoiceType',
          CapturedInvoiceTargetInvoiceType,
          true
        ),
        /**
         * Static representation of the {@link headerOnlyTargetInvoiceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_ONLY_TARGET_INVOICE_TYPE: fieldBuilder.buildEnumField(
          'HeaderOnlyTargetInvoiceType',
          CapturedInvoiceTargetInvoiceType,
          true
        ),
        /**
         * Static representation of the {@link transferAttachment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_ATTACHMENT: fieldBuilder.buildEnumField(
          'TransferAttachment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link poInvoiceTargetInvoiceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PO_INVOICE_TARGET_INVOICE_TYPE: fieldBuilder.buildEnumField(
          'POInvoiceTargetInvoiceType',
          CapturedInvoiceTargetInvoiceType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CapturedInvoiceParameters)
      };
    }

    return this._schema;
  }
}
