/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalRegisterV2 } from './FiscalRegisterV2';
import { FiscalRegisterV2RequestBuilder } from './FiscalRegisterV2RequestBuilder';
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
export class FiscalRegisterV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FiscalRegisterV2<DeSerializersT>, DeSerializersT>
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
  ): FiscalRegisterV2Api<DeSerializersT> {
    return new FiscalRegisterV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FiscalRegisterV2;

  requestBuilder(): FiscalRegisterV2RequestBuilder<DeSerializersT> {
    return new FiscalRegisterV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FiscalRegisterV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FiscalRegisterV2<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<FiscalRegisterV2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof FiscalRegisterV2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalRegisterV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FiscalRegisterV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOC_TYPE_ID: OrderableEdmTypeField<
      FiscalRegisterV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FOREIGN_DOC_TYPE: EnumField<
      FiscalRegisterV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COUNTRY_DOC_TYPE: EnumField<
      FiscalRegisterV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSK_LENGTH: OrderableEdmTypeField<
      FiscalRegisterV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DOC_TYPE_DESCRIPTION: OrderableEdmTypeField<
      FiscalRegisterV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE_DOC_TYPE: EnumField<
      FiscalRegisterV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALIDATION_TYPE_MASK: EnumField<
      FiscalRegisterV2<DeSerializers>,
      DeSerializersT,
      LtmValidationTypeMask,
      true,
      true
    >;
    MASK: OrderableEdmTypeField<
      FiscalRegisterV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VERIFY_METHOD: EnumField<
      FiscalRegisterV2<DeSerializers>,
      DeSerializersT,
      LtmVerifyMethod,
      true,
      true
    >;
    ALL_FIELDS: AllFields<FiscalRegisterV2<DeSerializers>>;
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
         * Static representation of the {@link docTypeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_TYPE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DocTypeDescription',
          'Edm.String',
          true
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
        ALL_FIELDS: new AllFields('*', FiscalRegisterV2)
      };
    }

    return this._schema;
  }
}
