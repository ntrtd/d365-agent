/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Infocodes } from './Infocodes';
import { InfocodesRequestBuilder } from './InfocodesRequestBuilder';
import { RetailInformationSubcodesApi } from './RetailInformationSubcodesApi';
import { RetailInfocodeTranslationsApi } from './RetailInfocodeTranslationsApi';
import { NoYes } from './NoYes';
import { RetailInfocodeInputType } from './RetailInfocodeInputType';
import { RetailInfocodeActivityType } from './RetailInfocodeActivityType';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class InfocodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Infocodes<DeSerializersT>, DeSerializersT>
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
  ): InfocodesApi<DeSerializersT> {
    return new InfocodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailInformationSubcode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INFORMATION_SUBCODE: OneToManyLink<
      Infocodes<DeSerializersT>,
      DeSerializersT,
      RetailInformationSubcodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailInfocodeTranslation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INFOCODE_TRANSLATION: OneToManyLink<
      Infocodes<DeSerializersT>,
      DeSerializersT,
      RetailInfocodeTranslationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailInformationSubcodesApi<DeSerializersT>,
      RetailInfocodeTranslationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_INFORMATION_SUBCODE: new OneToManyLink(
        'RetailInformationSubcode',
        this,
        linkedApis[0]
      ),
      RETAIL_INFOCODE_TRANSLATION: new OneToManyLink(
        'RetailInfocodeTranslation',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = Infocodes;

  requestBuilder(): InfocodesRequestBuilder<DeSerializersT> {
    return new InfocodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Infocodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Infocodes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Infocodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Infocodes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Infocodes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Infocodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INFOCODE_NUMBER: OrderableEdmTypeField<
      Infocodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MINIMUM_VALUE: OrderableEdmTypeField<
      Infocodes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINKED_INFOCODE_NUMBER: OrderableEdmTypeField<
      Infocodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INPUT_REQUIRED: EnumField<
      Infocodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRINT_INPUT_NAME_ON_RECEIPT: EnumField<
      Infocodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ONCE_PER_TRANSACTION: EnumField<
      Infocodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MINIMUM_LENGTH: OrderableEdmTypeField<
      Infocodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MAXIMUM_VALUE: OrderableEdmTypeField<
      Infocodes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RANDOM_COUNTER: OrderableEdmTypeField<
      Infocodes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_LENGTH: OrderableEdmTypeField<
      Infocodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Infocodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_PROMPT_ON_RECEIPT: EnumField<
      Infocodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_INFOCODE: EnumField<
      Infocodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RANDOM_FACTOR: OrderableEdmTypeField<
      Infocodes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRINT_DESCRIPTION_ON_RECEIPT: EnumField<
      Infocodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRINT_INPUT_ON_RECEIPT: EnumField<
      Infocodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INPUT_TYPE: EnumField<
      Infocodes<DeSerializers>,
      DeSerializersT,
      RetailInfocodeInputType,
      true,
      true
    >;
    ACTIVITY: EnumField<
      Infocodes<DeSerializers>,
      DeSerializersT,
      RetailInfocodeActivityType,
      true,
      true
    >;
    PROMPT: OrderableEdmTypeField<
      Infocodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MULTI_LINE_TEXT: EnumField<
      Infocodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailInformationSubcode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INFORMATION_SUBCODE: OneToManyLink<
      Infocodes<DeSerializersT>,
      DeSerializersT,
      RetailInformationSubcodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailInfocodeTranslation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INFOCODE_TRANSLATION: OneToManyLink<
      Infocodes<DeSerializersT>,
      DeSerializersT,
      RetailInfocodeTranslationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Infocodes<DeSerializers>>;
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
         * Static representation of the {@link infocodeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFOCODE_NUMBER: fieldBuilder.buildEdmTypeField(
          'InfocodeNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link minimumValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_VALUE: fieldBuilder.buildEdmTypeField(
          'MinimumValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link linkedInfocodeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINKED_INFOCODE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LinkedInfocodeNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inputRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INPUT_REQUIRED: fieldBuilder.buildEnumField(
          'InputRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link printInputNameOnReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_INPUT_NAME_ON_RECEIPT: fieldBuilder.buildEnumField(
          'PrintInputNameOnReceipt',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link oncePerTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONCE_PER_TRANSACTION: fieldBuilder.buildEnumField(
          'OncePerTransaction',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link minimumLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_LENGTH: fieldBuilder.buildEdmTypeField(
          'MinimumLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link maximumValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_VALUE: fieldBuilder.buildEdmTypeField(
          'MaximumValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link randomCounter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RANDOM_COUNTER: fieldBuilder.buildEdmTypeField(
          'RandomCounter',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maximumLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_LENGTH: fieldBuilder.buildEdmTypeField(
          'MaximumLength',
          'Edm.Int32',
          false
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
         * Static representation of the {@link printPromptOnReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_PROMPT_ON_RECEIPT: fieldBuilder.buildEnumField(
          'PrintPromptOnReceipt',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useInfocode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_INFOCODE: fieldBuilder.buildEnumField('UseInfocode', NoYes, true),
        /**
         * Static representation of the {@link randomFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RANDOM_FACTOR: fieldBuilder.buildEdmTypeField(
          'RandomFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link printDescriptionOnReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_DESCRIPTION_ON_RECEIPT: fieldBuilder.buildEnumField(
          'PrintDescriptionOnReceipt',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link printInputOnReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_INPUT_ON_RECEIPT: fieldBuilder.buildEnumField(
          'PrintInputOnReceipt',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inputType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INPUT_TYPE: fieldBuilder.buildEnumField(
          'InputType',
          RetailInfocodeInputType,
          true
        ),
        /**
         * Static representation of the {@link activity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY: fieldBuilder.buildEnumField(
          'Activity',
          RetailInfocodeActivityType,
          true
        ),
        /**
         * Static representation of the {@link prompt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMPT: fieldBuilder.buildEdmTypeField('Prompt', 'Edm.String', true),
        /**
         * Static representation of the {@link isMultiLineText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MULTI_LINE_TEXT: fieldBuilder.buildEnumField(
          'IsMultiLineText',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Infocodes)
      };
    }

    return this._schema;
  }
}
