/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmFiscalRegisters } from './LtmFiscalRegisters';
import { LtmFiscalRegistersRequestBuilder } from './LtmFiscalRegistersRequestBuilder';
import { NoYes } from './NoYes';
import { LtmValidationTypeMask } from './LtmValidationTypeMask';
import { LtmVerifyMethod } from './LtmVerifyMethod';
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
export class LtmFiscalRegistersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LtmFiscalRegisters<DeSerializersT>, DeSerializersT>
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
  ): LtmFiscalRegistersApi<DeSerializersT> {
    return new LtmFiscalRegistersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LtmFiscalRegisters;

  requestBuilder(): LtmFiscalRegistersRequestBuilder<DeSerializersT> {
    return new LtmFiscalRegistersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LtmFiscalRegisters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LtmFiscalRegisters<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LtmFiscalRegisters<DeSerializersT>,
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
    typeof LtmFiscalRegisters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LtmFiscalRegisters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LtmFiscalRegisters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOC_TYPE_DESCRIPTION: OrderableEdmTypeField<
      LtmFiscalRegisters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOC_TYPE_ID: OrderableEdmTypeField<
      LtmFiscalRegisters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FOREIGN_DOC_TYPE: EnumField<
      LtmFiscalRegisters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COUNTRY_DOC_TYPE: EnumField<
      LtmFiscalRegisters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_LENGTH: OrderableEdmTypeField<
      LtmFiscalRegisters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STATE_DOC_TYPE: EnumField<
      LtmFiscalRegisters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALIDATION_TYPE_MASK: EnumField<
      LtmFiscalRegisters<DeSerializers>,
      DeSerializersT,
      LtmValidationTypeMask,
      true,
      true
    >;
    MASK: OrderableEdmTypeField<
      LtmFiscalRegisters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VERIFY_METHOD: EnumField<
      LtmFiscalRegisters<DeSerializers>,
      DeSerializersT,
      LtmVerifyMethod,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LtmFiscalRegisters<DeSerializers>>;
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
         * Static representation of the {@link docTypeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_TYPE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DocTypeDescription',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link docTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'DocTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link foreignDocType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_DOC_TYPE: fieldBuilder.buildEnumField(
          'ForeignDocType',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link countryDocType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_DOC_TYPE: fieldBuilder.buildEnumField(
          'CountryDocType',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mskLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSK_LENGTH: fieldBuilder.buildEdmTypeField(
          'MskLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link stateDocType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_DOC_TYPE: fieldBuilder.buildEnumField(
          'StateDocType',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link validationTypeMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATION_TYPE_MASK: fieldBuilder.buildEnumField(
          'ValidationTypeMask',
          LtmValidationTypeMask,
          true
        ),
        /**
         * Static representation of the {@link mask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MASK: fieldBuilder.buildEdmTypeField('Mask', 'Edm.String', true),
        /**
         * Static representation of the {@link verifyMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERIFY_METHOD: fieldBuilder.buildEnumField(
          'VerifyMethod',
          LtmVerifyMethod,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmFiscalRegisters)
      };
    }

    return this._schema;
  }
}
