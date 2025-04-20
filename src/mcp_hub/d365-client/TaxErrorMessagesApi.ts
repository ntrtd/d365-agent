/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxErrorMessages } from './TaxErrorMessages';
import { TaxErrorMessagesRequestBuilder } from './TaxErrorMessagesRequestBuilder';
import { TaxErrorType } from './TaxErrorType';
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
export class TaxErrorMessagesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxErrorMessages<DeSerializersT>, DeSerializersT>
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
  ): TaxErrorMessagesApi<DeSerializersT> {
    return new TaxErrorMessagesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxErrorMessages;

  requestBuilder(): TaxErrorMessagesRequestBuilder<DeSerializersT> {
    return new TaxErrorMessagesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxErrorMessages<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxErrorMessages<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TaxErrorMessages<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TaxErrorMessages, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxErrorMessages,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxErrorMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ERROR_ID: OrderableEdmTypeField<
      TaxErrorMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ERROR_TEXT: OrderableEdmTypeField<
      TaxErrorMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ERROR_TYPE: EnumField<
      TaxErrorMessages<DeSerializers>,
      DeSerializersT,
      TaxErrorType,
      true,
      true
    >;
    DP_ERROR_CODE: OrderableEdmTypeField<
      TaxErrorMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ERROR_CODE: OrderableEdmTypeField<
      TaxErrorMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      TaxErrorMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TaxErrorMessages<DeSerializers>>;
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
         * Static representation of the {@link errorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_ID: fieldBuilder.buildEdmTypeField(
          'ErrorId',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link errorType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_TYPE: fieldBuilder.buildEnumField(
          'ErrorType',
          TaxErrorType,
          true
        ),
        /**
         * Static representation of the {@link dpErrorCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DP_ERROR_CODE: fieldBuilder.buildEdmTypeField(
          'DPErrorCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link errorCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_CODE: fieldBuilder.buildEdmTypeField(
          'ErrorCode',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxErrorMessages)
      };
    }

    return this._schema;
  }
}
