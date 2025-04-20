/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NameDeclensions } from './NameDeclensions';
import { NameDeclensionsRequestBuilder } from './NameDeclensionsRequestBuilder';
import { CurrencyGenderW } from './CurrencyGenderW';
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
export class NameDeclensionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<NameDeclensions<DeSerializersT>, DeSerializersT>
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
  ): NameDeclensionsApi<DeSerializersT> {
    return new NameDeclensionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = NameDeclensions;

  requestBuilder(): NameDeclensionsRequestBuilder<DeSerializersT> {
    return new NameDeclensionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    NameDeclensions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<NameDeclensions<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<NameDeclensions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof NameDeclensions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        NameDeclensions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      NameDeclensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      NameDeclensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      NameDeclensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME_FOR_ONE: OrderableEdmTypeField<
      NameDeclensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENDER: EnumField<
      NameDeclensions<DeSerializers>,
      DeSerializersT,
      CurrencyGenderW,
      true,
      true
    >;
    CURRENCY_PLURAL_NOMINATIVE_PENNY: OrderableEdmTypeField<
      NameDeclensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSERT_AND_BEFORE_PENNY: EnumField<
      NameDeclensions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NAME_FOR_FIVE: OrderableEdmTypeField<
      NameDeclensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_FOR_FIVE_PENNY: OrderableEdmTypeField<
      NameDeclensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_PLURAL_NOMINATIVE: OrderableEdmTypeField<
      NameDeclensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_FOR_ONE_PENNY: OrderableEdmTypeField<
      NameDeclensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHORT_NAME: OrderableEdmTypeField<
      NameDeclensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_FOR_THREE: OrderableEdmTypeField<
      NameDeclensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_FOR_THREE_PENNY: OrderableEdmTypeField<
      NameDeclensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHORT_NAME_PENNY: OrderableEdmTypeField<
      NameDeclensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<NameDeclensions<DeSerializers>>;
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
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link nameForOne} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_FOR_ONE: fieldBuilder.buildEdmTypeField(
          'NameForOne',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link gender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENDER: fieldBuilder.buildEnumField('Gender', CurrencyGenderW, true),
        /**
         * Static representation of the {@link currencyPluralNominativePenny} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_PLURAL_NOMINATIVE_PENNY: fieldBuilder.buildEdmTypeField(
          'CurrencyPluralNominativePenny',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link insertAndBeforePenny} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSERT_AND_BEFORE_PENNY: fieldBuilder.buildEnumField(
          'InsertAndBeforePenny',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link nameForFive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_FOR_FIVE: fieldBuilder.buildEdmTypeField(
          'NameForFive',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameForFivePenny} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_FOR_FIVE_PENNY: fieldBuilder.buildEdmTypeField(
          'NameForFivePenny',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyPluralNominative} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_PLURAL_NOMINATIVE: fieldBuilder.buildEdmTypeField(
          'CurrencyPluralNominative',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameForOnePenny} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_FOR_ONE_PENNY: fieldBuilder.buildEdmTypeField(
          'NameForOnePenny',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shortName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_NAME: fieldBuilder.buildEdmTypeField(
          'ShortName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameForThree} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_FOR_THREE: fieldBuilder.buildEdmTypeField(
          'NameForThree',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameForThreePenny} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_FOR_THREE_PENNY: fieldBuilder.buildEdmTypeField(
          'NameForThreePenny',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shortNamePenny} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_NAME_PENNY: fieldBuilder.buildEdmTypeField(
          'ShortNamePenny',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', NameDeclensions)
      };
    }

    return this._schema;
  }
}
