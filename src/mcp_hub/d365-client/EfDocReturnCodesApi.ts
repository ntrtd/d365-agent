/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EfDocReturnCodes } from './EfDocReturnCodes';
import { EfDocReturnCodesRequestBuilder } from './EfDocReturnCodesRequestBuilder';
import { EfDocMessageTypeBr } from './EfDocMessageTypeBr';
import { FiscalDocumentStatusBr } from './FiscalDocumentStatusBr';
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
export class EfDocReturnCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EfDocReturnCodes<DeSerializersT>, DeSerializersT>
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
  ): EfDocReturnCodesApi<DeSerializersT> {
    return new EfDocReturnCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EfDocReturnCodes;

  requestBuilder(): EfDocReturnCodesRequestBuilder<DeSerializersT> {
    return new EfDocReturnCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EfDocReturnCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EfDocReturnCodes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EfDocReturnCodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof EfDocReturnCodes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EfDocReturnCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RETURN_CODE: OrderableEdmTypeField<
      EfDocReturnCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MESSAGE_TYPE: EnumField<
      EfDocReturnCodes<DeSerializers>,
      DeSerializersT,
      EfDocMessageTypeBr,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      EfDocReturnCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_DOCUMENT_STATUS: EnumField<
      EfDocReturnCodes<DeSerializers>,
      DeSerializersT,
      FiscalDocumentStatusBr,
      true,
      true
    >;
    ALL_FIELDS: AllFields<EfDocReturnCodes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link returnCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_CODE: fieldBuilder.buildEdmTypeField(
          'ReturnCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link messageType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_TYPE: fieldBuilder.buildEnumField(
          'MessageType',
          EfDocMessageTypeBr,
          true
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
        /**
         * Static representation of the {@link fiscalDocumentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_STATUS: fieldBuilder.buildEnumField(
          'FiscalDocumentStatus',
          FiscalDocumentStatusBr,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EfDocReturnCodes)
      };
    }

    return this._schema;
  }
}
